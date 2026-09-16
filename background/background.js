importScripts("lib/pdf-lib.min.js");
const setStore = (obj) =>
  new Promise((res) => chrome.storage.local.set(obj, res));
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.url && msg.fn) {
    chrome.downloads.download(
      { url: msg.url, filename: msg.fn, saveAs: false },
      (downloadId) => {
        if (chrome.runtime.lastError) {
          console.error("Errore download:", chrome.runtime.lastError.message);
        } else {
          console.log("Download avviato, ID:", downloadId);
        }
      },
    );
    return;
  }
  if (msg.type === "L_S") {
    setStore({ U_L_S: msg }).then(() =>
      chrome.runtime.sendMessage(msg).catch(() => {}),
    );
    return;
  }
  if (msg.action === "ERROR" && msg.error) {
    console.log("📥 background ricevuto ERROR:", msg.error);
    setStore({ lastError: msg.error, lastWarning: null }).then(() =>
      chrome.runtime
        .sendMessage({ action: "ERROR", error: msg.error })
        .catch(() => {}),
    );
    return;
  }
  if (msg.action === "WARNING" && msg.error) {
    console.log("📥 background ricevuto WARNING:", msg.error);
    setStore({ lastWarning: msg.error, lastError: null }).then(() =>
      chrome.runtime
        .sendMessage({ action: "WARNING", error: msg.error })
        .catch(() => {}),
    );
    return;
  }
  if (msg.action === "INFO" && msg.message) {
    setStore({ lastInfo: msg.message }).then(() =>
      chrome.runtime
        .sendMessage({ action: "INFO", message: msg.message })
        .catch(() => {}),
    );
    return;
  }
  if (msg.action === "OK") {
    setStore({ lastError: null, lastWarning: null });
  }
});
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason !== "install" && reason !== "update") return;
  try {
    chrome.tabs.query({ url: "https://*.multiversity.click/*" }, (tabs) => {
      if (chrome.runtime.lastError) return;
      for (const t of tabs || []) {
        if (
          t.id != null &&
          typeof t.url === "string" &&
          t.url.includes("/videolezioni/")
        ) {
          chrome.tabs.reload(t.id, {}, () => {
            void chrome.runtime.lastError;
          });
        }
      }
    });
  } catch (e) {
    console.warn("onInstalled: reload tab lezione non riuscito:", e);
  }
});
chrome.runtime.onUpdateAvailable.addListener(() => {
  try {
    chrome.runtime.reload();
  } catch (_) {}
});
function uint8ToBase64(bytes) {
  let binary = "";
  const chunk = 32768;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}
async function mergeDispense(urls, onStep) {
  const { PDFDocument } = self.PDFLib;
  const merged = await PDFDocument.create();
  const total = urls.length;
  const buffers = [];
  const errors = [];
  for (let i = 0; i < total; i++) {
    const url = urls[i];
    try {
      const res = await fetch(url);
      if (!res.ok) {
        errors.push(`${url} (HTTP ${res.status})`);
      } else {
        buffers.push(await res.arrayBuffer());
      }
    } catch (e) {
      errors.push(`${url} (${e.message || e})`);
    }
    onStep?.(i + 1, total);
  }
  if (buffers.length === 0) {
    throw new Error(
      "Nessuna dispensa scaricabile" + (errors.length ? ": " + errors[0] : ""),
    );
  }
  let added = 0;
  for (const buf of buffers) {
    try {
      const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
      const pages = await merged.copyPages(doc, doc.getPageIndices());
      pages.forEach((p) => merged.addPage(p));
      added++;
    } catch (e) {
      errors.push(`merge (${e.message || e})`);
    }
  }
  const bytes = await merged.save();
  return { base64: uint8ToBase64(bytes), merged: added, failed: errors.length };
}
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "merge-dispense") return;
  port.onMessage.addListener(async (msg) => {
    if (!msg || msg.type !== "MERGE_DISPENSE") return;
    const urls = msg.mu || [];
    try {
      const onStep = (done, total) => {
        try {
          port.postMessage({ type: "progress", md: done, mt: total });
        } catch (_) {}
      };
      const { base64, merged, failed } = await mergeDispense(urls, onStep);
      const CHUNK = 512 * 1024;
      try {
        port.postMessage({ type: "begin", mg: merged, mf: failed });
      } catch (_) {}
      for (let i = 0; i < base64.length; i += CHUNK) {
        port.postMessage({ type: "chunk", mb: base64.slice(i, i + CHUNK) });
      }
      try {
        port.postMessage({ type: "done", mg: merged, mf: failed });
      } catch (_) {}
    } catch (err) {
      try {
        port.postMessage({
          type: "error",
          error: String((err && err.message) || err),
        });
      } catch (_) {}
    }
  });
});
function pdfSafeText(s) {
  if (s == null) return "";
  return String(s)
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/ /g, " ")
    .replace(/α/g, "alpha")
    .replace(/β/g, "beta")
    .replace(/γ/g, "gamma")
    .replace(/δ/g, "delta")
    .replace(/θ/g, "theta")
    .replace(/λ/g, "lambda")
    .replace(/μ/g, "mu")
    .replace(/π/g, "pi")
    .replace(/σ/g, "sigma")
    .replace(/φ/g, "phi")
    .replace(/ω/g, "omega")
    .replace(/[^\x00-\xFF]/g, "?");
}
function wrapPdfText(text, font, size, maxW) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const tryLine = line ? line + " " + w : w;
    if (font.widthOfTextAtSize(tryLine, size) <= maxW) {
      line = tryLine;
      continue;
    }
    if (line) lines.push(line);
    if (font.widthOfTextAtSize(w, size) > maxW) {
      let chunk = "";
      for (const ch of w) {
        if (font.widthOfTextAtSize(chunk + ch, size) <= maxW) chunk += ch;
        else {
          lines.push(chunk);
          chunk = ch;
        }
      }
      line = chunk;
    } else line = w;
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}
function drawCentered(page, text, cx, y, size, font, color) {
  const w = font.widthOfTextAtSize(text, size);
  page.drawText(text, {
    x: cx - w / 2,
    y: y,
    size: size,
    font: font,
    color: color,
  });
}
const SITE_GRADIENT = [
  { r: 0.204, g: 0.91, b: 0.62 },
  { r: 0.059, g: 0.671, b: 0.737 },
  { r: 0.263, g: 0.667, b: 0.953 },
  { r: 0.4, g: 0.851, b: 0.91 },
];
function drawGradientBand(page, rgbFn, x, y, width, height, stops) {
  const segments = 80;
  const segW = width / segments;
  for (let i = 0; i < segments; i++) {
    const t = i / (segments - 1);
    const pos = t * (stops.length - 1);
    const i0 = Math.floor(pos),
      i1 = Math.min(i0 + 1, stops.length - 1);
    const lt = pos - i0;
    const c0 = stops[i0],
      c1 = stops[i1];
    page.drawRectangle({
      x: x + i * segW,
      y: y,
      width: segW + 0.6,
      height: height,
      color: rgbFn(
        c0.r + (c1.r - c0.r) * lt,
        c0.g + (c1.g - c0.g) * lt,
        c0.b + (c1.b - c0.b) * lt,
      ),
    });
  }
}
async function buildPanierePdf(gruppi, courseTitle, cc, gs) {
  const { PDFDocument, rgb, StandardFonts, PDFName, PDFString } = self.PDFLib;
  const doc = await PDFDocument.create();
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const W = 595.28,
    H = 841.89,
    margin = 50,
    maxW = W - margin * 2;
  const dark = rgb(0.1, 0.1, 0.1),
    gray = rgb(0.42, 0.45, 0.5),
    light = rgb(0.61, 0.64, 0.69);
  const accent = rgb(0.059, 0.671, 0.737);
  const accentSoft = rgb(0.9, 0.97, 0.97);
  const green = rgb(0.106, 0.478, 0.216);
  const white = rgb(1, 1, 1);
  const d = new Date();
  const dataStr = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  const safeTitle = pdfSafeText(courseTitle || "Paniere Unipegaso Unlocker");
  const SITE_URL = "#";
  const addLink = (pg, rect, url) => {};
  let page,
    y,
    pageNo = 0,
    footerDrawn = false;
  const gsUrl = "";
  const footer = () => {
    const riga2Lines = wrapPdfText(
      pdfSafeText(`Generato con Unipegaso Unlocker - Documento di studio`),
      font,
      8,
      maxW,
    );
    const rowGap = 10;
    let yPos = 9 + (riga2Lines.length - 1) * rowGap;
    riga2Lines.forEach((ln) => {
      drawCentered(page, ln, W / 2, yPos, 8, font, light);
      yPos -= rowGap;
    });
    const riga1Y = 9 + riga2Lines.length * rowGap + 4;
    drawCentered(
      page,
      pdfSafeText(`Paniere ${cc || ""} aggiornato al ${dataStr}`),
      W / 2,
      riga1Y,
      8.5,
      font,
      light,
    );
    page.drawText(String(pageNo), {
      x: W - margin - 6,
      y: 9,
      size: 8,
      font: font,
      color: light,
    });
    footerDrawn = true;
  };
  function header(isFirst) {
    pageNo++;
    footerDrawn = false;
    if (isFirst) {
      const bandH = 70,
        titleSize = 16,
        lineSpacing = 19;
      drawGradientBand(page, rgb, 0, H - bandH, W, bandH, SITE_GRADIENT);
      const titleLines = wrapPdfText(safeTitle, fontB, titleSize, maxW).slice(
        0,
        2,
      );
      const ascent = fontB.heightAtSize(titleSize, { descender: false });
      const descent = fontB.heightAtSize(titleSize) - ascent;
      const bandCenterY = H - bandH / 2;
      const firstBaseline =
        bandCenterY -
        (ascent - descent) / 2 +
        ((titleLines.length - 1) * lineSpacing) / 2;
      titleLines.forEach((ln, li) =>
        page.drawText(ln, {
          x: margin,
          y: firstBaseline - li * lineSpacing,
          size: titleSize,
          font: fontB,
          color: white,
        }),
      );
      addLink(page, [0, H - bandH, W, H], SITE_URL);
      y = H - bandH - 26;
    } else {
      const bandH = 26;
      page.drawRectangle({
        x: 0,
        y: H - bandH,
        width: W,
        height: bandH,
        color: accent,
      });
      page.drawText(wrapPdfText(safeTitle, font, 9.5, maxW - 20)[0], {
        x: margin,
        y: H - 17,
        size: 9.5,
        font: font,
        color: white,
      });
      addLink(page, [0, H - bandH, W, H], SITE_URL);
      y = H - bandH - 20;
    }
  }
  const needsAutoFooter = (n) => n === 1 || n % 10 === 0;
  const newPage = () => {
    if (page && needsAutoFooter(pageNo)) footer();
    page = doc.addPage([W, H]);
    header(pageNo === 0);
  };
  const ensure = (need) => {
    if (y - need < margin) newPage();
  };
  newPage();
  let totalQ = 0;
  for (const gruppo of gruppi) {
    const numero = pdfSafeText(gruppo.gn || "");
    const nomeLines = wrapPdfText(
      pdfSafeText(gruppo.gt || "Sezione"),
      fontB,
      12,
      maxW - 16,
    );
    const headH = (numero ? 16 : 0) + nomeLines.length * 16 + 10;
    ensure(headH + 8);
    page.drawRectangle({
      x: margin - 6,
      y: y - headH + 14,
      width: maxW + 12,
      height: headH,
      color: accentSoft,
    });
    page.drawRectangle({
      x: margin - 6,
      y: y - headH + 14,
      width: 3.5,
      height: headH,
      color: accent,
    });
    if (numero) {
      page.drawText(numero, {
        x: margin + 4,
        y: y,
        size: 9.5,
        font: fontB,
        color: accent,
      });
      y -= 16;
    }
    nomeLines.forEach((ln, li) =>
      page.drawText(ln, {
        x: margin + 4,
        y: y - li * 16,
        size: 12,
        font: fontB,
        color: dark,
      }),
    );
    y -= nomeLines.length * 16 + 22;
    let n = 0;
    for (const q of gruppo.gd || []) {
      n++;
      totalQ++;
      const qLines = wrapPdfText(
        pdfSafeText(`${n}.  ${q.dq}`),
        fontB,
        11,
        maxW,
      );
      ensure(qLines.length * 15 + 12);
      for (const ln of qLines) {
        page.drawText(ln, {
          x: margin,
          y: y,
          size: 11,
          font: fontB,
          color: dark,
        });
        y -= 15;
      }
      y -= 4;
      const risposte = Array.isArray(q.dr) ? q.dr : [];
      for (let i = 0; i < risposte.length; i++) {
        const r = risposte[i];
        const isCorrect = !!(r && r.rc);
        const label = String.fromCharCode(65 + i) + ")";
        const optLines = wrapPdfText(
          pdfSafeText(r && r.rt),
          isCorrect ? fontB : font,
          10.5,
          maxW - 30,
        );
        const blockH = optLines.length * 14 + 6;
        ensure(blockH);
        page.drawText(label, {
          x: margin + 14,
          y: y,
          size: 10.5,
          font: fontB,
          color: isCorrect ? green : gray,
        });
        optLines.forEach((ln, li) =>
          page.drawText(ln, {
            x: margin + 30,
            y: y - li * 14,
            size: 10.5,
            font: isCorrect ? fontB : font,
            color: isCorrect ? green : dark,
          }),
        );
        y -= blockH;
      }
      y -= 11;
    }
    y -= 8;
  }
  if (!footerDrawn) footer();
  const bytes = await doc.save();
  return { base64: uint8ToBase64(bytes), count: totalQ };
}
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "build-paniere") return;
  port.onMessage.addListener(async (msg) => {
    if (!msg || msg.type !== "BUILD_PANIERE") return;
    const gruppi = msg.pg || [];
    const titolo = msg.pt || "";
    const cc = msg.cc || "";
    const gs = msg.gs || "";
    try {
      const { base64, count } = await buildPanierePdf(gruppi, titolo, cc, gs);
      const CHUNK = 512 * 1024;
      try {
        port.postMessage({ type: "begin", pc: count });
      } catch (_) {}
      for (let i = 0; i < base64.length; i += CHUNK) {
        port.postMessage({ type: "chunk", mb: base64.slice(i, i + CHUNK) });
      }
      try {
        port.postMessage({ type: "done", pc: count });
      } catch (_) {}
    } catch (err) {
      try {
        port.postMessage({
          type: "error",
          error: String((err && err.message) || err),
        });
      } catch (_) {}
    }
  });
});

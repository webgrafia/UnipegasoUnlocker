let _ = !1,
  u = { valid: null },
  f = "",
  m = 0,
  S = !0,
  w = "",
  h = "▶️ Scorrimento automatico attivo. 💻 Lascia questa finestra in primo piano. ⚠️ Non iconizzarmi",
  d;
function g(t, e, a = null, n = null, i = null, o = !1, c = !1) {
  if (!d) {
    (((d = document.createElement("div")).id = "custom-overlay"),
      Object.assign(d.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        boxSizing: "border-box",
        zIndex: 1e3,
        color: "#000",
      }));
    var l = document.createElement("div"),
      c =
        (Object.assign(l.style, {
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          maxWidth: "400px",
          width: "100%",
        }),
        d.appendChild(l),
        c &&
          d.addEventListener("click", (t) => {
            t.target === d && (d.remove(), (d = null));
          }),
        document.createElement("div"));
    ((c.style.fontSize = "16px"),
      (c.style.textAlign = "center"),
      (c.textContent = ""),
      l.appendChild(c));
    let r;
    if (o) {
      let e;
      var c = document.createElement("div"),
        s =
          (Object.assign(c.style, {
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }),
          document.createElement("input"));
      ((s.type = "checkbox"), (s.style.width = s.style.height = "20px"));
      let a = document.createElement("label");
      ((a.innerHTML =
        'Accetto le condizioni di utilizzo'),
        (a.style.color = "#666"),
        s.addEventListener("change", (t) => {
          ((e = t.target.checked),
            (r.disabled = !e),
            (r.style.background = e ? "#4caf50" : "#bbb"),
            (r.style.color = e ? "#fff" : "#444"),
            (r.style.cursor = e ? "pointer" : "not-allowed"),
            (a.style.color = e ? "#000" : "#666"));
        }),
        c.append(s, a),
        l.appendChild(c));
    }
    s = document.createElement("div");
    (Object.assign(s.style, {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
    }),
      ((r = document.createElement("button")).textContent = t),
      Object.assign(r.style, {
        padding: "12px",
        fontSize: "18px",
        width: "100%",
        border: "none",
        borderRadius: "5px",
        background: o ? "#bbb" : "#4caf50",
        color: o ? "#444" : "#fff",
        cursor: o ? "not-allowed" : "pointer",
      }),
      (r.disabled = o),
      r.addEventListener("click", () => {
        (e && e(), d && (d.remove(), (d = null)));
      }),
      s.appendChild(r),
      a &&
        n &&
        (((c = document.createElement("button")).textContent = a),
        Object.assign(c.style, {
          padding: "12px",
          fontSize: "18px",
          width: "100%",
          border: "none",
          borderRadius: "5px",
          background: "#d32f2f",
          color: "#fff",
          cursor: "pointer",
        }),
        c.addEventListener("click", (t) => {
          (t.stopPropagation(),
            i && window.open(i, "_blank"),
            d && (d.remove(), (d = null)));
        }),
        s.appendChild(c)),
      l.appendChild(s),
      document.body.appendChild(d));
  }
}
function t(t) {
  try {
    chrome.storage.local.set({ t_acc: !0 }, () => {
      (window.__k3w = (window.__k3w || 0) + 1);
      d && (d.remove(), (d = null));
      t && t();
    });
  } catch (err) {
    d && (d.remove(), (d = null));
  }
}
function K() {
  d && (d.remove(), (d = null));
}
function e(t) {
  _ = !0;
  d && (d.remove(), (d = null));
  t && t();
}
function y(t = "▶️ Scorrimento automatico attivo", e = "success") {
  let a = document.getElementById("toast-scorrimento");
  e =
    {
      t: "rgba(76, 175, 80, 0.95)",
      i: "rgba(255, 152, 0, 0.95)",
      error: "rgba(229, 57, 53, 0.95)",
    }[e] || "rgba(76, 175, 80, 0.95)";
  (a ||
    (((a = document.createElement("div")).id = "toast-scorrimento"),
    Object.assign(a.style, {
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "100%",
      color: "#fff",
      padding: "10px 0",
      textAlign: "center",
      fontSize: "14px",
      fontWeight: "500",
      zIndex: 9999,
      boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
      backdropFilter: "blur(2px)",
      fontFamily: "system-ui, sans-serif",
    }),
    document.body.appendChild(a)),
    (a.innerHTML = t),
    (a.style.backgroundColor = e));
}
function E(t = location.pathname) {
  return (
    t.includes("/videolezioni/") ||
    t.startsWith("/main/lp-video_student_view/lp-video_controller.php")
  );
}
function Y() {
  try {
    return !!(chrome && chrome.runtime && chrome.runtime.id);
  } catch (t) {
    return !1;
  }
}
function r(t) {
  var e = location.pathname;
  return (
    e !== t.o && E((t.o = e)) && !document.getElementById("toast-scorrimento")
  );
}
function H(t, e = 1500) {
  let a = { o: location.pathname };
  setInterval(() => {
    r(a) && t();
  }, e);
}
async function n() {
  await wfe(".block.w-11\\/12");
  try {
    await q(".loader");
  } catch {}
  return "new";
}
async function Q() {
  return (
    await Promise.race([
      wfe("#lessons-tool"),
      wfe("h4.media-heading.mt-3.mb-0.name-lesson"),
    ]),
    "old"
  );
}
async function R() {
  var t = await Promise.race([n(), Q()]);
  return t;
}
async function wfe(n, i = 6e4) {
  return new Promise((e, t) => {
    let a = null;
    var r;
    (r = document.querySelector(n)) && null !== r.offsetParent
      ? (a && a.disconnect(), e(r))
      : ((a = new MutationObserver(() => {
          var t = document.querySelector(n);
          return !(
            !t ||
            null === t.offsetParent ||
            (a && a.disconnect(), e(t), 0)
          );
        })).observe(document.body, { childList: !0, subtree: !0 }),
        setTimeout(() => {
          (a && a.disconnect(),
            t(new Error(`Elemento "${n}" non trovato entro ${i}ms`)));
        }, i));
  });
}
async function q(r, n = 2e4) {
  return new Promise((a, t) => {
    let e = new MutationObserver((t, e) => {
      document.querySelector(r) || (e.disconnect(), a());
    });
    (e.observe(document.body, { childList: !0, subtree: !0 }),
      setTimeout(() => {
        (e.disconnect(),
          t(new Error(`Timeout: ${r} non e' scomparso entro ${n}ms`)));
      }, n));
  });
}
function P(t, e) {
  if (!t) return null;
  try {
    var r = document.evaluate(
      t,
      e || document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;
    if (r) return r;
  } catch (_) {}
  try {
    var r2 = document.evaluate(
      t,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;
    if (r2) return r2;
  } catch (_) {}
  try {
    if (t === ".") return e || null;
    return (e || document).querySelector(t) || document.querySelector(t) || null;
  } catch (_) {
    return null;
  }
}
async function x(e) {
  return new Promise((t) => setTimeout(t, e));
}
function T(t) {
  var e;
  t &&
    ((e = t.getBoundingClientRect()),
    (e = new MouseEvent("click", {
      bubbles: !0,
      cancelable: !0,
      view: window,
      clientX: e.left + e.width / 2,
      clientY: e.top + e.height / 2,
    })),
    t.dispatchEvent(e));
}
async function b(t) {
  let e = document.getElementById("video") || document.querySelector("video");
  if (!e) {
    await new Promise((res) => setTimeout(res, 3e3));
    e = document.getElementById("video") || document.querySelector("video");
  }
  if (!e) return !1;

  if (!e.paused && !e.ended) return !0;

  var playBtn = document.querySelector(t) || document.querySelector('img[src*="play"], button[aria-label*="play"], .vjs-play-control, .vjs-big-play-button');
  if (playBtn) {
    T(playBtn);
    try { playBtn.click(); } catch (_) {}
  }
  try {
    var p = e.play();
    if (p && typeof p.then === "function") {
      await p;
    }
  } catch (_) {}
  return !e.paused || !e.ended;
}
async function A() {
  var t = Array.from(document.querySelectorAll("button")).find(
    (t) => "OK" === t.textContent.trim().toUpperCase(),
  );
  t && t.click();
}
function i(t, e = {}) {
  if (!t) return "";
  let a = t.cloneNode(!0);
  return (
    (e.l || []).forEach((t) => {
      a.querySelectorAll(t).forEach((t) => t.remove());
    }),
    (function a(r) {
      for (let t = r.childNodes.length - 1; 0 <= t; t--) {
        let e = r.childNodes[t];
        e.nodeType === Node.TEXT_NODE
          ? r.removeChild(e)
          : e.nodeType === Node.ELEMENT_NODE &&
            ([
              "alt",
              "title",
              "placeholder",
              "value",
              "data-content",
              "aria-label",
            ].forEach((t) => {
              e.hasAttribute(t) && e.removeAttribute(t);
            }),
            ["track", "source", "video", "audio"].includes(
              e.tagName.toLowerCase(),
            )
              ? r.removeChild(e)
              : a(e));
      }
    })(a),
    a.innerHTML
  );
}
let V = 12582912;
function X(t, e, a) {
  e = e ? e.length : 0;
  return (e > V && N(t, `payload troppo grande: ${e} bytes (${a})`), e);
}
function j(t) {
  if (!t || "string" != typeof t) return null;
  let e = t.trim(),
    a = (e = (e = e.replace(
      /(numero di telefono|numero telefono|numero:|phone number|telefono|tel|cellulare|mobile)\s*[:\-]?\s*/gi,
      "",
    )).replace(/[\s\.,;]+/g, "")).match(/[A-Z0-9]{10}/i);
  return a
    ? a[0].toUpperCase()
    : (a = e.match(/\d{6,12}/))
      ? a[0]
      : (e = e.replace(/[^A-Z0-9]/gi, "")).length
        ? e.toUpperCase()
        : null;
}
async function W(t, e = "") {
  u = { valid: true, message: "" };
  try {
    if ("undefined" != typeof chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ U_L_S: u }, () => {});
      chrome.runtime &&
        chrome.runtime.sendMessage &&
        chrome.runtime.sendMessage({ type: "L_S", ...u });
    }
  } catch (err) {}
}

const PANIERE_TEMPLATE = "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>{{TITLE}}</title>\n    <style>\n        * { \n            margin: 0; \n            padding: 0; \n            box-sizing: border-box; \n        }\n        \n        body { \n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;\n            padding: 8px 15px 15px 15px;\n            max-width: 210mm;\n            margin: 0 auto;\n            background: #f5f5f5;\n        }\n        \n        .container {\n            background: white;\n            padding: 20px;\n            border-radius: 6px;\n            box-shadow: 0 2px 6px rgba(0,0,0,0.08);\n        }\n\n        .header {\n            position: absolute;\n            top: 10px;\n            right: 20px;\n            font-size: 11px;\n            color: #0fabbc;\n            font-weight: bold;\n        }\n\n        .title-band {\n            background: linear-gradient(-45deg, #34e89e, #0fabbc, #43aaf3, #66d9e8);\n            margin: -20px -20px 15px -20px;\n            padding: 18px 20px;\n            border-radius: 6px 6px 0 0;\n        }\n\n        h1 {\n            margin: 0;\n            font-size: 23px;\n            font-weight: 700;\n            color: white;\n        }\n        \n        /* ========== SEZIONI QUIZ (quiz multipli) ========== */\n\n        .quiz-section {\n            margin: 15px 0;\n            page-break-inside: auto;\n            page-break-after: avoid;\n            padding: 10px;\n        }\n\n        .quiz-header {\n            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);\n            padding: 8px 12px;\n            border-radius: 4px;\n            margin-bottom: 8px;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            border-bottom: 1px solid #d0d0d0;\n        }\n        \n        .quiz-numero {\n            background: #0fabbc;\n            color: white;\n            padding: 6px 14px;\n            border-radius: 5px;\n            font-weight: bold;\n            font-size: 13px;\n            box-shadow: 0 2px 4px rgba(15, 171, 188, 0.3);\n            flex-shrink: 0;\n        }\n\n        .quiz-nome {\n            font-weight: 700;\n            font-size: 15px;\n            color: #222;\n            flex: 1;\n            line-height: 1.3;\n        }\n\n        .quiz-posizione {\n            font-size: 11px;\n            color: #666;\n            background: white;\n            padding: 4px 10px;\n            border-radius: 4px;\n            border: 1px solid #ddd;\n            white-space: nowrap;\n            font-weight: 500;\n        }\n        \n        /* Modifica domanda per quiz multipli */\n        .quiz-section .domanda {\n            margin: 6px 0;\n            background: white;\n            border-left-width: 2px;\n        }\n\n        .quiz-section .domanda:first-of-type {\n            margin-top: 0;\n        }\n\n        .quiz-section .domanda:last-of-type {\n            margin-bottom: 0;\n        }\n\n        /* ========== DOMANDE ========== */\n\n        .domanda {\n            margin: 2px 0;\n            page-break-inside: avoid;\n            background: #fafafa;\n            padding: 6px 10px;\n            border-radius: 4px;\n            border-left: 2px solid #0fabbc;\n        }\n\n        .domanda-header {\n            display: flex;\n            align-items: flex-start;\n            margin-bottom: 6px;\n        }\n\n        .domanda-numero {\n            background: #0fabbc;\n            color: white;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            text-align: center;\n            line-height: 20px;\n            margin-right: 8px;\n            flex-shrink: 0;\n            font-weight: bold;\n            font-size: 10px;\n            box-shadow: 0 2px 4px rgba(15, 171, 188, 0.25);\n        }\n\n        .domanda-testo {\n            font-weight: 600;\n            font-size: 12px;\n            line-height: 1.3;\n            color: #333;\n        }\n\n        .risposte {\n            margin-left: 0;\n        }\n\n        .risposta {\n            margin: 3px 0;\n            padding: 4px 8px;\n            border-radius: 3px;\n            display: flex;\n            align-items: center;\n        }\n\n        .risposta-lettera {\n            font-weight: bold;\n            margin-right: 6px;\n            min-width: 18px;\n            font-size: 10px;\n        }\n\n        .corretta {\n            background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);\n            border: 1px solid #1B7A37;\n            color: #155724;\n            font-weight: 500;\n        }\n\n        .corretta .risposta-lettera {\n            color: #1B7A37;\n            font-weight: bold;\n        }\n\n        .corretta::after {\n            content: '✓';\n            margin-left: auto;\n            color: #1B7A37;\n            font-size: 14px;\n            font-weight: bold;\n        }\n\n        .sbagliata {\n            background: white;\n            border: 1px solid #e0e0e0;\n            color: #757575;\n            font-size: 10px;\n        }\n\n        .footer {\n            margin-top: 20px;\n            padding-top: 12px;\n            border-top: 1px solid #e0e0e0;\n            text-align: center;\n            font-size: 11px;\n            color: #999;\n        }\n        \n        @media print { \n            body { \n                padding: 5mm 10mm 10mm 10mm; \n                background: white; \n            }\n            \n            .container { \n                box-shadow: none;\n                padding: 0;\n            }\n            \n            .quiz-section {\n                page-break-inside: avoid;\n                background: white;\n                margin: 15px 0;\n                padding: 12px;\n            }\n            \n            .quiz-header {\n                background: #f0f0f0 !important;\n                -webkit-print-color-adjust: exact;\n                print-color-adjust: exact;\n                page-break-after: avoid;\n            }\n            \n            .quiz-numero {\n                background: #0b6623 !important;\n                -webkit-print-color-adjust: exact;\n                print-color-adjust: exact;\n            }\n            \n            .domanda { \n                page-break-inside: avoid;\n                background: white;\n                border: 1px solid #ddd;\n                margin: 12px 0;\n                padding: 10px 12px;\n            }\n            \n            .corretta {\n                background: #e8f5e8 !important;\n                -webkit-print-color-adjust: exact;\n                print-color-adjust: exact;\n            }\n\n            .title-band {\n                margin: 0 0 12px 0;\n                background: #0fabbc !important;\n                -webkit-print-color-adjust: exact;\n                print-color-adjust: exact;\n                page-break-after: avoid;\n            }\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"title-band\">\n            <h1>{{TITLE}}</h1>\n        </div>\n        {{QUESTIONS_HTML}}\n        <div class=\"footer\">\n            {{TITLE}}\n        </div>\n    </div>\n    <script>\n        window.onload = () => setTimeout(() => window.print(), 1000);\n    </script>\n</body>\n</html>";

const INTERNAL_MAP = {
  gls2: {
    sel: ".flex.text-platform-text.text-sm .ml-1",
    reg: "^(\\d{10}|[A-Z]{2}\\d{8}|\\d{1}[A-Z]{2}\\d{7})$"
  },
  gfgs: {
    res: ".flex-grow"
  },
  gscs: {
    res: {
      sottoCapitolo: 'div[class*="border-t"][class*="hover:bg-platform-hover-light"]',
      capitolo: ".bg-white.text-base.border.font-sans.font-semibold"
    }
  },
  gpbs: {
    res: 'img[src*="play"], button[aria-label*="play"], .vjs-play-control, [class*="play"]'
  },
  gqs: {
    res: {
      buttonSelector: "button",
      startQuizText: "esegui",
      questionContainer: ".mt-8.px-4",
      answerSelector: "div[id='0']",
      submitButtonSelector: "button",
      submitButtonText: "invia",
      waitTime: 5000,
      qc: ".mt-8.px-4",
      qh: ".text-lg.rounded-t-lg.font-semibold",
      qt: "div:first-child",
      ac: ".divide-y-2.rounded-b-lg",
      ao: ".hover\\:bg-platform-hover-light",
      at: ".text-lg.pl-2.py-3 > div:first-child",
      rb: ".rounded-full.h-5.w-5.border",
      pb: "button.bg-platform-primary",
      ca: '[class*="bg-platform-green"]',
      wa: '[class*="bg-platform-red"]',
      scg: [
        "!bg-platform-green/10",
        "bg-platform-green/10",
        "bg-platform-green"
      ],
      scr: [
        "!bg-platform-red/10",
        "bg-platform-red/10",
        "bg-platform-red"
      ],
      exec: "Esegui",
      title: "Test di fine lezione",
      submit: "Invia",
      retry: "Ripeti"
    }
  },
  glrs: {
    lr: "div.pr-3.py-2.flex.items-center.font-normal.cursor-pointer",
    ab: ".visible.bg-platform-primary.rounded-r-lg.w-2.h-11.mr-2",
    du: ".text-sm.text-platform-gray"
  },
  guis: {
    ui: ".flex.text-platform-text.text-sm .ml-1",
    mr: "(\\d{10}|[A-Z]{2}\\d{8}|\\d{1}[A-Z]{2}\\d{7})"
  },
  gphtp: (payload) => ({
    res: PANIERE_TEMPLATE.replace(/{{TITLE}}/g, "Paniere Unipegaso Unlocker - " + (payload?.cc || "")),
    gs: ""
  }),
  dps: {
    res: "a[href*='.pdf'], a[href*='/dispens'], a[href*='/document'], a[href*='download'], a[download]"
  },
  dpsu: {
    res: "a[href*='.pdf'], a[href*='/dispens'], a[href*='/document'], a[href*='download'], a[download]"
  }
};

async function C(e, a = {}, r = !0, n = !1, i = 1) {
  if (INTERNAL_MAP[e]) {
    var mapped = INTERNAL_MAP[e];
    if (typeof mapped === "function") return mapped(a);
    return JSON.parse(JSON.stringify(mapped));
  }
  r && ((t = await Ut()) ? (a.a = t) : M("WAR_FDA", "FASE1"));
  var t = crypto.getRandomValues(new Uint8Array(32)),
    o = crypto.getRandomValues(new Uint8Array(12)),
    { ciphertext: c, u: l } = await et(t, o, JSON.stringify(a)),
    s = await wt();
  if (!s) return (N("ERR_FDA", "FASE1"), null);
  s = await tt(await Z(s), t);
  try {
    var u = await fetch(w + e, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        aes_key: D(s),
        message: D(c),
        auth_tag: D(l),
        nonce: D(o),
      }),
    });
    if (!u.ok) throw new Error("Errore HTTP: " + u.status);
    var d = await u.json();
    if (!(d && d.e_res && d.nonce && d.auth_tag))
      return (N("ERR_FDA", "FASE2"), null);
    var f = await J(t, d.nonce, d.e_res, d.auth_tag);
    if (!f) return (N("ERR_FDA", "FASE3"), null);
    try {
      var m = JSON.parse(f);
      return (
        n &&
          (sessionStorage.setItem(e + "_aesKey", D(t)),
          sessionStorage.setItem(
            e,
            JSON.stringify({
              e_res: d.e_res,
              nonce: d.nonce,
              auth_tag: d.auth_tag,
            }),
          )),
        lt(),
        m
      );
    } catch (t) {
      return (N("ERR_FDA", "FASE4"), null);
    }
  } catch (t) {
    return 1 < i
      ? (await x(2e3), C(e, a, r, n, i - 1))
      : (N(
          "ERR_FDA",
          "FASE5: sei connesso ad internet? hai fatto uno speedtest?",
        ),
        null);
  }
}
async function J(t, e, a, r) {
  try {
    var n = new TextDecoder(),
      i = await crypto.subtle.importKey("raw", t, { name: "AES-GCM" }, !1, [
        "decrypt",
      ]),
      o = I(e),
      c = I(a),
      l = I(r),
      s = (o.length, l.length, c.length, new Uint8Array([...c, ...l])),
      u = await crypto.subtle.decrypt({ name: "AES-GCM", iv: o, m: 128 }, i, s),
      d = n.decode(u);
    return d;
  } catch (t) {
    return null;
  }
}
async function Z(t) {
  ((t = atob(
    t.replace(/-----BEGIN PUBLIC KEY-----|-----END PUBLIC KEY-----|\n/g, ""),
  )),
    (t = new Uint8Array([...t].map((t) => t.charCodeAt(0)))));
  return crypto.subtle.importKey(
    "spki",
    t.buffer,
    { name: "RSA-OAEP", hash: "SHA-256" },
    !0,
    ["encrypt"],
  );
}
async function tt(t, e) {
  return crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, e);
}
function I(t) {
  return Uint8Array.from(atob(t), (t) => t.charCodeAt(0));
}
function D(t) {
  let e = "";
  var a = new Uint8Array(t);
  for (let t = 0; t < a.length; t += 8192)
    e += String.fromCharCode(...a.subarray(t, t + 8192));
  return btoa(e);
}
async function et(t, e, a) {
  var r = new TextEncoder(),
    t = await crypto.subtle.importKey("raw", t, { name: "AES-GCM" }, !1, [
      "encrypt",
    ]),
    e = await crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, r.encode(a)),
    t = new Uint8Array(e);
  return { ciphertext: t.slice(0, t.length - 16), u: t.slice(t.length - 16) };
}
function at() {
  try {
    "undefined" != typeof chrome &&
      chrome.runtime &&
      chrome.runtime.sendMessage &&
      chrome.runtime.sendMessage({ action: "keepAlive" });
  } catch (t) {}
}
function rt() {
  return new Promise((e) => {
    "undefined" != typeof chrome && chrome.storage && chrome.storage.local
      ? chrome.storage.local.get(["t_acc"], (t) => {
          e(!!t.t_acc);
        })
      : e(!1);
  });
}
async function nt() {
  try {
    await chrome.storage.local.set({ t_acc: !0 });
  } catch {}
  return true;
}
function it() {
  return true;
}
async function ot() {
  _ = !0;
  try {
    sessionStorage.setItem("autoplayOK", "true");
  } catch {}
  return true;
}
function N(t, e) {
  try {
    const nonFatal = [
      "ERR_GC_SCOPE", "ERR_GSC_SCOPE", "ERR_CEC_SCOPE", "ERR_CEMC_SCOPE",
      "ERR_CAP_EXPAND_FAILED", "ERR_ECA", "ERR_CHQ", "ERR_HSC",
      "ERR_CHQ_CREA_PANIERE", "ERR_MACRO_SKIP", "ERR_CAP_SKIP", "ERR_MACRO_NO_CAP",
      "ERR_BULK_EXPAND_VERIFY", "ERR_QUIZ_AUTO", "ERR_PPB", "ERR_EMC",
      "ERR_SCV", "ERR_SCV_SCOPE", "ERR_GLS2", "ERR_GLK2", "ERR_GPK",
      "ERR_GFG", "ERR_GUIS", "ERR_GLRS", "ERR_FDA"
    ];
    if (nonFatal.includes(t)) {
      console.warn("[UnipegasoUnlocker:nonFatal] " + t + ":", e);
      return;
    }
    F(t, e);
  } catch (t) {}
}
function F(t, e) {
  chrome.runtime.sendMessage({
    action: "ERROR",
    error: { code: t, message: e },
  });
}
function M(t, e) {
  chrome.runtime.sendMessage({
    action: "WARNING",
    error: { code: t, message: e },
  });
}
function ct(t) {
  chrome.runtime.sendMessage({ action: "INFO", message: t });
}
function lt() {
  try {
    "undefined" != typeof chrome &&
      chrome.runtime &&
      chrome.runtime.sendMessage &&
      chrome.runtime.sendMessage({ action: "OK" });
  } catch (t) {}
}
async function st(e, a = 3, r = 3e3) {
  for (let t = 1; t <= a; t++) {
    var n = await C(e, {}, !1, !0);
    if (n) return n;
    t < a && (await x(r));
  }
  return (
    F("ERR_FD_" + e.toUpperCase(), "Dati non recuperati dopo retry"),
    null
  );
}
function ut() {
  var t = document.getElementById("toast-scorrimento");
  t && t.remove();
}
function z(t) {
  f = t;
}
function dt(t) {
  var e, a;
  return !t || (t = t.trim().split(":").map(Number)).some(isNaN)
    ? 0
    : 2 === t.length
      ? (([e, a] = t), 60 * e + a)
      : 3 === t.length
        ? (([e, a, t] = t), 3600 * e + 60 * a + t)
        : 0;
}
async function pt() {
  let e = await Lt();
  var t;
  return (
    (e &&
      (t = Array.from(document.querySelectorAll(e.lr))).length &&
      (t.find((t) => t.querySelector(e.ab)) || t[0])) ||
    null
  );
}
async function ft(t) {
  var e;
  return t && (e = await Lt())
    ? dt((t = t.querySelector(e.du)) ? t.textContent.trim() : "")
    : 0;
}
let o = { v: [], h: {} };
async function mt() {
  try {
    var t = await C("gls2", {}, !1, !0);
    return t
      ? t.sel && t.reg
        ? { selector: t.sel, _: t.reg }
        : (N("ERR_GLK2", "FASE2"), null)
      : (N("ERR_GLK2", "FASE1"), null);
  } catch (t) {
    return (N("ERR_GLK2", "FASE3"), null);
  }
}
async function wt() {
  var t = sessionStorage.getItem("publicKey");
  if (t) return t;
  try {
    var e,
      a = await fetch(w + "public-key");
    if (a.ok)
      return (
        (e = await a.json()),
        sessionStorage.setItem("publicKey", e.public_key),
        e.public_key
      );
    throw new Error("Errore HTTP: " + a.status);
  } catch (t) {
    return (N("ERR_GPK", "FASE1"), null);
  }
}
async function vt() {
  try {
    var t = await C("gfgs", {}, !0, !0);
    if (t?.res) return t.res;
  } catch (t) {}
  return ".flex-grow";
}
async function ht() {
  var t = sessionStorage.getItem("gscs");
  if (t)
    try {
      var e = JSON.parse(t);
      if (e.res?.sottoCapitolo && e.res?.capitolo) return e.res;
    } catch (t) {}
  try {
    var a = await C("gscs", {}, !0, !0);
    if (a?.res?.sottoCapitolo && a?.res?.capitolo)
      return (sessionStorage.setItem("gscs", JSON.stringify(a)), a.res);
  } catch (t) {}
  return {
    sottoCapitolo: 'div[class*="border-t"][class*="hover:bg-platform-hover-light"]',
    capitolo: ".bg-white.text-base.border.font-sans.font-semibold"
  };
}
async function gt() {
  return { res: true, message: "Illimitata" };
}
async function yt() {
  return { res: true };
}
async function Et() {
  return { res: true };
}
async function _t() {
  try {
    var t = await C("dps");
    if (t && t.res) return t.res;
  } catch (err) {}
  return "a[href*='.pdf'], a[href*='/dispens'], a[href*='/document'], a[href*='download'], a[download]";
}
async function St() {
  return { res: true };
}
async function Rt() {
  try {
    var t = await C("dpsu");
    if (t && t.res) return t.res;
  } catch (err) {}
  return "a[href*='.pdf'], a[href*='/dispens'], a[href*='/document'], a[href*='download'], a[download]";
}
function getAllModuleElements() {
  var b = document.body;
  // 1. Cerca i contenitori dei macro-moduli nel layout di navigazione (divide-y o flex-wrap bg-platform-light-gray)
  var rawContainers = Array.from(b.querySelectorAll('.divide-y > .flex-wrap, .divide-y > div.bg-platform-light-gray, div.flex-wrap.bg-platform-light-gray'));
  var moduleContainers = rawContainers.filter(function(el) {
    return el.querySelector('.cursor-pointer') || el.classList.contains('cursor-pointer');
  });

  if (moduleContainers.length > 0) {
    return moduleContainers.map(function(c) {
      return c.querySelector('.cursor-pointer.relative.align-middle') || c.querySelector('.cursor-pointer') || c;
    });
  }

  // 2. Fallback per span contenenti "modulo X" o "sezione X"
  var spans = Array.from(b.querySelectorAll("span")).filter(function(s) {
    return /^(?:modulo|sezione)\s*\d+/i.test((s.textContent || "").trim());
  });
  if (spans.length > 0) {
    return spans.map(function(s) {
      return s.closest(".cursor-pointer.relative.align-middle") || s.closest(".cursor-pointer") || s;
    });
  }
  return [];
}

async function k(t = null) {
  var modEls = getAllModuleElements();
  if (modEls.length > 0) {
    o.v = modEls.map(function(el, idx) {
      el.setAttribute("data-ul-mod", "" + idx);
      return '[data-ul-mod="' + idx + '"]';
    });

    var activeModIdx = 0;
    for (var i = 0; i < modEls.length; i++) {
      var chevronUp = modEls[i].querySelector('[id*="chevron-up"], path[d*="896.707"]');
      var modContainer = modEls[i].closest('.flex-wrap.bg-platform-light-gray') || modEls[i].closest('.flex-wrap') || modEls[i].parentElement;
      var hasActiveItem = modContainer && (
        modContainer.querySelector('.visible.bg-platform-primary') ||
        modContainer.querySelector('.border-t.text-platform-text') ||
        modContainer.querySelector('[id*="chevron-up"], path[d*="896.707"]')
      );
      if (chevronUp || hasActiveItem) {
        activeModIdx = i;
        break;
      }
    }

    return { mc: o.v, pme: activeModIdx };
  }

  o.v = ["."];
  return { mc: o.v, pme: 0 };
}

async function $(t = 0) {
  var modEls = getAllModuleElements();
  var container = document.body;
  if (modEls.length > 0 && modEls[t]) {
    var mEl = modEls[t];
    var mParent = mEl.closest('.flex-wrap.bg-platform-light-gray') || mEl.closest('.flex-wrap') || mEl.parentElement;
    if (mParent && mParent !== document.body) {
      container = mParent;
    }
  }

  var capEls = Array.from(container.querySelectorAll('.bg-white.text-base.border.font-sans.font-semibold'));
  if (capEls.length === 0) {
    capEls = Array.from(container.querySelectorAll('.bg-white.text-base.border'));
  }
  if (capEls.length === 0) {
    capEls = Array.from(container.querySelectorAll('div.cursor-pointer.flex.items-center.justify-between'));
  }
  if (capEls.length === 0) {
    capEls = Array.from(container.querySelectorAll('div.font-semibold.cursor-pointer'));
  }
  if (capEls.length === 0) {
    capEls = Array.from(container.querySelectorAll('[class*="border"][class*="font-semibold"][class*="cursor-pointer"]'));
  }

  if (capEls.length > 0) {
    var localCp = [], localCxp = [];
    capEls.forEach(function(el, idx) {
      el.setAttribute("data-ul-cap", t + "_" + idx);
      var sel = '[data-ul-cap="' + t + '_' + idx + '"]';
      localCp.push(sel);
      localCxp.push(sel);
    });
    o.h[t] = localCxp;

    var activeCapIdx = -1;
    for (var i = 0; i < capEls.length; i++) {
      if (capEls[i].querySelector('.visible.bg-platform-primary')) {
        activeCapIdx = i;
        break;
      }
    }
    if (activeCapIdx === -1) {
      for (var i = 0; i < capEls.length; i++) {
        if (capEls[i].querySelector('[id*="chevron-up"], path[d*="896.707"]')) {
          activeCapIdx = i;
          break;
        }
      }
    }
    if (activeCapIdx === -1) {
      var urlCapMatch = window.location.href.match(/\/videolezioni\/[^\/]+\/(\d+)/);
      if (urlCapMatch) {
        var capNumFromUrl = parseInt(urlCapMatch[1], 10);
        if (capNumFromUrl >= 1 && capNumFromUrl <= capEls.length) {
          activeCapIdx = capNumFromUrl - 1;
        }
      }
    }
    if (activeCapIdx === -1) activeCapIdx = 0;

    var trulyOpenIndices = [];
    capEls.forEach(function(el, idx) {
      if (el.querySelector('[id*="chevron-up"], path[d*="896.707"]') || (el.querySelector('.border-t.text-platform-text') && el.querySelector('.border-t.text-platform-text').offsetHeight > 0)) {
        trulyOpenIndices.push(idx);
      }
    });

    M("LOCAL_GC", `Modulo ${t + 1} - Capitoli trovati: ${localCp.length}, Capitolo attivo (pce): ${activeCapIdx} (Capitolo ${activeCapIdx + 1}), Aperti: [${trulyOpenIndices.join(',')}]`);
    return {
      cp: localCp,
      pce: activeCapIdx,
      cei: trulyOpenIndices,
    };
  }

  // Fallback: se non ci sono accordion capitoli, verifica se ci sono lezioni dirette
  var hd = await ht();
  var scSel = hd?.sottoCapitolo || 'div[class*="border-t"][class*="hover:bg-platform-hover-light"]';
  var directSc = Array.from(document.querySelectorAll(scSel));
  if (directSc.length === 0) {
    directSc = Array.from(document.querySelectorAll('div[class*="hover:bg-platform-hover-light"]'));
  }
  if (directSc.length > 0) {
    M("LOCAL_GC", "Nessun accordion capitoli: trovate " + directSc.length + " lezioni dirette.");
    document.body.setAttribute("data-ul-cap", t + "_0");
    var directSel = '[data-ul-cap="' + t + '_0"]';
    o.h[t] = [directSel];
    return {
      cp: [directSel],
      pce: 0,
      cei: [0],
    };
  }

  N("ERR_GC_SCOPE", "macrocapitoloIdx=" + t);
  return { cp: [], pce: 0, cei: [] };
}
async function l(t, e) {
  var a = await B();
  let p = o.h[t]?.[e],
    r = p ? (P(p, a) || P(p, document)) : null;
  r || (await $(t), (p = o.h[t]?.[e]), (r = p ? (P(p, a) || P(p, document)) : null));

  var scEls = [];

  // In Pegaso LMS, le lezioni del capitolo e sono contenute DIRETTAMENTE dentro r (in .border-t.text-platform-text)
  if (r && r !== document.body && r.tagName !== "BODY") {
    var content = r.querySelector('.border-t.text-platform-text') || r.querySelector('.border-t');
    if (content) {
      // Ogni riga di lezione/test è un div.pr-3.py-2.flex.items-center
      var rows = Array.from(content.querySelectorAll('div.pr-3.py-2.flex.items-center'));
      if (rows.length > 0) {
        scEls = rows;
      }
    }
    // Se non trovato tramite query interna, cerca blocchi border-t hover:bg-platform-hover-light
    if (scEls.length === 0) {
      var hoverRows = Array.from(r.querySelectorAll('div[class*="hover:bg-platform-hover-light"]')).filter(el => {
        return !el.querySelector('[id*="chevron-"]') && !el.classList.contains('text-base');
      });
      if (hoverRows.length > 0) {
        scEls = hoverRows;
      }
    }
  }

  // Fallback se capitolo virtuale/diretto (senza accordion nel corso): cerca nel container generale
  if (scEls.length === 0 && (!r || r === document.body || r.tagName === "BODY")) {
    var hd = await ht();
    var capSel = hd?.capitolo || ".bg-white.text-base.border.font-sans.font-semibold";
    var bestList = [];
    for (var sel of ['div.pr-3.py-2.flex.items-center', 'div[class*="border-t"][class*="hover:bg-platform-hover-light"]']) {
      var foundInContainer = a ? Array.from(a.querySelectorAll(sel)).filter(el => !el.matches(capSel) && !el.querySelector(capSel)) : [];
      var foundInDoc = Array.from(document.querySelectorAll(sel)).filter(el => !el.matches(capSel) && !el.querySelector(capSel));
      var found = foundInContainer.length > 0 ? foundInContainer : foundInDoc;
      if (found.length > bestList.length) {
        bestList = found;
      }
    }
    scEls = bestList;
  }

  if (scEls.length > 0) {
    // Escludi esplicitamente le dispense (link a PDF, pulsanti Visualizza dispensa, icone libro) e divisori vuoti
    scEls = scEls.filter(el => {
      if (el.querySelector('a[href*=".pdf"], a[download], [id*="book"]')) return false;
      if (/dispens/i.test(el.textContent) && !/\d+:\d+/.test(el.textContent)) return false;
      if (!el.textContent.trim() && el.children.length === 0) return false;
      return true;
    });
  }

  if (scEls.length > 0) {
    M("LOCAL_GSC", `Sotto-capitoli trovati per cap=${e}: ` + scEls.length);
    return scEls.map(function(el, idx) {
      el.setAttribute("data-ul-sc", t + "_" + e + "_" + idx);
      return '[data-ul-sc="' + t + '_' + e + '_' + idx + '"]';
    });
  }

  return (N("ERR_GSC_SCOPE", `macro=${t} cap=` + e), []);
}
async function bt(t) {
  var modEls = getAllModuleElements();
  if (modEls.length > 0 && modEls[t]) {
    var targetMod = modEls[t];
    var modContainer = targetMod.closest('.flex-wrap.bg-platform-light-gray') || targetMod.closest('.flex-wrap') || targetMod.parentElement;
    // Se ha chevron-up o ha capitoli già visibili, è già aperto
    if (targetMod.querySelector('[id*="chevron-up"], path[d*="896.707"]') || (modContainer && modContainer.querySelector('.bg-white.text-base.border'))) {
      return !0;
    }
    var clickEl = targetMod.querySelector(".cursor-pointer") || targetMod.querySelector("span") || targetMod;
    dispatchClick(clickEl);
    await x(2000);
    return !0;
  }
  return !0;
}
async function isChapterExpanded(e, a) {
  try {
    var chapters = (await $(e)).cp;
    if (!chapters || chapters.length === 0) return !1;
    var sel = chapters[a];
    if (!sel) return !1;

    var capEl = document.querySelector(sel);
    if (!capEl || capEl === document.body) return !1;

    // Se ha chevron-up, il capitolo è APERTO
    if (capEl.querySelector('[id*="chevron-up"], path[d*="896.707"]')) {
      return !0;
    }

    // Se ha chevron-down, il capitolo è CHIUSO
    if (capEl.querySelector('[id*="chevron-down"], path[d*="944.707"]')) {
      return !1;
    }

    // Se ha il blocco lezioni visibile con righe effettive
    var content = capEl.querySelector('.border-t.text-platform-text');
    if (content && (content.offsetHeight > 0 || content.offsetParent !== null)) {
      var rows = content.querySelectorAll('div.pr-3.py-2, div[class*="hover:bg-platform-hover-light"]');
      if (rows.length > 0) return !0;
    }

    return !1;
  } catch (t) {
    return !1;
  }
}
async function c(e, a) {
  return isChapterExpanded(e, a);
}
window.isChapterExpanded = isChapterExpanded;
async function At() {
  return INTERNAL_MAP.gpbs.res;
}
async function Ct(t, e, a, r) {
  if (!r) return !1;
  if (!S) return !1;
  try {
    var bar = r.querySelector(
      ".relative.w-11\\/12.h-1\\.5.bg-platform-empty-prog-bar.rounded-full .absolute.h-1\\.5.rounded-full"
    );
    if (bar && bar.classList.contains("bg-platform-green")) {
      var wStr = (bar.style.width || "").trim();
      var wMatch = wStr.match(/([\d.]+)%/);
      var width = wMatch ? parseFloat(wMatch[1]) : 0;
      if (width >= 95) return !0;
    }
  } catch (_) {}
  return !1;
}
async function Pt() {
  return INTERNAL_MAP.gqs.res;
}
async function xt(t) {
  var courseId = t || "";
  return {
    res: PANIERE_TEMPLATE.replace(/{{s*TITLEs*}}/g, "Paniere Unipegaso Unlocker - " + courseId),
    gs: ""
  };
}
async function Tt() {
  return INTERNAL_MAP.guis;
}
async function Lt() {
  return INTERNAL_MAP.glrs;
}
async function It(e, a) {
  for (let t = 1; t < e.length; t++)
    (await x(Math.min(500 + 500 * t, 1e4)), await c(a, t));
}
async function U(e, a = null) {
  (z("HMC1"), z("HMC2"));
  await Ot(e);
  z("handleMacrocapitolo3");
  var { cp: r, pce: n } = await $(e);
  if (r && 0 !== r.length)
    if (
      (z("handleMacrocapitolo4"),
      z("handleMacrocapitolo5"),
      null !== n &&
        null === a &&
        (z("handleMacrocapitolo55"),
        z("handleMacrocapitolo555"),
        await s(e, n),
        z("handleMacrocapitolo5555")),
      z("handleMacrocapitolo6"),
      null !== a)
    )
      for (let t = 0; t < a; t++) await s(e, t);
    else {
      z("handleMacrocapitolo7");
      for (let t = null !== n ? n + 1 : 0; t < r.length; t++) await s(e, t);
      if ((z("handleMacrocapitolo8"), 0 < n && null === a))
        for (let t = 0; t < n; t++) await s(e, t);
      z("handleMacrocapitolo9");
    }
}
async function Ot(t) {
  t = await bt(t);
  if (!0 === t) return !0;
  if (t) {
    t = P(t, await B());
    if (t) return (t.click(), await new Promise((t) => setTimeout(t, 5e3)), !0);
    N("ERR_EMC", "FASE1");
  } else N("ERR_EMC", "CEMC_NULL");
  return !1;
}
async function s(n, i) {
  for (; window.__q7z || u.yt;) {
    y?.("⏸️ Scorrimento in pausa: operazione in corso...", "warning");
    await x(3000);
  }
  var t = await isChapterExpanded(n, i);
  if (!t) await Nt(n, i);

  let e = [];
  await x(1500);
  for (let t = 0; t < 6 && !(0 < (e = await l(n, i)).length); t++) {
    if (t > 0 && !(await isChapterExpanded(n, i))) {
      await Dt(n, i);
    }
    await x(1500);
  }

  if (0 !== e.length) {
    let r = e;
    let a = 0;

    // Rileva se c'è una lezione già attiva/in play nel capitolo
    try {
      var bEl = await B();
      var activeLessonIdx = r.findIndex(sel => {
        var el = P(sel, bEl) || P(sel, document);
        if (!el) return !1;
        // La barra blu attiva ha la classe 'visible' (mentre le inattive hanno 'invisible')
        var ab = el.querySelector('.visible.bg-platform-primary');
        if (ab) return !0;
        // Oppure la riga o il contenitore ha bg-platform-hover-light
        if (el.classList.contains("bg-platform-hover-light") || (el.parentElement && el.parentElement.classList.contains("bg-platform-hover-light"))) return !0;
        return !1;
      });

      // Nello scorrimento automatico delle videolezioni, escludi i test/quiz (che non devono interrompere l'autoplay)
      var isQuiz = (node) => !!(node?.querySelector('button') && /esegui/i.test(node.textContent)) || /test\s+di\s+fine/i.test(node?.textContent || '');
      var isObiettivi = (node) => /obiettivi/i.test(node?.textContent || '') && !/\d+:\d+/.test(node?.textContent || '');

      // Se stiamo iniziando il capitolo (o non siamo oltre Obiettivi), visita prima la schermata Obiettivi se presente!
      var obiettiviIdx = r.findIndex(sel => {
        var node = P(sel, bEl) || P(sel, document);
        return isObiettivi(node);
      });

      if (activeLessonIdx <= 0 && obiettiviIdx !== -1) {
        try {
          var obNode = P(r[obiettiviIdx], bEl) || P(r[obiettiviIdx], document);
          if (obNode) {
            y(`🎯 Modulo ${n + 1} • Cap ${i + 1}/${(await $(n)).cp?.length || 1} • Visito Obiettivi...`, "info");
            await Ft(obNode);
            await x(3000); // Pausa di 3 secondi sulla schermata obiettivi
          }
        } catch (_) {}
      }

      var videoLessonIndices = [];
      r.forEach((sel, idx) => {
        var node = P(sel, bEl) || P(sel, document);
        if (!isQuiz(node) && !isObiettivi(node)) {
          videoLessonIndices.push(idx);
        }
      });

      if (activeLessonIdx > 0 && videoLessonIndices.includes(activeLessonIdx)) {
        M("ACTIVE_LESSON", `Ripresa dalla lezione attiva: ${activeLessonIdx + 1}/${r.length}`);
        a = activeLessonIdx;
      } else if (videoLessonIndices.length > 0) {
        a = videoLessonIndices[0]; // Inizia dal primo video (dopo aver visitato Obiettivi)
      }
    } catch (_) {}

    for (; a < r.length;) {
      for (; window.__q7z || u.yt;) {
        await x(3000);
      }
      let el = null,
        attempts = 0;
      for (; attempts < 5 && !el && !(a >= r.length);) {
        var o = await B();
        el = P(r[a], o) || P(r[a], document);
        if (!el) {
          await x(500 + 1e3 * ++attempts);
          r = await l(n, i);
        }
      }
      if (el) {
        var chapters = (await $(n)).cp || [];
        var totalCap = chapters.length;

        var isQuiz = (node) => !!(node?.querySelector('button') && /esegui/i.test(node.textContent)) || /test\s+di\s+fine/i.test(node?.textContent || '');
        var isObiettivi = (node) => /obiettivi/i.test(node?.textContent || '') && !/\d+:\d+/.test(node?.textContent || '');

        // Se è un test o obiettivi durante il normale ciclo dei video: passa al prossimo
        if (isQuiz(el) || isObiettivi(el)) {
          a++;
          continue;
        }

        var titleEl = el.querySelector('.mb-2, [class*="text-base"]') || el;
        var titleText = (titleEl?.innerText || titleEl?.textContent || "").replace(/\s+/g, ' ').trim().slice(0, 35);

        y(`▶️ Modulo ${n + 1} • Cap ${i + 1}/${totalCap} • Lezione ${a + 1}/${r.length}${titleText ? ` • ${titleText}` : ''}`, "info");

        await Mt(n, i, a, el);
        await x(m || 1000);
      }
      a++;
    }
  }
}
function dispatchClick(target) {
  if (!target) return;
  try { target.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (_) {}
  try {
    target.click();
  } catch (_) {
    T(target);
  }
}
async function Dt(t, e) {
  // Se è già aperto, NON cliccare (essendo un toggle, cliccare lo chiuderebbe!)
  if (await c(t, e)) return !0;

  var chapters = (await $(t)).cp;
  if (!chapters || chapters.length === 0) {
    N("ERR_ECA", "FASE1: cp vuoto");
    return !1;
  }
  var sel = chapters[e];
  if (!sel) {
    N("ERR_ECA", "FASE1: capIdx vuoto");
    return !1;
  }
  var b = await B();
  var el = P(sel, b) || P(sel, document);
  if (!el) {
    N("ERR_ECA", "FASE1: el non trovato");
    return !1;
  }
  if (el === document.body || el.tagName === "BODY") return !0;

  // Clicca UNA SOLA VOLTA sul target (lo span o il trigger verificato in console)
  var clickTarget = el.querySelector('span') || el.querySelector('.cursor-pointer') || el;
  try { clickTarget.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (_) {}
  await x(200);
  try {
    clickTarget.click();
  } catch (_) {
    T(clickTarget);
  }
  await x(1500);
  return !0;
}
async function Nt(e, a, r = 3) {
  for (let t = 0; t < r; t++) {
    if (await c(e, a)) return !0;
    await Dt(e, a);
    await x(1500);
    if (await c(e, a)) return !0;
  }
  var capList = (await $(e)).cp;
  if (capList && capList[a]) {
    var capNode = document.querySelector(capList[a]);
    if (capNode && (capNode.querySelector('.border-t.text-platform-text') || capNode.querySelector('div[class*="hover:bg-platform-hover-light"]'))) {
      return !0;
    }
  }
  return (N("ERR_CAP_EXPAND_FAILED", `macro=${e} cap=` + a), !1);
}
async function Ft(t) {
  if (!t) return !1;
  var target = (t.classList && t.classList.contains("cursor-pointer"))
    ? t
    : (t.querySelector("div.cursor-pointer, .cursor-pointer, a, button") || t);
  if (target) {
    try { target.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (_) {}
    await x(300);
    T(target);
    try { target.click(); } catch (_) {}
    await x(2000);
    return !0;
  }
  return !1;
}
async function Mt(c, l, s, u) {
  // Escludi immediatamente le dispense (nessun video da riprodurre)
  if (u.querySelector('a[href*=".pdf"], a[download], [id*="book"]') || (/dispens/i.test(u.textContent) && !/\d+:\d+/.test(u.textContent))) {
    M("SKIP_DISPENSA", "Dispensa PDF ignorata nello scorrimento");
    return !0;
  }

  // Se è la schermata Obiettivi (nessun video associato)
  if (/obiettivi/i.test(u.textContent) && !/\d+:\d+/.test(u.textContent)) {
    M("SKIP_OBIETTIVI", "Elemento Obiettivi saltato (non è una videolezione)");
    return !0;
  }

  // Se è un test di fine lezione
  var isQuiz = !!(u.querySelector('button') && /esegui/i.test(u.textContent)) || /test\s+di\s+fine/i.test(u.textContent);
  if (isQuiz) {
    try {
      await kt(u);
    } catch (_) {}
    M("QUIZ_HANDLED", "Test di fine lezione elaborato o saltato, passo al capitolo successivo");
    return !0;
  }

  var isAlreadyActive = !!(
    u.querySelector('.visible.bg-platform-primary') ||
    u.classList.contains("bg-platform-hover-light") ||
    (u.parentElement && u.parentElement.classList.contains("bg-platform-hover-light"))
  );
  var videoEl = document.getElementById("video") || document.querySelector("video");
  var isAlreadyPlaying = videoEl && !videoEl.paused && !videoEl.ended && videoEl.currentTime > 0;

  // Se la lezione NON è quella attualmente in play, controlla se è già completata
  if (!isAlreadyActive || !isAlreadyPlaying) {
    if (await A(), await Ct(c, l, s, u)) {
      return !0;
    }
  }

  if (!isAlreadyActive || !isAlreadyPlaying) {
    var clicked = await Ft(u);
    if (!clicked) {
      M("SKIP_SC", "Impossibile cliccare la lezione");
      return !1;
    }
  } else {
    M("RESUME_SC", "Lezione già attiva e in riproduzione: proseguo senza riavviare");
  }

  var d = await At();
  let n = null,
    i = null,
    o = null;
  var f = await ft(await pt());

  for (;;) {
    var videoEl = document.querySelector("video");
    if (videoEl) videoEl.muted = !0;

    var playing = await b(d);
    if (!playing) {
      if (!S) {
        var h = videoEl && isFinite(videoEl.duration) && videoEl.duration > 0
          ? videoEl.duration - videoEl.currentTime
          : 1 / 0;
        if (videoEl && !videoEl.ended && h > 2) {
          await x(3e3);
          continue;
        }
      }
      break;
    }

    if (_ && videoEl?.muted) {
      videoEl.muted = !1;
      await x(300);
      if (videoEl.paused && !videoEl.ended) {
        videoEl.muted = !0;
        await b(d);
      }
    }

    await x(5e3);
    await A();

    let barPercent = 0, isGreen = !1, barText = null;
    try {
      var barInner = u.querySelector(
        ".relative.w-11\\/12.h-1\\.5.bg-platform-empty-prog-bar.rounded-full .absolute.h-1\\.5.rounded-full"
      );
      if (barInner) {
        var wMatch = (barInner.style.width || "").trim().match(/([\d.]+)%/);
        if (wMatch) {
          barPercent = parseFloat(wMatch[1]);
          barText = barPercent.toFixed(1);
        }
        isGreen = barInner.classList.contains("bg-platform-green");
      }
    } catch (_) {}

    var vid = document.querySelector("video");
    var vidDuration = vid && isFinite(vid.duration) && vid.duration > 0 ? vid.duration : (f || 0);
    var vidCurrent = vid ? (vid.currentTime || 0) : 0;
    var vidPercent = vidDuration > 0 ? (vidCurrent / vidDuration) * 100 : 0;
    var maxProgress = Math.max(barPercent, vidPercent);

    // Condizione 1: Video nativamente terminato o a meno di 2s dalla fine
    if (vid && (vid.ended || (vidDuration > 0 && (vidDuration - vidCurrent) <= 2))) {
      y("▶️ Video terminato, passo al successivo...", "info");
      await x(1500);
      break;
    }

    // Condizione 2: Barra laterale verde >= 90%
    if (isGreen && S && barPercent >= 90) {
      y("▶️ Lezione completata, passo alla successiva...", "info");
      await x(1500);
      break;
    }

    // Condizione 3: Avanzamento >= 90% per oltre 5 secondi
    if (S && maxProgress >= 90) {
      n = n || Date.now();
      if (Date.now() - n >= 5000) {
        y("▶️ Lezione >= 90%, passo alla successiva...", "info");
        await x(1500);
        break;
      }
    } else {
      n = null;
    }

    // Condizione 4: Anti-blocco se bloccato per 5 minuti
    if (barText !== null) {
      if (i !== barText) {
        i = barText;
        o = Date.now();
      } else if (o && Date.now() - o >= 3e5) {
        y("⚠️ Video fermo da 5 minuti, passo al successivo...", "warning");
        break;
      }
    }

    try { u.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (_) {}
    var comp = await Ct(c, l, s, u);
    if (comp && S) {
      y("▶️ Lezione registrata, passo alla successiva...", "info");
      await x(1500);
      break;
    }
  }
  return !0;
}
async function zt(t, e) {
  if (
    document.body.textContent.includes(
      "Non è presente nessun test per questa lezione",
    )
  )
    return !1;
  if (!t) return !1;
  var targetBtnText = (e.startQuizText || "esegui").toLowerCase();
  var btn = Array.from(t.querySelectorAll(e.buttonSelector || "button")).find(
    (el) => (el.textContent || "").trim().toLowerCase() === targetBtnText,
  );
  if (!btn) return (ct("Scorro la videolezione"), !1);
  T(btn);
  var qc = document.querySelectorAll(e.questionContainer || ".mt-8.px-4");
  return (0 < qc.length && qc.forEach((el) => el.remove()), !0);
}
async function kt(t) {
  let a = await Pt();
  if (!a) return (N("ERR_CHQ", "FASE1"), !1);
  if (!(await zt(t, a))) return !1;
  try {
    await wfe(a.questionContainer, a.waitTime);
    var e = document.querySelectorAll(a.questionContainer),
      r =
        (e.forEach((t, e) => {
          t = t.querySelector(a.answerSelector);
          t && T(t);
        }),
        await x(1e3),
        Array.from(document.querySelectorAll(a.submitButtonSelector)).find(
          (t) =>
            t.textContent.trim().toLowerCase() ===
            a.submitButtonText.toLowerCase(),
        ));
    r ? r.click() : N("ERR_CHQ", "FASE2");
    return !0;
  } catch (t) {
    N("ERR_CHQ", "FASE3");
    return !1;
  }
}
async function $t(t, e) {
  var targetBtnText = (e.startQuizText || "esegui").toLowerCase();
  var btn = Array.from((t || document).querySelectorAll(e.buttonSelector || "button"))
    .find((b) => (b.textContent || "").trim().toLowerCase() === targetBtnText);
  if (!btn && (!t || t === document.body)) {
    btn = Array.from(document.querySelectorAll("button, [role='button'], div.cursor-pointer, a"))
      .find((b) => (b.textContent || "").trim().toLowerCase() === targetBtnText);
  }
  if (!btn) return !1;
  T(btn);
  var qc = document.querySelectorAll(e.qc || e.questionContainer || ".mt-8.px-4");
  if (qc.length > 0) qc.forEach((el) => el.remove());
  try {
    return (await wfe(e.qc || e.questionContainer || ".mt-8.px-4", e.waitTime || 5000), !0);
  } catch (t) {
    return (N("ERR_CHQ_CREA_PANIERE", "FASE1"), !1);
  }
}
let G = null;
async function Ut() {
  if (G) return G;
  try {
    sessionStorage.removeItem("ma");
  } catch {}
  var t = await mt();
  if (t) {
    var { selector: a, _: t } = t;
    let e = new RegExp(t);
    ((t = a ? document.querySelector(a)?.textContent.trim() : null),
      (t =
        t && e.test(t)
          ? t
          : Array.from(document.querySelectorAll("div"))
              .map((t) => t.textContent.trim())
              .find((t) => e.test(t))));
    if (t) return (G = t);
    try {
      var r = (await Tt()).ui,
        n = r ? document.querySelector(r) : null;
      if (n) {
        var i,
          o = n.querySelector("span")?.textContent.trim() || "",
          c = (await Tt()).mr,
          l = c ? new RegExp(c, "i") : null,
          s = l ? o.match(l) : null;
        if (s) return ((i = s[1]), (G = i));
      }
    } catch (t) {}
    for (let t = 1; t <= 5; t++) {
      try {
        await wfe(a, 1e4);
        var u = document.querySelector(a)?.textContent.trim() || null;
        if (u) return (G = u);
      } catch (t) {
        N("ERR_GLS2", "RETRY");
      }
      t < 5 && (await x(3e3));
    }
    N("ERR_GLS2", "FINAL");
  }
  return null;
}
async function B() {
  var hd = await ht();
  var capSel = hd?.capitolo || ".bg-white.text-base.border.font-sans.font-semibold";
  var scSel = hd?.sottoCapitolo || 'div[class*="border-t"][class*="hover:bg-platform-hover-light"]';

  // Se c'è un elemento che contiene i sotto-capitoli o capitoli, è questo il container
  var anyLesson = document.querySelector(scSel) || document.querySelector(capSel);
  if (anyLesson) {
    var parent = anyLesson.closest && anyLesson.closest(".flex-grow, aside, nav, [class*='overflow-y-auto'], [class*='sidebar']");
    if (parent) return parent;
  }

  var t = (await a("gfgs")) || (await vt()) || ".flex-grow";
  var e = [...document.querySelectorAll(t)];
  if (e.length === 0) e = [...document.querySelectorAll("aside, nav, [class*='overflow-y-auto']")];
  if (e.length === 0) return document.body;

  var withContent = e.find(el => el.querySelector(scSel) || el.querySelector(capSel));
  if (withContent) return withContent;

  return e.find((t) => 1 === t.classList.length) || e[0];
}
async function a(e) {
  if (INTERNAL_MAP[e]) return INTERNAL_MAP[e].res !== undefined ? INTERNAL_MAP[e].res : INTERNAL_MAP[e];
  var a = sessionStorage.getItem(e);
  if (!a) return null;
  var { e_res: a, nonce: r, auth_tag: n } = JSON.parse(a);
  try {
    var i = sessionStorage.getItem(e + "_aesKey");
    if (!i) return null;
    let t = await J(I(i), r, a, n);
    if (!t) return null;
    if ("string" == typeof t)
      try {
        t = JSON.parse(t);
      } catch (t) {
        return null;
      }
    return t.res ? t.res : null;
  } catch (t) {
    return null;
  }
}
function Gt() {
  var t;
  location.pathname.startsWith(
    "/main/lp-video_student_view/lp-video_controller.php",
  ) &&
    0 <
      (t = document.querySelectorAll("a.list-group-item:not(.lesson-view)"))
        .length &&
    t[0].click();
}
function Bt() {
  var e = document.querySelector(".btn-group.btn-group-justified.menu-video");
  if (e) {
    let t = e.querySelectorAll(".btn-group > button, .btn-group > a");
    (t[3] && t[3].click(),
      setTimeout(() => {
        t[4] && t[4].click();
      }, 1e3));
  }
}
async function Kt() {
  await new Promise((t) => setTimeout(t, 500));
  let e = document.getElementById("control-play");
  if (e && "none" !== e.style.display) {
    let t = document.querySelector("video");
    t && (t.muted = !0);
    var a = Math.floor(1001 * Math.random()) + 500;
    setTimeout(() => {
      (Bt(),
        e.click(),
        _ &&
          t?.muted &&
          ((t.muted = !1),
          setTimeout(() => {
            t.paused && !t.ended && ((t.muted = !0), e.click());
          }, 300)));
    }, a);
  }
}
function Yt() {
  setInterval(
    () => {
      var t,
        e = Array.from(
          document.querySelectorAll("button.btn.btn-primary.btn-block"),
        ).find((t) =>
          t.textContent.trim().toLowerCase().includes("conferma presenza"),
        );
      (e && null !== e.offsetParent) ||
      ((e = document.querySelector(".fa-play-circle")),
      (t = document.querySelector(".fa-pause-circle")),
      e && !t && null !== e.offsetParent)
        ? e.click()
        : t || Kt();
    },
    4e3 + Math.floor(2e3 * Math.random()),
  );
}
function Ht() {
  let s = null,
    u = null,
    d = null,
    f = setInterval(
      () => {
        (async () => {
          var t = document.querySelector("#progressbar");
          let e = 0,
            a = null;
          if (
            (t &&
              t.style &&
              "string" == typeof t.style.width &&
              (r = t.style.width.trim().match(/([\d.]+)%/)) &&
              ((e = parseFloat(r[1])), (a = e.toFixed(1))),
            t && null !== a)
          )
            if (u !== a) ((u = a), (d = Date.now()));
            else if (d && 3e5 <= Date.now() - d) {
              var r = document
                .querySelector("a.list-group-item i.icon-check-empty")
                ?.closest("a");
              if (r) return (r.click(), !clearInterval(f));
            }
          let n = document.querySelector("video"),
            i = 0;
          ((r = 0 < (r = await ft(await pt())) ? r : n?.duration || 0),
            await !(n && 0 < r && (i = (n.currentTime / r) * 100)));
          var o = Math.max(e, i);
          if (t && (100 <= e || 90 <= o)) {
            if (90 <= o && e < 100) {
              if (!s) return !(s = Date.now());
              if (Date.now() - s < 5e3) return;
            } else s = null;
            var o = document.querySelector(
              "a.list-group-item i.icon-check-empty",
            );
            o &&
              "green" !== o.style.color &&
              (o = o.closest("a")) &&
              (o.click(), clearInterval(f));
          } else if (!t) {
            var c = document.querySelectorAll(
              "a.list-group-item:not(.list-group-item-info) i.icon-check-empty, a.list-group-item:not(.list-group-item-info) i.icon-check",
            );
            for (let t = 0; t < c.length; t++) {
              var l = c[t];
              if (l && "green" !== l.style.color) {
                l = l.closest("a");
                if (l) {
                  (l.click(), clearInterval(f));
                  break;
                }
              }
            }
          }
        })();
      },
      3e3 + Math.floor(2e3 * Math.random()),
    );
}
function Qt() {
  var t = Array.from(document.querySelectorAll("h4.panel-heading")).some((t) =>
      t.textContent.toLowerCase().includes("test"),
    ),
    e = document.getElementById("box_video");
  t &&
    !e &&
    (document.querySelectorAll(".panel-body").forEach((t) => {
      t.querySelector('input[type="radio"][value="2"]:checked');
    }),
    setTimeout(() => {
      document
        .querySelectorAll('input[type="radio"][value="2"]')
        .forEach((t) => {
          t.checked = !0;
        });
      var t = document.querySelector(".btn-submit"),
        t =
          (t && t.click(),
          location.origin +
            "/main/lp-video_student_view/lp-video_controller.php");
      window.location.href = t;
    }, 1e3));
}
function qt() {
  setInterval(() => {
    var t = document.querySelector("#control-play"),
      e = document.querySelector("#control-pause");
    "none" !== t?.style.display && "none" === e?.style.display && t.click();
  }, 5e3);
}
function Vt() {
  (Gt(), Kt(), Yt(), Ht(), Qt(), qt());
}
((async () => {
  let e = null;
  if (Y()) {
    H(() => location.reload());
    try {
      chrome.storage.onChanged.addListener((t) => {
        (null != t.enabled && location.reload(),
          null != t.delay?.newValue && (m = t.delay.newValue),
          null != t.skipOnGreen?.newValue &&
            (S = !1 !== t.skipOnGreen.newValue));
      });
    } catch (t) {}
    try {
      setInterval(() => {
        try {
          A();
        } catch {}
      }, 3e3);
    } catch {}
    try {
      let t = sessionStorage.getItem("_scorri_lesson_url");
      t &&
        t !== location.href &&
        (sessionStorage.removeItem("_scorri_lesson_url"),
        y(
          "⚠️ Errore Pegaso rilevato — ritorno alla lezione tra 3 secondi...",
          "warning",
        ),
        setTimeout(() => {
          location.href = t;
        }, 3e3));
    } catch {}
    try {
      var a = await new Promise((t) =>
        chrome.storage.local.get(["enabled", "delay", "skipOnGreen"], t),
      );
      if (!1 === a.enabled)
        y(
          "⏸ Unipegaso Unlocker disabilitato — riattivalo 🧩 dal popup dell'estensione in alto a destra",
          "warning",
        );
      else if (
        (null != a.delay && (m = a.delay),
        !1 === a.skipOnGreen && (S = !1),
        E())
      ) {
        (z("LOAD_PAGE_1"),
          y(
            "✅ Sono pronto a scorrere! Avvia una videolezione (sezione Corsi)",
          ),
          chrome.runtime.sendMessage({ type: "L_S", valid: null }),
          z("LOAD_PAGE_2"));
        var t = await R(),
          r =
            (z("WAKE_BACK"),
            at(),
            z("P_L_GLS2"),
            await st("gls2"),
            z("P_L_GFGS"),
            await st("gfgs"),
            y("⏳ Avvio scorrimento automatico in corso..."),
            z("U_T_ACC"),
            await nt(),
            z("A_P_ACC"),
            await ot(),
            y("⏳ Avvio scorrimento automatico confermato..."),
            z("C_L"),
            await gt());
        if (null === r)
          g(
            "Scorrimento automatico in manutenzione. Attendi qualche minuto e riprova.",
            null,
            null,
            null,
            null,
            !1,
            !0,
          );
        else {
          var n,
            i,
            o,
            c,
            l = {
              R: { A: "ID non trovato", C: "warning" },
              P: { A: "Licenza non valida o scaduta.", C: "warning" },
              T: {
                A: "Errore inatteso durante la verifica licenza.",
                C: "error",
              },
              L: { A: "Licenza scaduta.", C: "warning" },
            };
          if (!0 !== r?.res)
            ((n = r?.code ?? r?.message),
              (i = r?.code ? r.message : null),
              (o = r?.exp || null),
              F(
                n || "LIC_FAIL",
                (c = l[n] || {
                  A:
                    i ||
                    "Verifica licenza fallita: " + (n || "errore sconosciuto"),
                  C: "error",
                }).A,
              ),
              y("warning" === c.C ? "⚠️ " + c.A : "❌ " + c.A, c.C),
              W(!1, o || n),
              "ERR_IVL_EXP" === n && K());
          else if ((W(!0, r.message), "new" === t)) {
            z("F_MC");
            var { mc: s, pme: u } = await k(),
              d = (z("H_MC"), await $(u)).pce;
            null !== u && (y(h), await U(u));
            for (let t = u + 1; t < s.length; t++) await U(t);
            if (0 < u) for (let t = 0; t < u; t++) await U(t);
            (null !== u && 0 < d && (await U(u, d)),
              z("DONE"),
              y("✅ Scorrimento automatico completato", "success"));
          } else
            (y(
              "▶️ Modalità vecchia interfaccia attiva: non iconizzarmi!",
              "success",
            ),
              Vt());
        }
      }
    } catch (t) {
      a = f
        ? "⚠️ Errore in fase " + f.replace(/_/g, " ").toLowerCase()
        : "⚠️ Errore imprevisto – prova a riavviare il browser";
      if ("string" == typeof f && f.startsWith("LOAD_PAGE"))
        (y(
          "🔁 Errore nel caricamento iniziale. La pagina si ricaricherà automaticamente in 5 minuti…",
          "warning",
        ),
          await x(3e5),
          location.reload());
      else {
        (y(
          `❌ ${a}. ⚠️ Lascia sempre la pagina in primo piano! 🔄 Aggiorna la pagina.`,
          "warning",
        ),
          N("ERR_MAIN", f + " | " + t.message));
        try {
          (e && clearTimeout(e),
            (e = setTimeout(() => {
              try {
                A();
              } catch (t) {
              } finally {
                e = null;
              }
            }, 6e5)));
        } catch (t) {}
      }
    }
  } else
    y(
      "🔄 Estensione aggiornata — ricarica la pagina (F5) per riattivare lo scorrimento automatico",
      "warning",
    );
})(),
  (async () => {
    let b = {
        I: 100,
        O: 1e3,
        D: 200,
        N: 400,
        F: 1e3,
        M: 2e3,
        k: 1e3,
        $: 3e4,
        U: 1e4,
        G: 15e3,
        B: 15e3,
        K: 750,
        Y: 1150,
        H: 1500,
        q: 1e3,
        V: 4,
        X: 4,
        j: 65,
        W: 10,
        J: !1,
        Z: 0,
        tt: 0,
        et: 2,
        nt: {
          it: "linear-gradient(135deg, #34e89e 0%, #0fabbc 100%)",
          ot: "linear-gradient(135deg, #2cd882 0%, #0a8a97 100%)",
          ct: "#4CAF50",
          lt: "#e53935",
          st: "#ffc107",
          ut: "#bdbdbd",
        },
        dt: {
          ft: "pegaso-btn-container",
          wt: "pegaso-dispense-download-btn",
          vt: "pegaso-dispense-download-unite-btn",
          ht: "quiz-pdf-btn",
        },
      },
      u = {
        yt: !1,
        Et: null,
        _t: null,
        St: new Map(),
        Rt: new Map(),
        reset() {
          ((this.Et = null),
            (this._t = null),
            this.St.clear(),
            this.Rt.clear());
        },
      },
      A =
        (Object.defineProperty(window, "__q7z", {
          configurable: !0,
          get: () => u.yt,
          set: (t) => {
            u.yt = t;
          },
        }),
        {
          log(t) {},
          bt(t) {
            return t < 10 ? "0" + t : "" + t;
          },
          At(t, e) {
            var a = atob(t),
              r = new Uint8Array(a.length);
            for (let t = 0; t < a.length; t++) r[t] = a.charCodeAt(t);
            return new Blob([r], { type: e });
          },
          Ct(t, e) {
            let a = URL.createObjectURL(t);
            t = document.createElement("a");
            ((t.href = a),
              (t.download = e),
              document.body.appendChild(t),
              t.click(),
              t.remove(),
              setTimeout(() => URL.revokeObjectURL(a), 4e3));
          },
          Pt(t) {
            return (
              (t || "")
                .replace(/[\/\\?%*:|"<>.']/g, "")
                .replace(/[\u0300-\u036f]/g, "")
                .normalize("NFD")
                .replace(/[^a-zA-Z0-9 _-]/g, "")
                .replace(/\s+/g, "_")
                .replace(/_+/g, "_")
                .replace(/^-+|-+$/g, "")
                .replace(/^_+|_+$/g, "")
                .substring(0, 40) || "ND"
            );
          },
          xt(t) {
            let e = "";
            if (t)
              for (var a of t.childNodes)
                a.nodeType === Node.TEXT_NODE && (e += a.textContent);
            return e.trim();
          },
          Tt(t) {
            let e = this.xt(t);
            return (e = !e && t ? t.textContent.trim() : e);
          },
          Lt(t) {
            var e = t.indexOf("-");
            return (0 <= e ? t.substring(e + 1) : t).trim();
          },
          It(t) {
            return String.fromCharCode(b.j + t);
          },
          async Ot(t, e, a = b.$, r = b.D) {
            for (var n = Date.now(); ;) {
              if (t()) return;
              if (Date.now() - n > a) throw new Error(e);
              await x(r);
            }
          },
          async Dt(e, t = b.$) {
            var targetText = (e || "").toLowerCase();
            await this.Ot(
              () =>
                [...document.querySelectorAll("h1, h2, h3, h4, div, span")].some(
                  (el) => (el.textContent || "").toLowerCase().includes(targetText),
                ),
              `Timeout: testo "${e}" non trovato`,
              t,
              b.N,
            );
          },
          Nt(e) {
            var targetText = (e || "ripeti").toLowerCase();
            var t = [...document.querySelectorAll("button, [role='button'], div.cursor-pointer, a")].find(
              (b) => {
                var txt = (b.textContent || "").trim().toLowerCase();
                return txt === targetText || txt.includes(targetText) || txt.includes("ripeti") || txt.includes("riprova") || txt.includes("riesegui");
              }
            );
            return !!t && (dispatchClick(t), !0);
          },
          Ft(t, e) {
            if (!t) return !1;
            let a = typeof t.className === "string" ? t.className : (t.getAttribute("class") || "");
            if (e.some((cls) => a.includes(cls))) return !0;
            return e.some((cls) => !!t.querySelector(`[class*="${cls.replace("!", "")}"]`));
          },
        }),
      C = {
        Mt() {
          try {
            var t,
              e = window.location.href.match(/\/videolezioni\/([^\/]+)\//);
            if (0 < e?.[1]?.length) return e[1];
            for (t of [
              "[data-course-code]",
              ".course-code",
              "h1",
              ".breadcrumb a:last-child",
              "title",
            ])
              for (var a of document.querySelectorAll(t)) {
                var r = (a.textContent?.trim() || "").match(
                  /\b(\d{7}[A-Z]{3}\d{1}|\d{10}|[A-Z]{2}\d{8}|\d{1}[A-Z]{2}\d{7})\b/,
                );
                if (r?.[1]) return r[1];
              }
            return "UNKNOWN";
          } catch (t) {
            return "UNKNOWN";
          }
        },
        zt() {
          try {
            var t = document.querySelector('h1, .text-2xl, [class*="title"]'),
              e = (t?.innerText || t?.textContent || "").trim();
            return e
              ? e
                  .replace(/[\/\\?%*:|"<>]/g, "")
                  .replace(/\s+/g, " ")
                  .trim()
                  .slice(0, 60)
              : "";
          } catch (t) {
            return "";
          }
        },
        async kt(e, a) {
          try {
            var r = await B(),
              n = P(e[a], r);
            let t = "";
            if (n?.querySelectorAll)
              for (var i of n.querySelectorAll("div")) {
                var o =
                  1 === i.childNodes.length &&
                  i.childNodes[0].nodeType === Node.TEXT_NODE
                    ? i.textContent.trim()
                    : "";
                if (o && 0 < o.length && o.length < 80) {
                  t = o;
                  break;
                }
              }
            return ((t = t || A.Tt(n)), (t = A.Lt(t)));
          } catch (t) {
            return "";
          }
        },
        async $t(t, e) {
          try {
            var a = await B(),
              r = P(t[e], a);
            if (r) {
              var n = r.querySelector(".font-medium");
              let t = "";
              t = n ? n.textContent.trim() : A.Tt(r);
              var i = A.Lt(t);
              return i;
            }
            return "";
          } catch (t) {
            return "";
          }
        },
        Ut(t, e, a, r) {
          return `Sez${A.bt(t + 1)}_cap${A.bt(e + 1)}_${A.Pt(a)}_${A.Pt(r)}.pdf`;
        },
        Gt() {
          return (
            u.Et || (u.Et = this.Mt()),
            "Paniere Unipegaso Unlocker - " + u.Et
          );
        },
      },
      r = {
        async Bt(e, a, r = b.W) {
          for (let t = 0; t < r; t++) {
            var n = await l(e, a);
            if (
              (A.log(`[Retry ${t + 1}] Trovati ${n.length} sottocapitoli`),
              0 < n.length)
            )
              return n;
            t < r - 1 && (await x(b.F));
          }
          return [];
        },
        async Kt(e, a = b.W) {
          for (let t = 0; t < a; t++) {
            var r = (await k()).mc;
            if (
              (A.log(
                `[Retry ${t + 1}] Trovati ${r.length} macrocapitoli (servono > ${e})`,
              ),
              r.length > e)
            )
              return r;
            t < a - 1 && (await x(b.F));
          }
          return [];
        },
        async Yt(e, a, r = b.W) {
          for (let t = 0; t < r; t++) {
            var { cp: n, cei: i } = (await $(e)) || {};
            if (
              (A.log(
                `[Retry ${t + 1}] Trovati ${n?.length || 0} capitoli (servono > ${a})`,
              ),
              n?.length > a)
            )
              return { cp: n, cei: i || [] };
            t < r - 1 && (await x(b.F));
          }
          return { cp: [], cei: [] };
        },
        async Ht(t, e, a, r, n) {
          var i = new Set(a || []),
            o = [];
          for (let t = r; t < n; t++) i.has(t) || o.push(t);
          if (0 === o.length)
            return (
              A.log(
                "[BulkExpand] Tutti i capitoli nel range sono già espansi.",
              ),
              e
            );
          A.log(
            `[BulkExpand] ${o.length} capitoli da espandere (range ${r}-${n - 1}).`,
          );
          var c,
            l = async (t) => {
              var el = P(t, await B()) || document.querySelector(t);
              if (!el) return !1;
              var target = el.querySelector("span") || el.querySelector(".cursor-pointer.relative.align-middle") || el.querySelector(".cursor-pointer") || el;
              dispatchClick(target);
              return !0;
            },
            s = () => x(b.K + Math.random() * (b.Y - b.K));
          for (c of o)
            ((await l(e[c])) ||
              A.log(
                `[BulkExpand] Capitolo ${c + 1} non risolvibile, verrà ritentato in fase di verifica.`,
              ),
              await s());
          await x(b.H);
          let { cp: u, cei: d } = (await $(t)) || {};
          if (!u?.length)
            return (N?.("ERR_BULK_EXPAND_VERIFY", "macro=" + t), e);
          let f = new Set(d || []);
          a = o.filter((t) => t < u.length && !f.has(t));
          if (0 < a.length) {
            A.log(
              `[BulkExpand] ${a.length} capitoli ancora chiusi dopo il primo giro, ritento una volta...`,
            );
            for (var m of a) (await l(u[m]), await s());
            await x(b.q);
          }
          return u;
        },
        async Qt(t) {
          var { qt: rowHandler, Vt: onMacroProgress, Xt: onCapProgress, jt: filterRow, Wt: extraPayload = {} } = t;
          var { mc: modules } = await k();
          if (!modules || !modules.length) modules = ["."];

          let s = 0, uCount = 0;

          // Metti in pausa qualsiasi video in esecuzione per evitare conflitti
          try {
            var vid = document.querySelector("video");
            if (vid && !vid.paused) vid.pause();
          } catch (_) {}

          for (let macroIdx = 0; macroIdx < modules.length; macroIdx++) {
            onMacroProgress?.(macroIdx, modules.length);
            if (modules.length > 1) {
              await bt(macroIdx);
              await x(2000);
            }

            var { cp: m } = (await $(macroIdx)) || {};
            if (!m || !m.length) {
              A.log(`[Modulo ${macroIdx + 1}] Nessun capitolo trovato, proseguo...`);
              continue;
            }

            var totalCaps = m.length;

            for (let capIdx = 0; capIdx < totalCaps; capIdx++) {
              onCapProgress?.(macroIdx, modules.length, capIdx, totalCaps);
              y?.(`📝 Scansione quiz: Modulo ${macroIdx + 1}/${modules.length} • Cap ${capIdx + 1}/${totalCaps}...`, "info");

              // Assicura che il capitolo corrente sia aperto a tendina
              var isExpanded = await isChapterExpanded(macroIdx, capIdx);
              if (!isExpanded) {
                await Nt(macroIdx, capIdx);
                await x(1500);
              }

              var rows = await this.Bt(macroIdx, capIdx);
              if (!rows || rows.length === 0) {
                await Dt(macroIdx, capIdx);
                await x(2000);
                rows = await this.Bt(macroIdx, capIdx);
              }

              if (!rows || rows.length === 0) {
                A.log(`[Capitolo ${capIdx + 1}] Nessun elemento trovato dopo espansione`);
                continue;
              }

              for (let rIdx = 0; rIdx < rows.length; rIdx++) {
                var rowNode = P(rows[rIdx], await B()) || document.querySelector(rows[rIdx]);
                if (!rowNode) continue;
                if (filterRow && !(await filterRow(rowNode, extraPayload))) continue;

                s++;
                var capMeta = { Jt: macroIdx, Zt: capIdx, te: rIdx };
                var capInfo = { ee: "Paniere", ae: "Capitolo " + (capIdx + 1), re: [macroIdx], ne: m };
                var firstRow = P(rows[0], await B()) || rowNode;
                var ok = await rowHandler(rowNode, firstRow, capMeta, capInfo, extraPayload);
                if (ok) uCount++;
              }
            }
          }
          return { ie: s, oe: uCount };
        },
      },
      n = {
        ce(t) {
          let e = document.createElement("button"),
            a =
              ((e.innerHTML = t.le || ""),
              (e.title = t.title || ""),
              (e.id = t.id || ""),
              Object.assign(e.style, {
                background: b.nt.it,
                color: "white",
                border: "none",
                padding: "6px 8px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "0.75rem",
                fontWeight: "600",
                fontFamily: "-apple-system, Segoe UI, Arial, sans-serif",
                boxShadow:
                  "0 4px 16px 0 rgba(15, 171, 188, 0.25), 0 1px 4px 0 rgba(0,0,0,0.08)",
                backdropFilter: "blur(1.5px)",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
                marginLeft: "8px",
                minWidth: "90px",
              }),
              () => {
                ((e.style.background = b.nt.ot),
                  (e.style.boxShadow =
                    "0 8px 24px 0 rgba(15, 171, 188, 0.35), 0 2px 8px 0 rgba(0,0,0,0.12)"),
                  (e.style.transform = "scale(1.02)"));
              }),
            r = () => {
              ((e.style.background = b.nt.it),
                (e.style.boxShadow =
                  "0 4px 16px 0 rgba(15, 171, 188, 0.25), 0 1px 4px 0 rgba(0,0,0,0.08)"),
                (e.style.transform = "scale(1)"));
            };
          return (
            e.addEventListener("mouseenter", a),
            e.addEventListener("mouseleave", r),
            (e.se = () => {
              (e.addEventListener("mouseenter", a),
                e.addEventListener("mouseleave", r),
                (e.style.cursor = "pointer"),
                r());
            }),
            (e.ue = () => {
              (e.removeEventListener("mouseenter", a),
                e.removeEventListener("mouseleave", r),
                (e.style.background = b.nt.ut),
                (e.style.boxShadow = "0 2px 6px 0 rgba(0,0,0,0.10)"),
                (e.style.transform = "scale(1)"),
                (e.style.cursor = "not-allowed"));
            }),
            e
          );
        },
        de(t, e, a) {
          ((t.innerHTML = a), (t.disabled = "attivo" !== e));
          a = { pe: b.nt.it, fe: b.nt.st, me: b.nt.ct, we: b.nt.lt };
          ((t.style.background = a[e] || b.nt.it),
            "attivo" === e ? t.se?.() : t.ue?.());
        },
        ve(t) {
          (Array.isArray(t) ? t : [t]).forEach((t) => {
            t = document.getElementById(t);
            t && (t.style.display = "none");
          });
        },
        he(t) {
          (Array.isArray(t) ? t : [t]).forEach((t) => {
            t = document.getElementById(t);
            t && (t.style.display = "");
          });
        },
        ge() {
          let t = document.getElementById(b.dt.ft);
          return (
            t ||
              (((t = document.createElement("div")).id = b.dt.ft),
              Object.assign(t.style, {
                position: "fixed",
                bottom: "24px",
                right: "24px",
                zIndex: "99999",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
              }),
              document.body.appendChild(t)),
            t
          );
        },
        async ye(e, t, a, r) {
          if (!u.yt) {
            ((u.yt = !0), (e.disabled = !0), e.ue?.(), this.ve(t));
            try {
              (this.de(e, "attesa", "Attendi..."),
                y?.(
                  "⏸️ Scorrimento in pausa: operazione in corso...",
                  "warning",
                ),
                await a(e),
                this.de(e, "successo", "✅ Completato"),
                y?.(h, "success"));
            } catch (t) {
              (this.de(e, "errore", "❌ Errore"),
                y?.(
                  "❌ Si è verificato un errore durante l'operazione.",
                  "error",
                ));
            }
            (setTimeout(() => {
              (this.de(e, "attivo", r), this.he(t));
            }, b.B),
              (u.yt = !1));
          }
        },
      },
      i = {
        Ee: '<span style="vertical-align:middle;display:inline-block;margin-right:4px;">⬇️</span><span style="vertical-align:middle;">Dispense singole</span>',
        _e(t, e) {
          try {
            chrome.runtime.sendMessage({ url: t, fn: e });
          } catch (t) {}
        },
        async be(n) {
          var t = await yt?.();
          if (!t || !0 !== t.res) {
            A.log("Licenza download non valida.");
            n.parentNode?.removeChild(n);
            return;
          }

          u.reset();
          u.Et = C.Mt();
          var courseName = C.zt();

          // Metti in pausa video
          try {
            var vid = document.querySelector("video");
            if (vid && !vid.paused) vid.pause();
          } catch (_) {}

          var { mc: modules } = await k();
          if (!modules || !modules.length) modules = ["."];

          let totalFound = 0;
          let downloaded = 0;

          for (let macroIdx = 0; macroIdx < modules.length; macroIdx++) {
            if (modules.length > 1) {
              n.textContent = `Macrocapitolo ${macroIdx + 1}/${modules.length}`;
              await bt(macroIdx);
              await x(2000);
            }

            var { cp: m } = (await $(macroIdx)) || {};
            if (!m || !m.length) continue;

            var macroName = (await C.kt(modules, macroIdx)) || `Modulo ${macroIdx + 1}`;

            for (let capIdx = 0; capIdx < m.length; capIdx++) {
              n.textContent = `⬇️ Cap. ${capIdx + 1}/${m.length} - Modulo ${macroIdx + 1}`;
              y?.(`📥 Ricerca dispensa: Modulo ${macroIdx + 1} • Cap ${capIdx + 1}/${m.length}...`, "info");

              var isExpanded = await isChapterExpanded(macroIdx, capIdx);
              if (!isExpanded) {
                await Nt(macroIdx, capIdx);
                await x(1500);
              }

              var capEl = P(m[capIdx], await B()) || document.querySelector(m[capIdx]);
              if (!capEl) continue;

              var capTitle = (await C.$t(m, capIdx)) || `Capitolo ${capIdx + 1}`;
              var dispensaLink = capEl.querySelector('a[href*=".pdf"], a[href*="/dispens"], a[href*="cloudfront.net"]');

              if (!dispensaLink) {
                // Prova ad attendere un attimo che il contenuto accordion sia visibile
                await x(500);
                dispensaLink = capEl.querySelector('a[href*=".pdf"], a[href*="/dispens"], a[href*="cloudfront.net"]');
              }

              if (dispensaLink && dispensaLink.href) {
                totalFound++;
                var filename = C.Ut(macroIdx, capIdx, macroName, capTitle);
                A.log(`[Modulo ${macroIdx + 1} - Cap ${capIdx + 1}] Download: ${dispensaLink.href} -> ${filename}`);
                this._e(dispensaLink.href, filename);
                downloaded++;
                await x(300);
              } else {
                A.log(`[Modulo ${macroIdx + 1} - Cap ${capIdx + 1}] Nessuna dispensa trovata`);
              }
            }
          }

          if (downloaded > 0) {
            y?.(`✅ Download avviato per ${downloaded} dispense!`, "success");
            n.textContent = `✅ ${downloaded} dispense scaricate`;
          } else {
            y?.(`⚠️ Nessuna dispensa trovata da scaricare.`, "warning");
            n.textContent = `⚠️ 0 dispense trovate`;
          }
        },
        ce() {
          return n.ce({
            id: b.dt.wt,
            le: this.Ee,
            title:
              "Premendo si avvierà il download di tutte le dispense, un file PDF per ogni lezione",
          });
        },
      },
      o = {
        Ee: '<span style="vertical-align:middle;display:inline-block;margin-right:4px;">⬇️</span><span style="vertical-align:middle;">Dispense unite</span>',
        async Ae(n) {
          let urls = [];
          var { mc: modules } = await k();
          if (!modules || !modules.length) modules = ["."];

          // Metti in pausa video
          try {
            var vid = document.querySelector("video");
            if (vid && !vid.paused) vid.pause();
          } catch (_) {}

          for (let macroIdx = 0; macroIdx < modules.length; macroIdx++) {
            if (modules.length > 1) {
              n.textContent = `🔎 Macrocapitolo ${macroIdx + 1}/${modules.length}`;
              await bt(macroIdx);
              await x(2000);
            }

            var { cp: m } = (await $(macroIdx)) || {};
            if (!m || !m.length) continue;

            for (let capIdx = 0; capIdx < m.length; capIdx++) {
              n.textContent = `🔎 Raccolgo dispense: cap. ${capIdx + 1}/${m.length} (Mod ${macroIdx + 1})`;
              y?.(`🔎 Raccolgo dispense: Modulo ${macroIdx + 1} • Cap ${capIdx + 1}/${m.length}...`, "info");

              var isExpanded = await isChapterExpanded(macroIdx, capIdx);
              if (!isExpanded) {
                await Nt(macroIdx, capIdx);
                await x(1500);
              }

              var capEl = P(m[capIdx], await B()) || document.querySelector(m[capIdx]);
              if (!capEl) continue;

              var dispensaLink = capEl.querySelector('a[href*=".pdf"], a[href*="/dispens"], a[href*="cloudfront.net"]');
              if (!dispensaLink) {
                await x(500);
                dispensaLink = capEl.querySelector('a[href*=".pdf"], a[href*="/dispens"], a[href*="cloudfront.net"]');
              }

              if (dispensaLink && dispensaLink.href) {
                if (!urls.includes(dispensaLink.href)) {
                  urls.push(dispensaLink.href);
                }
              }
            }
          }
          return urls;
        },
        Ce(t, l) {
          return new Promise((e, a) => {
            let r;
            try {
              r = chrome.runtime.connect({ name: "merge-dispense" });
            } catch (t) {
              return void a(t);
            }
            let n = [],
              i = { mg: 0, mf: 0 },
              o = !1,
              c = (t) => {
                if (!o) {
                  o = !0;
                  try {
                    r.disconnect();
                  } catch (t) {}
                  t();
                }
              };
            (r.onMessage.addListener((t) => {
              t &&
                ("progress" === t.type
                  ? l && l(t.md, t.mt)
                  : "begin" === t.type
                    ? ((n = []), (i = { mg: t.mg, mf: t.mf }))
                    : "chunk" === t.type
                      ? n.push(t.mb)
                      : "done" === t.type
                        ? c(() =>
                            e({
                              ok: !0,
                              Pe: n.join(""),
                              xe: (null != t.mg ? t : i).mg,
                              Te: (null != t.mf ? t : i).mf,
                            }),
                          )
                        : "error" === t.type &&
                          c(() => a(new Error(t.error || "merge"))));
            }),
              r.onDisconnect.addListener(() => {
                o || ((o = !0), a(new Error("Errore di comunicazione")));
              }));
            try {
              r.postMessage({ type: "MERGE_DISPENSE", mu: t });
            } catch (t) {
              a(t);
            }
          });
        },
        Le() {
          u.Et || (u.Et = C.Mt());
          var t = C.zt();
          return (t ? t + " " + u.Et : u.Et) + " - dispense unite.pdf";
        },
        async be(a) {
          u.reset();
          var t = await St?.();
          if (t && !0 === t.res) {
            a.textContent = "🔎 Raccolgo le dispense...";
            var urls = await this.Ae(a);
            if (0 === urls.length)
              throw new Error("Nessuna dispensa trovata in questo corso.");
            a.textContent = `📥 0/${urls.length} dispense scaricate`;
            var mergeRes = await this.Ce(urls, (done, total) => {
              a.textContent = `📥 ${done}/${total} dispense scaricate`;
            });
            if (!mergeRes || !mergeRes.ok) throw new Error("Impossibile unire le dispense.");
            a.textContent = "📎 Creo il PDF unico...";
            var e = A.At(mergeRes.Pe, "application/pdf");
            A.Ct(e, this.Le());
            y?.("✅ Dispense unite create e scaricate con successo!", "success");
            a.textContent = `✅ PDF Unico Creato (${urls.length} dispense)`;
          } else {
            A.log("Licenza dispense unite non valida.");
            a.parentNode?.removeChild(a);
          }
        },
        ce() {
          return n.ce({
            id: b.dt.vt,
            le: this.Ee,
            title:
              "Premendo si scaricano tutte le dispense del corso unite in un unico PDF",
          });
        },
      },
      c = {
        Ee: '<span style="vertical-align:middle;">🗎 Paniere PDF</span>',
        Ie(t) {
          return document.querySelectorAll(t.qc);
        },
        async Oe(e, t = 0) {
          await A.Ot(
            () => {
              var t = this.Ie(e);
              if (
                1 <= t.length &&
                Array.from(t).every(
                  (t) => t.querySelectorAll(e.rb).length >= b.V,
                )
              )
                return !0;
              return !1;
            },
            "Timeout: domande non caricate",
            3 * b.$,
            2 * b.D,
          );
        },
        De(n) {
          return (
            u.Rt.clear(),
            this.Ie(n).forEach((t, a) => {
              var r = t.querySelector(n.qh);
              if (r) {
                r = r.querySelector(n.qt);
                if (r) {
                  ((r = r.textContent.replace(/^\d+\.\s*/, "").trim()),
                    (t = t.querySelector(n.ac)));
                  if (t) {
                    let e = [];
                    (t.querySelectorAll(n.ao).forEach((t) => {
                      t = t.querySelector(n.at);
                      t && e.push(t.textContent.trim());
                    }),
                      e.length === b.V &&
                        u.Rt.set(a, {
                          Ne: r,
                          Fe: e.map((t) => ({ Me: t, ze: !1 })),
                        }));
                  }
                }
              }
            }),
            u.Rt.size
          );
        },
        async ke(t, e) {
          var a,
            r = this.Ie(t);
          let n = 0;
          for (a of r) {
            var i = a.querySelectorAll(t.rb);
            if (i[e]) {
              dispatchClick(i[e]);
              n++;
              await x(b.I);
            }
          }
          if (n < r.length)
            throw new Error(`Solo ${n}/${r.length} risposte selezionate`);
          return n;
        },
        async $e(t) {
          let e;
          await A.Ot(
            () => {
              e = document.querySelector(t.pb) || [...document.querySelectorAll("button")].find(
                (b) => (b.textContent || "").toLowerCase().includes((t.submit || "invia").toLowerCase())
              );
              return !!e;
            },
            "Timeout: pulsante Invia non trovato",
            b.G,
            b.D,
          );
          return e;
        },
        async Ue(t) {
          var btn = await this.$e(t);
          if (btn) dispatchClick(btn);
          await x(b.O);
        },
        async Ge(t) {
          try {
            return (
              await A.Ot(
                () =>
                  document.querySelector(t.ca) || document.querySelector(t.wa),
                "Timeout validazione",
                b.U,
                b.D,
              ),
              await x(b.O),
              !0
            );
          } catch {
            return !1;
          }
        },
        Be(a, r) {
          let n = 0,
            i = 0;
          return (
            this.Ie(a).forEach((t, e) => {
              e = u.Rt.get(e);
              if (!e) return;
              var ac = t.querySelector(a.ac);
              if (!ac) return;
              var options = ac.querySelectorAll(a.ao);
              if (!options || !options[r]) return;
              var opt = options[r];
              var isGreen = A.Ft(opt, a.scg) || !!opt.querySelector('[class*="bg-platform-green"], [class*="text-platform-green"], svg path[fill*="2FA33D"], svg path[fill*="green"]');
              var isRed = A.Ft(opt, a.scr) || !!opt.querySelector('[class*="bg-platform-red"], [class*="text-platform-red"], svg path[fill*="red"]');
              if (isGreen) {
                e.Fe[r].ze = !0;
                n++;
              } else if (isRed) {
                i++;
              }
            }),
            { Ke: n, Ye: i }
          );
        },
        async He(t) {
          await A.Ot(
            () => A.Nt(t.retry),
            "Pulsante Ripeti non trovato",
            b.G,
            b.D,
          );
          await x(b.O);
          try {
            await A.Dt(t.title, b.$);
          } catch (_) {}
          await this.Oe(t);
        },
        async Qe(t, e) {
          A.It(e);
          (await this.ke(t, e), await this.Ue(t), await this.Ge(t));
          var a = this.Be(t, e);
          return (e < b.X - 1 && (await this.He(t)), a);
        },
        qe(t, e, a, r, n, i) {
          var o = t + `-${e}-` + a;
          u.St.set(o, {
            Ve: r,
            Xe: t,
            je: e,
            We: a,
            ee: n,
            ae: i,
            Je: new Map(u.Rt),
          });
        },
        async Ze(t, e) {
          try {
            if (!t) return !1;
            var text = (t.textContent || "").toLowerCase();
            if (text.includes("test") || text.includes("quiz")) return !0;
            if (e?.title && text.includes(e.title.toLowerCase())) return !0;
            var hasBtn = [...t.querySelectorAll("button, a, div")].some(
              (el) => (el.textContent || "").trim().toLowerCase() === (e.startQuizText || "esegui").toLowerCase(),
            );
            if (hasBtn) return !0;
            return !1;
          } catch {
            return !1;
          }
        },
        async ta(t, e, a, r, n, i) {
          var { Jt: r, Zt: o, te: c } = r,
            l = n + " - " + i;
          u.Rt.clear();
          try {
            var quizRow = e || t;
            try { quizRow.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (_) {}
            await x(300);
            var started = await $t(quizRow, a);
            if (!started) {
              await Ft(quizRow);
              await x(1000);
              started = await $t(quizRow, a);
            }
            if (started) {
              await x(b.k);
              await this.Oe(a);
              if (0 === this.De(a)) throw new Error("Nessuna domanda trovata!");
              for (let t = 0; t < b.X; t++) await this.Qe(a, t);
              this.qe(r, o, c, l, n, i);
              return !0;
            }
            throw new Error("Pulsante Esegui non trovato per avviare il quiz");
          } catch (t) {
            return (N?.("ERR_QUIZ_AUTO", l + ": " + t.message), !1);
          }
        },
        ea() {
          let r = "";
          var t, e;
          for ([t, e] of [...u.St.entries()].sort((t, e) => {
            var [t, a, r] = t[0].split("-").map(Number),
              [e, n, i] = e[0].split("-").map(Number);
            return t !== e ? t - e : a !== n ? a - n : r - i;
          })) {
            var { Ve: a, Xe: n, je: i, Je: o } = e;
            ((r += `<div class="quiz-section"><div class="quiz-header"><div class="quiz-numero">${String(n + 1).padStart(2, "0")} - Cap ${i + 1}</div><div class="quiz-nome">${a}</div></div>`),
              [...o.entries()]
                .sort((t, e) => t[0] - e[0])
                .forEach(([t, e]) => {
                  ((r += `<div class="domanda"><div class="domanda-header"><div class="domanda-testo">${t + 1}. ${e.Ne}</div></div><div class="risposte">`),
                    e.Fe.forEach((t, e) => {
                      var e = A.It(e),
                        a = t.ze ? "corretta" : "sbagliata";
                      r += `<div class="risposta ${a}"><span class="risposta-lettera">${e}.</span><span>${t.Me}</span></div>`;
                    }),
                    (r += "</div></div>"));
                }),
              (r += "</div>"));
          }
          return r;
        },
        aa() {
          return [...u.St.entries()]
            .sort((t, e) => {
              var [t, a, r] = t[0].split("-").map(Number),
                [e, n, i] = e[0].split("-").map(Number);
              return t !== e ? t - e : a !== n ? a - n : r - i;
            })
            .map(([, t]) => ({
              gn: String(t.Xe + 1).padStart(2, "0") + " - Cap " + (t.je + 1),
              gt: t.Ve,
              gd: [...t.Je.values()].map((t) => ({
                dq: t.Ne,
                dr: t.Fe.map((t) => ({ rt: t.Me, rc: t.ze })),
              })),
            }));
        },
        ra(t, l, s, u) {
          return new Promise((e, a) => {
            let r;
            try {
              r = chrome.runtime.connect({ name: "build-paniere" });
            } catch (t) {
              return void a(t);
            }
            let n = [],
              i = 0,
              o = !1,
              c = (t) => {
                if (!o) {
                  o = !0;
                  try {
                    r.disconnect();
                  } catch (t) {}
                  t();
                }
              };
            (r.onMessage.addListener((t) => {
              t &&
                ("begin" === t.type
                  ? ((n = []), (i = t.pc))
                  : "chunk" === t.type
                    ? n.push(t.mb)
                    : "done" === t.type
                      ? c(() =>
                          e({
                            ok: !0,
                            Pe: n.join(""),
                            count: null != t.pc ? t.pc : i,
                          }),
                        )
                      : "error" === t.type &&
                        c(() => a(new Error(t.error || "build"))));
            }),
              r.onDisconnect.addListener(() => {
                o || ((o = !0), a(new Error("Errore di comunicazione")));
              }));
            try {
              r.postMessage({
                type: "BUILD_PANIERE",
                pg: t,
                pt: l,
                cc: s,
                gs: u,
              });
            } catch (t) {
              a(t);
            }
          });
        },
        async na(t) {
          var e = this.aa();
          if (0 !== e.length) {
            u.Et || (u.Et = C.Mt());
            var a = C.zt(),
              a = a ? a + " " + u.Et : u.Et,
              t =
                ((t.innerHTML = "📎 Creo il PDF..."),
                await this.ra(e, "Paniere Unipegaso Unlocker - " + a, u.Et, u._t));
            if (!t || !t.ok)
              throw new Error("Impossibile creare il PDF del paniere.");
            e = A.At(t.Pe, "application/pdf");
            A.Ct(e, a + " - paniere.pdf");
          }
        },
        async ia() {
          u.Et || (u.Et = C.Mt());
          var t,
            e,
            a = await xt(u.Et);
          u._t = a?.gs || "";
          if (a?.res) {
            t = "Paniere Unipegaso Unlocker - " + u.Et;
            e = this.ea();
            a = a.res
              .replace(/{{s*TITLEs*}}/g, t)
              .replace(/{{s*QUESTIONS_HTMLs*(|s*safes*)?}}/g, e);

            var opened = !1;
            try {
              var win = window.open("", "_blank");
              if (win) {
                win.document.write(a);
                win.document.close();
                win.focus();
                opened = !0;
              }
            } catch (_) {}

            if (!opened) {
              try {
                var blob = new Blob([a], { type: "text/html" });
                var url = URL.createObjectURL(blob);
                var link = document.createElement("a");
                link.href = url;
                link.target = "_blank";
                link.download = "Paniere_" + u.Et + ".html";
                document.body.appendChild(link);
                link.click();
                setTimeout(() => {
                  link.remove();
                  URL.revokeObjectURL(url);
                }, 5000);
                opened = !0;
              } catch (_) {}
            }

            y?.("✅ Paniere generato con successo!", "success");
          } else {
            y?.("❌ Errore: Template PDF non disponibile", "error");
          }
        },
        async Se(t, e, a, r, n) {
          var n = n.oa,
            {} = a,
            { ee: r, ae: i } = r,
            e =
              (t.scrollIntoView({ behavior: "smooth", S: "center" }),
              await this.ta(e, t, n, a, r, i));
          return (await x(b.M), e);
        },
        async ca(n) {
          var t = await Et?.();
          if (t && !0 === t.res) {
            t = await Pt();
            if (!t)
              throw new Error("Impossibile recuperare i selettori dal server");
            u.reset();
            try {
              var vid = document.querySelector("video");
              if (vid && !vid.paused) vid.pause();
            } catch (_) {}
            try {
              await r.Qt({
                qt: this.Se.bind(this),
                Vt: (t, e) => {
                  n.innerHTML = t + 1 + "/" + e;
                },
                Xt: (t, e, a, r) => {
                  n.innerHTML = `📄 ${t + 1}/${e} - Cap ${a + 1}/` + r;
                  y?.(`📝 Paniere: Analisi Capitolo ${a + 1}/${r}...`, "info");
                },
                jt: async (t, e) => this.Ze(t, e.oa),
                Wt: { oa: t },
              });
            } catch (err) {
              A.log("Scansione quiz interrotta: " + (err && err.message));
              console.error("[UnipegasoUnlocker] Errore in Qt:", err);
            }

            if (0 === u.St.size) {
              y?.("⚠️ Nessun quiz trovato o operazione interrotta.", "warning");
              n.innerHTML = this.Ee;
              throw new Error("Nessun quiz trovato");
            }

            y?.("📄 Generazione PDF paniere...", "info");
            await x(b.k);
            await this.ia();
            try {
              await this.na(n);
            } catch (err) {
              A.log("Export nativo PDF: " + err.message);
            }
            n.innerHTML = this.Ee;
          } else {
            A.log("Licenza paniere non valida.");
            n.parentNode?.removeChild(n);
          }
        },
        ce() {
          return n.ce({
            id: b.dt.ht,
            le: this.Ee,
            title:
              "Premendo si avvierà la creazione del PDF con tutte le risposte",
          });
        },
      };
    window.addEventListener("load", async function () {
      if (
        E() &&
        !(
          document.getElementById(b.dt.wt) ||
          document.getElementById(b.dt.vt) ||
          document.getElementById(b.dt.ht)
        )
      ) {
        await R();
        var e = n.ge(),
          [t, a, r] = await Promise.all([yt?.(), St?.(), Et?.()]);
        if (!0 === t?.res) {
          let t = i.ce();
          (t.addEventListener("click", () => {
            n.ye(t, [b.dt.ht, b.dt.vt], (t) => i.be(t), i.Ee);
          }),
            e.appendChild(t));
        }
        if (!0 === a?.res) {
          let t = o.ce();
          (t.addEventListener("click", () => {
            n.ye(t, [b.dt.ht, b.dt.wt], (t) => o.be(t), o.Ee);
          }),
            e.appendChild(t));
        }
        if (!0 === r?.res) {
          let t = c.ce();
          (t.addEventListener("click", () => {
            n.ye(t, [b.dt.wt, b.dt.vt], (t) => c.ca(t), c.Ee);
          }),
            e.appendChild(t));
        }
      }
    });
  })());

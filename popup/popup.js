// popup.js — Unipegaso Unlocker

document.addEventListener('DOMContentLoaded', async () => {

  document.getElementById('footer-version').textContent = `v${chrome.runtime.getManifest().version}`;

  const stored = await chrome.storage.local.get([
    'enabled', 'delay', 'skipOnGreen', 'U_L_S', 'lastError', 'lastWarning', 'lastInfo'
  ]);

  const toggle      = document.getElementById('toggle');
  const statusBar   = document.getElementById('status-bar');
  const statusText  = document.getElementById('status-text');
  const delaySlider = document.getElementById('delay-slider');
  const delayVal    = document.getElementById('delay-val');
  const licenseRow  = document.getElementById('license-row');
  const errorEl     = document.getElementById('errorArea');
  const warnEl      = document.getElementById('warningArea');
  const infoEl      = document.getElementById('infoArea');
  const btnSkip     = document.getElementById('btn-skip-on-green');
  const btnFull     = document.getElementById('btn-watch-full');

  const isEnabled = stored.enabled !== false;
  const delay     = stored.delay ?? 0;

  applyToggle(isEnabled);
  applyDelay(delay / 1000);
  applySkipOnGreen(stored.skipOnGreen !== false);

  // ── Controlla se siamo sulla pagina giusta ──
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab?.url?.includes('.click')) {
      statusBar.className = 'status-bar info';
      statusText.innerHTML = '👻 In questa pagina non ho nulla da fare!<br>▶️ Avvia una videolezione dalla sezione corsi.';
      return;
    }
    if (stored.lastError) {
      showAlert(errorEl, stored.lastError, 'error');
      chrome.storage.local.remove('lastError');
    } else if (stored.lastWarning) {
      showAlert(warnEl, stored.lastWarning, 'warning');
      chrome.storage.local.remove('lastWarning');
    }
    if (stored.lastInfo) {
      showInfo(stored.lastInfo);
      chrome.storage.local.remove('lastInfo');
    }
  });

  // ── Toggle ──
  toggle.addEventListener('change', async () => {
    await chrome.storage.local.set({ enabled: toggle.checked });
    applyToggle(toggle.checked);
  });

  // ── Delay slider ──
  delaySlider.addEventListener('input', () => applyDelay(parseFloat(delaySlider.value)));
  delaySlider.addEventListener('change', async () => {
    const val = parseFloat(delaySlider.value);
    applyDelay(val);
    await chrome.storage.local.set({ delay: val * 1000 });
  });

  // ── Modalità avanzamento lezioni ──
  btnSkip.addEventListener('click', async () => {
    await chrome.storage.local.set({ skipOnGreen: true });
    applySkipOnGreen(true);
  });
  btnFull.addEventListener('click', async () => {
    await chrome.storage.local.set({ skipOnGreen: false });
    applySkipOnGreen(false);
  });

  // ── Storage changes (aggiornamenti real-time) ──
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.enabled)               applyToggle(changes.enabled.newValue !== false);
    if (changes.skipOnGreen)           applySkipOnGreen(changes.skipOnGreen.newValue !== false);
    if (changes.lastError?.newValue)   showAlert(errorEl, changes.lastError.newValue, 'error');
    if (changes.lastWarning?.newValue) showAlert(warnEl,  changes.lastWarning.newValue, 'warning');
    if (changes.lastInfo?.newValue)    showInfo(changes.lastInfo.newValue);
  });

  // ── Helpers ──

  function applyToggle(val) {
    toggle.checked = val;
    if (statusBar.classList.contains('info')) return;
    statusBar.className   = val ? 'status-bar on' : 'status-bar off';
    statusText.textContent = val ? 'Attivo — scorrimento automatico' : 'Disattivato';
  }

  function applyDelay(sec) {
    delaySlider.value      = sec;
    delayVal.textContent   = `${sec}s`;
  }

  function applySkipOnGreen(val) {
    btnSkip.classList.toggle('active', val);
    btnFull.classList.toggle('active', !val);
  }

  function showInfo(message) {
    if (!infoEl || !message) return;
    infoEl.textContent   = `ℹ️ ${message}`;
    infoEl.style.display = 'block';
  }

  function showAlert(el, data, kind) {
    if (!el) return;
    const { code = '', message = '' } = data || {};
    if (!message && !code) return;
    console.log(`[UnipegasoUnlocker:${kind}]`, code, message);
    if (kind === 'error') {
      el.textContent = message ? `⚠️ ${message}` : "⚠️ Si è verificato un errore imprevisto durante l'elaborazione. Ricarica la pagina.";
    } else {
      el.textContent = message ? `⚠️ ${message}` : '⚠️ Alcuni contenuti potrebbero richiedere più tempo. Lo scorrimento continua normalmente.';
    }
    el.style.display = 'block';
  }
});

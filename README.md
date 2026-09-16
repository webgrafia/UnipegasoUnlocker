# 🎓 Unipegaso Unlocker

<p align="center">
  <img src="assets/icons/icon-128.png" alt="Unipegaso Unlocker Logo" width="96" height="96">
</p>

<p align="center">
  <strong>Estensione Chrome/Brave/Edge per automatizzare e velocizzare lo studio sulle piattaforme telematiche Multiversity (Pegaso, Mercatorum, San Raffaele).</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Manifest-V3-blue?style=flat-square" alt="Manifest V3">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License MIT">
  <img src="https://img.shields.io/badge/Platform-Pegaso%20%7C%20Mercatorum%20%7C%20San%20Raffaele-orange?style=flat-square" alt="Supported Platforms">
</p>

---

## ✨ Funzionalità Principali

### ⚡ Autoplay & Avanzamento Intelligente
- **Scorrimento sequenziale automatico**: passa da una videolezione all'altra senza interruzioni.
- **Supporto multi-modulo**: esplora e gestisce corsi strutturati su più moduli in modo autonomo.
- **Smart Skip Quiz**: durante la normale riproduzione salta automaticamente i test intermedi per non bloccare lo scorrimento.
- **Visualizzazione Obiettivi**: all'inizio di ogni capitolo visita e completa automaticamente la pagina iniziale "Obiettivi".
- **Due modalità di visione**:
  - *Avanzamento istantaneo* (non appena la barra/video raggiunge la soglia verde).
  - *Visione completa* (riproduzione fino al termine del video).
- **Delay personalizzabile**: imposta un tempo di attesa da 0 a 30 secondi tra una lezione e la successiva.

---

### 📝 Generatore Paniere Quiz
- **Scansione ed estrazione automatica**: analizza tutti i quiz del corso (tutti i moduli e capitoli) in sequenza.
- **Risoluzione e correzione**: identifica le risposte corrette e struttura il documento.
- **Generazione PDF / Stampa**: crea un documento stampabile completo di tutte le domande e risposte evidenziate con un layout professionale.

---

### 📥 Download Dispense
- **⬇️ Dispense singole**: scarica i singoli PDF delle dispense di ciascun capitolo/lezione, rinominandoli ordinatamente con sezione e titolo.
- **⬇️ Dispense unite**: raccoglie tutti i PDF del corso e li unisce in background in un unico file PDF complessivo tramite `pdf-lib`.

---

## 🚀 Installazione

L'estensione non richiede server esterni ed è pronta all'uso:

1. **Scarica o clona** questa repository:
   ```bash
   git clone https://github.com/webgrafia/UnipegasoUnlocker.git
   ```
2. Apri Google Chrome (o qualsiasi browser Chromium come Brave, Edge, Opera).
3. Vai all'indirizzo `chrome://extensions/`.
4. In alto a destra, attiva la modalità **"Modalità sviluppatore"** (Developer mode).
5. Clicca sul pulsante in alto a sinistra **"Carica estensione non pacchettizzata"** (Load unpacked).
6. Seleziona la cartella del progetto (`unipegaso/` o `unipegaso-unlocker/`).

---

## 📖 Come Utilizzarlo

1. Accedi alla piattaforma del tuo ateneo (es. `lms.pegaso.multiversity.click`).
2. Apri una qualsiasi videolezione del corso che intendi seguire.
3. Troverai i nuovi pulsanti di controllo direttamente in pagina:
   - **🗎 Paniere PDF**: avvia l'estrazione e creazione del documento con tutti i quiz del corso.
   - **⬇️ Dispense singole**: scarica i singoli PDF di ogni capitolo.
   - **⬇️ Dispense unite**: crea e scarica il PDF cumulativo con tutte le dispense del corso.
4. Cliccando sull'icona dell'estensione in alto a destra nella barra di Chrome (il popup) puoi:
   - Attivare o disattivare lo scorrimento automatico.
   - Modificare il delay tra le lezioni.
   - Scegliere la modalità di avanzamento (*Avanza subito* o *Fino alla fine*).

---

## 🛠️ Requisiti e Compatibilità

- **Browser**: Google Chrome, Brave, Microsoft Edge, Opera o qualsiasi browser basato su Chromium.
- **Piattaforme supportate**: `*.multiversity.click` (LMS Pegaso, Mercatorum, San Raffaele).
- **Manifest**: Versione 3 (Standard Google Chrome Extensions moderno).

---

## ⚖️ Disclaimer

Questo software è stato realizzato a scopo di studio e automazione personale. L'utente è l'unico responsabile del suo utilizzo in conformità con i termini di servizio della propria piattaforma accademica.

---

## 📄 Licenza

Distribuito sotto licenza [MIT](LICENSE).

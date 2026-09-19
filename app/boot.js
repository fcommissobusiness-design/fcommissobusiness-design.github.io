/* ============================================================
   AVVIO SULLE PAGINE STATICHE
   ------------------------------------------------------------
   Sulle pagine generate non gira l'applicazione: il contenuto è
   già nell'HTML e deve restare leggibile anche senza JavaScript.
   Qui prepariamo soltanto i dati per le isole interattive
   (la scelta guidata), senza toccare niente di quello che è già
   stato disegnato dal generatore.
   ============================================================ */
(function () {
  if (typeof window.applyCatalogMeta === 'function') window.applyCatalogMeta();
  if (typeof window.applySummaries === 'function') window.applySummaries();
})();

/* ============================================================
   CODICI EAN-13 (GTIN)
   ------------------------------------------------------------
   L'EAN è la chiave con cui lo stesso prodotto si riconosce fuori
   da Amazon. Senza, il confronto fra negozi diversi non esiste:
   resti legato a un solo venditore per sempre.

   DUE COSE IMPARATE RACCOGLIENDOLI, che vanno tenute a mente:

   1. amazon.it NON pubblica l'EAN in scheda. Su 16 prodotti
      controllati compariva una volta sola, e perché il venditore
      lo aveva infilato nel titolo. Gli ASIN servono a inchiodare
      QUALE variante è in gioco, non a ricavare il codice.

   2. La cifra di controllo NON protegge dallo scambio di prodotto.
      Durante la raccolta sono emersi codici con checksum
      perfettamente valido ma riferiti a un altro modello:
      8004399332225 è la De'Longhi EC695.M, non la EC685.BK.
      5054905244101 è il kit DeWalt con due batterie, non il corpo
      nudo DCD778N. Il checksum valida la FORMA, non l'IDENTITÀ:
      per quella serve la doppia fonte concordante.

   `status`: 'produttore' (dal sito del costruttore, il grado più
   alto), 'doppia-fonte' (due rivenditori concordanti).
   ============================================================ */

window.EANS = {

  /* --- ROBOT ASPIRAPOLVERE --- */
  'dreame-l10s-ultra': {
    ean: '6976233677033', status: 'doppia-fonte',
    source: 'Geizhals (mpn RLL32SE) + Icoza'
  },
  'ecovacs-n20-pro': {
    ean: '6970135032563', status: 'doppia-fonte',
    source: 'Geizhals + Icecat + Electromenager-Compare'
  },
  'roborock-s8-maxv': {
    ean: '6970995788440', status: 'produttore',
    source: 'Store Roborock Italia, sku IT-S8MaxVUltra-W',
    note: 'Il codice che si trova per primo in giro (6970995788464) è la versione NERA. Il nostro ASIN è la bianca. Usarlo avrebbe associato la variante sbagliata.'
  },
  'dreame-d10-plus': {
    ean: '6976233675879', status: 'doppia-fonte',
    source: 'Geizhals (mpn RLD32GD) + Techplaza'
  },
  'roborock-qrevo-s': {
    ean: '6970995789201', status: 'produttore',
    source: 'Store Roborock Italia, sku RRIT-QrevoS5-M2',
    note: 'Geizhals pubblica 6936905906434 per questo prodotto, ma quel codice è del Qrevo S ProX. Un comparatore che si fida di quel dato mette due modelli diversi nella stessa scheda.'
  },

  /* --- SEDIE ERGONOMICHE --- */
  'sihoo-m18': {
    ean: '0657631745734', status: 'doppia-fonte',
    source: 'Geizhals + UPCitemdb'
  },
  'songmics-obn': {
    ean: '6955880394425', status: 'produttore',
    alias: ['0194343014586'],
    source: 'Store SONGMICS, sku OBN37BK',
    note: 'Sotto la stessa inserzione convivono le revisioni V1 e V2. Il codice alternativo indicato come alias è quello legato alla V1: se il confronto fra negozi dovesse fallire su questo prodotto, è quello da provare.'
  },
  'diablo-v-basic': {
    ean: '5902560337242', status: 'produttore',
    source: 'Diablo Chairs + Geizhals + Domator24'
  },

  /* --- SEDIE SENZA EAN AFFIDABILE ---
     Sihoo Doro C300: quattro codici in conflitto, uno con prefisso GS1
       finlandese implausibile e uno riusato su un modello diverso.
     Hbada E3 Pro: gli unici codici pubblicati appartengono alla edizione
       2026, che ha un ASIN diverso dal nostro.
     Flexispot ErgoX Pro: l'unico codice trovato descrive la versione in rete
       con poggiapiedi, mentre il nostro ASIN è in spugna e senza.
     In tutti e tre i casi attribuire il codice sarebbe stata una deduzione,
     ed è esattamente il modo in cui nascono gli errori di matching. */

  /* --- UTENSILI ELETTRICI --- */
  'bosch-psb-1800': {
    ean: '3165140761673', status: 'produttore',
    source: 'Bosch (archivio) + Geizhals, abbinato al codice ordine 06039A3301',
    note: 'Il modello ha almeno dieci EAN per mercato e confezione. Questo è quello legato al codice ordine che compare nel titolo Amazon.'
  },
  'makita-dhp482z': {
    ean: '0088381699051', status: 'produttore',
    source: 'Makita UK (riga barcode della DHP482Z) + Rapid Online'
  },
  'einhell-te-cd': {
    ean: '4006825607345', status: 'produttore',
    source: 'Einhell, due domini ufficiali'
  },
  'bosch-gsb-18v-55': {
    ean: '4059952509396', status: 'doppia-fonte',
    source: 'Klium + Multitronic, variante 06019H5302',
    note: 'È la versione solo corpo in cartone. Le varianti in valigetta L-BOXX hanno EAN diversi.'
  },
  'dewalt-dcd778': {
    ean: '5035048668283', status: 'doppia-fonte',
    source: 'DVS Power Tools + Mensura',
    note: 'Attenzione: in giro circola 5054905244101 come EAN di questo prodotto. È sbagliato, appartiene al kit con due batterie e valigetta.'
  },
  'blackdecker-bdchd18': {
    ean: '5035048641125', status: 'doppia-fonte',
    source: 'Sanitino + SGear'
  },
  'makita-hr2470': {
    ean: '8014211396021', status: 'produttore',
    alias: ['0088381081658'],
    source: 'Titolo ufficiale su amazon.it + Balao',
    note: 'Ha due GTIN reali entrambi validi: il primo è il prefisso Makita Italia, il secondo quello corporate usato dai rivenditori europei.'
  },

  /* --- MACCHINE DA CAFFÈ --- */
  'delonghi-dedica-ec685': {
    ean: '8004399331181', status: 'doppia-fonte',
    source: 'Vieffetrade + Gruppo Iacomini + UPCitemdb',
    note: "Da non confondere con 8004399332225, che è la EC695.M."
  },
  'nespresso-vertuo-pop': {
    ean: '8004399024632', status: 'doppia-fonte',
    source: 'Vieffetrade + Expert.nl + Fnac'
  },
  'delonghi-magnifica-s': {
    ean: '8004399325050', status: 'doppia-fonte',
    source: 'E.Leclerc + UPCitemdb',
    note: 'Da non confondere con 8004399325036, che è la ECAM21.110.B.'
  },
  'philips-3200-lattego': {
    ean: '8720389004742', status: 'doppia-fonte',
    source: 'Icecat + But.fr + Trippodo'
  },
  'bialetti-gioia': {
    ean: '8001306008020', status: 'doppia-fonte',
    source: 'Icecat + Freeshop + Ollo'
  },
  'gaggia-classic-evo': {
    ean: '8720389026607', status: 'doppia-fonte',
    source: 'Sotel + Kaufland + Technikdirekt'
  },
  'delonghi-rivelia': {
    ean: '8004399026636', status: 'doppia-fonte',
    source: 'Euronics PT + Elettrovillage + IoElettrodomestici'
  }

  /* --- MATERASSI: nessun EAN, e non è una ricerca incompleta ---
     Marcapiuma e Baldiflex espongono i dati di variante in chiaro e il
     campo EAN è vuoto all'origine: identificano le misure con codici
     interni (PLUS160190FOR, MT0001147046) che NON sono GTIN e non vanno
     dichiarati come tali. Per questi prodotti `gtin13` resta assente e
     nei dati strutturati usiamo `mpn`. Vedi data/products.js. */
};

/* codici interni del produttore, per i prodotti che un EAN non ce l'hanno */
window.MPNS = {
  'marcapiuma-silver-22': 'PLUS160190FOR',
  'baldiflex-zaffiro': 'MT0001147046'
};

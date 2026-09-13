/* ============================================================
   CATEGORIE + QUESTIONARIO (v4)
   ------------------------------------------------------------
   Ogni opzione di risposta e' anche una pagina SEO (slug).
   must(p)  -> filtro DURO, esclude il prodotto
   score(p) -> punti SOFT, sposta la classifica
   Domande precise e contestuali per categoria, risposte chiuse
   a piu' opzioni. Nessuna AI: regole scritte a mano.
   NB: gli attributi non dichiarati arrivano come NaN, e ogni
   confronto con NaN e' falso: un dato assente non premia mai.
   ============================================================ */
window.VERTICALS = [

/* ============================ ROBOT ASPIRAPOLVERE ============================ */
{
  id: 'robot-aspirapolvere', name: 'Robot aspirapolvere', short: 'Robot aspirapolvere', singular: 'robot aspirapolvere',
  seasonWhy: 'Fra novembre e dicembre i robot aspirapolvere sono tra i regali più cercati e i marchi principali fanno i ribassi più forti dell\'anno. Se puoi aspettare il Black Friday, di solito conviene.',
  keywords: 'robot aspirapolvere,robot,aspirapolvere,roomba,roborock,dreame,ecovacs,lavapavimenti,aspira,pulizia pavimenti,peli,pavimento',
  dept: 'Casa',
  season: { peak: [11, 12], warm: [1, 10], label: 'Picco su Black Friday e Natale', curve: 'regali' },
  commission: 0.03,
  claim: 'Metratura, animali, tappeti, lavaggio, stazione: sei variabili decidono quale è giusto. Te le chiediamo in un minuto.',
  why: 'È la categoria con la decisione più complessa del catalogo. Comprare quello sbagliato costa 300 euro e un anno di fastidio.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior robot aspirapolvere [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Migliori robot aspirapolvere sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'b', label: 'Fino a 350 €', slug: 'sotto-350-euro', seoTitle: 'Migliori robot aspirapolvere sotto 350 euro', reason: 'budget fino a 350 €', must: p => p.price <= 350 },
        { id: 'c', label: 'Fino a 650 €', slug: 'sotto-650-euro', seoTitle: 'Migliori robot aspirapolvere sotto 650 euro', reason: 'budget fino a 650 €', must: p => p.price <= 650 },
        { id: 'd', label: 'Nessun limite, voglio il migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori robot aspirapolvere in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'superficie', question: 'Quanto è grande la zona da pulire?', seoIntent: 'miglior robot aspirapolvere per case grandi',
      options: [
        { id: 'p', label: 'Piccola, fino a 60 m²', slug: 'per-case-piccole', seoTitle: 'Migliori robot aspirapolvere per appartamenti piccoli', reason: 'casa fino a 60 m²', score: p => (p.attrs.height <= 9 ? 2 : 0) },
        { id: 'm', label: 'Media, 60-110 m²', slug: null, reason: 'casa 60-110 m²', score: p => (p.attrs.battery >= 120 ? 1 : 0) },
        { id: 'g', label: 'Grande, oltre 110 m²', slug: 'per-case-grandi', seoTitle: 'Migliori robot aspirapolvere per case grandi', reason: 'casa oltre 110 m²', score: p => (p.attrs.battery >= 170 ? 3 : p.attrs.battery >= 140 ? 1 : p.attrs.battery < 140 ? -2 : 0) + (p.attrs.dock === 'full' || p.attrs.dock === 'dust' ? 2 : 0) } ] },
    { id: 'piani', question: 'La casa è su più piani?', seoIntent: 'robot aspirapolvere multipiano',
      options: [
        { id: 'si', label: 'Sì, più piani', slug: 'multipiano', seoTitle: 'Migliori robot aspirapolvere per case su più piani', reason: 'casa su più piani', score: p => (p.attrs.lidar ? 2 : -2) },
        { id: 'no', label: 'No, un piano solo', slug: null, reason: 'un piano solo' } ] },
    { id: 'animali', question: 'Hai animali in casa?', seoIntent: 'miglior robot aspirapolvere per peli di cane e gatto',
      options: [
        { id: 'si', label: 'Sì, cane o gatto', slug: 'per-animali', seoTitle: 'Migliori robot aspirapolvere per peli di animali', reason: 'animali in casa', score: p => (p.attrs.petBrush ? 3 : -2) + (p.attrs.pa >= 4000 ? 2 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'nessun animale' } ] },
    { id: 'tappeti', question: 'Ci sono tappeti?', seoIntent: 'miglior robot aspirapolvere per tappeti',
      options: [
        { id: 'molti', label: 'Sì, parecchi', slug: 'per-tappeti', seoTitle: 'Migliori robot aspirapolvere per tappeti', reason: 'molti tappeti', score: p => (p.attrs.carpetLift ? 3 : -1) + (p.attrs.pa >= 5000 ? 2 : 0) },
        { id: 'pochi', label: 'Qualcuno', slug: null, reason: 'qualche tappeto', score: p => (p.attrs.pa >= 4000 ? 1 : 0) },
        { id: 'no', label: 'No, solo pavimento', slug: null, reason: 'nessun tappeto' } ] },
    { id: 'lavaggio', question: 'Ti serve che lavi anche il pavimento?', seoIntent: 'miglior robot lavapavimenti',
      options: [
        { id: 'essenziale', label: 'Sì, è la cosa principale', slug: 'lavapavimenti', seoTitle: 'Migliori robot lavapavimenti', reason: 'lavaggio indispensabile', must: p => p.attrs.mop === 'rotating' || p.attrs.mop === 'vibrating', score: p => (p.attrs.mop === 'rotating' ? 4 : 1) },
        { id: 'utile', label: 'Utile, ma viene dopo', slug: null, reason: 'lavaggio secondario', score: p => (p.attrs.mop === 'rotating' ? 2 : p.attrs.mop === 'vibrating' ? 1 : 0) },
        { id: 'no', label: 'No, basta che aspiri bene', slug: 'solo-aspirapolvere', seoTitle: 'Migliori robot aspirapolvere senza lavaggio', reason: 'solo aspirazione', score: p => (p.attrs.pa >= 4000 ? 2 : 0) } ] },
    { id: 'stazione', question: 'Quanto vuoi occupartene?', seoIntent: 'miglior robot aspirapolvere con stazione autosvuotante',
      options: [
        { id: 'si', label: 'Il meno possibile: voglio la stazione che svuota da sola', slug: 'con-stazione-autosvuotante', seoTitle: 'Migliori robot aspirapolvere con stazione autosvuotante', reason: 'stazione autosvuotante', must: p => p.attrs.dock === 'full' || p.attrs.dock === 'dust', score: p => (p.attrs.dock === 'full' ? 3 : 2) },
        { id: 'no', label: 'Svuotarlo ogni tanto non mi pesa', slug: null, reason: 'svuotamento manuale ok', score: p => (p.attrs.bin >= 450 ? 1 : 0) } ] }
  ]
},

/* ============================ SEDIE ERGONOMICHE ============================ */
{
  id: 'sedie-ergonomiche', name: 'Sedie ergonomiche', short: 'Sedie da ufficio', singular: 'sedia da ufficio',
  seasonWhy: 'A settembre si torna alla scrivania e a gennaio si riparte con i buoni propositi: sono i due momenti in cui la gente cambia sedia, e i produttori lo sanno. Le offerte migliori arrivano proprio ora.',
  keywords: 'sedia,sedie,sedia da ufficio,sedia ergonomica,sedia gaming,poltrona,scrivania,mal di schiena,lombare,ufficio,smart working,seduta',
  dept: 'Ufficio',
  season: { peak: [9, 1], warm: [10, 11], label: 'Picco a settembre col rientro e a gennaio', curve: 'rientro' },
  commission: 0.05,
  claim: 'La sedia giusta dipende dal tuo corpo e da quante ore ci passi, non dalle recensioni degli altri.',
  why: 'La decisione dipende da altezza, peso, ore seduto e uso. Perfetta per un motore di raccomandazione.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'migliore sedia ergonomica [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 150 €', slug: 'sotto-150-euro', seoTitle: 'Migliori sedie ergonomiche sotto 150 euro', reason: 'budget fino a 150 €', must: p => p.price <= 150 },
        { id: 'b', label: 'Fino a 250 €', slug: 'sotto-250-euro', seoTitle: 'Migliori sedie ergonomiche sotto 250 euro', reason: 'budget fino a 250 €', must: p => p.price <= 250 },
        { id: 'c', label: 'Fino a 400 €', slug: 'sotto-400-euro', seoTitle: 'Migliori sedie ergonomiche sotto 400 euro', reason: 'budget fino a 400 €', must: p => p.price <= 400 },
        { id: 'd', label: 'Nessun limite, voglio la migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori sedie ergonomiche in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'uso', question: 'Dove la userai soprattutto?', seoIntent: 'migliore sedia per smart working / gaming',
      options: [
        { id: 'casa', label: 'A casa, in smart working', slug: 'smart-working', seoTitle: 'Migliori sedie ergonomiche per smart working', reason: 'smart working', score: p => (p.attrs.material === 'mesh' ? 2 : 0) + (p.attrs.lumbar !== 'fixed' ? 1 : -1) },
        { id: 'ufficio', label: 'In ufficio', slug: null, reason: 'uso in ufficio', score: p => (p.attrs.lumbar === 'dynamic' ? 2 : p.attrs.lumbar === 'adj' ? 1 : -1) + (p.attrs.material === 'pu' ? -1 : 0) },
        { id: 'gaming', label: 'Per giocare', slug: 'gaming', seoTitle: 'Migliori sedie gaming ergonomiche', reason: 'uso gaming', score: p => (p.attrs.recline >= 150 ? 3 : 0) + (p.attrs.headrest ? 1 : 0) + (p.attrs.footrest ? 1 : 0) } ] },
    { id: 'ore', question: 'Quante ore al giorno ci passi seduto?', seoIntent: 'migliore sedia per stare seduti 8 ore',
      options: [
        { id: 'poche', label: 'Meno di 4', slug: null, reason: 'meno di 4 ore al giorno', score: p => (p.price <= 200 ? 2 : 0) },
        { id: 'medie', label: 'Tra 4 e 8', slug: null, reason: '4-8 ore al giorno', score: p => (p.attrs.lumbar !== 'fixed' ? 2 : -1) },
        { id: 'tante', label: 'Più di 8', slug: 'otto-ore', seoTitle: 'Migliori sedie ergonomiche per stare seduti 8 ore', reason: 'oltre 8 ore al giorno', score: p => (p.attrs.lumbar === 'dynamic' ? 4 : p.attrs.lumbar === 'adj' ? 2 : -3) + (p.attrs.material === 'mesh' ? 1 : 0) } ] },
    { id: 'schiena', question: 'Hai problemi alla schiena?', seoIntent: 'migliore sedia ufficio per mal di schiena',
      options: [
        { id: 'si', label: 'Sì, soprattutto lombari', slug: 'mal-di-schiena', seoTitle: 'Migliori sedie ergonomiche per mal di schiena', reason: 'mal di schiena lombare', must: p => p.attrs.lumbar !== 'fixed', score: p => (p.attrs.lumbar === 'dynamic' ? 4 : 2) },
        { id: 'no', label: 'No', slug: null, reason: 'nessun problema di schiena' } ] },
    { id: 'corporatura', question: 'Quanto sei alto?', seoIntent: 'migliore sedia ufficio per persone alte',
      options: [
        { id: 'basso', label: 'Meno di 1,65 m', slug: null, reason: 'altezza sotto 1,65 m', score: p => (p.attrs.hMin <= 160 ? 2 : p.attrs.hMin > 160 ? -1 : 0) },
        { id: 'medio', label: 'Tra 1,65 e 1,80 m', slug: null, reason: 'altezza 1,65-1,80 m' },
        { id: 'altino', label: 'Tra 1,80 e 1,90 m', slug: 'per-persone-alte', seoTitle: 'Migliori sedie ergonomiche per persone alte', reason: 'altezza 1,80-1,90 m', score: p => (p.attrs.hMax >= 190 ? 2 : p.attrs.hMax < 185 ? -2 : 0) + (p.attrs.headrest ? 1 : 0) },
        { id: 'alto', label: 'Oltre 1,90 m', slug: null, reason: 'altezza oltre 1,90 m', must: p => !(p.attrs.hMax < 190), score: p => (p.attrs.hMax >= 195 ? 3 : 0) + (p.attrs.headrest ? 1 : 0) } ] },
    { id: 'peso', question: 'Quanto pesi?', seoIntent: 'migliore sedia ufficio portata elevata',
      options: [
        { id: 'a', label: 'Meno di 80 kg', slug: null, reason: 'sotto 80 kg' },
        { id: 'b', label: 'Tra 80 e 110 kg', slug: null, reason: '80-110 kg', must: p => !(p.attrs.maxWeight < 130) },
        { id: 'c', label: 'Oltre 110 kg', slug: 'portata-elevata', seoTitle: 'Migliori sedie ergonomiche con portata elevata', reason: 'oltre 110 kg', must: p => p.attrs.maxWeight >= 150, score: p => (p.attrs.maxWeight >= 180 ? 3 : 0) } ] },
    { id: 'caldo', question: 'Sudi facilmente o la stanza d\'estate è calda?', seoIntent: 'sedia ufficio traspirante in rete',
      options: [
        { id: 'si', label: 'Sì, voglio una seduta che respiri', slug: 'in-rete-traspirante', seoTitle: 'Migliori sedie ergonomiche in rete traspirante', reason: 'seduta traspirante', score: p => (p.attrs.material === 'mesh' ? 3 : p.attrs.material === 'pu' ? -3 : 0) },
        { id: 'no', label: 'No, non è un problema', slug: null, reason: 'traspirazione non prioritaria' } ] },
    { id: 'extra', question: 'Cosa ti interessa di più, oltre alla seduta?', seoIntent: 'sedia ergonomica con poggiatesta / poggiapiedi',
      options: [
        { id: 'testa', label: 'Il poggiatesta', slug: 'con-poggiatesta', seoTitle: 'Migliori sedie ergonomiche con poggiatesta', reason: 'poggiatesta indispensabile', must: p => p.attrs.headrest === true },
        { id: 'piedi', label: 'Un poggiapiedi per le pause', slug: 'con-poggiapiedi', seoTitle: 'Migliori sedie ergonomiche con poggiapiedi', reason: 'poggiapiedi', must: p => p.attrs.footrest === true },
        { id: 'braccia', label: 'Braccioli molto regolabili', slug: 'braccioli-regolabili', seoTitle: 'Migliori sedie ergonomiche con braccioli regolabili', reason: 'braccioli regolabili', score: p => (p.attrs.armrests >= 4 ? 3 : p.attrs.armrests >= 3 ? 1 : -2) },
        { id: 'niente', label: 'Niente in particolare', slug: null, reason: 'nessun accessorio richiesto' } ] }
  ]
},

/* ============================ MATERASSI ============================ */
{
  id: 'materassi', name: 'Materassi', short: 'Materassi', singular: 'materasso',
  seasonWhy: 'A gennaio ci sono i saldi e a novembre il Black Friday: i materassi hanno margini alti e in quei due momenti gli sconti sono reali, non di facciata. Fuori da lì i prezzi restano fermi.',
  keywords: 'materasso,materassi,memory,molle,lattice,letto,dormire,schiena,matrimoniale,singolo',
  dept: 'Camera',
  season: { peak: [1, 11], warm: [7], label: 'Picco a gennaio coi saldi e a novembre', curve: 'saldi' },
  commission: 0.05,
  claim: 'Peso, posizione in cui dormi e temperatura. Il resto è marketing.',
  why: 'Ticket alto e la scelta peggiore da fare leggendo una classifica generica: dipende da chi ci dorme.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo per un matrimoniale?', seoIntent: 'miglior materasso matrimoniale [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Migliori materassi sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'b', label: 'Fino a 350 €', slug: 'sotto-350-euro', seoTitle: 'Migliori materassi sotto 350 euro', reason: 'budget fino a 350 €', must: p => p.price <= 350 },
        { id: 'c', label: 'Fino a 600 €', slug: 'sotto-600-euro', seoTitle: 'Migliori materassi sotto 600 euro', reason: 'budget fino a 600 €', must: p => p.price <= 600 },
        { id: 'd', label: 'Nessun limite', slug: 'fascia-alta', seoTitle: 'Migliori materassi di fascia alta', reason: 'nessun limite di budget' } ] },
    { id: 'posizione', question: 'Come dormi di solito?', seoIntent: 'miglior materasso per chi dorme di fianco',
      options: [
        { id: 'fianco', label: 'Di fianco', slug: 'per-chi-dorme-di-fianco', seoTitle: 'Migliori materassi per chi dorme di fianco', reason: 'dormi di fianco', score: p => (p.attrs.firmness <= 6 ? 3 : p.attrs.firmness >= 8 ? -3 : 0) },
        { id: 'schiena', label: 'Sulla schiena', slug: 'per-chi-dorme-supino', seoTitle: 'Migliori materassi per chi dorme supino', reason: 'dormi supino', score: p => (p.attrs.firmness >= 6 && p.attrs.firmness <= 8 ? 3 : -1) },
        { id: 'pancia', label: 'A pancia in giù', slug: null, reason: 'dormi prono', score: p => (p.attrs.firmness >= 7 ? 3 : -3) },
        { id: 'varia', label: 'Cambio spesso posizione', slug: null, reason: 'posizione variabile', score: p => (p.attrs.type === 'ibrido' || p.attrs.type === 'lattice' ? 2 : 0) } ] },
    { id: 'rigidita', question: 'Come lo preferisci?', seoIntent: 'materasso morbido / rigido',
      options: [
        { id: 'morbido', label: 'Morbido e accogliente', slug: 'morbido', seoTitle: 'Migliori materassi morbidi', reason: 'preferenza morbido', score: p => (p.attrs.firmness <= 5 ? 3 : p.attrs.firmness >= 7 ? -3 : 0) },
        { id: 'medio', label: 'Una via di mezzo', slug: null, reason: 'preferenza media', score: p => (p.attrs.firmness >= 5 && p.attrs.firmness <= 7 ? 2 : -1) },
        { id: 'rigido', label: 'Rigido e sostenuto', slug: 'rigido', seoTitle: 'Migliori materassi rigidi', reason: 'preferenza rigido', score: p => (p.attrs.firmness >= 7 ? 3 : p.attrs.firmness <= 5 ? -3 : 0) },
        { id: 'boh', label: 'Non saprei', slug: null, reason: 'nessuna preferenza di rigidità' } ] },
    { id: 'peso', question: 'Quanto pesa chi ci dorme di più?', seoIntent: 'miglior materasso per corporatura robusta',
      options: [
        { id: 'a', label: 'Meno di 70 kg', slug: null, reason: 'sotto 70 kg', score: p => (p.attrs.firmness <= 6 ? 2 : -1) },
        { id: 'b', label: 'Tra 70 e 95 kg', slug: null, reason: '70-95 kg' },
        { id: 'c', label: 'Oltre 95 kg', slug: 'corporatura-robusta', seoTitle: 'Migliori materassi per corporature robuste', reason: 'oltre 95 kg', must: p => !(p.attrs.maxKg < 110), score: p => (p.attrs.firmness >= 7 ? 2 : 0) + (p.attrs.type === 'ibrido' || p.attrs.type === 'molle' ? 2 : 0) } ] },
    { id: 'caldo', question: 'Ti capita di svegliarti sudato?', seoIntent: 'miglior materasso fresco',
      options: [
        { id: 'si', label: 'Sì, soffro il caldo a letto', slug: 'materasso-fresco', seoTitle: 'Migliori materassi freschi per chi soffre il caldo', reason: 'soffri il caldo di notte', score: p => (p.attrs.cooling >= 8 ? 4 : p.attrs.cooling >= 6 ? 1 : p.attrs.cooling < 6 ? -3 : 0) + (p.attrs.type === 'molle' || p.attrs.type === 'lattice' ? 1 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'nessun problema di calore' } ] },
    { id: 'coppia', question: 'Dormite in due?', seoIntent: 'miglior materasso per coppie',
      options: [
        { id: 'si', label: 'Sì', slug: 'per-coppie', seoTitle: 'Migliori materassi per coppie', reason: 'letto condiviso', score: p => (p.attrs.motion >= 8 ? 3 : p.attrs.motion < 7 ? -2 : 0) + (p.attrs.edge >= 7 ? 1 : 0) },
        { id: 'no', label: 'No, da solo', slug: null, reason: 'dormi da solo' } ] },
    { id: 'schiena', question: 'Hai problemi di schiena?', seoIntent: 'miglior materasso per mal di schiena',
      options: [
        { id: 'si', label: 'Sì', slug: 'mal-di-schiena', seoTitle: 'Migliori materassi per il mal di schiena', reason: 'mal di schiena', score: p => (p.attrs.type === 'ibrido' ? 3 : 0) + (p.attrs.firmness >= 6 && p.attrs.firmness <= 8 ? 2 : -2) },
        { id: 'no', label: 'No', slug: null, reason: 'nessun problema di schiena' } ] },
    { id: 'prova', question: 'Vuoi poterlo provare a casa e restituirlo?', seoIntent: 'materasso con prova gratuita',
      options: [
        { id: 'si', label: 'Sì, è importante', slug: 'con-prova-gratuita', seoTitle: 'Migliori materassi con periodo di prova', reason: 'periodo di prova', must: p => p.attrs.trial > 0, score: p => (p.attrs.trial >= 100 ? 3 : 1) },
        { id: 'no', label: 'Non è necessario', slug: null, reason: 'prova non necessaria' } ] }
  ]
},

/* ============================ UTENSILI ELETTRICI ============================ */
{
  id: 'utensili-elettrici', name: 'Trapani e avvitatori', short: 'Utensili elettrici', singular: 'trapano',
  seasonWhy: 'Tra marzo e maggio si riparte con i lavori in casa e in giardino, e a Natale trapano e avvitatore sono regali classici: nei due periodi i kit con batterie incluse scendono di più.',
  keywords: 'trapano,avvitatore,trapani,tassellatore,bosch,makita,dewalt,bricolage,fai da te,forare,muro,cemento,impulsi',
  dept: 'Fai da te',
  season: { peak: [3, 4, 5], warm: [11, 12, 9], label: 'Picco in primavera, secondo picco a Natale', curve: 'primavera' },
  commission: 0.05,
  claim: 'Il trapano giusto dipende da cosa devi forare e da quali batterie hai già, non da quanti Nm ha.',
  why: 'Commissione al 5%, ecosistema SEO enorme e una domanda che il compratore non sa formulare da solo.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior trapano avvitatore [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 90 €', slug: 'sotto-100-euro', seoTitle: 'Migliori trapani avvitatori sotto 100 euro', reason: 'budget fino a 90 €', must: p => p.price <= 90 },
        { id: 'b', label: 'Fino a 150 €', slug: 'sotto-150-euro', seoTitle: 'Migliori trapani avvitatori sotto 150 euro', reason: 'budget fino a 150 €', must: p => p.price <= 150 },
        { id: 'c', label: 'Fino a 250 €', slug: null, reason: 'budget fino a 250 €', must: p => p.price <= 250 },
        { id: 'd', label: 'Nessun limite', slug: 'professionali', seoTitle: 'Migliori trapani professionali', reason: 'nessun limite di budget' } ] },
    { id: 'uso', question: 'Cosa devi fare, soprattutto?', seoIntent: 'miglior trapano per [uso]',
      options: [
        { id: 'mobili', label: 'Montare mobili e avvitare', slug: 'per-montare-mobili', seoTitle: 'Migliori avvitatori per montare mobili', reason: 'montaggio mobili', score: p => (p.attrs.weight <= 1.4 ? 3 : p.attrs.weight > 1.4 ? -1 : 0) + (p.attrs.sds ? -6 : 0) + (p.attrs.impact ? 2 : 0) },
        { id: 'casa', label: 'Fai da te in casa, forare muri normali', slug: 'fai-da-te-casa', seoTitle: 'Migliori trapani per il fai da te in casa', reason: 'fai da te domestico', score: p => (p.attrs.percussion ? 2 : -3) + (p.attrs.sds ? -3 : 0) + (p.attrs.impact ? -3 : 0) },
        { id: 'cemento', label: 'Forare cemento armato o pietra', slug: 'per-cemento-armato', seoTitle: 'Migliori trapani per cemento armato', reason: 'cemento armato', must: p => p.attrs.percussion === true || p.attrs.sds === true, score: p => (p.attrs.sds ? 6 : 0) + (p.attrs.impact ? -6 : 0) },
        { id: 'pro', label: 'Uso professionale, tutti i giorni', slug: null, reason: 'uso professionale', score: p => (p.attrs.brushless ? 4 : -2) + (p.attrs.torque >= 55 ? 2 : 0) } ] },
    { id: 'frequenza', question: 'Quanto lo useresti?', seoIntent: 'trapano per uso occasionale',
      options: [
        { id: 'raro', label: 'Poche volte all\'anno', slug: null, reason: 'uso occasionale', score: p => (p.price <= 100 ? 3 : -2) },
        { id: 'medio', label: 'Qualche volta al mese', slug: null, reason: 'uso regolare' },
        { id: 'spesso', label: 'Tutte le settimane', slug: null, reason: 'uso frequente', score: p => (p.attrs.brushless ? 3 : -1) } ] },
    { id: 'alimentazione', question: 'A batteria o a filo?', seoIntent: 'trapano a batteria o a filo',
      options: [
        { id: 'batteria', label: 'A batteria, voglio libertà di movimento', slug: null, reason: 'a batteria', must: p => p.attrs.volts > 0 },
        { id: 'filo', label: 'A filo va bene, lo uso vicino a una presa', slug: 'a-filo', seoTitle: 'Migliori trapani a filo', reason: 'a filo accettato', score: p => (p.attrs.volts === 0 ? 2 : 0) },
        { id: 'indiff', label: 'Indifferente', slug: null, reason: 'alimentazione indifferente' } ] },
    { id: 'batteria', question: 'Hai già batterie di qualche marca?', seoIntent: 'trapano solo corpo compatibile',
      options: [
        { id: 'zero', label: 'No, parto da zero', slug: 'con-batteria-inclusa', seoTitle: 'Migliori trapani con batteria inclusa', reason: 'parti da zero', must: p => p.attrs.batteryIncl === true || p.attrs.volts === 0 },
        { id: 'makita', label: 'Sì, Makita', slug: null, reason: 'hai già batterie Makita', score: p => (String(p.attrs.eco).indexOf('Makita') === 0 ? 5 : 0) },
        { id: 'bosch', label: 'Sì, Bosch', slug: null, reason: 'hai già batterie Bosch', score: p => (String(p.attrs.eco).indexOf('Bosch') === 0 ? 5 : 0) },
        { id: 'dewalt', label: 'Sì, DeWalt', slug: null, reason: 'hai già batterie DeWalt', score: p => (String(p.attrs.eco).indexOf('DeWalt') === 0 ? 5 : 0) },
        { id: 'altro', label: 'Altra marca o indifferente', slug: null, reason: 'ecosistema indifferente' } ] },
    { id: 'peso', question: 'Quanto conta la leggerezza?', seoIntent: 'miglior trapano leggero e compatto',
      options: [
        { id: 'molto', label: 'Molto, lavoro anche sopra la testa', slug: 'leggeri-e-compatti', seoTitle: 'Migliori trapani leggeri e compatti', reason: 'leggerezza importante', score: p => (p.attrs.weight <= 1.2 ? 4 : p.attrs.weight <= 1.5 ? 1 : p.attrs.weight > 1.5 ? -4 : 0) },
        { id: 'poco', label: 'Poco, preferisco la potenza', slug: null, reason: 'potenza sopra il peso', score: p => (p.attrs.torque >= 60 || p.attrs.sds ? 3 : 0) } ] }
  ]
},

/* ============================ MACCHINE DA CAFFÈ ============================ */
{
  id: 'macchine-caffe', name: 'Macchine da caffè', short: 'Macchine caffè', singular: 'macchina da caffè',
  seasonWhy: 'Novembre e dicembre concentrano metà delle vendite dell\'anno: la macchina da caffè è uno dei regali più comuni e i marchi spingono forte con gli sconti. Se non hai fretta, aspetta il Black Friday.',
  keywords: 'macchina da caffè,macchina caffè,caffè,espresso,capsule,cialde,nespresso,delonghi,cappuccino,automatica,macinacaffè,grani,lavazza',
  dept: 'Cucina',
  season: { peak: [11, 12], warm: [1, 10], label: 'Fortemente regalo: novembre e dicembre', curve: 'regali' },
  commission: 0.03,
  claim: 'Quanto caffè bevete e quanto tempo volete dedicargli. Da lì scende tutto il resto.',
  why: 'Domanda enorme, decisione confusa (capsule, grani, manuale) e un costo per tazza che nessuno calcola prima.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'migliore macchina caffè [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 120 €', slug: 'sotto-120-euro', seoTitle: 'Migliori macchine da caffè sotto 120 euro', reason: 'budget fino a 120 €', must: p => p.price <= 120 },
        { id: 'b', label: 'Fino a 250 €', slug: 'sotto-250-euro', seoTitle: 'Migliori macchine da caffè sotto 250 euro', reason: 'budget fino a 250 €', must: p => p.price <= 250 },
        { id: 'c', label: 'Fino a 450 €', slug: 'sotto-450-euro', seoTitle: 'Migliori macchine da caffè sotto 450 euro', reason: 'budget fino a 450 €', must: p => p.price <= 450 },
        { id: 'd', label: 'Nessun limite', slug: 'fascia-alta', seoTitle: 'Migliori macchine da caffè di fascia alta', reason: 'nessun limite di budget' } ] },
    { id: 'quantita', question: 'Quanti caffè al giorno si bevono in casa?', seoIntent: 'migliore macchina caffè per famiglie',
      options: [
        { id: 'pochi', label: 'Uno o due', slug: null, reason: '1-2 caffè al giorno', score: p => (p.attrs.type === 'capsule' ? 3 : 0) },
        { id: 'medi', label: 'Da tre a cinque', slug: null, reason: '3-5 caffè al giorno', score: p => (p.attrs.costPerCup <= 0.20 ? 2 : p.attrs.costPerCup > 0.20 ? -1 : 0) },
        { id: 'tanti', label: 'Sei o più', slug: 'per-famiglie', seoTitle: 'Migliori macchine da caffè per famiglie numerose', reason: '6 o più caffè al giorno', score: p => (p.attrs.costPerCup <= 0.16 ? 4 : p.attrs.costPerCup > 0.16 ? -4 : 0) + (p.attrs.tank >= 1.4 ? 2 : p.attrs.tank < 1.4 ? -1 : 0) } ] },
    { id: 'latte', question: 'Cappuccino e latte macchiato?', seoIntent: 'migliore macchina caffè con cappuccinatore',
      options: [
        { id: 'auto', label: 'Sì, e li voglio con un tasto', slug: 'con-cappuccinatore', seoTitle: 'Migliori macchine da caffè con cappuccinatore automatico', reason: 'cappuccino automatico', must: p => p.attrs.milk === 'auto' },
        { id: 'manuale', label: 'Sì, ma li monto io', slug: null, reason: 'monti il latte a mano', score: p => (p.attrs.milk !== 'none' ? 2 : -3) },
        { id: 'no', label: 'No, solo espresso', slug: 'solo-espresso', seoTitle: 'Migliori macchine da caffè per solo espresso', reason: 'solo espresso', score: p => (p.attrs.milk === 'auto' ? -2 : 1) } ] },
    { id: 'chicchi', question: 'Che caffè vuoi usare?', seoIntent: 'migliore macchina caffè in grani / capsule',
      options: [
        { id: 'grani', label: 'In grani, macinato al momento', slug: 'macinacaffe-integrato', seoTitle: 'Migliori macchine da caffè in grani con macinacaffè', reason: 'caffè in grani', must: p => p.attrs.grinder === true },
        { id: 'capsule', label: 'Capsule, per la comodità', slug: 'a-capsule', seoTitle: 'Migliori macchine da caffè a capsule', reason: 'capsule', must: p => p.attrs.type === 'capsule' },
        { id: 'macinato', label: 'Macinato o cialde', slug: 'macinato-e-cialde', seoTitle: 'Migliori macchine da caffè per macinato e cialde', reason: 'macinato o cialde', must: p => p.attrs.type === 'manuale' },
        { id: 'indiff', label: 'Non ho preferenze', slug: null, reason: 'nessuna preferenza sul caffè' } ] },
    { id: 'tempo', question: 'Quanto tempo vuoi dedicare a ogni caffè?', seoIntent: 'macchina caffè automatica facile',
      options: [
        { id: 'zero', label: 'Nessuno: un tasto e pronto', slug: null, reason: 'zero tempo da dedicare', score: p => (p.attrs.minutes <= 1 ? 3 : p.attrs.minutes > 1 ? -4 : 0) },
        { id: 'poco', label: 'Un paio di minuti', slug: null, reason: 'poco tempo', score: p => (p.attrs.minutes <= 3 ? 2 : p.attrs.minutes > 3 ? -2 : 0) },
        { id: 'rito', label: 'Mi piace il rito, è un hobby', slug: 'per-appassionati', seoTitle: 'Migliori macchine da caffè per appassionati', reason: 'ti piace il rito del caffè', score: p => (p.attrs.type === 'manuale' ? 4 : -2) } ] },
    { id: 'spazio', question: 'Quanto spazio hai sul piano cucina?', seoIntent: 'macchina caffè piccola e stretta',
      options: [
        { id: 'poco', label: 'Poco, la voglio stretta', slug: 'piccole-e-strette', seoTitle: 'Migliori macchine da caffè piccole e strette', reason: 'poco spazio sul piano', must: p => p.attrs.width <= 16 },
        { id: 'normale', label: 'Spazio normale', slug: null, reason: 'spazio sufficiente' } ] }
  ]
},

/* ============================ SCRIVANIE REGOLABILI (nuova) ============================ */
{
  id: 'scrivanie-regolabili', name: 'Scrivanie regolabili', short: 'Scrivanie regolabili', singular: 'scrivania regolabile in altezza',
  seasonWhy: 'Settembre e gennaio sono i mesi in cui si risistema la postazione di lavoro: i produttori di scrivanie elettriche concentrano le offerte qui e a novembre.',
  keywords: 'scrivania,scrivanie,scrivania regolabile,standing desk,scrivania elettrica,sit stand,lavorare in piedi,postazione,ufficio',
  dept: 'Ufficio',
  season: { peak: [9, 1], warm: [10, 11], label: 'Picco a settembre e gennaio, come le sedie', curve: 'rientro' },
  commission: 0.05,
  claim: 'Spazio, cosa ci metti sopra e quanto sei alto decidono la scrivania. Il motore viene dopo.',
  why: 'SERP debole, complemento naturale delle sedie, decisione a più variabili (piano, portata, escursione).',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'migliore scrivania regolabile [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Migliori scrivanie regolabili sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'b', label: 'Fino a 350 €', slug: 'sotto-350-euro', seoTitle: 'Migliori scrivanie regolabili sotto 350 euro', reason: 'budget fino a 350 €', must: p => p.price <= 350 },
        { id: 'c', label: 'Fino a 500 €', slug: 'sotto-500-euro', seoTitle: 'Migliori scrivanie regolabili sotto 500 euro', reason: 'budget fino a 500 €', must: p => p.price <= 500 },
        { id: 'd', label: 'Nessun limite', slug: 'migliori-in-assoluto', seoTitle: 'Migliori scrivanie regolabili in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'spazio', question: 'Quanto spazio hai a disposizione?', seoIntent: 'scrivania regolabile piccola / grande',
      options: [
        { id: 'poco', label: 'Poco: piano fino a 110 cm', slug: 'compatte', seoTitle: 'Migliori scrivanie regolabili compatte', reason: 'piano fino a 110 cm', must: p => p.attrs.width <= 112 },
        { id: 'medio', label: 'Medio: 110-140 cm', slug: null, reason: 'piano 110-140 cm', must: p => p.attrs.width <= 145 },
        { id: 'tanto', label: 'Tanto: oltre 140 cm', slug: 'grandi', seoTitle: 'Migliori scrivanie regolabili grandi', reason: 'piano oltre 140 cm', score: p => (p.attrs.width >= 160 ? 3 : p.attrs.width >= 140 ? 1 : -2) } ] },
    { id: 'carico', question: 'Cosa ci metti sopra?', seoIntent: 'scrivania regolabile per due monitor',
      options: [
        { id: 'laptop', label: 'Un portatile e poco altro', slug: null, reason: 'carico leggero', score: p => (p.price <= 250 ? 2 : 0) },
        { id: 'monitor', label: 'Un monitor e il PC', slug: null, reason: 'monitor e PC', must: p => !(p.attrs.maxLoad < 60) },
        { id: 'pesante', label: 'Due monitor o attrezzatura pesante', slug: 'per-due-monitor', seoTitle: 'Migliori scrivanie regolabili per due monitor', reason: 'carico pesante', must: p => p.attrs.maxLoad >= 80, score: p => (p.attrs.motor === 'dual' ? 3 : 0) + (p.attrs.maxLoad >= 100 ? 2 : 0) } ] },
    { id: 'motore', question: 'Elettrica o va bene anche a manovella?', seoIntent: 'scrivania regolabile elettrica / manuale',
      options: [
        { id: 'elettrica', label: 'Elettrica, con un tasto', slug: 'elettriche', seoTitle: 'Migliori scrivanie regolabili elettriche', reason: 'regolazione elettrica', must: p => p.attrs.motor !== 'manual', score: p => (p.attrs.motor === 'dual' ? 2 : 0) },
        { id: 'manuale', label: 'Anche a manovella, se costa meno', slug: 'manuali', seoTitle: 'Migliori scrivanie regolabili manuali', reason: 'manuale accettata', score: p => (p.attrs.motor === 'manual' ? 2 : 0) } ] },
    { id: 'altezza', question: 'Quanto sei alto?', seoIntent: 'scrivania regolabile per persone alte',
      options: [
        { id: 'basso', label: 'Meno di 1,65 m', slug: null, reason: 'altezza sotto 1,65 m', score: p => (p.attrs.hMin <= 70 ? 2 : p.attrs.hMin > 72 ? -2 : 0) },
        { id: 'medio', label: 'Tra 1,65 e 1,85 m', slug: null, reason: 'altezza 1,65-1,85 m' },
        { id: 'alto', label: 'Oltre 1,85 m', slug: 'per-persone-alte', seoTitle: 'Migliori scrivanie regolabili per persone alte', reason: 'altezza oltre 1,85 m', score: p => (p.attrs.hMax >= 120 ? 3 : p.attrs.hMax < 115 ? -3 : 0) } ] },
    { id: 'memoria', question: 'Alterni spesso seduto e in piedi?', seoIntent: 'scrivania con memoria altezze',
      options: [
        { id: 'si', label: 'Sì, più volte al giorno', slug: 'con-memoria', seoTitle: 'Migliori scrivanie regolabili con memoria delle altezze', reason: 'alterni spesso', score: p => (p.attrs.memory ? 3 : -2) + (p.attrs.motor === 'manual' ? -4 : 0) },
        { id: 'no', label: 'Ogni tanto', slug: null, reason: 'alterni ogni tanto' } ] },
    { id: 'piano', question: 'Hai già un piano da riutilizzare?', seoIntent: 'struttura scrivania regolabile senza piano',
      options: [
        { id: 'si', label: 'Sì, mi serve solo la struttura', slug: 'solo-struttura', seoTitle: 'Migliori strutture per scrivania regolabile senza piano', reason: 'solo struttura', score: p => (p.attrs.topIncluded === false ? 3 : -1) },
        { id: 'no', label: 'No, la voglio completa', slug: null, reason: 'scrivania completa', must: p => p.attrs.topIncluded !== false } ] }
  ]
},

/* ============================ DEUMIDIFICATORI (nuova) ============================ */
{
  id: 'deumidificatori', name: 'Deumidificatori', short: 'Deumidificatori', singular: 'deumidificatore',
  seasonWhy: 'Da ottobre a febbraio l\'umidità in casa sale e i deumidificatori vanno a ruba: chi compra a settembre trova ancora scelta e prezzi fermi, a novembre arrivano gli sconti ma anche gli esauriti.',
  keywords: 'deumidificatore,deumidificatori,umidità,muffa,asciugare bucato,asciugabiancheria,condensa,umido,aria',
  dept: 'Casa',
  season: { peak: [10, 11, 12, 1, 2], warm: [3, 9], label: 'Picco da ottobre a febbraio', curve: 'inverno' },
  commission: 0.03,
  claim: 'Metri quadri, problema da risolvere e dove lo tieni acceso: tre cose decidono il deumidificatore giusto.',
  why: 'Stagionale con picchi fortissimi, decisione tecnica (litri, rumore, scarico) che il compratore non sa valutare.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior deumidificatore [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 120 €', slug: 'sotto-120-euro', seoTitle: 'Migliori deumidificatori sotto 120 euro', reason: 'budget fino a 120 €', must: p => p.price <= 120 },
        { id: 'b', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Migliori deumidificatori sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'c', label: 'Fino a 300 €', slug: 'sotto-300-euro', seoTitle: 'Migliori deumidificatori sotto 300 euro', reason: 'budget fino a 300 €', must: p => p.price <= 300 },
        { id: 'd', label: 'Nessun limite', slug: 'migliori-in-assoluto', seoTitle: 'Migliori deumidificatori in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'ambiente', question: 'Dove lo userai?', seoIntent: 'deumidificatore per camera / casa grande',
      options: [
        { id: 'stanza', label: 'Una stanza, fino a 25 m²', slug: 'per-una-stanza', seoTitle: 'Migliori deumidificatori per una stanza', reason: 'una stanza', score: p => (p.attrs.liters <= 14 ? 2 : 0) + (p.attrs.weight <= 12 ? 1 : 0) },
        { id: 'giorno', label: 'Zona giorno, 25-50 m²', slug: null, reason: 'zona giorno', must: p => !(p.attrs.liters < 12), score: p => (p.attrs.liters >= 16 ? 2 : 0) },
        { id: 'casa', label: 'Tutta la casa o una taverna, oltre 50 m²', slug: 'per-case-grandi', seoTitle: 'Migliori deumidificatori per case grandi', reason: 'oltre 50 m²', must: p => p.attrs.liters >= 20, score: p => (p.attrs.liters >= 25 ? 3 : 0) + (p.attrs.tank >= 4 ? 1 : 0) } ] },
    { id: 'problema', question: 'Qual è il problema principale?', seoIntent: 'deumidificatore contro muffa / per asciugare bucato',
      options: [
        { id: 'muffa', label: 'Umidità e muffa sui muri', slug: 'contro-la-muffa', seoTitle: 'Migliori deumidificatori contro la muffa', reason: 'umidità e muffa', score: p => (p.attrs.hygrostat ? 2 : -1) + (p.attrs.liters >= 16 ? 1 : 0) },
        { id: 'bucato', label: 'Asciugare il bucato in casa', slug: 'per-asciugare-bucato', seoTitle: 'Migliori deumidificatori per asciugare il bucato', reason: 'asciugare il bucato', score: p => (p.attrs.laundry ? 4 : -2) + (p.attrs.liters >= 16 ? 1 : 0) },
        { id: 'estate', label: 'Aria pesante d\'estate', slug: null, reason: 'afa estiva', score: p => (p.attrs.liters >= 16 ? 1 : 0) } ] },
    { id: 'notte', question: 'Lo terrai acceso di notte in camera?', seoIntent: 'deumidificatore silenzioso per camera da letto',
      options: [
        { id: 'si', label: 'Sì, deve essere silenzioso', slug: 'silenziosi', seoTitle: 'Migliori deumidificatori silenziosi per la camera da letto', reason: 'silenzioso per la notte', score: p => (p.attrs.noise <= 40 ? 4 : p.attrs.noise <= 44 ? 1 : p.attrs.noise > 44 ? -3 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'rumore non prioritario' } ] },
    { id: 'scarico', question: 'Vuoi collegarlo a uno scarico per non svuotarlo mai?', seoIntent: 'deumidificatore con scarico continuo',
      options: [
        { id: 'si', label: 'Sì', slug: 'con-scarico-continuo', seoTitle: 'Migliori deumidificatori con scarico continuo', reason: 'scarico continuo', must: p => p.attrs.drain === true },
        { id: 'no', label: 'No, lo svuoto a mano', slug: null, reason: 'svuotamento manuale', score: p => (p.attrs.tank >= 3 ? 2 : 0) } ] },
    { id: 'mobilita', question: 'Lo sposterai spesso tra le stanze?', seoIntent: 'deumidificatore leggero con ruote',
      options: [
        { id: 'si', label: 'Sì, di continuo', slug: null, reason: 'spostato spesso', score: p => (p.attrs.wheels ? 2 : 0) + (p.attrs.weight <= 12 ? 2 : p.attrs.weight > 15 ? -2 : 0) },
        { id: 'no', label: 'No, resta in un posto', slug: null, reason: 'posizione fissa' } ] }
  ]
},

/* ============================ OBIETTIVI FOTOGRAFICI (nuova) ============================ */
{
  id: 'obiettivi-fotografici', name: 'Obiettivi fotografici', short: 'Obiettivi', singular: 'obiettivo fotografico',
  seasonWhy: 'Obiettivi e corredi fotografici scendono soprattutto a novembre col Black Friday e prima dell\'estate, quando si viaggia. Fuori da lì i prezzi sono piuttosto stabili.',
  keywords: 'obiettivo,obiettivi,zoom,teleobiettivo,grandangolo,lente,macro,macchina fotografica,fotocamera,reflex,mirrorless,sony,canon,nikon,fujifilm,sigma,tamron,fotografia,focale,attacco,mount',
  dept: 'Fotografia',
  season: { peak: [11, 12], warm: [5, 6], label: 'Picco a novembre e prima dell\'estate', curve: 'regali' },
  commission: 0.03,
  claim: 'La prima cosa non è la marca dell\'obiettivo: è l\'attacco della tua fotocamera. Sbagliato quello, non si monta.',
  why: 'Decisione tecnica e costosa: l\'attacco è un filtro assoluto, poi contano focale, luminosità e stabilizzazione. Perfetta per un motore che filtra prima e ordina dopo.',
  facets: [
    { id: 'attacco', question: 'Che attacco ha la tua fotocamera?', seoIntent: 'obiettivi per [attacco]',
      options: [
        { id: 'sony-e', label: 'Sony E (mirrorless Sony)', slug: 'sony-e', seoTitle: 'Migliori obiettivi per Sony E', reason: 'attacco Sony E', must: p => p.attrs.mount === 'Sony E' },
        { id: 'canon-rf', label: 'Canon RF (mirrorless Canon)', slug: 'canon-rf', seoTitle: 'Migliori obiettivi per Canon RF', reason: 'attacco Canon RF', must: p => p.attrs.mount === 'Canon RF' },
        { id: 'canon-ef', label: 'Canon EF (reflex Canon)', slug: 'canon-ef', seoTitle: 'Migliori obiettivi per Canon EF', reason: 'attacco Canon EF', must: p => p.attrs.mount === 'Canon EF' },
        { id: 'nikon-z', label: 'Nikon Z (mirrorless Nikon)', slug: 'nikon-z', seoTitle: 'Migliori obiettivi per Nikon Z', reason: 'attacco Nikon Z', must: p => p.attrs.mount === 'Nikon Z' },
        { id: 'nikon-f', label: 'Nikon F (reflex Nikon)', slug: 'nikon-f', seoTitle: 'Migliori obiettivi per Nikon F', reason: 'attacco Nikon F', must: p => p.attrs.mount === 'Nikon F' },
        { id: 'fuji-x', label: 'Fujifilm X', slug: 'fujifilm-x', seoTitle: 'Migliori obiettivi per Fujifilm X', reason: 'attacco Fujifilm X', must: p => p.attrs.mount === 'Fujifilm X' },
        { id: 'm43', label: 'Micro 4/3 (Olympus/OM System, Panasonic)', slug: 'micro-quattro-terzi', seoTitle: 'Migliori obiettivi Micro 4/3', reason: 'attacco Micro 4/3', must: p => p.attrs.mount === 'Micro 4/3' },
        { id: 'boh', label: 'Non sono sicuro', slug: null, reason: 'attacco da verificare' } ] },
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'obiettivi [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 300 €', slug: 'sotto-300-euro', seoTitle: 'Migliori obiettivi sotto 300 euro', reason: 'budget fino a 300 €', must: p => p.price <= 300 },
        { id: 'b', label: 'Fino a 600 €', slug: 'sotto-600-euro', seoTitle: 'Migliori obiettivi sotto 600 euro', reason: 'budget fino a 600 €', must: p => p.price <= 600 },
        { id: 'c', label: 'Fino a 1200 €', slug: 'sotto-1200-euro', seoTitle: 'Migliori obiettivi sotto 1200 euro', reason: 'budget fino a 1200 €', must: p => p.price <= 1200 },
        { id: 'd', label: 'Nessun limite', slug: 'fascia-alta', seoTitle: 'Migliori obiettivi di fascia alta', reason: 'nessun limite di budget' } ] },
    { id: 'uso', question: 'Cosa fotografi di più?', seoIntent: 'obiettivo per [uso]',
      options: [
        { id: 'tuttofare', label: 'Un po\' di tutto, in viaggio', slug: 'tuttofare-da-viaggio', seoTitle: 'Migliori obiettivi tuttofare da viaggio', reason: 'zoom tuttofare da viaggio', score: p => (p.attrs.type === 'zoom-tuttofare' ? 4 : -1) + (p.attrs.weight <= 600 ? 1 : 0) },
        { id: 'tele', label: 'Sport, animali, cose lontane', slug: 'teleobiettivi', seoTitle: 'Migliori teleobiettivi', reason: 'soggetti lontani', must: p => !(p.attrs.focalMax < 200), score: p => (p.attrs.type === 'teleobiettivo' ? 4 : 0) + (p.attrs.focalMax >= 300 ? 2 : 0) },
        { id: 'grandangolo', label: 'Paesaggi e interni', slug: 'grandangolari', seoTitle: 'Migliori obiettivi grandangolari', reason: 'paesaggi e interni', score: p => (p.attrs.type === 'grandangolo' ? 4 : 0) + (p.attrs.focalMin <= 16 ? 2 : 0) },
        { id: 'ritratto', label: 'Ritratti, sfondo sfocato', slug: 'per-ritratti', seoTitle: 'Migliori obiettivi per ritratti', reason: 'ritratti con sfocato', score: p => (p.attrs.apertureMax <= 2.0 ? 4 : p.attrs.apertureMax <= 2.8 ? 1 : -2) },
        { id: 'macro', label: 'Primi piani, macro', slug: 'macro', seoTitle: 'Migliori obiettivi macro', reason: 'primi piani macro', must: p => p.attrs.macro === true } ] },
    { id: 'luminosita', question: 'Ti serve che sia luminoso (foto al chiuso, poca luce)?', seoIntent: 'obiettivo luminoso f2.8',
      options: [
        { id: 'si', label: 'Sì, scatto spesso con poca luce', slug: 'luminosi', seoTitle: 'Migliori obiettivi luminosi', reason: 'luminoso per poca luce', score: p => (p.attrs.apertureMax <= 2.8 ? 3 : p.attrs.apertureMax > 4 ? -3 : 0) },
        { id: 'no', label: 'No, scatto quasi sempre con buona luce', slug: null, reason: 'luce non un problema' } ] },
    { id: 'stabil', question: 'Vuoi la stabilizzazione dell\'immagine?', seoIntent: 'obiettivo stabilizzato',
      options: [
        { id: 'si', label: 'Sì, scatto spesso a mano libera', slug: 'stabilizzati', seoTitle: 'Migliori obiettivi stabilizzati', reason: 'stabilizzazione utile', score: p => (p.attrs.stabilized ? 3 : -2) },
        { id: 'no', label: 'No, uso il cavalletto o la stabilizzazione del corpo', slug: null, reason: 'stabilizzazione non necessaria' } ] },
    { id: 'peso', question: 'Quanto conta leggerezza e ingombro?', seoIntent: 'obiettivo leggero e compatto',
      options: [
        { id: 'molto', label: 'Molto, lo porto sempre con me', slug: 'leggeri-e-compatti', seoTitle: 'Migliori obiettivi leggeri e compatti', reason: 'leggerezza importante', score: p => (p.attrs.weight <= 500 ? 3 : p.attrs.weight > 900 ? -3 : 0) },
        { id: 'poco', label: 'Poco, preferisco la qualità', slug: null, reason: 'qualità sopra il peso' } ] }
  ]
},

/* ============================ FRIGGITRICI AD ARIA (nuova) ============================ */
{
  id: 'friggitrici-aria', name: 'Friggitrici ad aria', short: 'Friggitrici ad aria', singular: 'friggitrice ad aria',
  seasonWhy: 'La friggitrice ad aria è uno dei regali di elettrodomestico più comprati a novembre e dicembre, ed è lì che si vedono i tagli di prezzo veri. Il resto dell\'anno i prezzi si muovono poco.',
  keywords: 'friggitrice ad aria,friggitrice,air fryer,airfryer,senza olio,cestello,doppio cestello,ninja,cosori,philips,moulinex,patatine,cucina,forno ventilato',
  dept: 'Cucina',
  season: { peak: [11, 12], warm: [1, 10], label: 'Picco su Black Friday e Natale', curve: 'regali' },
  commission: 0.03,
  claim: 'Quanti siete a tavola e quanto spazio hai sul piano: sono queste due cose a decidere, non i watt.',
  why: 'Modelli quasi identici a prezzi molto diversi, e la capacità dichiarata in litri non dice quante porzioni escono davvero. Decisione confusa, volumi altissimi.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior friggitrice ad aria [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 60 €', slug: 'sotto-60-euro', seoTitle: 'Migliori friggitrici ad aria sotto 60 euro', reason: 'budget fino a 60 €', must: p => p.price <= 60 },
        { id: 'b', label: 'Fino a 100 €', slug: 'sotto-100-euro', seoTitle: 'Migliori friggitrici ad aria sotto 100 euro', reason: 'budget fino a 100 €', must: p => p.price <= 100 },
        { id: 'c', label: 'Fino a 180 €', slug: 'sotto-180-euro', seoTitle: 'Migliori friggitrici ad aria sotto 180 euro', reason: 'budget fino a 180 €', must: p => p.price <= 180 },
        { id: 'd', label: 'Nessun limite, voglio la migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori friggitrici ad aria in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'persone', question: 'Per quante persone cucini di solito?', seoIntent: 'friggitrice ad aria per famiglia / per una persona',
      options: [
        { id: 'uno', label: 'Una o due', slug: 'per-una-o-due-persone', seoTitle: 'Migliori friggitrici ad aria piccole per una o due persone', reason: 'una o due persone', score: p => (p.attrs.capacity <= 4.5 ? 3 : p.attrs.capacity >= 8 ? -2 : 0) },
        { id: 'tre', label: 'Tre o quattro', slug: null, reason: 'tre o quattro persone', must: p => !(p.attrs.capacity < 3.5), score: p => (p.attrs.capacity >= 5 ? 2 : 0) },
        { id: 'famiglia', label: 'Cinque o più', slug: 'per-famiglie-numerose', seoTitle: 'Migliori friggitrici ad aria grandi per famiglie numerose', reason: 'cinque o più persone', must: p => p.attrs.capacity >= 7, score: p => (p.attrs.capacity >= 9 ? 3 : 0) + (p.attrs.baskets >= 2 ? 2 : 0) } ] },
    { id: 'cassetti', question: 'Ti serve cuocere due cose diverse insieme?', seoIntent: 'friggitrice ad aria doppio cestello',
      options: [
        { id: 'si', label: 'Sì, voglio il doppio cestello', slug: 'doppio-cestello', seoTitle: 'Migliori friggitrici ad aria a doppio cestello', reason: 'doppio cestello', must: p => p.attrs.baskets >= 2 },
        { id: 'no', label: 'No, un cestello solo va bene', slug: null, reason: 'cestello singolo', score: p => (p.attrs.baskets === 1 ? 1 : 0) } ] },
    { id: 'spazio', question: 'Quanto spazio hai sul piano di lavoro?', seoIntent: 'friggitrice ad aria compatta salvaspazio',
      options: [
        { id: 'poco', label: 'Poco, deve stare stretta', slug: 'compatte-salvaspazio', seoTitle: 'Migliori friggitrici ad aria compatte e salvaspazio', reason: 'poco spazio sul piano', score: p => (p.attrs.capacity <= 5 ? 3 : p.attrs.capacity >= 9 ? -3 : 0) + (p.attrs.weight <= 5 ? 1 : 0) },
        { id: 'abbastanza', label: 'Abbastanza, non è un problema', slug: null, reason: 'spazio sufficiente' } ] },
    { id: 'oblo', question: 'Vuoi vedere il cibo mentre cuoce senza aprire?', seoIntent: 'friggitrice ad aria con oblò',
      options: [
        { id: 'si', label: 'Sì, con finestra', slug: 'con-oblo', seoTitle: 'Migliori friggitrici ad aria con oblò', reason: 'finestra per controllare la cottura', must: p => p.attrs.window === true },
        { id: 'no', label: 'Non mi interessa', slug: null, reason: 'oblò non necessario' } ] },
    { id: 'pulizia', question: 'Quanto conta la pulizia facile?', seoIntent: 'friggitrice ad aria lavabile in lavastoviglie',
      options: [
        { id: 'molto', label: 'Molto: cestello in lavastoviglie', slug: 'lavabili-in-lavastoviglie', seoTitle: 'Migliori friggitrici ad aria con cestello lavabile in lavastoviglie', reason: 'cestello in lavastoviglie', score: p => (p.attrs.dishwasher ? 3 : -2) },
        { id: 'poco', label: 'La lavo a mano senza problemi', slug: null, reason: 'lavaggio a mano' } ] },
    { id: 'uso', question: 'La userai solo per patatine e surgelati o anche per altro?', seoIntent: 'friggitrice ad aria versatile multifunzione',
      options: [
        { id: 'base', label: 'Soprattutto surgelati e patatine', slug: null, reason: 'uso base' },
        { id: 'versatile', label: 'Anche carne, dolci, verdure, essiccazione', slug: 'multifunzione', seoTitle: 'Migliori friggitrici ad aria multifunzione', reason: 'uso versatile', score: p => (p.attrs.programs >= 8 ? 2 : 0) + (p.attrs.maxTemp >= 220 ? 2 : 0) + (p.attrs.power >= 1700 ? 1 : 0) } ] }
  ]
},

/* ============================ MONITOR DA SCRIVANIA (nuova) ============================ */
{
  id: 'monitor-scrivania', name: 'Monitor da scrivania', short: 'Monitor', singular: 'monitor',
  seasonWhy: 'I monitor scendono a novembre col Black Friday e, in misura minore, a settembre col rientro. Fuori da quelle due finestre il prezzo di listino si muove pochissimo.',
  keywords: 'monitor,schermo,display,pc,computer,scrivania,gaming,144hz,4k,qhd,ips,usb-c,ultrawide,curvo,dell,lg,samsung,asus,benq,aoc,philips',
  dept: 'Informatica',
  season: { peak: [11, 12], warm: [9, 1], label: 'Picco a novembre, secondo picco a settembre', curve: 'regali' },
  commission: 0.02,
  claim: 'Un monitor per lavorare e uno per giocare sono due prodotti diversi. Dicci cosa ci fai e quanto grande lo vuoi.',
  why: 'Schede tecniche piene di sigle (Hz, ms, IPS, HDR, USB-C) che il compratore non sa pesare, e differenze di prezzo enormi a parità di pollici.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior monitor [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 150 €', slug: 'sotto-150-euro', seoTitle: 'Migliori monitor sotto 150 euro', reason: 'budget fino a 150 €', must: p => p.price <= 150 },
        { id: 'b', label: 'Fino a 300 €', slug: 'sotto-300-euro', seoTitle: 'Migliori monitor sotto 300 euro', reason: 'budget fino a 300 €', must: p => p.price <= 300 },
        { id: 'c', label: 'Fino a 600 €', slug: 'sotto-600-euro', seoTitle: 'Migliori monitor sotto 600 euro', reason: 'budget fino a 600 €', must: p => p.price <= 600 },
        { id: 'd', label: 'Nessun limite', slug: 'fascia-alta', seoTitle: 'Migliori monitor di fascia alta', reason: 'nessun limite di budget' } ] },
    { id: 'uso', question: 'A cosa ti serve soprattutto?', seoIntent: 'monitor per ufficio / gaming / grafica',
      options: [
        { id: 'ufficio', label: 'Lavoro, testo, fogli di calcolo', slug: 'per-ufficio', seoTitle: 'Migliori monitor per ufficio e lavoro', reason: 'lavoro e testo', score: p => (p.attrs.panel === 'IPS' ? 2 : 0) + (p.attrs.heightAdjust ? 2 : 0) + (p.attrs.size >= 27 ? 1 : 0) },
        { id: 'gaming', label: 'Videogiochi', slug: 'da-gaming', seoTitle: 'Migliori monitor da gaming', reason: 'videogiochi', must: p => !(p.attrs.refresh < 100), score: p => (p.attrs.refresh >= 165 ? 3 : p.attrs.refresh >= 144 ? 2 : 0) + (p.attrs.responseTime <= 1 ? 2 : 0) },
        { id: 'creativo', label: 'Foto, video, grafica', slug: 'per-foto-e-video', seoTitle: 'Migliori monitor per foto e video', reason: 'foto e video', score: p => (p.attrs.panel === 'IPS' || p.attrs.panel === 'OLED' ? 3 : -2) + (p.attrs.resolution === '3840x2160' ? 3 : p.attrs.resolution === '2560x1440' ? 1 : -1) },
        { id: 'tutto', label: 'Un po\' di tutto', slug: null, reason: 'uso misto', score: p => (p.attrs.panel === 'IPS' ? 1 : 0) + (p.attrs.refresh >= 100 ? 1 : 0) } ] },
    { id: 'dimensione', question: 'Quanto grande lo vuoi?', seoIntent: 'monitor [pollici]',
      options: [
        { id: 'p24', label: 'Intorno ai 24 pollici', slug: '24-pollici', seoTitle: 'Migliori monitor da 24 pollici', reason: 'circa 24 pollici', must: p => p.attrs.size <= 25 },
        { id: 'p27', label: 'Intorno ai 27 pollici', slug: '27-pollici', seoTitle: 'Migliori monitor da 27 pollici', reason: 'circa 27 pollici', must: p => p.attrs.size >= 26 && p.attrs.size <= 28 },
        { id: 'p32', label: '32 pollici o più', slug: '32-pollici-e-oltre', seoTitle: 'Migliori monitor da 32 pollici e oltre', reason: '32 pollici o più', must: p => p.attrs.size >= 31 },
        { id: 'boh', label: 'Decidete voi', slug: null, reason: 'dimensione libera' } ] },
    { id: 'risoluzione', question: 'Che nitidezza ti serve?', seoIntent: 'monitor 4k / qhd / full hd',
      options: [
        { id: 'fhd', label: 'Full HD basta', slug: 'full-hd', seoTitle: 'Migliori monitor Full HD', reason: 'Full HD sufficiente' },
        { id: 'qhd', label: 'Almeno QHD (2K)', slug: 'qhd-2k', seoTitle: 'Migliori monitor QHD 2K', reason: 'almeno QHD', must: p => p.attrs.resolution !== '1920x1080' && p.attrs.resolution !== '2560x1080' && !!p.attrs.resolution },
        { id: 'uhd', label: 'Voglio il 4K', slug: '4k', seoTitle: 'Migliori monitor 4K', reason: '4K', must: p => p.attrs.resolution === '3840x2160' } ] },
    { id: 'portatile', question: 'Lo colleghi a un portatile con un cavo solo (USB-C)?', seoIntent: 'monitor usb-c per portatile',
      options: [
        { id: 'si', label: 'Sì, voglio USB-C che ricarichi il portatile', slug: 'con-usb-c', seoTitle: 'Migliori monitor con USB-C', reason: 'collegamento USB-C', must: p => p.attrs.usbc === true, score: p => (p.attrs.usbcPower >= 65 ? 3 : p.attrs.usbcPower >= 45 ? 1 : 0) },
        { id: 'no', label: 'No, uso HDMI o DisplayPort', slug: null, reason: 'HDMI o DisplayPort' } ] },
    { id: 'ergonomia', question: 'Ti serve regolare l\'altezza dello schermo?', seoIntent: 'monitor regolabile in altezza',
      options: [
        { id: 'si', label: 'Sì, ci passo molte ore', slug: 'regolabili-in-altezza', seoTitle: 'Migliori monitor regolabili in altezza', reason: 'regolazione in altezza', must: p => p.attrs.heightAdjust === true },
        { id: 'no', label: 'No, o userò un braccio VESA', slug: null, reason: 'supporto non prioritario', score: p => (p.attrs.vesa ? 1 : 0) } ] },
    { id: 'forma', question: 'Curvo o piatto?', seoIntent: 'monitor curvo',
      options: [
        { id: 'curvo', label: 'Curvo', slug: 'curvi', seoTitle: 'Migliori monitor curvi', reason: 'schermo curvo', must: p => p.attrs.curved === true },
        { id: 'piatto', label: 'Piatto', slug: null, reason: 'schermo piatto', must: p => p.attrs.curved !== true },
        { id: 'indifferente', label: 'Indifferente', slug: null, reason: 'forma indifferente' } ] }
  ]
}
];

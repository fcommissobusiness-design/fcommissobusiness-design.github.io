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
  keywords: 'sedia,sedie,sedia da ufficio,sedia ergonomica,sedia gaming,poltrona,scrivania,mal di schiena,lombare,ufficio,smart working,seduta,partita iva,detraibile,home office,bene strumentale',
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
        { id: 'casa', label: 'A casa, in smart working', slug: 'smart-working', seoTitle: 'Migliori sedie ergonomiche per smart working', reason: 'smart working', score: p => (p.attrs.material === 'mesh' ? 2 : 0) + (['adj','dynamic'].includes(p.attrs.lumbar) ? 1 : -1) },
        { id: 'ufficio', label: 'In ufficio', slug: 'per-ufficio', seoTitle: 'Migliori sedie ergonomiche per ufficio e partita IVA', reason: 'uso in ufficio', score: p => (p.attrs.lumbar === 'dynamic' ? 2 : p.attrs.lumbar === 'adj' ? 1 : -1) + (p.attrs.material === 'pu' ? -1 : 0) },
        { id: 'gaming', label: 'Per giocare', slug: 'gaming', seoTitle: 'Migliori sedie gaming ergonomiche', reason: 'uso gaming', score: p => (p.attrs.recline >= 150 ? 3 : 0) + (p.attrs.headrest ? 1 : 0) + (p.attrs.footrest ? 1 : 0) } ] },
    { id: 'ore', question: 'Quante ore al giorno ci passi seduto?', seoIntent: 'migliore sedia per stare seduti 8 ore',
      options: [
        { id: 'poche', label: 'Meno di 4', slug: null, reason: 'meno di 4 ore al giorno', score: p => (p.price <= 200 ? 2 : 0) },
        { id: 'medie', label: 'Tra 4 e 8', slug: null, reason: '4-8 ore al giorno', score: p => (['adj','dynamic'].includes(p.attrs.lumbar) ? 2 : -1) },
        { id: 'tante', label: 'Più di 8', slug: 'otto-ore', seoTitle: 'Migliori sedie ergonomiche per stare seduti 8 ore', reason: 'oltre 8 ore al giorno', score: p => (p.attrs.lumbar === 'dynamic' ? 4 : p.attrs.lumbar === 'adj' ? 2 : -3) + (p.attrs.material === 'mesh' ? 1 : 0) } ] },
    { id: 'schiena', question: 'Hai problemi alla schiena?', seoIntent: 'migliore sedia ufficio per mal di schiena',
      options: [
        { id: 'si', label: 'Sì, soprattutto lombari', slug: 'mal-di-schiena', seoTitle: 'Migliori sedie ergonomiche per mal di schiena', reason: 'mal di schiena lombare', must: p => ['adj','dynamic'].includes(p.attrs.lumbar), score: p => (p.attrs.lumbar === 'dynamic' ? 4 : 2) },
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
        { id: 'fianco', label: 'Di fianco', slug: 'per-chi-dorme-di-fianco', seoTitle: 'Migliori materassi per chi dorme di fianco', reason: 'dormi di fianco', score: p => ((p.attrs.firmness ?? NaN) <= 6 ? 3 : (p.attrs.firmness ?? NaN) >= 8 ? -3 : 0) },
        { id: 'schiena', label: 'Sulla schiena', slug: 'per-chi-dorme-supino', seoTitle: 'Migliori materassi per chi dorme supino', reason: 'dormi supino', score: p => ((p.attrs.firmness ?? NaN) >= 6 && (p.attrs.firmness ?? NaN) <= 8 ? 3 : -1) },
        { id: 'pancia', label: 'A pancia in giù', slug: null, reason: 'dormi prono', score: p => ((p.attrs.firmness ?? NaN) >= 7 ? 3 : -3) },
        { id: 'varia', label: 'Cambio spesso posizione', slug: null, reason: 'posizione variabile', score: p => (p.attrs.type === 'ibrido' || p.attrs.type === 'lattice' ? 2 : 0) } ] },
    { id: 'rigidita', question: 'Come lo preferisci?', seoIntent: 'materasso morbido / rigido',
      options: [
        { id: 'morbido', label: 'Morbido e accogliente', slug: 'morbido', seoTitle: 'Migliori materassi morbidi', reason: 'preferenza morbido', score: p => ((p.attrs.firmness ?? NaN) <= 5 ? 3 : (p.attrs.firmness ?? NaN) >= 7 ? -3 : 0) },
        { id: 'medio', label: 'Una via di mezzo', slug: null, reason: 'preferenza media', score: p => ((p.attrs.firmness ?? NaN) >= 5 && (p.attrs.firmness ?? NaN) <= 7 ? 2 : -1) },
        { id: 'rigido', label: 'Rigido e sostenuto', slug: 'rigido', seoTitle: 'Migliori materassi rigidi', reason: 'preferenza rigido', score: p => ((p.attrs.firmness ?? NaN) >= 7 ? 3 : (p.attrs.firmness ?? NaN) <= 5 ? -3 : 0) },
        { id: 'boh', label: 'Non saprei', slug: null, reason: 'nessuna preferenza di rigidità' } ] },
    { id: 'peso', question: 'Quanto pesa chi ci dorme di più?', seoIntent: 'miglior materasso per corporatura robusta',
      options: [
        { id: 'a', label: 'Meno di 70 kg', slug: null, reason: 'sotto 70 kg', score: p => ((p.attrs.firmness ?? NaN) <= 6 ? 2 : -1) },
        { id: 'b', label: 'Tra 70 e 95 kg', slug: null, reason: '70-95 kg' },
        { id: 'c', label: 'Oltre 95 kg', slug: 'corporatura-robusta', seoTitle: 'Migliori materassi per corporature robuste', reason: 'oltre 95 kg', must: p => p.attrs.maxKg >= 110, score: p => ((p.attrs.firmness ?? NaN) >= 7 ? 2 : 0) + (p.attrs.type === 'ibrido' || p.attrs.type === 'molle' ? 2 : 0) } ] },
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
        { id: 'si', label: 'Sì', slug: 'mal-di-schiena', seoTitle: 'Migliori materassi per il mal di schiena', reason: 'mal di schiena', score: p => (p.attrs.type === 'ibrido' ? 3 : 0) + ((p.attrs.firmness ?? NaN) >= 6 && (p.attrs.firmness ?? NaN) <= 8 ? 2 : -2) },
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
  why: 'La parola "trapano" copre tre attrezzi diversi (avvitatore, battente, tassellatore) e chi non fa il muratore non sa distinguerli. Prezzi da 30 a 400 euro per oggetti che sembrano uguali, sigle come Nm, Ah, SDS che il compratore non sa pesare, e la trappola del "solo corpo" senza batteria.',
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
        { id: 'poco', label: 'Poco, la voglio stretta', slug: 'piccole-e-strette', seoTitle: 'Migliori macchine da caffè piccole e strette', reason: 'poco spazio sul piano', must: p => Number.isFinite(p.attrs.width) && p.attrs.width <= 16 },
        { id: 'normale', label: 'Spazio normale', slug: null, reason: 'spazio sufficiente' } ] }
  ]
},

/* ============================ SCRIVANIE REGOLABILI (nuova) ============================ */
{
  id: 'scrivanie-regolabili', name: 'Scrivanie regolabili', short: 'Scrivanie regolabili', singular: 'scrivania regolabile in altezza',
  seasonWhy: 'Settembre e gennaio sono i mesi in cui si risistema la postazione di lavoro: i produttori di scrivanie elettriche concentrano le offerte qui e a novembre.',
  keywords: 'scrivania,scrivanie,scrivania regolabile,standing desk,scrivania elettrica,sit stand,lavorare in piedi,postazione,ufficio,partita iva,detraibile,home office,smart working,ammortizzabile',
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
        { id: 'poco', label: 'Poco: piano fino a 110 cm', slug: 'compatte', seoTitle: 'Migliori scrivanie regolabili compatte', reason: 'piano fino a 110 cm', must: p => typeof p.attrs.width === 'number' && p.attrs.width <= 112 },
        { id: 'medio', label: 'Medio: 110-140 cm', slug: null, reason: 'piano 110-140 cm', must: p => typeof p.attrs.width === 'number' && p.attrs.width <= 145 },
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
        { id: 'basso', label: 'Meno di 1,65 m', slug: null, reason: 'altezza sotto 1,65 m', score: p => (p.attrs.hMin == null ? 0 : p.attrs.hMin <= 70 ? 2 : p.attrs.hMin > 72 ? -2 : 0) },
        { id: 'medio', label: 'Tra 1,65 e 1,85 m', slug: null, reason: 'altezza 1,65-1,85 m' },
        { id: 'alto', label: 'Oltre 1,85 m', slug: 'per-persone-alte', seoTitle: 'Migliori scrivanie regolabili per persone alte', reason: 'altezza oltre 1,85 m', score: p => (p.attrs.hMax >= 120 ? 3 : p.attrs.hMax < 115 ? -3 : 0) } ] },
    { id: 'memoria', question: 'Alterni spesso seduto e in piedi?', seoIntent: 'scrivania con memoria altezze',
      options: [
        { id: 'si', label: 'Sì, più volte al giorno', slug: 'con-memoria', seoTitle: 'Migliori scrivanie regolabili con memoria delle altezze', reason: 'alterni spesso', score: p => (p.attrs.memory ? 3 : -2) + (p.attrs.motor === 'manual' ? -4 : 0) },
        { id: 'no', label: 'Ogni tanto', slug: null, reason: 'alterni ogni tanto' } ] },
    { id: 'piano', question: 'Hai già un piano da riutilizzare?', seoIntent: 'struttura scrivania regolabile senza piano',
      options: [
        { id: 'si', label: 'Sì, mi serve solo la struttura', slug: 'solo-struttura', seoTitle: 'Migliori strutture per scrivania regolabile senza piano', reason: 'solo struttura', score: p => (p.attrs.topIncluded === false ? 3 : -1) },
        { id: 'no', label: 'No, la voglio completa', slug: null, reason: 'scrivania completa', must: p => p.attrs.topIncluded === true } ] },
    { id: 'contesto', question: 'Dove la userai soprattutto?', seoIntent: 'scrivania regolabile per home office / ufficio',
      options: [
        { id: 'casa', label: 'A casa, in smart working', slug: 'home-office', seoTitle: 'Migliori scrivanie regolabili per home office', reason: 'uso domestico' },
        { id: 'ufficio', label: 'In ufficio o studio professionale', slug: 'per-ufficio-partita-iva', seoTitle: 'Migliori scrivanie regolabili per ufficio e partita IVA', reason: 'uso professionale', score: p => (p.attrs.motor === 'dual' ? 2 : 0) },
        { id: 'misto', label: 'Entrambi, mi muovo spesso', slug: null, reason: 'uso misto' } ] }
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
        { id: 'si', label: 'Sì, deve essere silenzioso', slug: 'silenziosi', seoTitle: 'Migliori deumidificatori silenziosi per la camera da letto', reason: 'silenzioso per la notte', score: p => (!Number.isFinite(p.attrs.noise) ? 0 : p.attrs.noise <= 40 ? 4 : p.attrs.noise <= 44 ? 1 : -3) },
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

/* ============================ STUFE ELETTRICHE (nuova) ============================ */
{
  id: 'stufe-elettriche', name: 'Stufe elettriche', short: 'Stufe elettriche', singular: 'stufa elettrica',
  seasonWhy: 'Le stufe elettriche vanno a ruba da novembre a febbraio, quando arriva il primo freddo e la gente cerca un caldo subito senza accendere i termosifoni. È anche la finestra degli sconti, ma i modelli buoni si esauriscono in fretta.',
  keywords: 'stufa elettrica,stufe elettriche,termoventilatore,termoventilatori,stufetta,stufetta elettrica,basso consumo,ceramico,ptc,alogena,infrarossi,termoconvettore,convettore,radiatore elettrico,stufa a olio,riscaldamento,riscaldatore,bagno,silenziosa',
  dept: 'Casa',
  season: { peak: [11, 12, 1, 2], warm: [10, 3], label: 'Picco da novembre a febbraio', curve: 'inverno' },
  commission: 0.03,
  claim: 'Non conta quanti watt ha: conta che stanza devi scaldare e se ti serve caldo subito o caldo costante. Sono queste due cose a decidere.',
  why: 'Categoria stagionale con picchi fortissimi d\'inverno, scelta confusa (termoventilatore, alogena, convettore o olio fanno un caldo diverso) e un nodo di sicurezza vero quando si usa in bagno. Perfetta per un motore che filtra prima e ordina dopo.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'migliore stufa elettrica [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 35 €', slug: 'sotto-35-euro', seoTitle: 'Migliori stufe elettriche sotto 35 euro', reason: 'budget fino a 35 €', must: p => p.price <= 35 },
        { id: 'b', label: 'Fino a 60 €', slug: 'sotto-60-euro', seoTitle: 'Migliori stufe elettriche sotto 60 euro', reason: 'budget fino a 60 €', must: p => p.price <= 60 },
        { id: 'c', label: 'Fino a 120 €', slug: 'sotto-120-euro', seoTitle: 'Migliori stufe elettriche sotto 120 euro', reason: 'budget fino a 120 €', must: p => p.price <= 120 },
        { id: 'd', label: 'Nessun limite, voglio la migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori stufe elettriche in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'ambiente', question: 'Dove la userai di più?', seoIntent: 'stufa elettrica per bagno / camera / stanze grandi',
      options: [
        { id: 'bagno', label: 'In bagno', slug: 'per-il-bagno', seoTitle: 'Migliori stufe elettriche per il bagno', reason: 'uso in bagno', must: p => p.attrs.bagno === true, score: p => (p.attrs.heat === 'ventilato' ? 2 : 0) + (p.attrs.wallMount ? 1 : 0) },
        { id: 'scrivania', label: 'Su una scrivania o in una stanza piccola', slug: 'da-scrivania', seoTitle: 'Migliori stufe elettriche da scrivania e per stanze piccole', reason: 'scrivania o stanza piccola', score: p => (p.attrs.power <= 1500 ? 2 : p.attrs.power >= 2500 ? -2 : 0) + (p.attrs.weight && p.attrs.weight <= 2 ? 1 : 0) },
        { id: 'camera', label: 'In camera o in studio, fino a 20 m²', slug: null, reason: 'camera o studio', score: p => (p.attrs.power >= 1500 && p.attrs.power <= 2000 ? 2 : 0) },
        { id: 'grande', label: 'In zona giorno, oltre 20 m²', slug: 'per-stanze-grandi', seoTitle: 'Migliori stufe elettriche per stanze grandi', reason: 'oltre 20 m²', must: p => p.attrs.power >= 2000, score: p => (p.attrs.heat === 'convezione' ? 3 : 0) + (p.attrs.power >= 2400 ? 1 : 0) } ] },
    { id: 'calore', question: 'Che tipo di caldo vuoi?', seoIntent: 'termoventilatore / stufa a convezione / alogena',
      options: [
        { id: 'subito', label: 'Caldo subito, puntato dove sto', slug: 'termoventilatori', seoTitle: 'Migliori termoventilatori', reason: 'caldo immediato e mirato', score: p => (p.attrs.heat === 'ventilato' ? 4 : -1) },
        { id: 'costante', label: 'Caldo diffuso e costante in tutta la stanza', slug: 'a-convezione', seoTitle: 'Migliori stufe elettriche a convezione', reason: 'calore diffuso e costante', score: p => (p.attrs.heat === 'convezione' ? 4 : -1) },
        { id: 'radiante', label: 'Caldo istantaneo addosso (tipo sole)', slug: 'alogene-e-infrarossi', seoTitle: 'Migliori stufe alogene e a infrarossi', reason: 'caldo radiante immediato', score: p => (p.attrs.heat === 'radiante' ? 4 : -1) } ] },
    { id: 'notte', question: 'La terrai accesa di notte in camera?', seoIntent: 'stufa elettrica silenziosa per la camera da letto',
      options: [
        { id: 'si', label: 'Sì, deve essere silenziosa', slug: 'silenziose', seoTitle: 'Migliori stufe elettriche silenziose per la camera', reason: 'silenziosa per la notte', score: p => (p.attrs.heat !== 'ventilato' ? 4 : (!Number.isFinite(p.attrs.noise) ? -1 : p.attrs.noise <= 45 ? 1 : -3)) },
        { id: 'no', label: 'No', slug: null, reason: 'rumore non prioritario' } ] },
    { id: 'consumo', question: 'Ti preoccupa la bolletta?', seoIntent: 'stufa elettrica a basso consumo con termostato',
      options: [
        { id: 'si', label: 'Sì, voglio spendere il meno possibile', slug: 'a-basso-consumo', seoTitle: 'Migliori stufe elettriche a basso consumo', reason: 'basso consumo', score: p => (p.attrs.thermostat ? 2 : -2) + (p.attrs.ecoMode ? 2 : 0) + (p.attrs.timer ? 1 : 0) },
        { id: 'no', label: 'No, mi interessa solo il caldo', slug: null, reason: 'consumo non prioritario' } ] },
    { id: 'sicurezza', question: 'La usi in bagno o con bambini in casa?', seoIntent: 'stufa elettrica sicura con spegnimento automatico',
      options: [
        { id: 'si', label: 'Sì, la sicurezza conta', slug: 'sicure', seoTitle: 'Migliori stufe elettriche sicure con spegnimento automatico', reason: 'sicurezza con bambini o in bagno', must: p => p.attrs.tipOver === true && p.attrs.overheat === true },
        { id: 'no', label: 'No', slug: null, reason: 'sicurezza non prioritaria' } ] }
  ]
},

/* ============================ UMIDIFICATORI (nuova) ============================ */
{
  id: 'umidificatori', name: 'Umidificatori', short: 'Umidificatori', singular: 'umidificatore',
  seasonWhy: 'Gli umidificatori si cercano d\'inverno, quando i termosifoni seccano l\'aria e arrivano gola secca, pelle tirata e naso chiuso. Il picco è da novembre a febbraio: è lì che c\'è scelta e ci sono gli sconti.',
  keywords: 'umidificatore,umidificatori,aria secca,ultrasuoni,vapore caldo,nebbia,igrometro,umidostato,gola secca,pelle secca,naso chiuso,aromaterapia,oli essenziali,neonati,bambini,piante',
  dept: 'Casa',
  season: { peak: [11, 12, 1, 2], warm: [10, 3], label: 'Picco da novembre a febbraio', curve: 'inverno' },
  commission: 0.03,
  claim: 'Metri quadri della stanza, dove lo tieni e perché ti serve: queste tre cose decidono l\'umidificatore giusto, non la marca.',
  why: 'Stagionale con picchi d\'inverno, scelta tecnica confusa (ultrasuoni, vapore caldo o evaporativo fanno cose diverse) e un nodo sicurezza/igiene quando lo si usa in camera dei bambini. Perfetta per un motore che filtra prima e ordina dopo.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior umidificatore [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 30 €', slug: 'sotto-30-euro', seoTitle: 'Migliori umidificatori sotto 30 euro', reason: 'budget fino a 30 €', must: p => p.price <= 30 },
        { id: 'b', label: 'Fino a 50 €', slug: 'sotto-50-euro', seoTitle: 'Migliori umidificatori sotto 50 euro', reason: 'budget fino a 50 €', must: p => p.price <= 50 },
        { id: 'c', label: 'Fino a 90 €', slug: 'sotto-90-euro', seoTitle: 'Migliori umidificatori sotto 90 euro', reason: 'budget fino a 90 €', must: p => p.price <= 90 },
        { id: 'd', label: 'Nessun limite, voglio il migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori umidificatori in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'ambiente', question: 'Quanto è grande la stanza?', seoIntent: 'umidificatore per camera / grande ambiente',
      options: [
        { id: 'piccola', label: 'Camera piccola o studio, fino a 15 m²', slug: 'per-camera', seoTitle: 'Migliori umidificatori per la camera da letto', reason: 'camera o studio', score: p => (p.attrs.tank <= 4 ? 2 : 0) + (Number.isFinite(p.attrs.noise) && p.attrs.noise <= 35 ? 1 : 0) },
        { id: 'media', label: 'Una stanza fino a 25 m²', slug: null, reason: 'stanza media', score: p => (p.attrs.tank >= 4 && p.attrs.tank <= 6 ? 2 : 0) },
        { id: 'grande', label: 'Zona giorno o oltre 40 m²', slug: 'per-ambienti-grandi', seoTitle: 'Migliori umidificatori per ambienti grandi', reason: 'oltre 40 m²', must: p => p.attrs.tank >= 5, score: p => (p.attrs.tank >= 6 ? 3 : 0) + (p.attrs.mq && p.attrs.mq >= 40 ? 1 : 0) } ] },
    { id: 'tipo', question: 'Che tipo di umidificatore vuoi?', seoIntent: 'umidificatore a ultrasuoni / a vapore caldo',
      options: [
        { id: 'ultra', label: 'Silenzioso, nebbia fredda (ultrasuoni)', slug: 'a-ultrasuoni', seoTitle: 'Migliori umidificatori a ultrasuoni', reason: 'a ultrasuoni, nebbia fredda', score: p => (p.attrs.type === 'ultrasuoni' ? 3 : -1) },
        { id: 'caldo', label: 'Vapore caldo, più igienico', slug: 'a-vapore-caldo', seoTitle: 'Migliori umidificatori a vapore caldo', reason: 'a vapore caldo', score: p => (p.attrs.type === 'vapore-caldo' ? 4 : p.attrs.warmMist ? 2 : -1) },
        { id: 'evap', label: 'Naturale senza nebbia (evaporativo)', slug: 'evaporativi', seoTitle: 'Migliori umidificatori evaporativi', reason: 'evaporativo', score: p => (p.attrs.type === 'evaporativo' ? 4 : -1) },
        { id: 'boh', label: 'Non so, consigliami tu', slug: null, reason: 'tipo da scegliere' } ] },
    { id: 'uso', question: 'A cosa ti serve soprattutto?', seoIntent: 'umidificatore per bambini / pelle e gola secca',
      options: [
        { id: 'notte', label: 'Usarlo in camera di notte', slug: 'silenziosi', seoTitle: 'Migliori umidificatori silenziosi per la notte', reason: 'silenzioso per la notte', score: p => (!Number.isFinite(p.attrs.noise) ? 0 : p.attrs.noise <= 35 ? 3 : p.attrs.noise <= 40 ? 1 : -2) + (p.attrs.humidistat ? 1 : 0) },
        { id: 'bimbi', label: 'Camera di bambini o neonati', slug: 'per-bambini', seoTitle: 'Migliori umidificatori per bambini e neonati', reason: 'bambini o neonati', score: p => (p.attrs.humidistat ? 2 : 0) + (p.attrs.autoOff ? 1 : 0) + (p.attrs.aroma ? -1 : 0) },
        { id: 'pelle', label: 'Pelle e gola secche, naso chiuso', slug: null, reason: 'pelle e gola secca', score: p => (p.attrs.tank >= 4 ? 1 : 0) + (p.attrs.humidistat ? 1 : 0) },
        { id: 'piante', label: 'Per le piante', slug: null, reason: 'per le piante', score: p => (p.attrs.tank >= 5 ? 1 : 0) } ] },
    { id: 'autonomia', question: 'Deve durare tutta la notte senza rabbocchi?', seoIntent: 'umidificatore a lunga autonomia',
      options: [
        { id: 'si', label: 'Sì, voglio lunga autonomia', slug: 'lunga-autonomia', seoTitle: 'Migliori umidificatori a lunga autonomia', reason: 'lunga autonomia', score: p => (!Number.isFinite(p.attrs.autonomy) ? (p.attrs.tank >= 5 ? 1 : -1) : p.attrs.autonomy >= 20 ? 3 : p.attrs.autonomy >= 12 ? 1 : -2) + (p.attrs.tank >= 5 ? 1 : 0) },
        { id: 'no', label: 'No, lo riempio quando serve', slug: null, reason: 'autonomia non prioritaria' } ] },
    { id: 'auto', question: 'Vuoi che regoli l\'umidità da solo?', seoIntent: 'umidificatore con igrometro umidostato',
      options: [
        { id: 'si', label: 'Sì, con igrometro che si regola da sé', slug: 'con-igrometro', seoTitle: 'Migliori umidificatori con igrometro', reason: 'igrometro integrato', must: p => p.attrs.humidistat === true },
        { id: 'no', label: 'No, lo regolo a mano', slug: null, reason: 'regolazione manuale' } ] }
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
        { id: 'p24', label: 'Intorno ai 24 pollici', slug: '24-pollici', seoTitle: 'Migliori monitor da 24 pollici', reason: 'circa 24 pollici', must: p => Number.isFinite(p.attrs.size) && p.attrs.size <= 25 },
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
},

/* ============================ ASPIRAPOLVERE SENZA FILO (nuova, 14 set) ============================ */
{
  id: 'aspirapolvere-senza-filo', name: 'Aspirapolvere senza filo', short: 'Scope elettriche', singular: 'aspirapolvere senza filo',
  seasonWhy: 'Le scope elettriche senza filo scendono di prezzo soprattutto col Black Friday di novembre, e in misura minore con le pulizie di primavera. Negli altri mesi il listino si muove poco.',
  keywords: 'aspirapolvere senza filo,scopa elettrica,aspirapolvere a batteria,aspirapolvere ciclonico,senza sacco,dyson,rowenta,dreame,xiaomi,samsung,bosch,peli animali,lava e aspira,stazione autosvuotante',
  dept: 'Casa',
  season: { peak: [11], warm: [3, 4], label: 'Picco su Black Friday e pulizie di primavera', curve: 'regali' },
  commission: 0.03,
  claim: 'Quanta casa devi fare con una carica e quanto pesa in mano: sono queste due cose a decidere, non i numeri di potenza sulla scatola.',
  why: 'Potenza dichiarata in unità diverse (Pa, AW, W) che non si possono confrontare, autonomie misurate alla potenza minima e prezzi che vanno da 80 a 700 euro per oggetti che sembrano uguali. Decisione confusa, domanda altissima.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior aspirapolvere senza filo [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 120 €', slug: 'sotto-120-euro', seoTitle: 'Migliori aspirapolvere senza filo sotto 120 euro', reason: 'budget fino a 120 €', must: p => p.price <= 120 },
        { id: 'b', label: 'Fino a 250 €', slug: 'sotto-250-euro', seoTitle: 'Migliori aspirapolvere senza filo sotto 250 euro', reason: 'budget fino a 250 €', must: p => p.price <= 250 },
        { id: 'c', label: 'Fino a 450 €', slug: 'sotto-450-euro', seoTitle: 'Migliori aspirapolvere senza filo sotto 450 euro', reason: 'budget fino a 450 €', must: p => p.price <= 450 },
        { id: 'd', label: 'Nessun limite, voglio il migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori aspirapolvere senza filo in assoluto', reason: 'nessun limite di budget', score: p => (p.quality >= 8 ? 2 : 0) } ] },
    { id: 'casa', question: 'Quanta casa devi pulire con una carica?', seoIntent: 'aspirapolvere senza filo per casa grande',
      options: [
        { id: 'piccola', label: 'Poca: un bilocale o qualche stanza', slug: null, reason: 'casa piccola', score: p => (p.price <= 200 ? 1 : 0) },
        { id: 'media', label: 'Un appartamento medio', slug: null, reason: 'casa media', score: p => (p.attrs.battery >= 45 ? 1 : 0) },
        { id: 'grande', label: 'Molta: casa grande o su più piani', slug: 'per-case-grandi', seoTitle: 'Migliori aspirapolvere senza filo per case grandi', reason: 'casa grande', score: p => (p.attrs.battery >= 60 ? 3 : p.attrs.battery >= 45 ? 1 : p.attrs.battery < 40 ? -2 : 0) + (p.attrs.removableBattery === true ? 2 : 0) } ] },
    { id: 'animali', question: 'Hai animali in casa?', seoIntent: 'miglior aspirapolvere senza filo per peli di cane e gatto',
      options: [
        { id: 'si', label: 'Sì, cane o gatto', slug: 'per-peli-animali', seoTitle: 'Migliori aspirapolvere senza filo per peli di animali', reason: 'animali in casa', score: p => (p.attrs.antiTangle === true ? 3 : -1) + (p.attrs.petTool === true ? 2 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'nessun animale' } ] },
    { id: 'lavaggio', question: 'Ti serve che lavi anche il pavimento?', seoIntent: 'aspirapolvere senza filo lava e aspira',
      options: [
        { id: 'si', label: 'Sì, voglio che aspiri e lavi insieme', slug: 'lava-e-aspira', seoTitle: 'Migliori lavapavimenti senza filo che aspirano e lavano', reason: 'aspira e lava', must: p => p.attrs.wetDry === true },
        { id: 'no', label: 'No, basta che aspiri', slug: 'solo-aspirazione', seoTitle: 'Migliori scope elettriche senza filo solo aspirazione', reason: 'solo aspirazione', must: p => p.attrs.wetDry === false } ] },
    { id: 'peso', question: 'Quanto conta il peso in mano?', seoIntent: 'aspirapolvere senza filo leggero',
      options: [
        { id: 'molto', label: 'Molto: la uso anche su scale, divani, in alto', slug: 'leggeri', seoTitle: 'Migliori aspirapolvere senza filo leggeri', reason: 'peso contenuto', must: p => Number.isFinite(p.attrs.weight) && p.attrs.weight <= 3, score: p => (!Number.isFinite(p.attrs.weight) ? 0 : p.attrs.weight <= 1.8 ? 3 : p.attrs.weight <= 2.5 ? 1 : 0) },
        { id: 'poco', label: 'Poco, la uso soprattutto sui pavimenti', slug: null, reason: 'peso non decisivo' } ] },
    { id: 'batteria', question: 'Vuoi poter cambiare la batteria?', seoIntent: 'aspirapolvere senza filo batteria rimovibile',
      options: [
        { id: 'si', label: 'Sì, voglio la batteria rimovibile', slug: 'con-batteria-rimovibile', seoTitle: 'Migliori aspirapolvere senza filo con batteria rimovibile', reason: 'batteria rimovibile', must: p => p.attrs.removableBattery === true },
        { id: 'no', label: 'Non mi interessa', slug: null, reason: 'batteria indifferente' } ] },
    { id: 'svuotamento', question: 'Vuoi una base che svuoti il contenitore da sola?', seoIntent: 'aspirapolvere senza filo con stazione autosvuotante',
      options: [
        { id: 'si', label: 'Sì, niente polvere in faccia', slug: 'con-stazione-autosvuotante', seoTitle: 'Migliori aspirapolvere senza filo con stazione autosvuotante', reason: 'stazione autosvuotante', must: p => p.attrs.selfEmpty === true },
        { id: 'no', label: 'Svuotarlo a mano va bene', slug: null, reason: 'svuotamento manuale ok', score: p => (p.attrs.bin >= 500 ? 1 : 0) } ] }
  ]
},

/* ============================ PURIFICATORI D'ARIA (nuova, 15 set) ============================ */
{
  id: 'purificatori-aria', name: 'Purificatori d\'aria', short: 'Purificatori', singular: 'purificatore d\'aria',
  seasonWhy: 'Da ottobre si chiudono le finestre e si accende il riscaldamento: l\'aria in casa peggiora e i purificatori tornano tra i più cercati, fino ai pollini di primavera. Il Black Friday di novembre porta i ribassi più forti.',
  keywords: 'purificatore d\'aria,purificatore aria,filtro hepa,hepa h13,allergie,pollini,polvere,peli animali,fumo,odori,cadr,levoit,philips,xiaomi,dyson,rowenta,de\'longhi,coway,winix',
  dept: 'Casa',
  season: { peak: [10, 11, 12, 1, 2], warm: [3, 4, 9], label: 'Picco in autunno-inverno, ritorno coi pollini di primavera', curve: 'inverno' },
  commission: 0.03,
  claim: 'Un purificatore funziona solo se è dimensionato per la stanza. Dicci quanto è grande e cosa ti dà fastidio nell\'aria.',
  why: 'Numeri che il compratore non sa leggere (CADR, classi H11-H14, metri quadri calcolati in modi diversi), filtri di ricambio che costano quanto l\'apparecchio in due anni e differenze di prezzo da 50 a 600 euro. Scelta difficile, errore frequente: comprarlo troppo piccolo.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior purificatore d\'aria [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 100 €', slug: 'sotto-100-euro', seoTitle: 'Migliori purificatori d\'aria sotto 100 euro', reason: 'budget fino a 100 €', must: p => p.price <= 100 },
        { id: 'b', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Migliori purificatori d\'aria sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'c', label: 'Fino a 400 €', slug: 'sotto-400-euro', seoTitle: 'Migliori purificatori d\'aria sotto 400 euro', reason: 'budget fino a 400 €', must: p => p.price <= 400 },
        { id: 'd', label: 'Nessun limite, voglio il migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori purificatori d\'aria in assoluto', reason: 'nessun limite di budget', score: p => (p.quality >= 8 ? 2 : 0) + (p.attrs.cadr >= 300 ? 1 : 0) } ] },
    { id: 'stanza', question: 'Quanto è grande la stanza?', seoIntent: 'purificatore d\'aria per stanze grandi',
      options: [
        { id: 'piccola', label: 'Piccola: camera o studio, fino a 20 m²', slug: null, reason: 'stanza fino a 20 m²', score: p => (p.price <= 120 ? 1 : 0) },
        { id: 'media', label: 'Media: 20-40 m²', slug: null, reason: 'stanza 20-40 m²', score: p => (p.attrs.cadr >= 200 ? 2 : 0) + (p.attrs.area >= 30 ? 1 : 0) },
        { id: 'grande', label: 'Grande: soggiorno o open space, oltre 40 m²', slug: 'per-stanze-grandi', seoTitle: 'Migliori purificatori d\'aria per stanze grandi', reason: 'stanza oltre 40 m²', must: p => p.attrs.area >= 40, score: p => (p.attrs.cadr >= 400 ? 3 : p.attrs.cadr >= 300 ? 1 : 0) } ] },
    { id: 'allergie', question: 'Soffri di allergie o asma (pollini, polvere, acari)?', seoIntent: 'miglior purificatore d\'aria per allergici',
      options: [
        { id: 'si', label: 'Sì, voglio un filtro HEPA vero', slug: 'per-allergici', seoTitle: 'Migliori purificatori d\'aria per allergici', reason: 'allergie o asma', must: p => p.attrs.hepa === 'H13' || p.attrs.hepa === 'H14', score: p => (p.attrs.sensor === true ? 1 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'nessuna allergia' } ] },
    { id: 'animali', question: 'Hai animali in casa?', seoIntent: 'purificatore d\'aria per peli e odori di animali',
      options: [
        { id: 'si', label: 'Sì, cane o gatto', slug: 'per-animali', seoTitle: 'Migliori purificatori d\'aria per chi ha animali', reason: 'animali in casa', score: p => (p.attrs.cadr >= 200 ? 2 : 0) + (p.attrs.hepa === 'H13' || p.attrs.hepa === 'H14' ? 1 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'nessun animale' } ] },
    { id: 'notte', question: 'Lo terrai acceso in camera mentre dormi?', seoIntent: 'purificatore d\'aria silenzioso per camera da letto',
      options: [
        { id: 'si', label: 'Sì, deve essere silenzioso', slug: 'silenziosi-per-camera-da-letto', seoTitle: 'Migliori purificatori d\'aria silenziosi per camera da letto', reason: 'uso notturno', must: p => Number.isFinite(p.attrs.noise) && p.attrs.noise <= 30, score: p => (p.attrs.nightMode === true ? 2 : 0) },
        { id: 'no', label: 'No, starà in soggiorno', slug: null, reason: 'uso diurno' } ] },
    { id: 'automatico', question: 'Vuoi che si regoli da solo in base all\'aria?', seoIntent: 'purificatore d\'aria con sensore qualità aria',
      options: [
        { id: 'si', label: 'Sì, con sensore e modalità automatica', slug: 'con-sensore-qualita-aria', seoTitle: 'Migliori purificatori d\'aria con sensore di qualità dell\'aria', reason: 'regolazione automatica', must: p => p.attrs.sensor === true },
        { id: 'no', label: 'Mi basta regolarlo a mano', slug: null, reason: 'regolazione manuale ok' } ] },
    { id: 'app', question: 'Ti serve comandarlo dal telefono?', seoIntent: 'purificatore d\'aria con app wifi',
      options: [
        { id: 'si', label: 'Sì, con app e Wi-Fi', slug: 'con-app-wifi', seoTitle: 'Migliori purificatori d\'aria con app e Wi-Fi', reason: 'controllo da app', must: p => p.attrs.app === true },
        { id: 'no', label: 'Non serve', slug: null, reason: 'app non necessaria' } ] }
  ]
},

/* ============================ SPAZZOLINI ELETTRICI (nuova, 16 set) ============================ */
{
  id: 'spazzolini-elettrici', name: 'Spazzolini elettrici', short: 'Spazzolini', singular: 'spazzolino elettrico',
  seasonWhy: 'Lo spazzolino elettrico è uno dei regali più comprati: novembre e dicembre concentrano ricerche e ribassi, con il Black Friday come momento migliore per comprarlo.',
  keywords: 'spazzolino elettrico,spazzolino sonico,spazzolino oscillante,oral-b,philips sonicare,io series,vitality,pro series,testine,sensore di pressione,gengive sensibili,igiene orale',
  dept: 'Cura della persona',
  season: { peak: [11, 12], warm: [1, 10], label: 'Picco su Black Friday e Natale', curve: 'regali' },
  commission: 0.05,
  claim: 'Oscillante o sonico, sensore di pressione, autonomia per i viaggi: dicci come ti lavi i denti e ti diciamo quale prendere.',
  why: 'Decine di modelli quasi identici della stessa marca che cambiano per modalità, sensori e testine incluse, prezzi da 25 a 300 euro e testine di ricambio che pesano sul costo negli anni. Chi compra non sa quali funzioni servono davvero.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'miglior spazzolino elettrico [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 40 €', slug: 'sotto-40-euro', seoTitle: 'Migliori spazzolini elettrici sotto 40 euro', reason: 'budget fino a 40 €', must: p => p.price <= 40 },
        { id: 'b', label: 'Fino a 80 €', slug: 'sotto-80-euro', seoTitle: 'Migliori spazzolini elettrici sotto 80 euro', reason: 'budget fino a 80 €', must: p => p.price <= 80 },
        { id: 'c', label: 'Fino a 150 €', slug: 'sotto-150-euro', seoTitle: 'Migliori spazzolini elettrici sotto 150 euro', reason: 'budget fino a 150 €', must: p => p.price <= 150 },
        { id: 'd', label: 'Nessun limite, voglio il migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori spazzolini elettrici in assoluto', reason: 'nessun limite di budget', score: p => (p.quality >= 8 ? 2 : 0) + (p.attrs.pressureSensor === true ? 1 : 0) } ] },
    { id: 'tecnologia', question: 'Che tipo di pulizia preferisci?', seoIntent: 'spazzolino elettrico oscillante o sonico',
      options: [
        { id: 'osc', label: 'Testina tonda che ruota (oscillante)', slug: 'oscillanti', seoTitle: 'Migliori spazzolini elettrici oscillanti-rotanti', reason: 'tecnologia oscillante', must: p => p.attrs.tech === 'oscillating' },
        { id: 'son', label: 'Testina allungata che vibra (sonico)', slug: 'sonici', seoTitle: 'Migliori spazzolini elettrici sonici', reason: 'tecnologia sonica', must: p => p.attrs.tech === 'sonic' },
        { id: 'ind', label: 'Non so, consigliami tu', slug: null, reason: 'tecnologia indifferente' } ] },
    { id: 'gengive', question: 'Hai gengive sensibili o tendi a spazzolare troppo forte?', seoIntent: 'spazzolino elettrico con sensore di pressione per gengive sensibili',
      options: [
        { id: 'si', label: 'Sì, voglio un avviso se premo troppo', slug: 'con-sensore-di-pressione', seoTitle: 'Migliori spazzolini elettrici con sensore di pressione', reason: 'gengive sensibili', must: p => p.attrs.pressureSensor === true, score: p => (p.attrs.modes >= 3 ? 1 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'nessuna esigenza per le gengive' } ] },
    { id: 'viaggi', question: 'Lo porti spesso in viaggio?', seoIntent: 'spazzolino elettrico da viaggio con batteria lunga',
      options: [
        { id: 'si', label: 'Sì, deve durare almeno due settimane', slug: 'con-batteria-lunga-durata', seoTitle: 'Migliori spazzolini elettrici con batteria a lunga durata', reason: 'uso in viaggio', must: p => p.attrs.batteryDays >= 14, score: p => (p.attrs.travelCase === true ? 2 : 0) },
        { id: 'no', label: 'No, resta in bagno', slug: null, reason: 'uso domestico' } ] },
    { id: 'app', question: 'Ti interessa un\'app che ti guidi mentre ti lavi i denti?', seoIntent: 'spazzolino elettrico con app bluetooth',
      options: [
        { id: 'si', label: 'Sì, con app e Bluetooth', slug: 'con-app', seoTitle: 'Migliori spazzolini elettrici con app', reason: 'app di guida', must: p => p.attrs.btApp === true },
        { id: 'no', label: 'Non serve', slug: null, reason: 'app non necessaria', score: p => (p.attrs.timer === true ? 1 : 0) } ] },
    { id: 'famiglia', question: 'Lo userete in più persone?', seoIntent: 'spazzolino elettrico con più testine per famiglia',
      options: [
        { id: 'si', label: 'Sì, servono più testine', slug: 'con-piu-testine', seoTitle: 'Migliori spazzolini elettrici con più testine incluse', reason: 'uso in famiglia', must: p => p.attrs.heads >= 2 },
        { id: 'no', label: 'No, solo io', slug: null, reason: 'uso personale' } ] }
  ]
},

/* ============================ CUFFIE E AURICOLARI BLUETOOTH (nuova, 19 set) ============================ */
{
  id: 'cuffie-bluetooth', name: 'Cuffie e auricolari bluetooth', short: 'Cuffie bluetooth', singular: 'paio di cuffie bluetooth',
  seasonWhy: 'Le cuffie sono tra i regali più cercati: Black Friday e Natale concentrano domanda e ribassi, con un secondo momento a settembre per il rientro a scuola e al lavoro.',
  keywords: 'cuffie bluetooth,auricolari bluetooth,auricolari true wireless,cuffie over-ear,cancellazione del rumore,anc,multipoint,cuffie wireless,auricolari sport,cuffie da viaggio,sony,bose,apple airpods,jbl,soundcore',
  dept: 'Elettronica',
  season: { peak: [11, 12], warm: [9, 1], label: 'Picco su Black Friday e Natale, secondo picco al rientro di settembre', curve: 'regali' },
  commission: 0.03,
  claim: 'Sopra le orecchie o dentro, cancellazione del rumore, autonomia, sport o ufficio: dicci come le userai e ti diciamo quali prendere.',
  why: 'Centinaia di modelli da 20 a 450 euro, sigle come ANC, multipoint, IPX4 e LDAC che il cliente non sa pesare, e autonomie dichiarate in modi diversi da marca a marca. Scegliere senza sapere cosa conta porta a pagare funzioni inutili o a restare senza quella che serviva.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'migliori cuffie bluetooth [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 50 €', slug: 'sotto-50-euro', seoTitle: 'Migliori cuffie bluetooth sotto 50 euro', reason: 'budget fino a 50 €', must: p => p.price <= 50 },
        { id: 'b', label: 'Fino a 100 €', slug: 'sotto-100-euro', seoTitle: 'Migliori cuffie bluetooth sotto 100 euro', reason: 'budget fino a 100 €', must: p => p.price <= 100 },
        { id: 'c', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Migliori cuffie bluetooth sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'd', label: 'Nessun limite, voglio il migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori cuffie bluetooth in assoluto', reason: 'nessun limite di budget', score: p => (p.quality >= 8 ? 2 : 0) + (p.attrs.anc === true ? 1 : 0) } ] },
    { id: 'formato', question: 'Le preferisci sopra le orecchie o dentro?', seoIntent: 'cuffie over-ear o auricolari true wireless',
      options: [
        { id: 'over', label: 'Sopra le orecchie (archetto)', slug: 'over-ear', seoTitle: 'Migliori cuffie bluetooth over-ear', reason: 'cuffie ad archetto', must: p => p.attrs.form === 'over' || p.attrs.form === 'on' },
        { id: 'inear', label: 'Auricolari senza fili', slug: 'auricolari-true-wireless', seoTitle: 'Migliori auricolari bluetooth true wireless', reason: 'auricolari in-ear', must: p => p.attrs.form === 'inear' },
        { id: 'ind', label: 'Non so, consigliami tu', slug: null, reason: 'formato indifferente' } ] },
    { id: 'rumore', question: 'Ti serve isolarti dal rumore (treno, aereo, open space)?', seoIntent: 'migliori cuffie con cancellazione attiva del rumore',
      options: [
        { id: 'si', label: 'Sì, voglio la cancellazione attiva del rumore', slug: 'con-cancellazione-rumore', seoTitle: 'Migliori cuffie bluetooth con cancellazione del rumore', reason: 'cancellazione del rumore', must: p => p.attrs.anc === true, score: p => (p.quality >= 8 ? 1 : 0) },
        { id: 'no', label: 'No, non mi serve', slug: null, reason: 'cancellazione non necessaria' } ] },
    { id: 'uso', question: 'Dove le userai di più?', seoIntent: 'cuffie bluetooth per sport, viaggio o ufficio',
      options: [
        { id: 'sport', label: 'Facendo sport, anche sotto la pioggia', slug: 'per-sport', seoTitle: 'Migliori cuffie bluetooth per lo sport', reason: 'uso sportivo', must: p => ['IPX4', 'IPX5', 'IPX6', 'IPX7', 'IPX8', 'IP54', 'IP55', 'IP57', 'IP67', 'IP68'].indexOf(p.attrs.ip) >= 0, score: p => (p.attrs.form === 'inear' ? 2 : 0) },
        { id: 'viaggio', label: 'In viaggio', slug: null, reason: 'uso in viaggio', score: p => (p.attrs.anc === true ? 2 : 0) + (p.attrs.playHours >= 30 ? 1 : 0) },
        { id: 'ufficio', label: 'In ufficio e in videochiamata', slug: 'per-ufficio-e-videochiamate', seoTitle: 'Migliori cuffie bluetooth per ufficio e videochiamate', reason: 'ufficio e chiamate', must: p => p.attrs.multipoint === true, score: p => (p.attrs.anc === true ? 1 : 0) },
        { id: 'casa', label: 'Un po\' ovunque', slug: null, reason: 'uso misto' } ] },
    { id: 'autonomia', question: 'Quanto contano le ore di batteria?', seoIntent: 'cuffie bluetooth con batteria a lunga durata',
      options: [
        { id: 'si', label: 'Molto: non voglio ricaricarle spesso', slug: 'con-batteria-lunga-durata', seoTitle: 'Migliori cuffie bluetooth con batteria a lunga durata', reason: 'autonomia lunga', must: p => (p.attrs.form === 'inear' && p.attrs.playHours >= 8) || ((p.attrs.form === 'over' || p.attrs.form === 'on') && p.attrs.playHours >= 40) },
        { id: 'no', label: 'Le ricarico senza problemi', slug: null, reason: 'autonomia standard' } ] },
    { id: 'suono', question: 'Ascolti musica in alta qualità (LDAC, aptX, Hi-Res)?', seoIntent: 'cuffie bluetooth hi-res con codec ldac',
      options: [
        { id: 'si', label: 'Sì, voglio un codec ad alta risoluzione', slug: 'hi-res-ldac', seoTitle: 'Migliori cuffie bluetooth Hi-Res con LDAC o aptX', reason: 'codec ad alta risoluzione', must: p => p.attrs.hiRes === true },
        { id: 'no', label: 'No, mi basta un buon suono', slug: null, reason: 'codec standard' } ] }
  ]
},

/* ============================ CASSE BLUETOOTH (nuova, 21 set) ============================ */
{
  id: 'casse-bluetooth', name: 'Casse bluetooth', short: 'Casse bluetooth', singular: 'cassa bluetooth',
  seasonWhy: 'La cassa bluetooth è un regalo classico: Black Friday e Natale concentrano domanda e ribassi, con un secondo picco a inizio estate per mare e piscina.',
  keywords: 'cassa bluetooth,speaker bluetooth,cassa portatile,cassa impermeabile,cassa da doccia,cassa per feste,jbl,bose,sony,ultimate ears,marshall,soundcore,abbinamento stereo,ip67',
  dept: 'Elettronica',
  season: { peak: [11, 12], warm: [5, 8], label: 'Picco su Black Friday e Natale, secondo picco a inizio estate', curve: 'regali' },
  commission: 0.03,
  claim: 'Da tasca o da festa, in casa o in spiaggia, una o due in stereo: dicci dove la userai e ti diciamo quale prendere.',
  why: 'Centinaia di casse da 20 a 400 euro, potenze dichiarate in modi diversi, sigle come IP67 che il cliente non sa pesare, e autonomie che cambiano molto col volume. Si finisce a pagare watt che non servono o a prendere una cassa che non regge l\'acqua.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'migliore cassa bluetooth [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 50 €', slug: 'sotto-50-euro', seoTitle: 'Migliori casse bluetooth sotto 50 euro', reason: 'budget fino a 50 €', must: p => p.price <= 50 },
        { id: 'b', label: 'Fino a 100 €', slug: 'sotto-100-euro', seoTitle: 'Migliori casse bluetooth sotto 100 euro', reason: 'budget fino a 100 €', must: p => p.price <= 100 },
        { id: 'c', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Migliori casse bluetooth sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'd', label: 'Nessun limite, voglio la migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori casse bluetooth in assoluto', reason: 'nessun limite di budget', score: p => (p.quality >= 8 ? 2 : 0) + (Number.isFinite(p.attrs.watts) && p.attrs.watts >= 30 ? 1 : 0) } ] },
    { id: 'dove', question: 'Dove la userai di più?', seoIntent: 'cassa bluetooth per mare, feste o viaggio',
      options: [
        { id: 'acqua', label: 'Al mare, in piscina o sotto la doccia', slug: 'impermeabili', seoTitle: 'Migliori casse bluetooth impermeabili', reason: 'uso vicino all\'acqua', must: p => ['IPX7', 'IPX8', 'IP67', 'IP68'].indexOf(p.attrs.ipRating) >= 0, score: p => (p.attrs.floats === true ? 2 : 0) },
        { id: 'feste', label: 'Alle feste, in giardino', slug: 'per-feste', seoTitle: 'Migliori casse bluetooth per feste', reason: 'volume per le feste', must: p => Number.isFinite(p.attrs.watts) && p.attrs.watts >= 30, score: p => (p.attrs.stereoPair === true ? 1 : 0) },
        { id: 'viaggio', label: 'In viaggio, nello zaino', slug: 'piccole-da-viaggio', seoTitle: 'Migliori casse bluetooth piccole da viaggio', reason: 'da portare in giro', must: p => Number.isFinite(p.attrs.weight) && p.attrs.weight <= 0.6 },
        { id: 'casa', label: 'Soprattutto in casa', slug: null, reason: 'uso domestico', score: p => (p.quality >= 8 ? 1 : 0) } ] },
    { id: 'autonomia', question: 'Quanto contano le ore di batteria?', seoIntent: 'cassa bluetooth con batteria a lunga durata',
      options: [
        { id: 'si', label: 'Molto: la voglio tutto il giorno senza ricaricare', slug: 'con-batteria-lunga-durata', seoTitle: 'Migliori casse bluetooth con batteria a lunga durata', reason: 'autonomia lunga', must: p => Number.isFinite(p.attrs.hours) && p.attrs.hours >= 20 },
        { id: 'no', label: 'La ricarico senza problemi', slug: null, reason: 'autonomia standard' } ] },
    { id: 'stereo', question: 'Vuoi poterne abbinare due per un suono stereo o più forte?', seoIntent: 'casse bluetooth abbinabili in stereo',
      options: [
        { id: 'si', label: 'Sì, voglio abbinarle', slug: 'abbinabili-in-stereo', seoTitle: 'Migliori casse bluetooth abbinabili in stereo', reason: 'abbinamento di due casse', must: p => p.attrs.stereoPair === true },
        { id: 'no', label: 'No, me ne basta una', slug: null, reason: 'cassa singola' } ] },
    { id: 'chiamate', question: 'La userai anche per telefonare in vivavoce?', seoIntent: 'cassa bluetooth con microfono vivavoce',
      options: [
        { id: 'si', label: 'Sì, serve il microfono', slug: 'con-vivavoce', seoTitle: 'Migliori casse bluetooth con vivavoce', reason: 'chiamate in vivavoce', must: p => p.attrs.mic === true },
        { id: 'no', label: 'No, solo musica', slug: null, reason: 'solo musica' } ] }
  ]
},

/* ============================ SICUREZZA CASA SMART ============================ */
{
  id: 'sicurezza-casa-smart', name: 'Sicurezza casa smart', short: 'Sicurezza casa', singular: 'telecamera di sorveglianza',
  keywords: 'telecamera sorveglianza,videosorveglianza,camera ip,imou,campanello video,serratura smart,sicurezza casa,antifurto,allarme',
  dept: 'Casa',
  season: { peak: [11, 12], warm: [1, 10], label: 'Picco su Black Friday e Natale', curve: 'regali' },
  commission: 0.08,
  claim: 'Interno o esterno, cablata o a batteria, con Wi-Fi o SIM 4G: scegli in base a dove la metti e cosa vuoi vedere, non in base ai megapixel.',
  why: "Comprare la telecamera sbagliata vuol dire scoprire che il Wi-Fi non arriva fin lì, che il video notturno è inutilizzabile, o che registri solo in cloud a pagamento.",
  facets: [
    { id: 'posizione', question: 'Dove la metti?', seoIntent: 'migliore telecamera sorveglianza [posizione]',
      options: [
        { id: 'interno', label: 'Dentro casa', slug: 'interno', seoTitle: 'Migliori telecamere interno casa', reason: 'uso interno', must: p => p.attrs && p.attrs.posizione !== 'esterno' },
        { id: 'esterno', label: 'In giardino, cortile, ingresso', slug: 'esterno', seoTitle: 'Migliori telecamere esterno casa', reason: 'uso esterno', must: p => p.attrs && (p.attrs.posizione === 'esterno' || p.attrs.posizione === 'universale') }
      ] },
    { id: 'rete', question: "Com'è la copertura Wi-Fi dove la metti?",
      options: [
        { id: 'wifi', label: 'Ottima, Wi-Fi arriva stabile', slug: 'wifi', reason: 'Wi-Fi stabile' },
        { id: '4g', label: 'Debole o assente, mi serve 4G', slug: 'con-sim-4g', seoTitle: 'Migliori telecamere sorveglianza con SIM 4G', reason: 'serve 4G integrato', must: p => p.attrs && p.attrs.quattroG === true }
      ] },
    { id: 'alim', question: "Come l'alimenti?",
      options: [
        { id: 'presa', label: 'Ho una presa vicino', slug: null, reason: 'cablata' },
        { id: 'batt', label: 'Nessuna presa, serve a batteria', slug: 'a-batteria', seoTitle: 'Migliori telecamere sorveglianza a batteria', reason: 'alimentata a batteria', must: p => p.attrs && (p.attrs.batteria === true || p.attrs.solare === true) }
      ] },
    { id: 'budget', question: 'Qual è il tuo budget massimo?',
      options: [
        { id: 'a', label: 'Fino a 70 €', slug: 'sotto-70-euro', seoTitle: 'Migliori telecamere sorveglianza sotto 70 euro', reason: 'budget fino a 70 €', must: p => p.price <= 70 },
        { id: 'b', label: 'Fino a 180 €', slug: 'sotto-180-euro', seoTitle: 'Migliori telecamere sorveglianza sotto 180 euro', reason: 'budget fino a 180 €', must: p => p.price <= 180 },
        { id: 'c', label: 'Nessun limite', slug: 'migliori-in-assoluto', seoTitle: 'Migliori telecamere sorveglianza', reason: 'nessun limite' }
      ] }
  ]
},

/* ============================ UFFICIO PICCOLA ATTIVITA' (B2B) ============================ */
{
  id: 'ufficio-piccola-attivita', name: 'Ufficio e piccola attività', short: 'Ufficio piccola attività', singular: 'attrezzatura per ufficio',
  keywords: 'ufficio,piccolo ufficio,partita iva,pmi,smart working,home office,stampante multifunzione,ups,gruppo continuita,nas,scanner,shredder,distruggidocumenti,router aziendale,webcam conference,headset,cuffie conference,detraibile,ammortizzabile,bene strumentale,fatturazione iva,amazon business',
  dept: 'Ufficio',
  season: { peak: [1, 9], warm: [10, 11], label: 'Picco a gennaio col rinnovo beni strumentali e a settembre col rientro', curve: 'rientro' },
  commission: 0.06,
  claim: 'Attrezzatura per piccoli uffici e partite IVA: dura anni, è fiscalmente detraibile, non la cambi fra sei mesi. Qui ti diciamo cosa vale ogni euro.',
  why: 'Un buyer di un ufficio piccolo compra una volta sola e deve farsi durare. Serve una guida che pensi in anni di garanzia e deducibilità, non in listini aggiornati.',
  facets: [
    { id: 'cosa', question: 'Cosa stai cercando?', seoIntent: 'attrezzatura ufficio piccola attività [tipo]',
      options: [
        { id: 'stamp', label: 'Stampante multifunzione', slug: 'stampante-multifunzione-ufficio', seoTitle: 'Migliori stampanti multifunzione per ufficio piccolo', reason: 'stampante multifunzione', must: p => p.attrs && p.attrs.tipo === 'stampante' },
        { id: 'ups', label: 'UPS / gruppo di continuità', slug: 'gruppo-continuita-ups', seoTitle: 'Migliori UPS gruppo di continuità per ufficio', reason: 'UPS gruppo di continuità', must: p => p.attrs && p.attrs.tipo === 'ups' },
        { id: 'nas', label: 'NAS / server di archiviazione', slug: 'nas-archiviazione-ufficio', seoTitle: 'Migliori NAS per piccola attività e ufficio', reason: 'NAS archiviazione', must: p => p.attrs && p.attrs.tipo === 'nas' },
        { id: 'scan', label: 'Scanner documenti', slug: 'scanner-documenti-ufficio', seoTitle: 'Migliori scanner documenti per ufficio', reason: 'scanner documenti', must: p => p.attrs && p.attrs.tipo === 'scanner' },
        { id: 'shred', label: 'Distruggidocumenti', slug: 'distruggidocumenti-ufficio', seoTitle: 'Migliori distruggidocumenti per ufficio', reason: 'distruggidocumenti', must: p => p.attrs && p.attrs.tipo === 'shredder' },
        { id: 'router', label: 'Router / rete per ufficio', slug: 'router-ufficio-piccola-attivita', seoTitle: 'Migliori router per ufficio piccolo e studio', reason: 'router aziendale', must: p => p.attrs && p.attrs.tipo === 'router' },
        { id: 'conf', label: 'Webcam o cuffie per videochiamate', slug: 'webcam-cuffie-conference', seoTitle: 'Migliori webcam e cuffie per videochiamate di lavoro', reason: 'conference / headset', must: p => p.attrs && (p.attrs.tipo === 'webcam' || p.attrs.tipo === 'headset') }
      ] },
    { id: 'team', question: 'Quante persone usano la postazione?', seoIntent: 'attrezzatura ufficio per [team size]',
      options: [
        { id: 'solo', label: 'Solo io (partita IVA, home office)', slug: 'home-office-partita-iva', seoTitle: 'Attrezzatura home office per partita IVA', reason: 'uso singolo', score: p => (p.price <= 400 ? 1 : 0) },
        { id: 'small', label: 'Da 2 a 5 persone', slug: null, reason: 'team 2-5 persone' },
        { id: 'medio', label: 'Da 6 a 15 persone', slug: 'ufficio-pmi-fino-15-persone', seoTitle: 'Attrezzatura ufficio PMI fino a 15 persone', reason: 'ufficio PMI', score: p => (p.attrs && p.attrs.workload === 'heavy' ? 2 : 0) }
      ] },
    { id: 'budget', question: 'Qual è il tuo budget indicativo?',
      options: [
        { id: 'a', label: 'Fino a 200 €', slug: 'sotto-200-euro', seoTitle: 'Attrezzatura ufficio sotto 200 euro', reason: 'budget fino a 200 €', must: p => p.price <= 200 },
        { id: 'b', label: 'Fino a 500 €', slug: 'sotto-500-euro', seoTitle: 'Attrezzatura ufficio sotto 500 euro', reason: 'budget fino a 500 €', must: p => p.price <= 500 },
        { id: 'c', label: 'Fino a 1000 €', slug: 'sotto-1000-euro', seoTitle: 'Attrezzatura ufficio sotto 1000 euro', reason: 'budget fino a 1000 €', must: p => p.price <= 1000 },
        { id: 'd', label: 'Non ho un tetto, voglio il migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliore attrezzatura ufficio in assoluto', reason: 'nessun limite' }
      ] },
    { id: 'detraibile', question: 'Ti serve fattura con IVA detraibile?', seoIntent: 'attrezzatura ufficio detraibile partita iva',
      options: [
        { id: 'si', label: 'Sì, è fondamentale', slug: 'detraibile-partita-iva', seoTitle: 'Attrezzatura ufficio detraibile per partita IVA', reason: 'serve fattura con IVA', score: p => 1 },
        { id: 'no', label: 'No, uso privato', slug: null, reason: 'uso privato' }
      ] }
  ]
},

/* ============================ RACCHETTE DA TENNIS ============================ */
/* Nuovo verticale (22/11/26): ponte editoriale con AnalisiTennis.it → PickForMe.
   Chi legge pronostici/analisi tennis spesso gioca e cerca attrezzatura. Intake
   prodotti con ASIN Amazon.it verificati rimandato all'agente IT quotidiano
   (ha Chrome logged e puo' confermare ASIN/prezzi in diretta). */
{
  id: 'racchette-tennis', name: 'Racchette da tennis', short: 'Racchette tennis', singular: 'racchetta da tennis',
  seasonWhy: 'A gennaio con gli Australian Open e da maggio con Roland Garros + stagione sui campi la domanda sale. Il periodo autunno-inverno e\' buono per cambiare racchetta senza rinunciare a partite settimanali: hai tutto il tempo per abituarti al nuovo peso prima della stagione che conta.',
  keywords: 'racchetta,racchetta tennis,racchette,babolat,wilson,head,yonex,dunlop,pure drive,pure aero,blade,pro staff,speed,boom,ezone,extreme,clash,attrezzatura tennis,tennis',
  dept: 'Sport',
  season: { peak: [1, 5, 6], warm: [2, 3, 4, 7, 8], label: 'Picco a gennaio (Australian Open) e primavera (Roland Garros, stagione)', curve: 'stagione' },
  commission: 0.04,
  claim: 'Peso, bilanciamento, pattern corde, piano di gioco: 4 variabili decidono quale e\' giusta per te. Non quella che usa il tuo giocatore preferito.',
  why: 'La scelta della racchetta e\' tra le decisioni piu\' personali nello sport amatoriale: dipende dal tuo stile (piatto vs top spin), dalla forza del braccio, dal livello (principiante, intermedio, agonista). Perfetta per un motore di raccomandazione.',
  facets: [
    { id: 'livello', question: 'Qual e\' il tuo livello?', seoIntent: 'migliore racchetta tennis per [livello]',
      options: [
        { id: 'p', label: 'Principiante (prime volte in campo)', slug: 'per-principianti', seoTitle: 'Migliori racchette da tennis per principianti', reason: 'livello principiante', score: p => (p.attrs.weight && p.attrs.weight <= 280 ? 3 : p.attrs.weight > 310 ? -3 : 0) + (p.attrs.headSize >= 100 ? 2 : -1) },
        { id: 'i', label: 'Intermedio (gioco regolarmente, 1-2 volte a settimana)', slug: 'per-intermedi', seoTitle: 'Migliori racchette da tennis per intermedi', reason: 'livello intermedio', score: p => (p.attrs.weight >= 285 && p.attrs.weight <= 305 ? 3 : 0) },
        { id: 'a', label: 'Avanzato / agonista (tornei, allenamenti frequenti)', slug: 'per-agonisti', seoTitle: 'Migliori racchette da tennis per agonisti', reason: 'livello avanzato o agonistico', score: p => (p.attrs.weight >= 300 ? 3 : -2) + (p.attrs.swingweight >= 320 ? 2 : 0) } ] },
    { id: 'budget', question: 'Qual e\' il tuo budget massimo?', seoIntent: 'migliore racchetta tennis [fascia prezzo]',
      options: [
        { id: 'a', label: 'Fino a 80 €', slug: 'sotto-80-euro', seoTitle: 'Migliori racchette da tennis sotto 80 euro', reason: 'budget fino a 80 €', must: p => p.price <= 80 },
        { id: 'b', label: 'Fino a 150 €', slug: 'sotto-150-euro', seoTitle: 'Migliori racchette da tennis sotto 150 euro', reason: 'budget fino a 150 €', must: p => p.price <= 150 },
        { id: 'c', label: 'Fino a 250 €', slug: 'sotto-250-euro', seoTitle: 'Migliori racchette da tennis sotto 250 euro', reason: 'budget fino a 250 €', must: p => p.price <= 250 },
        { id: 'd', label: 'Nessun limite, voglio la migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori racchette da tennis in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'stile', question: 'Che tipo di gioco fai?', seoIntent: 'racchetta tennis per top spin / piatto / controllo',
      options: [
        { id: 'ts', label: 'Top spin: colpi carichi, molta rotazione', slug: 'per-top-spin', seoTitle: 'Migliori racchette da tennis per top spin', reason: 'stile top spin', score: p => (p.attrs.stringPattern === '16x19' ? 3 : p.attrs.stringPattern === '16x20' ? 1 : -1) + (p.attrs.headSize >= 100 ? 1 : 0) },
        { id: 'pi', label: 'Piatto: colpi diretti, poca rotazione', slug: 'per-piatto', seoTitle: 'Migliori racchette da tennis per gioco piatto', reason: 'stile piatto', score: p => (p.attrs.stringPattern === '18x20' ? 3 : p.attrs.stringPattern === '16x20' ? 1 : -1) + (p.attrs.weight >= 305 ? 1 : 0) },
        { id: 'co', label: 'Controllo e varieta\' (slice, volee, misura)', slug: 'per-controllo', seoTitle: 'Migliori racchette da tennis per il controllo', reason: 'stile controllo', score: p => (p.attrs.stringPattern === '18x20' ? 2 : 0) + (p.attrs.headSize <= 98 ? 2 : -1) + (p.attrs.weight >= 310 ? 1 : 0) } ] },
    { id: 'braccio', question: 'Hai avuto problemi al braccio o al gomito?', seoIntent: 'racchetta tennis per gomito del tennista',
      options: [
        { id: 'si', label: 'Si\', soffro (o ho sofferto) di gomito del tennista', slug: 'per-gomito-del-tennista', seoTitle: 'Migliori racchette da tennis per il gomito del tennista', reason: 'problema braccio/gomito', score: p => (p.attrs.armFriendly ? 4 : p.attrs.weight < 290 ? -2 : 0) + (p.attrs.stiffness && p.attrs.stiffness <= 63 ? 2 : p.attrs.stiffness >= 70 ? -3 : 0) },
        { id: 'no', label: 'No, nessun problema', slug: null, reason: 'nessun problema braccio' } ] },
    { id: 'superficie', question: 'Su che superficie giochi prevalentemente?', seoIntent: 'racchetta tennis per terra rossa / cemento',
      options: [
        { id: 'tr', label: 'Terra rossa', slug: null, reason: 'terra rossa', score: p => (p.attrs.stringPattern === '16x19' ? 2 : 0) },
        { id: 'ce', label: 'Cemento / sintetico', slug: null, reason: 'cemento o sintetico' },
        { id: 'er', label: 'Erba', slug: null, reason: 'erba', score: p => (p.attrs.weight >= 305 ? 1 : 0) },
        { id: 'mi', label: 'Un po\' di tutto', slug: null, reason: 'superfici miste' } ] },
    { id: 'frequenza', question: 'Quanto spesso giochi?', seoIntent: 'racchetta tennis per uso occasionale / frequente',
      options: [
        { id: 'oc', label: 'Occasionalmente (1-2 volte al mese)', slug: null, reason: 'uso occasionale', score: p => (p.attrs.weight <= 290 ? 1 : 0) },
        { id: 'se', label: 'Settimanalmente (1-2 volte a settimana)', slug: null, reason: 'uso settimanale' },
        { id: 'in', label: 'Spesso (3+ volte a settimana)', slug: null, reason: 'uso intenso', score: p => (p.attrs.weight >= 300 ? 2 : -1) } ] }
  ]
},
/* === TENNIS GEAR - Scarpe, Dampener, Borse, Incordature ===
   Aggiunti 22/11/2026. Intent viene da AnalisiTennis.it (sito editoriale tennis
   sorella): chi legge analisi partite finisce qui per attrezzatura. */
{
  id: 'scarpe-tennis', name: 'Scarpe da tennis', short: 'Scarpe tennis', singular: 'paio di scarpe da tennis',
  seasonWhy: 'Le scarpe da tennis si cambiano ogni 6-12 mesi a seconda dell\'intensita\' di gioco. Chi inizia la stagione dei circoli a marzo-aprile dovrebbe arrivare con scarpe nuove: comprare a gennaio-febbraio permette di provarle in allenamento prima della stagione dei match.',
  keywords: 'scarpe tennis,scarpe da tennis,scarpa tennis,adidas tennis,asics tennis,head scarpe,barricade,gel resolution,gel dedicate,courtjam,solution speed,terra rossa,terra battuta,cemento,all court,clay,hard court',
  dept: 'Sport',
  season: { peak: [3, 4, 5], warm: [1, 2, 6, 7, 8, 9], label: 'Picco a inizio stagione (marzo-maggio) e secondo picco settembre', curve: 'stagione' },
  commission: 0.04,
  claim: 'La scarpa da tennis giusta non e\' la piu\' bella: dipende da dove giochi (terra o cemento), quanto pesi, se hai problemi al tallone o alle caviglie.',
  why: 'Terra rossa e cemento richiedono suole diverse: battistrada herringbone per slide sulla terra, tasselli bassi per cemento. Chi gioca su una sola superficie puo\' prendere scarpa dedicata; chi alterna sceglie un all-court. La scelta sbagliata porta a scivolate inaspettate o consumo precoce.',
  facets: [
    { id: 'superficie', question: 'Su che superficie giochi di piu\'?', seoIntent: 'scarpe tennis per [superficie]',
      options: [
        { id: 'cl', label: 'Terra rossa / terra battuta', slug: 'per-terra-rossa', seoTitle: 'Migliori scarpe da tennis per terra rossa', reason: 'terra rossa', score: p => (p.attrs.surface === 'clay' ? 4 : p.attrs.surface === 'all-court' ? 1 : -3) },
        { id: 'ce', label: 'Cemento o sintetico (hard court)', slug: 'per-cemento', seoTitle: 'Migliori scarpe da tennis per cemento', reason: 'cemento o sintetico', score: p => (p.attrs.surface === 'hard' ? 4 : p.attrs.surface === 'all-court' ? 2 : -2) },
        { id: 'ac', label: 'Un po\' di tutto (all court)', slug: 'all-court', seoTitle: 'Migliori scarpe da tennis all court', reason: 'misto superfici', score: p => (p.attrs.surface === 'all-court' ? 3 : 0) } ] },
    { id: 'livello', question: 'Qual e\' il tuo livello?', seoIntent: 'scarpe tennis per [livello]',
      options: [
        { id: 'p', label: 'Principiante / occasionale', slug: 'per-principianti', seoTitle: 'Migliori scarpe da tennis per principianti', reason: 'livello principiante', score: p => (p.attrs.level === 'principiante' ? 3 : p.attrs.level === 'intermedio' ? 1 : -1), must: p => p.price <= 90 },
        { id: 'i', label: 'Intermedio (1-2 volte a settimana)', slug: 'per-intermedi', seoTitle: 'Migliori scarpe da tennis per intermedi', reason: 'livello intermedio', score: p => (p.attrs.level === 'intermedio' ? 3 : 0) },
        { id: 'a', label: 'Avanzato / agonista', slug: 'per-agonisti', seoTitle: 'Migliori scarpe da tennis per agonisti', reason: 'livello avanzato', score: p => (p.attrs.level === 'avanzato' ? 3 : -1) } ] },
    { id: 'budget', question: 'Qual e\' il tuo budget?', seoIntent: 'scarpe tennis [fascia prezzo]',
      options: [
        { id: 'a', label: 'Fino a 60 €', slug: 'sotto-60-euro', seoTitle: 'Migliori scarpe da tennis sotto 60 euro', reason: 'budget fino a 60 €', must: p => p.price <= 60 },
        { id: 'b', label: 'Fino a 100 €', slug: 'sotto-100-euro', seoTitle: 'Migliori scarpe da tennis sotto 100 euro', reason: 'budget fino a 100 €', must: p => p.price <= 100 },
        { id: 'c', label: 'Nessun limite, voglio le migliori', slug: 'migliori-in-assoluto', seoTitle: 'Migliori scarpe da tennis in assoluto', reason: 'nessun limite di budget' } ] }
  ]
},
{
  id: 'dampener-tennis', name: 'Antivibranti (dampener) tennis', short: 'Antivibranti tennis', singular: 'antivibrante (dampener)',
  seasonWhy: 'Gli antivibranti vanno cambiati con regolarita\' (1-2 volte all\'anno) perche\' il silicone si indurisce e perde efficacia. Nessun picco stagionale: la domanda e\' costante.',
  keywords: 'antivibranti tennis,dampener,ammortizzatore racchetta,anti vibrazioni,head pro damp,wilson pro feel,djokovic dampener,smorzatore corde,silicone,worm dampener',
  dept: 'Sport',
  season: { peak: [], warm: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: 'Vendita costante tutto l\'anno', curve: 'stabile' },
  commission: 0.04,
  claim: 'Un pezzo di silicone da 5 euro che riduce del 60% le vibrazioni che arrivano al tuo braccio. Senza, dopo 20 anni di gioco, il gomito paga il conto.',
  why: 'Pochi accessori tennis hanno un rapporto costo/beneficio cosi\' chiaro: un dampener costa 5 euro e previene gomito del tennista. Quasi tutti i pro lo usano (eccezioni famose: Federer, che preferisce feedback puro). Due tipi: button (bottone piccolo tra due corde basse) o worm (lungo che copre 5-7 corde).',
  facets: [
    { id: 'tipo', question: 'Che tipo di dampener preferisci?', seoIntent: 'dampener tennis [tipo]',
      options: [
        { id: 'bu', label: 'Button (bottone piccolo, standard)', slug: 'button', seoTitle: 'Migliori dampener button per tennis', reason: 'tipo button', score: p => (p.attrs.type === 'button' || p.attrs.type === 'button-flying' ? 3 : -2) },
        { id: 'wo', label: 'Worm (lungo, copre piu\' corde)', slug: 'worm', seoTitle: 'Migliori dampener worm per tennis', reason: 'tipo worm', score: p => (p.attrs.type === 'worm' ? 3 : -2) },
        { id: 'in', label: 'Non so, scegli tu', slug: null, reason: 'nessuna preferenza tipo' } ] },
    { id: 'budget', question: 'Qual e\' il tuo budget?', seoIntent: 'dampener tennis prezzo',
      options: [
        { id: 'a', label: 'Fino a 5 €', slug: 'sotto-5-euro', seoTitle: 'Migliori dampener tennis sotto 5 euro', reason: 'budget fino a 5 €', must: p => p.price <= 5 },
        { id: 'b', label: 'Fino a 10 €', slug: 'sotto-10-euro', seoTitle: 'Migliori dampener tennis sotto 10 euro', reason: 'budget fino a 10 €', must: p => p.price <= 10 },
        { id: 'c', label: 'Nessun limite', slug: null, reason: 'nessun limite di budget' } ] }
  ]
},
{
  id: 'borse-tennis', name: 'Borse da tennis', short: 'Borse tennis', singular: 'borsa da tennis',
  seasonWhy: 'La borsa si compra all\'inizio della prima stagione in campo e dura 3-5 anni. Nessun picco stagionale netto: si vende tutto l\'anno, con lieve aumento a inizio stagione campi (marzo-aprile).',
  keywords: 'borsa tennis,borsa racchette,head tour,wilson advantage,racquet bag,6r,9r,12r,borsa termica tennis,racchette tennis borsa,zaino tennis',
  dept: 'Sport',
  season: { peak: [3, 4], warm: [1, 2, 5, 6, 7, 8, 9], label: 'Lieve picco a marzo-aprile (apertura stagione circoli)', curve: 'stabile' },
  commission: 0.04,
  claim: 'Non prendi borsa in base a quante racchette hai: prendila in base a quante ne porterai in campo (inclusa la racchetta di scorta per se si rompe una corda).',
  why: 'La scelta della borsa giusta dipende da quante racchette porti (3-6-9-12), se hai bisogno di scomparto termico per proteggere le corde dal caldo auto, e se vuoi scomparto scarpe separato. Pochi scelgono bene al primo giro: tendono a sovra-dimensionare.',
  facets: [
    { id: 'capacita', question: 'Quante racchette porti con te in campo?', seoIntent: 'borsa tennis [n] racchette',
      options: [
        { id: 't', label: '1-3 (gioco amatoriale)', slug: '3-racchette', seoTitle: 'Migliori borse da tennis per 3 racchette', reason: 'capacita 3 racchette', score: p => (p.attrs.capacity >= 3 && p.attrs.capacity <= 6 ? 3 : -1) },
        { id: 's', label: '4-6 (gioco regolare + scorta)', slug: '6-racchette', seoTitle: 'Migliori borse da tennis per 6 racchette', reason: 'capacita 6 racchette', score: p => (p.attrs.capacity >= 6 && p.attrs.capacity <= 9 ? 3 : 0) },
        { id: 'n', label: '7+ (torneo, coach)', slug: '9-racchette', seoTitle: 'Migliori borse da tennis per 9+ racchette', reason: 'capacita 9+ racchette', score: p => (p.attrs.capacity >= 9 ? 3 : -2) } ] },
    { id: 'uso', question: 'Che uso principale fai?', seoIntent: 'borsa tennis per [uso]',
      options: [
        { id: 'am', label: 'Amatoriale settimanale', slug: null, reason: 'uso amatoriale' },
        { id: 'to', label: 'Tornei, trasferte', slug: 'per-tornei', seoTitle: 'Migliori borse da tennis per tornei', reason: 'uso torneo', score: p => (p.attrs.thermal ? 2 : 0) + (p.attrs.shoesCompartment ? 2 : 0) },
        { id: 'co', label: 'Coach, racchette multi-giocatore', slug: null, reason: 'uso coach', score: p => (p.attrs.capacity >= 9 ? 3 : -3) } ] },
    { id: 'extra', question: 'Cosa deve avere la borsa?', seoIntent: 'borsa tennis con [feature]',
      options: [
        { id: 'te', label: 'Scomparto termico per le corde', slug: 'termica', seoTitle: 'Migliori borse da tennis termiche', reason: 'scomparto termico', score: p => (p.attrs.thermal ? 3 : -3) },
        { id: 'sc', label: 'Scomparto scarpe separato', slug: 'con-scomparto-scarpe', seoTitle: 'Migliori borse da tennis con scomparto scarpe', reason: 'scomparto scarpe', score: p => (p.attrs.shoesCompartment ? 3 : -3) },
        { id: 'ne', label: 'Niente di particolare', slug: null, reason: 'nessuna esigenza extra' } ] }
  ]
},
{
  id: 'incordature-tennis', name: 'Corde da tennis (incordature)', short: 'Corde tennis', singular: 'incordatura',
  seasonWhy: 'Le corde vanno cambiate ogni 20-40 ore di gioco (ogni 2-6 mesi per un amatoriale regolare) o quando perdono tensione ("suono sordo"). Picco: inizio stagione (marzo-aprile) quando ci si prepara al campo.',
  keywords: 'corde tennis,incordatura tennis,babolat rpm blast,head velocity,head sonic pro,poliestere tennis,multifilamento,budello,synthetic gut,top spin corde,gomito del tennista corde,matassa 200m',
  dept: 'Sport',
  season: { peak: [3, 4], warm: [1, 2, 5, 6, 7, 8, 9, 10, 11], label: 'Picco a inizio stagione (marzo-aprile)', curve: 'stabile' },
  commission: 0.04,
  claim: 'La corda giusta vale piu\' della racchetta: cambia il feeling piu\' del telaio. Chi gioca con RPM Blast una volta non torna piu\' al Synthetic Gut.',
  why: 'Il tipo di corda (poly, multifilamento, budello) determina il feeling in campo piu\' del telaio: stessa racchetta con due corde diverse sembra due racchette. Scelta dipende da livello, stile (top spin vs piatto) e salute del braccio. La guida comune: poly per top spin, multifilamento per comfort braccio, synthetic gut per principianti.',
  facets: [
    { id: 'tipo', question: 'Che tipo di corda cerchi?', seoIntent: 'corde tennis [tipo]',
      options: [
        { id: 'po', label: 'Poliestere / poly (top spin, controllo)', slug: 'poliestere', seoTitle: 'Migliori corde tennis in poliestere', reason: 'tipo poliestere', score: p => (p.attrs.type === 'polyester' || p.attrs.type === 'polyester-shaped' || p.attrs.type === 'polyester-soft' ? 3 : -2) },
        { id: 'mu', label: 'Multifilamento (comfort, braccio)', slug: 'multifilamento', seoTitle: 'Migliori corde tennis multifilamento', reason: 'tipo multifilamento', score: p => (p.attrs.type === 'multifilament' ? 3 : -2) },
        { id: 'sg', label: 'Synthetic gut / nylon (entry)', slug: 'synthetic-gut', seoTitle: 'Migliori corde tennis synthetic gut', reason: 'tipo synthetic gut', score: p => (p.attrs.type === 'synthetic-gut' ? 3 : -2) } ] },
    { id: 'braccio', question: 'Hai problemi al braccio o al gomito?', seoIntent: 'corde tennis per gomito del tennista',
      options: [
        { id: 'si', label: 'Si\', soffro di gomito del tennista', slug: 'per-gomito-del-tennista', seoTitle: 'Migliori corde tennis per gomito del tennista', reason: 'problema braccio', score: p => (p.attrs.type === 'multifilament' ? 4 : p.attrs.type === 'polyester-soft' ? 2 : p.attrs.type === 'polyester' ? -3 : 0) },
        { id: 'no', label: 'No', slug: null, reason: 'nessun problema braccio' } ] },
    { id: 'formato', question: 'Set singolo o matassa 200m?', seoIntent: 'corde tennis matassa',
      options: [
        { id: 'se', label: 'Set singolo 12m (1 incordatura)', slug: 'set-12m', seoTitle: 'Migliori corde tennis in set da 12 metri', reason: 'set singolo', score: p => (p.attrs.length === 12 ? 3 : -3) },
        { id: 'ma', label: 'Matassa 200m (16+ incordature)', slug: 'matassa-200m', seoTitle: 'Migliori corde tennis in matassa da 200 metri', reason: 'matassa 200m', score: p => (p.attrs.length === 200 ? 3 : -3) } ] },
    { id: 'budget', question: 'Quanto vuoi spendere?', seoIntent: 'corde tennis prezzo',
      options: [
        { id: 'a', label: 'Fino a 10 € (set singolo entry)', slug: 'sotto-10-euro', seoTitle: 'Migliori corde tennis sotto 10 euro', reason: 'budget fino a 10 €', must: p => p.price <= 10 },
        { id: 'b', label: 'Fino a 30 € (set singolo premium)', slug: 'sotto-30-euro', seoTitle: 'Migliori corde tennis sotto 30 euro', reason: 'budget fino a 30 €', must: p => p.price <= 30 },
        { id: 'c', label: 'Nessun limite (matassa 200m)', slug: null, reason: 'nessun limite di budget' } ] }
  ]
},

/* ============================ TERMOCOPERTE (nuova, dic 2026) ============================ */
{
  id: 'termocoperte', name: 'Termocoperte', short: 'Termocoperte', singular: 'termocoperta',
  seasonWhy: 'Termocoperte e scaldaletto esplodono a dicembre, col primo freddo vero e la voglia di scaldare il letto o il divano senza tenere i termosifoni accesi tutta la sera. È anche la finestra degli sconti di Natale, ma i modelli migliori si esauriscono in fretta.',
  keywords: 'termocoperta,termocoperte,scaldaletto,scaldasonno,coprimaterasso termico,coperta elettrica,coperta riscaldante,plaid riscaldante,sottocoperta,coperta termica,singolo,matrimoniale,due zone,spegnimento automatico,lavabile,basso consumo,imetec,beurer',
  dept: 'Casa',
  season: { peak: [11, 12, 1, 2], warm: [10, 3], label: 'Picco da novembre a febbraio', curve: 'inverno' },
  commission: 0.03,
  claim: 'Prima scegli dove la vuoi: sotto le lenzuola per scaldare il letto, o addosso sul divano. Poi la misura. Watt e livelli vengono dopo.',
  why: 'Categoria stagionale col picco a dicembre, scelta confusa (scaldaletto sotto le lenzuola o plaid da divano? singolo o matrimoniale? una o due zone?) e un nodo di sicurezza concreto quando la si lascia accesa di notte. Perfetta per un motore che filtra prima e ordina dopo.',
  facets: [
    { id: 'budget', question: 'Qual è il tuo budget massimo?', seoIntent: 'migliore termocoperta [fascia di prezzo]',
      options: [
        { id: 'a', label: 'Fino a 35 €', slug: 'sotto-35-euro', seoTitle: 'Migliori termocoperte sotto 35 euro', reason: 'budget fino a 35 €', must: p => p.price <= 35 },
        { id: 'b', label: 'Fino a 60 €', slug: 'sotto-60-euro', seoTitle: 'Migliori termocoperte sotto 60 euro', reason: 'budget fino a 60 €', must: p => p.price <= 60 },
        { id: 'c', label: 'Fino a 100 €', slug: 'sotto-100-euro', seoTitle: 'Migliori termocoperte sotto 100 euro', reason: 'budget fino a 100 €', must: p => p.price <= 100 },
        { id: 'd', label: 'Nessun limite, voglio la migliore', slug: 'migliori-in-assoluto', seoTitle: 'Migliori termocoperte in assoluto', reason: 'nessun limite di budget' } ] },
    { id: 'uso', question: 'Dove la userai di più?', seoIntent: 'scaldaletto per il letto o coperta riscaldante da divano',
      options: [
        { id: 'letto', label: 'Nel letto, sotto le lenzuola', slug: 'scaldaletto', seoTitle: 'Migliori scaldaletto elettrici', reason: 'uso nel letto (scaldaletto)', must: p => p.attrs.tipo === 'scaldaletto' },
        { id: 'divano', label: 'Addosso sul divano o in poltrona', slug: 'da-divano', seoTitle: 'Migliori coperte riscaldanti da divano', reason: 'uso addosso sul divano (plaid)', must: p => p.attrs.tipo === 'plaid' },
        { id: 'boh', label: 'Non so ancora, consigliami', slug: null, reason: 'uso da decidere' } ] },
    { id: 'formato', question: 'Per che letto ti serve?', seoIntent: 'scaldaletto singolo o matrimoniale',
      options: [
        { id: 'singolo', label: 'Letto singolo (una persona)', slug: 'singoli', seoTitle: 'Migliori scaldaletto singoli', reason: 'letto singolo', must: p => p.attrs.tipo === 'scaldaletto' && (p.attrs.formato === 'singolo' || p.attrs.formato === 'una-piazza-e-mezza') },
        { id: 'matrimoniale', label: 'Letto matrimoniale (due persone)', slug: 'matrimoniali', seoTitle: 'Migliori scaldaletto matrimoniali', reason: 'letto matrimoniale', must: p => p.attrs.tipo === 'scaldaletto' && (p.attrs.formato === 'matrimoniale' || p.attrs.formato === 'maxi') },
        { id: 'divano', label: 'Non è per il letto, è per il divano', slug: null, reason: 'per il divano' } ] },
    { id: 'coppia', question: 'Dormite in due con gusti di caldo diversi?', seoIntent: 'scaldaletto matrimoniale a due zone separate',
      options: [
        { id: 'si', label: 'Sì, vogliamo regolare i due lati separatamente', slug: null, reason: 'due zone separate', score: p => (p.attrs.zones === 2 ? 6 : -3) },
        { id: 'no', label: 'No, va bene la stessa temperatura', slug: null, reason: 'comando unico' } ] },
    { id: 'sicurezza', question: 'La lascerai accesa a lungo o di notte?', seoIntent: 'termocoperta con spegnimento automatico',
      options: [
        { id: 'si', label: 'Sì, voglio lo spegnimento automatico', slug: 'con-spegnimento-automatico', seoTitle: 'Migliori termocoperte con spegnimento automatico', reason: 'spegnimento automatico', must: p => p.attrs.autoStop === true },
        { id: 'no', label: 'No, la spengo io', slug: null, reason: 'spegnimento manuale' } ] },
    { id: 'lavabile', question: 'Deve essere lavabile in lavatrice?', seoIntent: 'termocoperta lavabile in lavatrice',
      options: [
        { id: 'si', label: 'Sì, voglio poterla lavare in lavatrice', slug: 'lavabili', seoTitle: 'Migliori termocoperte lavabili in lavatrice', reason: 'lavabile in lavatrice', must: p => p.attrs.washable === true },
        { id: 'no', label: 'No, non mi serve', slug: null, reason: 'lavaggio non prioritario' } ] }
  ]
}
];

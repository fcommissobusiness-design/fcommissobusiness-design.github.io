/* ============================================================
   DATABASE PRODOTTI (dati di esempio per il prototipo)
   ------------------------------------------------------------
   ATTENZIONE: prezzi e specifiche sono PLAUSIBILI MA NON VERIFICATI.
   Servono a dimostrare il funzionamento del motore, non a consigliare.
   In produzione ogni riga va compilata da scheda tecnica + test reali
   e versionata con data di ultima verifica (campo `checked`).
   ============================================================ */

window.PRODUCTS = [

  /* ---------- ROBOT ASPIRAPOLVERE ---------- */
  {
    id: 'roborock-q7-max', v: 'robot-aspirapolvere', brand: 'Roborock', name: 'Q7 Max',
    price: 299, quality: 8.4, checked: '2026-08-20',
    tagline: 'Il cavallo di battaglia sotto i 300 euro',
    attrs: { pa: 4200, battery: 180, mop: 'passive', dock: 'none', lidar: true, height: 9.6, bin: 470, carpetLift: true, petBrush: true },
    pros: ['Aspirazione da fascia superiore', 'Lidar preciso, mappe multipiano', 'Spazzola in gomma antigroviglio'],
    cons: ['Il lavaggio è un panno trascinato, non lava davvero', 'Niente stazione autosvuotante'],
    buyIf: "Hai 60-120 m², animali in casa e vuoi la migliore aspirazione sotto i 300 €.",
    avoidIf: 'Il tuo problema vero è lavare il pavimento, non aspirare.'
  },
  {
    id: 'dreame-l10s-ultra', v: 'robot-aspirapolvere', brand: 'Dreame', name: 'L10s Ultra',
    price: 549, quality: 9.0, checked: '2026-08-20',
    tagline: 'Stazione completa senza arrivare al prezzo top',
    attrs: { pa: 10000, battery: 210, mop: 'rotating', dock: 'full', lidar: true, height: 9.7, bin: 350, carpetLift: true, petBrush: true },
    pros: ['Doppio panno rotante che lava sul serio', 'Stazione: svuota, lava e asciuga i panni', 'Solleva i panni sui tappeti'],
    cons: ['La stazione è grande e va collegata vicino a una presa', 'Manutenzione periodica del serbatoio sporco'],
    buyIf: 'Vuoi il pacchetto completo aspira + lava + stazione senza spendere oltre 600 €.',
    avoidIf: 'Hai un monolocale o non hai spazio per una base ingombrante.'
  },
  {
    id: 'ecovacs-n20-pro', v: 'robot-aspirapolvere', brand: 'Ecovacs', name: 'Deebot N20 Pro',
    price: 269, quality: 7.9, checked: '2026-08-20',
    tagline: 'Entry level con stazione di svuotamento',
    attrs: { pa: 8000, battery: 300, mop: 'vibrating', dock: 'dust', lidar: true, height: 10.3, bin: 420, carpetLift: false, petBrush: true },
    pros: ['Potenza dichiarata molto alta per il prezzo', 'Stazione autosvuotante inclusa', 'App matura'],
    cons: ['Non solleva il panno sui tappeti', 'Corpo un po alto, passa male sotto i mobili bassi'],
    buyIf: 'Vuoi la stazione autosvuotante spendendo meno di 300 €.',
    avoidIf: 'Hai molti tappeti e useresti spesso la funzione lavaggio.'
  },
  {
    id: 'roborock-s8-maxv', v: 'robot-aspirapolvere', brand: 'Roborock', name: 'S8 MaxV Ultra',
    price: 1099, quality: 9.4, checked: '2026-08-20',
    tagline: 'Il riferimento assoluto, a un prezzo da riferimento assoluto',
    attrs: { pa: 10000, battery: 180, mop: 'rotating', dock: 'full', lidar: true, height: 9.85, bin: 270, carpetLift: true, petBrush: true },
    pros: ['Riconoscimento ostacoli il migliore della categoria', 'Braccetto laterale per bordi e angoli', 'Stazione con acqua calda e asciugatura'],
    cons: ['Costa quanto tre robot decenti', 'Contenitore polvere piccolo a bordo'],
    buyIf: 'Vuoi il massimo e il budget non è il vincolo principale.',
    avoidIf: 'Cerchi il miglior rapporto qualità/prezzo: qui paghi molto le ultime raffinatezze.'
  },
  {
    id: 'xiaomi-e10', v: 'robot-aspirapolvere', brand: 'Xiaomi', name: 'Robot Vacuum E10',
    price: 149, quality: 6.8, checked: '2026-08-20',
    tagline: 'Il minimo sindacale che funziona',
    attrs: { pa: 4000, battery: 130, mop: 'passive', dock: 'none', lidar: false, height: 8.1, bin: 400, carpetLift: false, petBrush: false },
    pros: ['Prezzo bassissimo', 'Molto basso, passa sotto i mobili', 'Aspirazione dignitosa'],
    cons: ['Navigazione a giroscopio: gira a caso rispetto al lidar', 'Spazzola a setole, i capelli si attorcigliano'],
    buyIf: 'Hai un appartamento piccolo e regolare e vuoi spendere il minimo.',
    avoidIf: 'Hai più stanze, animali o vuoi mappe e stanze virtuali.'
  },
  {
    id: 'roomba-combo-j7', v: 'robot-aspirapolvere', brand: 'iRobot', name: 'Roomba Combo j7+',
    price: 599, quality: 8.3, checked: '2026-08-20',
    tagline: 'Il più bravo a evitare i disastri',
    attrs: { pa: 3000, battery: 75, mop: 'passive', dock: 'dust', lidar: false, height: 8.7, bin: 400, carpetLift: true, petBrush: true },
    pros: ['Riconoscimento escrementi animali con garanzia iRobot', 'Panno che si solleva sul tetto sui tappeti', 'Doppia spazzola in gomma ottima sui peli'],
    cons: ['Autonomia bassa, 75 minuti', 'Navigazione a telecamera meno precisa del lidar'],
    buyIf: 'Hai un cane o un gatto e la tua paura numero uno è che il robot spalmi qualcosa.',
    avoidIf: 'Hai una casa grande: con 75 minuti di autonomia fa troppe ricariche.'
  },
  {
    id: 'dreame-d10-plus', v: 'robot-aspirapolvere', brand: 'Dreame', name: 'D10 Plus',
    price: 279, quality: 8.1, checked: '2026-08-20',
    tagline: 'Stazione autosvuotante al prezzo di un robot base',
    attrs: { pa: 6000, battery: 170, mop: 'vibrating', dock: 'dust', lidar: true, height: 9.7, bin: 570, carpetLift: false, petBrush: true },
    pros: ['Sacchetto da 2,5 L: lo tocchi una volta ogni due mesi', 'Lidar con mappatura multipiano', 'Autonomia lunga'],
    cons: ['Il modulo lavaggio è basilare', 'Base rumorosa durante lo svuotamento'],
    buyIf: 'Vuoi dimenticarti del robot per settimane senza spendere oltre 300 €.',
    avoidIf: 'Il lavaggio del pavimento è la funzione che ti interessa di più.'
  },
  {
    id: 'roborock-qrevo-s', v: 'robot-aspirapolvere', brand: 'Roborock', name: 'Qrevo S',
    price: 649, quality: 8.9, checked: '2026-08-20',
    tagline: 'Il compromesso intelligente della fascia alta',
    attrs: { pa: 7000, battery: 190, mop: 'rotating', dock: 'full', lidar: true, height: 9.65, bin: 270, carpetLift: true, petBrush: true },
    pros: ['Panni rotanti con sollevamento da 10 mm', 'Stazione con lavaggio panni ad acqua calda', 'Spazzola antigroviglio molto efficace'],
    cons: ['Riconoscimento ostacoli inferiore ai top di gamma', 'Prezzo che sconfina nel territorio premium'],
    buyIf: 'Vuoi il 90% del top di gamma a poco più della metà del prezzo.',
    avoidIf: 'Puoi stare sotto i 550 €: la differenza reale con la fascia inferiore è sottile.'
  },

  /* ---------- SEDIE ERGONOMICHE ---------- */
  {
    id: 'sihoo-m18', v: 'sedie-ergonomiche', brand: 'Sihoo', name: 'M18',
    price: 159, quality: 7.2, checked: '2026-08-20',
    tagline: "L'ergonomica vera più economica che consiglierei",
    attrs: { lumbar: 'adj', headrest: true, armrests: 2, maxWeight: 150, hMin: 160, hMax: 185, material: 'mesh', recline: 120, footrest: false },
    pros: ['Supporto lombare regolabile, raro a questo prezzo', 'Schienale in rete traspirante', 'Portata dichiarata 150 kg'],
    cons: ['Braccioli solo su e giù', 'Imbottitura seduta sottile dopo 6 ore'],
    buyIf: 'Passi 4-6 ore seduto e vuoi il salto di qualità dalla sedia da 60 €.',
    avoidIf: 'Stai seduto 8+ ore al giorno o sei sopra 1,85 m.'
  },
  {
    id: 'sihoo-doro-c300', v: 'sedie-ergonomiche', brand: 'Sihoo', name: 'Doro C300',
    price: 349, quality: 8.7, checked: '2026-08-20',
    tagline: 'Il miglior rapporto qualità/prezzo della categoria',
    attrs: { lumbar: 'dynamic', headrest: true, armrests: 3, maxWeight: 150, hMin: 160, hMax: 195, material: 'mesh', recline: 128, footrest: false },
    pros: ['Lombare dinamico che segue la schiena mentre ti reclini', 'Braccioli 3D morbidi', 'Costruzione solida, alluminio sulla base'],
    cons: ['Montaggio lungo, circa 40 minuti', 'Estetica ingombrante in un salotto'],
    buyIf: 'Lavori 8 ore al giorno da seduto e hai problemi lombari.',
    avoidIf: 'Ti serve una sedia occasionale: qui paghi ergonomia che non useresti.'
  },
  {
    id: 'songmics-obn', v: 'sedie-ergonomiche', brand: 'Songmics', name: 'OBN Basic',
    price: 129, quality: 6.6, checked: '2026-08-20',
    tagline: 'Sedia da scrivania onesta, non una vera ergonomica',
    attrs: { lumbar: 'fixed', headrest: false, armrests: 2, maxWeight: 120, hMin: 155, hMax: 180, material: 'fabric', recline: 110, footrest: false },
    pros: ['Prezzo contenuto', 'Montaggio semplice', 'Ingombro ridotto'],
    cons: ['Lombare fisso non regolabile', 'Niente poggiatesta', 'Portata 120 kg'],
    buyIf: 'Ti serve una sedia decente per poche ore al giorno.',
    avoidIf: 'Hai mal di schiena o stai seduto più di 4 ore.'
  },
  {
    id: 'hbada-e3', v: 'sedie-ergonomiche', brand: 'Hbada', name: 'E3 Pro',
    price: 249, quality: 8.0, checked: '2026-09-08',
    tagline: 'Regolabile in ogni punto, braccioli 6D',
    attrs: { lumbar: 'dynamic', headrest: true, armrests: 6, maxWeight: 130, hMin: 160, hMax: 188, material: 'mesh', recline: 135, footrest: false },
    pros: ['Supporto lombare dinamico a 3 zone', 'Braccioli 6D, i più regolabili del gruppo', 'Testiera 4D e reclinazione fino a 135°'],
    cons: ['Portata 130 kg', 'Rete della seduta rigida i primi giorni'],
    buyIf: 'Vuoi regolare ogni singola parte finché non trovi la posizione giusta.',
    avoidIf: 'Sei sopra i 110 kg o cerchi la massima solidità.'
  },
  {
    id: 'herman-miller-sayl', v: 'sedie-ergonomiche', brand: 'Herman Miller', name: 'Sayl',
    price: 799, quality: 9.1, checked: '2026-08-20',
    tagline: 'Qualità costruttiva di un altro pianeta',
    attrs: { lumbar: 'dynamic', headrest: false, armrests: 3, maxWeight: 160, hMin: 155, hMax: 195, material: 'mesh', recline: 125, footrest: false },
    pros: ['Garanzia 12 anni', 'Schienale elastomerico che si adatta senza regolazioni', 'Occupa poco spazio visivo'],
    cons: ['Nessun poggiatesta disponibile su questo modello', 'Prezzo fuori scala rispetto alla concorrenza'],
    buyIf: 'Vuoi comprare una sedia sola per i prossimi dieci anni.',
    avoidIf: 'Il poggiatesta è per te irrinunciabile.'
  },
  {
    id: 'diablo-v-basic', v: 'sedie-ergonomiche', brand: 'Diablo', name: 'V-Basic',
    price: 269, quality: 7.4, checked: '2026-08-20',
    tagline: 'Impostazione gaming, seduta avvolgente',
    attrs: { lumbar: 'adj', headrest: true, armrests: 3, maxWeight: 150, hMin: 165, hMax: 195, material: 'pu', recline: 160, footrest: false },
    pros: ['Si reclina fino a 160°, quasi a letto', 'Cuscini lombare e cervicale inclusi', 'Struttura robusta'],
    cons: ['Ecopelle: caldissima in estate', 'Ergonomia da lavoro inferiore a una mesh pari prezzo'],
    buyIf: 'Vuoi una postazione gaming e ti piace la seduta avvolgente.',
    avoidIf: 'Ci lavori 8 ore al giorno e sudi facilmente.'
  },
  {
    id: 'flexispot-bs11', v: 'sedie-ergonomiche', brand: 'Flexispot', name: 'ErgoX Pro',
    price: 399, quality: 8.5, checked: '2026-09-08',
    tagline: 'Costruita per le corporature importanti',
    attrs: { lumbar: 'adj', headrest: true, armrests: 7, maxWeight: 250, hMin: 165, hMax: 200, material: 'mesh', recline: 130, footrest: false },
    pros: ['Portata 250 kg, la più alta del gruppo', 'Altezza regolabile su 12 livelli, adatta oltre 1,90 m', 'Braccioli 7D, lombare 5D e poggiatesta 4D'],
    cons: ['Molto ingombrante', 'Sovradimensionata sotto 1,75 m'],
    buyIf: 'Sei alto oltre 1,85 m o sopra i 110 kg.',
    avoidIf: 'Hai una scrivania piccola o una corporatura media.'
  },

  /* ---------- MATERASSI ---------- */
  {
    id: 'emma-original', v: 'materassi', brand: 'Emma', name: 'Original',
    price: 349, quality: 8.6, checked: '2026-08-20',
    tagline: 'Il memory di riferimento in Italia',
    attrs: { type: 'memory', firmness: 6, cooling: 6, motion: 9, edge: 6, height: 25, maxKg: 110, trial: 100 },
    pros: ['Isolamento del movimento eccellente in coppia', 'Accoglienza equilibrata, adatta a quasi tutti', 'Prova lunga con reso'],
    cons: ['Trattiene un po di calore', 'Bordi cedevoli se ti siedi sul bordo'],
    buyIf: 'Dormi di fianco o in posizione mista e condividi il letto.',
    avoidIf: 'Sudi molto di notte o superi i 110 kg.'
  },
  {
    id: 'marcapiuma-silver-22', v: 'materassi', brand: 'Marcapiuma', name: 'Memory Silver H3 Taglie Forti',
    price: 279, quality: 8.0, checked: '2026-09-08',
    tagline: 'Memory italiano rigido, pensato per corporature importanti',
    attrs: { type: 'memory', firmness: 8, cooling: 5, motion: 8, edge: 7, height: 21, maxKg: 130, trial: 0 },
    pros: ['Portanza H3 rigida, tiene bene le corporature importanti', 'Dispositivo medico ortopedico certificato', 'Rivestimento sfoderabile e antiacaro'],
    cons: ['Nessun periodo di prova esteso', 'Il più caldo del gruppo'],
    buyIf: 'Dormi sulla schiena, pesi oltre 95 kg e vuoi un memory davvero sostenuto.',
    avoidIf: 'Dormi di fianco o sei leggero: lo troveresti troppo duro.'
  },
  {
    id: 'dormeo-memosan', v: 'materassi', brand: 'Dormeo', name: 'Memosan',
    price: 199, quality: 6.9, checked: '2026-08-20',
    tagline: 'Entry level, per stanze degli ospiti',
    attrs: { type: 'memory', firmness: 5, cooling: 4, motion: 7, edge: 4, height: 18, maxKg: 90, trial: 0 },
    pros: ['Prezzo basso', 'Leggero da maneggiare', 'Accoglienza morbida'],
    cons: ['18 cm di spessore sono pochi', 'Portata limitata', 'Bordi molto deboli'],
    buyIf: 'Ti serve un materasso per la camera degli ospiti o un uso saltuario.',
    avoidIf: 'È il materasso su cui dormirai ogni notte per anni.'
  },
  {
    id: 'emma-hybrid-premium', v: 'materassi', brand: 'Emma', name: 'Hybrid Premium',
    price: 649, quality: 9.0, checked: '2026-08-20',
    tagline: 'Molle insacchettate più memory, il compromesso migliore',
    attrs: { type: 'ibrido', firmness: 7, cooling: 8, motion: 8, edge: 9, height: 25, maxKg: 130, trial: 100 },
    pros: ['Molle insacchettate: sostegno e traspirazione', 'Bordi rinforzati, ci si siede senza affondare', 'Regge bene le corporature importanti'],
    cons: ['Prezzo alto', 'Pesante da girare da soli'],
    buyIf: 'Sei sopra i 95 kg, soffri il caldo o hai problemi di schiena.',
    avoidIf: 'Cerchi la sensazione avvolgente tipica del memory puro.'
  },
  {
    id: 'baldiflex-zaffiro', v: 'materassi', brand: 'Baldiflex', name: 'Emporio Duck Memory',
    price: 229, quality: 7.4, checked: '2026-09-08',
    tagline: 'Morbido ed economico, 25 cm di spessore',
    attrs: { type: 'memory', firmness: 4, cooling: 5, motion: 8, edge: 5, height: 25, maxKg: 100, trial: 30 },
    pros: ['Accoglienza morbida, buono per chi dorme di fianco', 'Prezzo aggressivo per 25 cm di spessore', 'Rivestimento Aloe Vera sfoderabile'],
    cons: ['Troppo morbido per chi dorme prono', 'Sostegno lombare limitato'],
    buyIf: 'Dormi di fianco, sei leggero e vuoi spendere poco.',
    avoidIf: 'Dormi a pancia in giù o pesi oltre 95 kg.'
  },
  {
    id: 'perdormire-cool-blue', v: 'materassi', brand: 'Perdormire', name: 'Cool Blue',
    price: 549, quality: 8.4, checked: '2026-08-20',
    tagline: 'Pensato per chi ha sempre caldo',
    attrs: { type: 'ibrido', firmness: 6, cooling: 9, motion: 8, edge: 7, height: 24, maxKg: 120, trial: 60 },
    pros: ['La migliore dissipazione del calore del gruppo', 'Rigidità media, adatta a più posizioni', 'Buon sostegno dei bordi'],
    cons: ['Costa più di un memory equivalente', 'Sensazione meno avvolgente'],
    buyIf: 'Ti svegli sudato e hai già scartato i memory per questo motivo.',
    avoidIf: 'Il caldo non è un tuo problema: pagheresti una funzione inutile.'
  },

  /* ---------- UTENSILI ELETTRICI ---------- */
  {
    id: 'bosch-psb-1800', v: 'utensili-elettrici', brand: 'Bosch', name: 'PSB 1800 LI-2',
    price: 89, quality: 7.1, checked: '2026-08-20',
    tagline: 'Il trapano di casa, con batteria inclusa',
    attrs: { torque: 38, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: true, weight: 1.4, eco: 'Bosch Home' },
    pros: ['Batteria e caricatore inclusi', 'Percussione per forare il muro', 'Leggero e maneggevole'],
    cons: ['Motore con spazzole, meno efficiente', 'Coppia bassa per lavori impegnativi'],
    buyIf: 'Ti serve un trapano per la casa e parti da zero.',
    avoidIf: 'Devi forare cemento armato o lavorarci tutti i giorni.'
  },
  {
    id: 'makita-dhp482z', v: 'utensili-elettrici', brand: 'Makita', name: 'DHP482Z',
    price: 129, quality: 8.5, checked: '2026-08-20',
    tagline: 'Solo corpo macchina, per chi ha già le batterie',
    attrs: { torque: 62, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: false, weight: 1.6, eco: 'Makita LXT' },
    pros: ['Coppia 62 Nm, molto sopra la media domestica', 'Affidabilità Makita', 'Ecosistema LXT enorme'],
    cons: ['Batteria e caricatore NON inclusi', 'Non brushless'],
    buyIf: 'Hai già batterie Makita LXT in casa.',
    avoidIf: 'È il tuo primo utensile: dovresti comprare tutto a parte.'
  },
  {
    id: 'einhell-te-cd', v: 'utensili-elettrici', brand: 'Einhell', name: 'TE-CD 18/2',
    price: 69, quality: 6.7, checked: '2026-08-20',
    tagline: 'Il più economico che vale la pena, ma è solo corpo',
    attrs: { torque: 44, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: false, weight: 1.3, eco: 'Einhell Power X' },
    pros: ['Prezzo minimo del gruppo', 'Molto leggero, 1,3 kg', 'Ecosistema Power X-Change ampio e economico'],
    cons: ['Versione Li-Solo: batteria e caricabatteria non inclusi', 'Qualità costruttiva sotto Bosch e Makita'],
    buyIf: 'Hai già una batteria Power X-Change e ti serve un secondo utensile.',
    avoidIf: 'Prevedi un uso regolare o lavori su materiali duri.'
  },
  {
    id: 'bosch-gsb-18v-55', v: 'utensili-elettrici', brand: 'Bosch Professional', name: 'GSB 18V-55',
    price: 179, quality: 8.8, checked: '2026-08-20',
    tagline: 'Brushless professionale in formato compatto',
    attrs: { torque: 55, volts: 18, percussion: true, sds: false, brushless: true, batteryIncl: false, weight: 1.0, eco: 'Bosch Professional' },
    pros: ['Motore brushless: più autonomia e durata', 'Solo 1 kg, entra ovunque', 'Linea Professional, non hobby'],
    cons: ['Venduto senza batteria', 'Batterie Professional più care'],
    buyIf: 'Ci lavori spesso, hai già batterie Bosch Professional e vuoi un utensile che duri anni.',
    avoidIf: 'Lo useresti tre volte all anno.'
  },
  {
    id: 'dewalt-dcd778', v: 'utensili-elettrici', brand: 'DeWalt', name: 'DCD778N',
    price: 159, quality: 8.4, checked: '2026-08-20',
    tagline: 'La coppia più alta del gruppo, solo corpo',
    attrs: { torque: 65, volts: 18, percussion: true, sds: false, brushless: true, batteryIncl: false, weight: 1.2, eco: 'DeWalt XR' },
    pros: ['Coppia 65 Nm, la più alta tra i trapani qui', 'Motore brushless della linea XR', 'Buon equilibrio tra potenza e peso'],
    cons: ['Sigla N: venduto senza batteria', 'Ecosistema meno diffuso in Italia'],
    buyIf: 'Vuoi la coppia più alta e hai già batterie DeWalt XR.',
    avoidIf: 'Hai già investito in un altro ecosistema di batterie.'
  },
  {
    id: 'blackdecker-bdchd18', v: 'utensili-elettrici', brand: 'Black+Decker', name: 'BDCHD18',
    price: 79, quality: 6.4, checked: '2026-08-20',
    tagline: 'Kit tuttofare da cassetto',
    attrs: { torque: 30, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: true, weight: 1.5, eco: 'Black+Decker 18V' },
    pros: ['Spesso venduto con set di punte e accessori', 'Prezzo basso', 'Semplice da usare'],
    cons: ['Coppia 30 Nm, la più bassa', 'Materiali plastici'],
    buyIf: 'Vuoi il minimo indispensabile in casa e non hai nulla.',
    avoidIf: 'Devi forare muri portanti o serrare viti lunghe nel legno.'
  },
  {
    id: 'makita-hr2470', v: 'utensili-elettrici', brand: 'Makita', name: 'HR2470',
    price: 189, quality: 8.9, checked: '2026-08-20',
    tagline: 'Tassellatore SDS: categoria diversa, non un trapano',
    attrs: { torque: 0, volts: 0, percussion: true, sds: true, brushless: false, batteryIncl: false, weight: 2.9, eco: 'Rete elettrica' },
    pros: ['SDS-Plus: fora il cemento armato senza fatica', 'Tre funzioni: foratura, percussione, scalpello', 'Costruzione indistruttibile'],
    cons: ['Pesante, 2,9 kg', 'A filo, serve la presa', 'Non è un avvitatore'],
    buyIf: 'Devi forare cemento armato o pietra, non cartongesso.',
    avoidIf: 'Ti serve avvitare: questo non è lo strumento giusto.'
  },

  /* ---------- MACCHINE DA CAFFÈ ---------- */
  {
    id: 'delonghi-dedica-ec685', v: 'macchine-caffe', brand: "De'Longhi", name: 'Dedica EC685',
    price: 179, quality: 8.0, checked: '2026-08-20',
    tagline: 'Manuale strettissima, per chi ha poco spazio',
    attrs: { type: 'manuale', grinder: false, milk: 'pannarello', tank: 1.1, costPerCup: 0.18, minutes: 3, width: 15 },
    pros: ['Larga solo 15 cm', 'Ottimo espresso con macinato buono', 'Riscaldamento rapido'],
    cons: ['Niente macinacaffè integrato', 'Il montalatte richiede pratica'],
    buyIf: 'Hai un piano cucina stretto e ti piace preparare il caffè a mano.',
    avoidIf: 'Vuoi premere un pulsante e avere il cappuccino pronto.'
  },
  {
    id: 'nespresso-vertuo-pop', v: 'macchine-caffe', brand: 'Nespresso', name: 'Vertuo Pop',
    price: 99, quality: 7.0, checked: '2026-08-20',
    tagline: 'Zero pensieri, costo per tazza alto',
    attrs: { type: 'capsule', grinder: false, milk: 'none', tank: 0.6, costPerCup: 0.55, minutes: 1, width: 14 },
    pros: ['Un pulsante e basta', 'Ingombro minimo', 'Prezzo di ingresso basso'],
    cons: ['0,55 € a tazza: il più caro nel lungo periodo', 'Capsule proprietarie, poca scelta'],
    buyIf: 'Bevi 1-2 caffè al giorno e vuoi zero manutenzione.',
    avoidIf: 'Bevete in tanti in casa: il costo capsule diventa insostenibile.'
  },
  {
    id: 'delonghi-magnifica-s', v: 'macchine-caffe', brand: "De'Longhi", name: 'Magnifica S ECAM',
    price: 329, quality: 8.6, checked: '2026-08-20',
    tagline: 'Automatica con macine, il passaggio ai chicchi',
    attrs: { type: 'automatica', grinder: true, milk: 'pannarello', tank: 1.8, costPerCup: 0.14, minutes: 1, width: 24 },
    pros: ['Macina in grani: 0,14 € a tazza', 'Serbatoio grande da 1,8 L', 'Affidabilità collaudata'],
    cons: ['Montalatte manuale con lancia', 'Manutenzione periodica del gruppo infusore'],
    buyIf: 'Bevete 3+ caffè al giorno e volete abbattere il costo per tazza.',
    avoidIf: 'Volete cappuccini automatici senza toccare nulla.'
  },
  {
    id: 'philips-3200-lattego', v: 'macchine-caffe', brand: 'Philips', name: '3200 LatteGo',
    price: 545.94, quality: 8.8, checked: '2026-09-29',
    tagline: 'Cappuccino automatico, pulizia in 15 secondi',
    attrs: { type: 'automatica', grinder: true, milk: 'auto', tank: 1.8, costPerCup: 0.14, minutes: 1, width: 25 },
    pros: ['Sistema LatteGo: due pezzi, niente tubicini', 'Cappuccino con un tasto', 'Macine in ceramica'],
    cons: ['Ingombro importante', 'Prezzo sopra la Magnifica per la sola parte latte'],
    buyIf: 'In casa bevete cappuccini regolarmente e nessuno vuole montare il latte a mano.',
    avoidIf: 'Bevete solo espresso: paghereste il gruppo latte per niente.'
  },
  {
    id: 'bialetti-gioia', v: 'macchine-caffe', brand: 'Bialetti', name: 'Gioia',
    price: 69, quality: 6.2, checked: '2026-08-20',
    tagline: 'Capsule economiche, macchina essenziale',
    attrs: { type: 'capsule', grinder: false, milk: 'none', tank: 0.5, costPerCup: 0.25, minutes: 1, width: 13 },
    pros: ['La più economica', 'Capsule Bialetti sotto i 0,25 €', 'Minuscola'],
    cons: ['Costruzione plasticosa', 'Serbatoio da 0,5 L da riempire spesso'],
    buyIf: 'Vuoi il caffè in capsule spendendo il minimo possibile.',
    avoidIf: 'Cerchi un espresso di livello o bevi molti caffè.'
  },
  {
    id: 'gaggia-classic-evo', v: 'macchine-caffe', brand: 'Gaggia', name: 'Classic Evo Pro',
    price: 469, quality: 9.0, checked: '2026-08-20',
    tagline: 'Per chi vuole imparare a fare espresso sul serio',
    attrs: { type: 'manuale', grinder: false, milk: 'pannarello', tank: 2.1, costPerCup: 0.14, minutes: 5, width: 24 },
    pros: ['Gruppo E61 commerciale, caldaia in ottone', 'Modificabile e riparabile per anni', 'Portafiltro professionale da 58 mm'],
    cons: ['Serve un macinacaffè a parte, altri 150-250 €', 'Curva di apprendimento ripida'],
    buyIf: "L'espresso è un hobby e ti va di dedicargli tempo.",
    avoidIf: 'Vuoi il caffè pronto in 30 secondi senza pensarci.'
  },
  {
    id: 'delonghi-rivelia', v: 'macchine-caffe', brand: "De'Longhi", name: 'Rivelia',
    price: 551.06, quality: 9.1, checked: '2026-09-29',
    tagline: 'Rivelia: automatica a chicchi con due contenitori intercambiabili',
    attrs: { type: 'automatica', grinder: true, milk: 'auto', tank: 1.4, costPerCup: 0.14, minutes: 1, width: 24 },
    pros: ['Rivelia macina i chicchi al momento, con due contenitori intercambiabili (es. normale e decaffeinato)', 'Display touch a colori e profili utente', 'Caraffa latte automatica lavabile in lavastoviglie'],
    cons: ['Prezzo alto', 'Serbatoio acqua da 1,4 L, più piccolo della Magnifica', 'Non usa capsule: funziona solo con caffè in grani'],
    buyIf: "Volete il massimo dell'automatico e più tipi di caffè in casa.",
    avoidIf: 'Ti basta il cappuccino automatico: la Philips 3200 LatteGo lo fa, con meno ricette e senza il secondo contenitore di chicchi.'
  },

  /* ---------- SICUREZZA CASA SMART (brand Imou) ----------
     Catalogo partner: link primario via Awin (store.imou.com), link
     secondario Amazon.it dove disponibile. Prodotti selezionati fra i 55
     dello shop ufficiale Imou IT, bilanciati per budget e scenario d'uso. */
  {
    id: 'imou-aov-dual', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV Dual 3K',
    asin: 'B0H8PLP5PN', rating: 4.3, reviews: 128,
    img: '/assets/imou/aov-dual.jpg',
    price: 149.99, quality: 8.6, checked: '2026-10-11',
    tagline: 'Doppia lente e SIM 4G: la copri anche se internet casa cade',
    attrs: { posizione: 'esterno', quattroG: true, batteria: true, solare: true, lenti: 2, mp: '5+5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 11 },
    pros: ['Due obiettivi affiancati che coprono un angolo largo senza zone cieche', 'SIM 4G integrata: continua a funzionare anche se il router di casa va giù', 'Si può alimentare con pannello solare opzionale, zero cavi'],
    cons: ['Serve una SIM 4G aggiuntiva per sfruttare la ridondanza (costo a parte)', "Non supporta ONVIF: non la integri in un NVR di terze parti"],
    buyIf: "Vuoi sorvegliare un ingresso o un giardino senza dipendere solo dal Wi-Fi di casa.",
    avoidIf: "Hai già Wi-Fi stabile fin lì: paghi il 4G che non useresti mai.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-dual'
  },
  {
    id: 'imou-aov-air', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV Air 5MP',
    unavailable: 'In attesa di arrivo su Amazon Italia: oggi si trova solo via shop ufficiale Imou.',
    img: '/assets/imou/aov-air.jpg',
    price: 46.99, quality: 7.8, checked: '2026-10-11',
    tagline: 'La 4G più economica del catalogo Imou',
    attrs: { posizione: 'esterno', quattroG: true, batteria: true, solare: true, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 11 },
    pros: ['Meno di 50 euro con 4G integrato: raro trovarlo a questo prezzo', 'Si attacca con pannello solare opzionale, zero cavi', 'Visione notturna a colori (non solo bianco e nero)'],
    cons: ["Risoluzione 5MP singola: ampio quello che inquadra una lente sola, non tutto l'angolo", "Non supporta ONVIF né NVR terzi"],
    buyIf: "Vuoi mettere una telecamera dove non c'è né Wi-Fi né corrente, spendendo poco.",
    avoidIf: "Devi coprire un'area ampia: una singola lente non basta.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-air-5mp-3k'
  },
  {
    id: 'imou-aov-pt', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV PT 3K',
    unavailable: 'In attesa di arrivo su Amazon Italia: oggi si trova solo via shop ufficiale Imou.',
    img: '/assets/imou/aov-pt.jpg',
    price: 119.99, quality: 8.3, checked: '2026-10-11',
    tagline: 'Si gira da sola per seguire chi passa',
    attrs: { posizione: 'esterno', quattroG: true, batteria: true, solare: true, lenti: 1, mp: '5', zoom: 'si', notte: 'colore', storage: 'cloud+local', pt: true, width: 12 },
    pros: ['Motorizzata: si ruota da sola per inseguire persone e veicoli in movimento', 'Zoom digitale per avvicinare chi è lontano senza perdere la scena', '4G e Wi-Fi dual band, va dove vuoi tu'],
    cons: ['Fare la panoramica consuma più batteria', 'Il meccanismo è una parte in più che può guastarsi nel tempo'],
    buyIf: "Vuoi inseguire chi entra nel cortile invece di coprirlo con due telecamere fisse.",
    avoidIf: "Ti basta sorvegliare un punto preciso (porta d'ingresso, box auto): una fissa costa meno.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-it'
  },
  {
    id: 'imou-aov-track-plus', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV Track Plus',
    img: '/assets/imou/aov-track-plus.jpg',
    price: 89.99, quality: 8.1, checked: '2026-10-11',
    tagline: 'Due lenti e tracking automatico sotto i 90 euro',
    attrs: { posizione: 'esterno', quattroG: false, batteria: true, solare: true, lenti: 2, mp: '6', zoom: 'si', notte: 'colore', storage: 'cloud+local', width: 11 },
    pros: ['Doppia lente con tracking automatico: segue chi si muove nell\'inquadratura', 'Pannello solare opzionale: una volta montata la dimentichi', 'Rapporto qualità-prezzo molto buono per il doppio sensore'],
    cons: ['Solo Wi-Fi, niente SIM 4G: serve copertura dove la metti', 'Compatibile con app Imou, non con sistemi terzi (ONVIF assente)'],
    buyIf: "Vuoi il tracking automatico con Wi-Fi casa e un budget sotto i 100 euro.",
    avoidIf: "Il Wi-Fi non arriva fin lì: ti serve una AOV Dual con il 4G.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-track-plus-6mp-8mp'
  },
  {
    id: 'imou-cell-3c', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Cell 3C',
    img: '/assets/imou/cell-3c.jpg',
    price: 39.99, quality: 7.5, checked: '2026-10-11',
    tagline: 'Wireless al 100%, meno di 40 euro',
    attrs: { posizione: 'universale', quattroG: false, batteria: true, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 7 },
    pros: ["Davvero senza cavi: funziona solo a batteria, la ricarichi quando serve", 'Piccola e leggera, si piazza praticamente ovunque', 'Prezzo entry level: ne compri due senza spendere 100 euro'],
    cons: ['Batteria va ricaricata ogni 2-4 mesi a seconda di quanto viene attivata', 'Niente pannello solare in questo modello'],
    buyIf: "Vuoi mettere una telecamera in un posto senza prese, per poco tempo o come dissuasore.",
    avoidIf: "Ti serve registrazione continua: la batteria non regge.",
    imouUrl: 'https://store.imou.com/it-it/products/cell-3c-100-wireless-3mp-2k'
  },
  {
    id: 'imou-cruiser-se-kit', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Cruiser SE+ Kit (2 pz)',
    img: '/assets/imou/cruiser-se-kit.jpg',
    price: 105.99, quality: 7.9, checked: '2026-10-11',
    tagline: 'Due telecamere in un colpo per coprire casa',
    attrs: { posizione: 'esterno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 10, kitPz: 2 },
    pros: ['Due telecamere nella stessa confezione a circa 50 euro l\'una', 'Visione notturna a colori con faretto incorporato', 'Resistenti a pioggia e sole prolungato'],
    cons: ['Alimentazione a filo: serve una presa vicino a ciascuna', 'Niente batteria né 4G: solo cablate su Wi-Fi casa'],
    buyIf: "Devi coprire due punti della casa (davanti + retro) con il minimo esborso.",
    avoidIf: "Non hai presa di corrente a portata: queste vanno collegate.",
    imouUrl: 'https://store.imou.com/it-it/products/2pcs-cruiser-se-4mp-kit'
  },
  {
    id: 'imou-bullet-3', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Bullet 3',
    asin: 'B08BY1C655', rating: 4.3, reviews: 2800,
    img: '/assets/imou/bullet-3.jpg',
    price: 54.99, quality: 7.6, checked: '2026-10-11',
    tagline: 'Il classico bullet esterno di Imou, bene su Amazon da anni',
    attrs: { posizione: 'esterno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 8 },
    pros: ['Modello storico Imou con quasi tremila recensioni Amazon', 'Impermeabile IP67: pioggia e polvere non la fermano', 'Notte a colori con faretto incorporato, non il solito bianco e nero sgranato'],
    cons: ['Serve corrente a filo (nessuna versione a batteria)', "Angolo di visione singolo: se vuoi coprire 180° ne servono due"],
    buyIf: "Vuoi una bullet esterna solida di un brand noto senza spendere oltre 60 euro.",
    avoidIf: "Hai bisogno di 4G o batteria: cerca nella serie AOV.",
    imouUrl: 'https://store.imou.com/it-it/products/imou-bullet-2c-outdoor-wifi-surveillance-security-smart-camera-waterproof'
  },
  {
    id: 'imou-bulb-cam', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Bulb Cam',
    unavailable: 'In attesa di arrivo su Amazon Italia: oggi si trova solo via shop ufficiale Imou.',
    img: '/assets/imou/bulb-cam.jpg',
    price: 39.99, quality: 7.4, checked: '2026-10-11',
    tagline: 'Telecamera dentro una lampadina a vite',
    attrs: { posizione: 'interno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 7 },
    pros: ["Si avvita in un portalampada normale (E26/E27): zero montaggio, zero cavi aggiuntivi", "Fa anche luce: a tutti gli effetti è una lampadina smart con dentro una camera", 'Si nasconde a vista: nessuno capisce che è una telecamera'],
    cons: ["Il posizionamento dipende dalla lampada: se la lampada punta in alto, la camera guarda in alto", "Angolo di visione limitato dall'orientamento della lampada"],
    buyIf: "Vuoi una telecamera invisibile in un ingresso o corridoio dove c'è già una lampada.",
    avoidIf: "La lampada è in un punto scomodo per inquadrare quello che vuoi vedere.",
    imouUrl: 'https://store.imou.com/it-it/products/bulb-cam'
  },
  {
    id: 'imou-pet-pf1', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Pet PF1',
    img: '/assets/imou/pet-pf1.jpg',
    price: 99.99, quality: 7.7, checked: '2026-10-11',
    tagline: 'Dispenser cibo per gatti con telecamera 360°',
    attrs: { posizione: 'interno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '4', zoom: 'no', notte: 'colore', storage: 'cloud', width: 20, serbatoio: '4L' },
    pros: ['Due funzioni in uno: distribuisce il cibo e ti fa guardare il gatto quando sei fuori', 'Serbatoio da 4 litri: 2-3 settimane di autonomia per un gatto medio', 'Vista 360° della stanza, non solo la ciotola'],
    cons: ["Solo per crocchette (non cibo umido)", "Funziona solo con corrente a filo"],
    buyIf: "Lavori fuori casa e vuoi controllare che il gatto mangi e stia bene.",
    avoidIf: "Hai cani grandi o più animali che litigano al cibo: non è pensato per quello.",
    imouUrl: 'https://store.imou.com/it-it/products/distributore-intelligente-per-animali-pf1'
  },
  {
    id: 'imou-cruiser-dual-kit', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Cruiser Dual Kit (2 pz)',
    unavailable: 'In attesa di arrivo su Amazon Italia: oggi si trova solo via shop ufficiale Imou.',
    img: '/assets/imou/cruiser-dual-kit.jpg',
    price: 151.99, quality: 8.4, checked: '2026-10-11',
    tagline: 'Due telecamere doppia-lente per coprire tutta la casa',
    attrs: { posizione: 'esterno', quattroG: false, batteria: false, solare: false, lenti: 2, mp: '5+3', zoom: 'si', notte: 'colore', storage: 'cloud+local', width: 11, kitPz: 2 },
    pros: ['Due telecamere a doppia lente: campo visivo largo e dettaglio sui soggetti vicini', 'Il kit da due costa meno di comprarle separate', 'Visione notturna a colori con faretti'],
    cons: ['Vanno alimentate a filo (serve corrente a entrambe le postazioni)', "Niente SIM 4G: dove non c'è Wi-Fi non funzionano"],
    buyIf: "Vuoi la copertura ampia della doppia lente su due punti di casa.",
    avoidIf: "Ti serve mobilità o batteria: queste restano fisse e cablate.",
    imouUrl: 'https://store.imou.com/it-it/products/kit-duale-cruiser-2-pezzi-5mp-3mp-3mp-3mp'
  },

  /* ============================ UFFICIO PICCOLA ATTIVITA' (B2B seed) ============================
     Prodotti selezionati per piccole PMI, partite IVA e home office.
     ASIN non ancora popolati: l'agente giornaliero (crescita-quotidiana) li aggancia
     a Amazon via PA-API nella prossima run, poi aggiorna anche img/price/rating. */

  { id: 'brother-mfc-l2800dw', v: 'ufficio-piccola-attivita', brand: 'Brother', name: 'MFC-L2800DW',
    price: 229.00, quality: 8.3, checked: '2026-10-13',
    tagline: 'Multifunzione laser bianco e nero che dura anni senza farti pensare',
    attrs: { tipo: 'stampante', tecnologia: 'laser', colore: false, duplex: true, adf: true, wifi: true, workload: 'medium' },
    pros: ['Toner da 3000 pagine di serie: cost-per-page basso sul lungo', 'ADF per scansioni multipagina senza stare dietro al vetro', 'Driver stabile per Mac e Windows, zero sorprese ad ogni aggiornamento'],
    cons: ['Solo bianco e nero: se ti serve stampare brochure a colori, guarda altrove', 'Rumore in stampa non pensato per open space silenzioso'],
    buyIf: 'Stampi fatture, contratti, documenti in b/n ogni giorno e vuoi dimenticarti del toner per mesi.',
    avoidIf: 'Ti serve il colore o stampi meno di 50 pagine al mese: una inkjet costa meno.' },

  { id: 'hp-officejet-pro-9120e', v: 'ufficio-piccola-attivita', brand: 'HP', name: 'OfficeJet Pro 9120e',
    price: 189.00, quality: 7.9, checked: '2026-10-13',
    tagline: 'Multifunzione a colori per chi stampa poco ma vuole qualita\' buona',
    attrs: { tipo: 'stampante', tecnologia: 'inkjet', colore: true, duplex: true, adf: true, wifi: true, workload: 'light' },
    pros: ['Stampa a colori senza passare al laser costoso', 'Instant Ink opzionale: cartucce consegnate quando servono', 'Scanner fronte-retro automatico'],
    cons: ['Cost-per-page a colori piu\' alto del laser se stampi tanto', 'Richiede connessione cloud HP per sfruttare tutto'],
    buyIf: 'Stampi occasionalmente foto, grafici, documenti a colori per clienti.',
    avoidIf: 'Stampi 500 pagine al mese: il laser ti conviene subito.' },

  { id: 'canon-maxify-gx4050', v: 'ufficio-piccola-attivita', brand: 'Canon', name: 'MAXIFY GX4050',
    price: 429.00, quality: 8.4, checked: '2026-10-13',
    tagline: 'Multifunzione a serbatoio: paghi di piu\' oggi, risparmi tanto in inchiostro',
    attrs: { tipo: 'stampante', tecnologia: 'ink-tank', colore: true, duplex: true, adf: true, wifi: true, workload: 'heavy' },
    pros: ['Serbatoi d\'inchiostro ricaricabili: migliaia di pagine prima di ricomprare', 'Costo per pagina tra i piu\' bassi sul mercato', 'ADF e fronte-retro inclusi'],
    cons: ['Investimento iniziale alto rispetto alle cartucce classiche', 'Ingombra piu\' di una multifunzione standard'],
    buyIf: 'Ufficio piccolo che stampa quotidianamente e vuole smettere di spendere in cartucce.',
    avoidIf: 'Stampi raramente: non ammortizzi l\'investimento iniziale.' },

  { id: 'apc-back-ups-pro-br900gi', v: 'ufficio-piccola-attivita', brand: 'APC', name: 'Back-UPS Pro BR900GI',
    price: 189.00, quality: 8.5, checked: '2026-10-13',
    tagline: 'Gruppo di continuita\' per postazione singola o NAS piccolo',
    attrs: { tipo: 'ups', vaWatt: '900VA/540W', autonomia: '15min', uscite: 6, workload: 'light' },
    pros: ['Marchio di riferimento mondiale per UPS, assistenza seria', 'Protezione contro sbalzi e fulmini, non solo blackout', 'Software di spegnimento automatico incluso'],
    cons: ['540W reali: non alimenta un rack con piu\' server', 'Batteria da sostituire ogni 3-5 anni (costo a parte)'],
    buyIf: 'Hai un NAS, un desktop critico o un modem/router che non devono mai spegnersi.',
    avoidIf: 'Devi proteggere un rack con 3+ server: ti serve un UPS da 1500VA minimo.' },

  { id: 'apc-smart-ups-smt1500ic', v: 'ufficio-piccola-attivita', brand: 'APC', name: 'Smart-UPS SMT1500IC',
    price: 679.00, quality: 9.0, checked: '2026-10-13',
    tagline: 'UPS line-interactive per piccolo server room o rack ufficio',
    attrs: { tipo: 'ups', vaWatt: '1500VA/1000W', autonomia: '20min', uscite: 8, workload: 'heavy', managed: true },
    pros: ['Line-interactive con AVR: regola la tensione senza passare in batteria', 'Scheda di rete opzionale per monitoraggio remoto', 'Compatibile VMware/Hyper-V per shutdown pulito'],
    cons: ['Fascia prezzo medio-alta', 'Ventola rumorosa sotto carico: non in sala riunioni'],
    buyIf: 'Hai server, switch e NAS in un piccolo rack e serve shutdown automatico su tutta la fila.',
    avoidIf: 'Serve solo per un PC: paghi funzioni che non useresti.' },

  { id: 'synology-ds224plus', v: 'ufficio-piccola-attivita', brand: 'Synology', name: 'DiskStation DS224+',
    price: 319.00, quality: 9.1, checked: '2026-10-13',
    tagline: 'NAS 2 bay che si installa in un pomeriggio e serve 5-15 persone',
    attrs: { tipo: 'nas', bays: 2, ram: '2GB', workload: 'medium' },
    pros: ['DSM e\' il sistema operativo NAS piu\' maturo in commercio', 'App ufficiali per backup Mac/PC, hosting documenti, VPN, Docker', 'Supporto software 5+ anni dal lancio modello'],
    cons: ['CPU Intel Celeron: va bene fino a 10-15 utenti, non per editing video pesante', 'Dischi da comprare separati (metti RAID 1 per sicurezza)'],
    buyIf: 'Vuoi un server file condiviso in ufficio senza assumere un sistemista.',
    avoidIf: 'Ti serve storage per studio video 4K multi-utente: punta a modelli piu\' potenti.' },

  { id: 'qnap-ts-464', v: 'ufficio-piccola-attivita', brand: 'QNAP', name: 'TS-464',
    price: 579.00, quality: 8.6, checked: '2026-10-13',
    tagline: 'NAS 4 bay con porte 2.5GbE: per uffici che devono crescere',
    attrs: { tipo: 'nas', bays: 4, ram: '4GB', workload: 'heavy', mgE: '2.5' },
    pros: ['Due porte 2.5GbE: velocita\' di rete dove conta', 'Slot NVMe per cache SSD, utile sotto carico', 'Virtualizzazione container e VM supportata'],
    cons: ['QTS meno user-friendly di DSM Synology all\'inizio', 'Serve switch 2.5GbE per sfruttare la banda'],
    buyIf: 'Vuoi 4 dischi in RAID e banda vera per 10+ utenti.',
    avoidIf: 'Non hai mai gestito un NAS: Synology e\' piu\' semplice.' },

  { id: 'brother-ads-1800w', v: 'ufficio-piccola-attivita', brand: 'Brother', name: 'ADS-1800W',
    price: 289.00, quality: 8.7, checked: '2026-10-13',
    tagline: 'Scanner documenti compatto Wi-Fi: digitalizza 1000 pagine in un\'ora',
    attrs: { tipo: 'scanner', duplex: true, adf: 20, wifi: true, speed: '30ppm' },
    pros: ['ADF da 20 fogli con fronte-retro automatico', 'Scansione diretta a cloud/email senza PC', 'Driver OCR incluso: PDF ricercabili dal primo giorno'],
    cons: ['Non scansiona libri rilegati o foto fragili (solo fogli sciolti)', 'Pulizia rulli richiesta ogni 1000 pagine'],
    buyIf: 'Vuoi archiviare contratti, fatture, documenti cliente in digitale senza stampante multifunzione dedicata.',
    avoidIf: 'Scansioni solo 10 pagine al mese: lo scanner della multifunzione basta.' },

  { id: 'epson-workforce-ds-c330', v: 'ufficio-piccola-attivita', brand: 'Epson', name: 'WorkForce DS-C330',
    price: 349.00, quality: 8.4, checked: '2026-10-13',
    tagline: 'Scanner documenti A4 compatto per uffici con tanta carta',
    attrs: { tipo: 'scanner', duplex: true, adf: 20, wifi: true, speed: '35ppm' },
    pros: ['35 pagine al minuto fronte-retro: piu\' veloce del Brother equivalente', 'Rilevamento automatico pagine doppie prelevate', 'Software Document Capture Pro incluso'],
    cons: ['Software Epson a volte lento al primo avvio', 'Alimentatore esterno ingombra sulla scrivania'],
    buyIf: 'Studio commercialista, legale o consulenza con alti volumi di scansione quotidiana.',
    avoidIf: 'Scansioni occasionali: il Brother ADS-1800W costa meno a parita\' di qualita\'.' },

  { id: 'fellowes-powershred-99ci', v: 'ufficio-piccola-attivita', brand: 'Fellowes', name: 'Powershred 99Ci',
    price: 379.00, quality: 8.6, checked: '2026-10-13',
    tagline: 'Distruggidocumenti micro-cut GDPR compliant per studi professionali',
    attrs: { tipo: 'shredder', livello: 'P-4', foglio: 18, cestino: 34, workload: 'medium' },
    pros: ['Taglio micro-cut livello P-4: compliant GDPR per dati sensibili', '18 fogli per passata, cestino 34 litri', 'SilentShred: tacitamente adatto a stanza condivisa'],
    cons: ['Investimento alto per singola scrivania', 'Micro-cut genera cestino pieno in fretta'],
    buyIf: 'Tratti dati sensibili (studio medico, legale, risorse umane) e devi distruggere documenti ogni giorno.',
    avoidIf: 'Distruggi 10 fogli a settimana: un modello cross-cut da 50 euro basta.' },

  { id: 'bonsaii-c237-c', v: 'ufficio-piccola-attivita', brand: 'Bonsaii', name: 'C237-C',
    price: 169.00, quality: 7.8, checked: '2026-10-13',
    tagline: 'Distruggidocumenti cross-cut per piccolo ufficio o home office',
    attrs: { tipo: 'shredder', livello: 'P-4', foglio: 14, cestino: 23, workload: 'light' },
    pros: ['Cross-cut P-4 a un terzo del prezzo dei top di gamma', '60 minuti di runtime continuo', 'Taglia graffette e carte di credito'],
    cons: ['Meccanica meno robusta dei Fellowes nel lungo periodo', 'Rumoroso durante l\'uso'],
    buyIf: 'Partita IVA o home office con volumi medi di documenti da distruggere.',
    avoidIf: 'Studio con 10+ persone che distruggono quotidianamente: va in crisi.' },

  { id: 'ubiquiti-dream-router', v: 'ufficio-piccola-attivita', brand: 'Ubiquiti', name: 'UniFi Dream Router',
    price: 229.00, quality: 8.9, checked: '2026-10-13',
    tagline: 'Router aziendale di ingresso: scala quando l\'ufficio cresce',
    attrs: { tipo: 'router', wifi: 'WiFi 6', ethernet: 4, workload: 'medium', managed: true },
    pros: ['Interfaccia UniFi: aggiungi access point e switch senza cambiare sistema', 'VPN WireGuard e Teleport integrate (smart working sicuro)', 'Statistiche di rete serie, non da router consumer'],
    cons: ['Prima configurazione richiede 1-2 ore di studio', 'Firmware da aggiornare manualmente ogni tanto'],
    buyIf: 'Ufficio che vuole gestione centralizzata di Wi-Fi e sicurezza, senza passare al listino business IT.',
    avoidIf: 'Vuoi plug and play: prendi un router consumer top di gamma e basta.' },

  { id: 'tplink-er605', v: 'ufficio-piccola-attivita', brand: 'TP-Link', name: 'Omada ER605',
    price: 59.00, quality: 7.9, checked: '2026-10-13',
    tagline: 'Router aziendale economico con VPN e load balancing',
    attrs: { tipo: 'router', wifi: 'nessuno', ethernet: 5, workload: 'medium', managed: true },
    pros: ['Supporta due connessioni WAN in load balancing o failover', 'VPN OpenVPN, IPsec, PPTP integrata', 'Prezzo imbattibile per le funzioni offerte'],
    cons: ['Non ha Wi-Fi: serve access point separato', 'Interfaccia Omada meno curata di UniFi'],
    buyIf: 'Hai due connessioni Internet (fibra + 4G backup) e vuoi fallback automatico.',
    avoidIf: 'Hai una sola connessione e serve Wi-Fi integrato: non e\' il prodotto giusto.' },

  { id: 'logitech-brio-500', v: 'ufficio-piccola-attivita', brand: 'Logitech', name: 'Brio 500',
    price: 149.00, quality: 8.7, checked: '2026-10-13',
    tagline: 'Webcam 1080p per videochiamate di lavoro che fai sul serio',
    attrs: { tipo: 'webcam', risoluzione: '1080p', autofocus: true, mic: true, workload: 'medium' },
    pros: ['Autofocus veloce e inquadratura automatica centrata sul viso', 'Microfoni dual con riduzione rumore', 'Montaggio sopra il monitor stabile anche con monitor sottili'],
    cons: ['1080p (non 4K): a questo prezzo ci sono alternative 4K', 'Richiede app Logi Options+ per sfruttare tutto'],
    buyIf: 'Fai videochiamate quotidiane con clienti e vuoi apparire bene senza studiare illuminazione.',
    avoidIf: 'Fai streaming professionale su YouTube/Twitch: punta a webcam 4K dedicate.' },

  { id: 'jabra-evolve2-65', v: 'ufficio-piccola-attivita', brand: 'Jabra', name: 'Evolve2 65',
    price: 249.00, quality: 8.9, checked: '2026-10-13',
    tagline: 'Cuffie wireless professionali: 37 ore di autonomia, microfono asta',
    attrs: { tipo: 'headset', wireless: true, autonomia: 37, mic: 'boom', anc: false, workload: 'heavy' },
    pros: ['Microfono a asta pieghevole: la voce arriva pulita come al telefono fisso', '37 ore di autonomia reale: una ricarica a settimana', 'Certificate per Microsoft Teams, Zoom, Google Meet'],
    cons: ['No noise cancelling attivo (c\'e\' su Evolve2 75 piu\' caro)', 'Design professionale, non piacciono a chi vuole cuffie neutre'],
    buyIf: 'Fai 3+ ore di call al giorno e vuoi che il cliente dall\'altra parte senta ogni parola.',
    avoidIf: 'Usi le cuffie soprattutto per musica: suono bilanciato per voce, non per basso.' }
];

/* ---------- STUFE ELETTRICHE (aggiunte 2026-11-23, dati reali amazon.it) ---------- */
window.PRODUCTS.push(
  {
    id: 'dreo-atom-one-silenzioso-1500', v: 'stufe-elettriche', brand: 'Dreo', name: 'Termoventilatore Silenzioso 1500W (34 dB)',
    price: 50, quality: 9, checked: '2026-11-23',
    tagline: 'Il termoventilatore ceramico più amato: silenzioso e preciso',
    attrs: { power: 1500, heat: 'ventilato', noise: 34, thermostat: true, ecoMode: true, timer: true, remote: false, oscillation: false, tipOver: true, overheat: true, bagno: false, wallMount: false },
    pros: ['34 dB dichiarati: tra i pochi termoventilatori che puoi davvero tenere accesi in camera di notte', 'Termostato digitale che mantiene la temperatura invece di accendere e spegnere a strappi', 'Oltre 11.000 recensioni a 4,6 stelle: una delle valutazioni più alte della categoria'],
    cons: ['A 1500W scalda bene una stanza fino a ~20 m², non una zona giorno grande', 'Resta un termoventilatore: l\'aria calda si sente subito ma si asciuga un po\''],
    buyIf: 'Vuoi caldo immediato in camera o studio restando silenzioso, con un termostato che non fa sbalzi.',
    avoidIf: 'Devi scaldare una stanza grande o una taverna: qui servono più watt o la convezione.'
  },
  {
    id: 'pro-breeze-ceramica-1800-oscillante', v: 'stufe-elettriche', brand: 'Pro Breeze', name: 'Stufetta Ceramica 1800W Oscillante',
    price: 45, quality: 8.6, checked: '2026-11-23',
    tagline: 'Il best seller: oscilla e distribuisce il caldo in tutta la stanza',
    attrs: { power: 1800, heat: 'ventilato', noise: null, thermostat: false, ecoMode: true, timer: false, remote: false, oscillation: true, tipOver: false, overheat: false, bagno: true, wallMount: false },
    pros: ['Oscillazione automatica: distribuisce l\'aria calda invece di puntarla in un solo punto', 'Oltre 15.000 recensioni, la più recensita della categoria: scelta sicura e collaudata', 'Termostato regolabile e protezioni contro surriscaldamento e ribaltamento'],
    cons: ['1800W bastano per una stanza media, non per ambienti molto grandi', 'Il getto d\'aria è percettibile: in camera di notte può dare un leggero fruscio'],
    buyIf: 'Cerchi la stufetta collaudata e senza pensieri per soggiorno o camera, con oscillazione e termostato.',
    avoidIf: 'Ti serve il silenzio assoluto di notte: valuta un modello a convezione o radiante.'
  },
  {
    id: 'rowenta-instant-comfort-compact', v: 'stufe-elettriche', brand: 'Rowenta', name: 'Instant Comfort Compact',
    price: 41, quality: 8.2, checked: '2026-11-23',
    tagline: 'Piccolo, solido, scalda subito: il classico Rowenta',
    attrs: { power: null, heat: 'ventilato', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Compatto e leggero: si sposta da una stanza all\'altra con una mano', 'Marchio Rowenta con quasi 13.000 recensioni a 4,3 stelle: affidabilità provata', 'Doppia potenza per dosare caldo e consumo'],
    cons: ['Essenziale: niente termostato digitale né timer', 'Potenza non dichiarata in scheda, da verificare per stanze grandi'],
    buyIf: 'Vuoi un termoventilatore piccolo, robusto e di marca per scaldare in fretta un bagno o una stanza piccola.',
    avoidIf: 'Cerchi termostato preciso, timer o controllo da app.'
  },
  {
    id: 'dreo-riscaldatore-telecomando-termostato', v: 'stufe-elettriche', brand: 'Dreo', name: 'Riscaldatore con Telecomando e Termostato',
    price: 110, quality: 8.5, checked: '2026-11-23',
    tagline: 'Comandi comodi da divano: telecomando, 3 modalità, termostato',
    attrs: { power: null, heat: 'ventilato', noise: null, thermostat: true, ecoMode: false, timer: false, remote: true, oscillation: false, tipOver: true, overheat: true, bagno: false, wallMount: false },
    pros: ['Telecomando e termostato: imposti la temperatura e lo dimentichi', '3 modalità di riscaldamento per adattarlo alla stagione', 'Quasi 12.000 recensioni a 4,4 stelle'],
    cons: ['Prezzo sopra la media dei termoventilatori base', 'Resta un modello ad aria: in stanze grandi fatica'],
    buyIf: 'Vuoi gestire il riscaldamento dal divano con telecomando e termostato, senza alzarti.',
    avoidIf: 'Cerchi la stufetta più economica possibile per un uso saltuario.'
  },
  {
    id: 'taurus-new-gobi-2000', v: 'stufe-elettriche', brand: 'Taurus', name: 'New Gobi 2000W',
    price: 24, quality: 7.6, checked: '2026-11-23',
    tagline: 'Due potenze, termostato, prezzo mini',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: true, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: true, bagno: false, wallMount: false },
    pros: ['2000W con due potenze e termostato a meno di 25 euro', 'Compatto, scalda in fretta una stanza piccola', 'Protezione contro il surriscaldamento'],
    cons: ['Costruzione essenziale, plastica basica', 'Niente timer né telecomando'],
    buyIf: 'Vuoi spendere pochissimo per un termoventilatore che scalda subito una stanza piccola.',
    avoidIf: 'Ti servono comandi digitali, timer o silenziosità.'
  },
  {
    id: 'olimpia-splendid-caldo-pop-a', v: 'stufe-elettriche', brand: 'Olimpia Splendid', name: 'Caldo Pop A 2000W',
    price: 18, quality: 7.4, checked: '2026-11-23',
    tagline: 'Il termoventilatore da pochi euro, marca italiana',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Prezzo tra i più bassi in assoluto', 'Marchio italiano specializzato nel clima', '2000W con due impostazioni di calore'],
    cons: ['Molto basico: comandi manuali, nessun termostato di precisione', 'Rumoroso alla massima potenza'],
    buyIf: 'Cerchi una stufetta di emergenza o per uso saltuario spendendo il minimo.',
    avoidIf: 'La userai tutti i giorni per ore: meglio un modello con termostato vero.'
  },
  {
    id: 'philips-torre-5000-2000', v: 'stufe-elettriche', brand: 'Philips', name: 'Termoventilatore a Torre Serie 5000',
    price: 73, quality: 8.7, checked: '2026-11-23',
    tagline: 'A torre, oscillante, con 5 sicurezze: il più rifinito',
    attrs: { power: 2000, heat: 'ventilato', noise: 40, thermostat: false, ecoMode: true, timer: false, remote: true, oscillation: true, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Formato a torre salvaspazio con oscillazione a 60°', '5 funzioni di sicurezza e display: tra i più curati della categoria', '40,5 dB dichiarati e 4 modalità, con risparmio energetico del 50% dichiarato'],
    cons: ['Costa più di un termoventilatore tradizionale', 'App e funzioni smart non indispensabili per tutti'],
    buyIf: 'Vuoi un termoventilatore elegante a torre, oscillante e ben rifinito per il soggiorno.',
    avoidIf: 'Ti basta scaldare e non vuoi spendere per display e app.'
  },
  {
    id: 'imetec-compact-air-2000', v: 'stufe-elettriche', brand: 'Imetec', name: 'Compact Air 2000W',
    price: 29, quality: 7.9, checked: '2026-11-23',
    tagline: 'Compatto e di marca italiana, buon prezzo',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: true, bagno: false, wallMount: false },
    pros: ['Compatto e leggero, marchio italiano Imetec', '2000W per scaldare in fretta una stanza', '4,4 stelle su oltre 2.000 recensioni'],
    cons: ['Essenziale nei comandi', 'Getto d\'aria percettibile'],
    buyIf: 'Vuoi un termoventilatore compatto e affidabile di marca italiana a buon prezzo.',
    avoidIf: 'Cerchi termostato digitale o telecomando.'
  },
  {
    id: 'delonghi-capsule-hfx30', v: 'stufe-elettriche', brand: 'De\'Longhi', name: 'Capsule HFX30 da tavolo',
    price: 35, quality: 8.1, checked: '2026-11-23',
    tagline: 'Design iconico da tavolo, piccolo e caldo',
    attrs: { power: null, heat: 'ventilato', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Formato Capsule piccolissimo: sta su una scrivania o in bagno', 'Design De\'Longhi riconoscibile, ceramica', 'Oltre 4.500 recensioni a 4,4 stelle'],
    cons: ['Pensato per riscaldamento personale, non per l\'intera stanza', 'Potenza non dichiarata nel titolo'],
    buyIf: 'Vuoi un termoventilatore piccolo e bello da tenere su scrivania o in bagno per il caldo immediato vicino a te.',
    avoidIf: 'Devi scaldare tutta la stanza: serve un modello più potente.'
  },
  {
    id: 'midea-nty15-verticale', v: 'stufe-elettriche', brand: 'Midea', name: 'NTY15 Verticale PTC',
    price: 21, quality: 7.7, checked: '2026-11-23',
    tagline: 'Verticale ceramico a prezzo piccolo',
    attrs: { power: 1500, heat: 'ventilato', noise: null, thermostat: true, ecoMode: true, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Ceramica PTC verticale, scalda in fretta', 'Prezzo molto contenuto', '4,4 stelle su oltre 1.700 recensioni'],
    cons: ['Comandi essenziali', 'Niente telecomando'],
    buyIf: 'Vuoi un termoventilatore verticale ceramico economico per camera o studio.',
    avoidIf: 'Cerchi funzioni smart o silenzio da camera da letto.'
  },
  {
    id: 'amazon-basics-ceramica-1800', v: 'stufe-elettriche', brand: 'Amazon Basics', name: 'Termoventilatore Ceramico 1800W',
    price: 21, quality: 7.8, checked: '2026-11-23',
    tagline: 'Il value: 1800W con termostato, spesa minima',
    attrs: { power: 1800, heat: 'ventilato', noise: null, thermostat: true, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['1800W con termostato regolabile a un prezzo molto basso', 'Ceramica con oscillazione, 4,5 stelle su oltre 1.500 recensioni', 'Essenziale ma fa quello che promette'],
    cons: ['Marchio senza assistenza specializzata', 'Materiali basici'],
    buyIf: 'Vuoi il miglior rapporto caldo/prezzo senza fronzoli, con termostato.',
    avoidIf: 'Dai valore al marchio o cerchi comandi digitali avanzati.'
  },
  {
    id: 'dreo-stufa-torre-2000-silenziosa', v: 'stufe-elettriche', brand: 'Dreo', name: 'Stufa a Torre 2000W Silenziosa',
    price: 114, quality: 8.6, checked: '2026-11-23',
    tagline: 'Torre alta 23", silenziosa e con telecomando',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: true, ecoMode: true, timer: true, remote: true, oscillation: true, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Formato a torre alto che scalda meglio una stanza intera', 'Silenziosa e con telecomando', '4,4 stelle su oltre 1.500 recensioni'],
    cons: ['Ingombro in altezza', 'Prezzo medio-alto'],
    buyIf: 'Vuoi una torre che scaldi uniformemente una camera o un soggiorno restando silenziosa.',
    avoidIf: 'Hai poco spazio o cerchi la spesa minima.'
  },
  {
    id: 'orbegozo-fhr-3050-3000', v: 'stufe-elettriche', brand: 'Orbegozo', name: 'FHR 3050 A 3000W',
    price: 58, quality: 7.5, checked: '2026-11-23',
    tagline: '3000W: la più potente, per scaldare in fretta spazi grandi',
    attrs: { power: 3000, heat: 'ventilato', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: true, bagno: false, wallMount: false },
    pros: ['3000W: tra le più potenti, scalda in fretta anche ambienti ampi', 'Ceramica professionale con due potenze', 'Prezzo contenuto per la potenza offerta'],
    cons: ['3000W consumano parecchio: occhio alla bolletta', 'Rumorosa alla massima potenza'],
    buyIf: 'Devi scaldare in fretta un garage, una taverna o una stanza grande e fredda.',
    avoidIf: 'Ti preoccupa il consumo o la userai in una stanza piccola.'
  },
  {
    id: 'stufetta-1000-bagno-ptc', v: 'stufe-elettriche', brand: 'PTC', name: 'Stufetta da Bagno 1000W',
    price: 28, quality: 7.6, checked: '2026-11-23',
    tagline: 'Piccola, 1000W, pensata per il bagno',
    attrs: { power: 1000, heat: 'ventilato', noise: null, thermostat: false, ecoMode: true, timer: false, remote: false, oscillation: false, tipOver: true, overheat: true, bagno: true, wallMount: false },
    pros: ['Formato piccolo da appoggiare in bagno, 1000W', 'Basso consumo dichiarato, 4,5 stelle su oltre 1.200 recensioni', 'Scalda subito lo spazio ravvicinato'],
    cons: ['1000W scaldano solo spazi piccoli', 'Marchio generico senza assistenza'],
    buyIf: 'Vuoi un caldo rapido e ravvicinato in bagno o in una stanza piccolissima.',
    avoidIf: 'Devi scaldare una stanza oltre i 10 m².'
  },
  {
    id: 'gaiatop-mini-500', v: 'stufe-elettriche', brand: 'Gaiatop', name: 'Mini Termoventilatore 500W',
    price: 27, quality: 7.7, checked: '2026-11-23',
    tagline: 'Mini da scrivania: 500W, caldo subito sotto il tavolo',
    attrs: { power: 500, heat: 'ventilato', noise: null, thermostat: false, ecoMode: true, timer: false, remote: false, oscillation: false, tipOver: true, overheat: true, bagno: false, wallMount: false },
    pros: ['Piccolissimo da scrivania, caldo immediato sulle gambe', '500W: consumo bassissimo per riscaldamento personale', '4,5 stelle su oltre 1.000 recensioni'],
    cons: ['500W scaldano solo chi è vicino, non la stanza', 'Oscillazione e termostato assenti o basici'],
    buyIf: 'Lavori alla scrivania e vuoi un caldo immediato e a basso consumo vicino a te.',
    avoidIf: 'Vuoi scaldare l\'ambiente e non solo te stesso.'
  },
  {
    id: 'ardes-sound-ar4p03-1500', v: 'stufe-elettriche', brand: 'Ardes', name: 'Sound AR4P03 Ceramico 1500W',
    price: 41, quality: 7.8, checked: '2026-11-23',
    tagline: 'Ceramico italiano a basso consumo, equilibrato',
    attrs: { power: 1500, heat: 'ventilato', noise: null, thermostat: true, ecoMode: true, timer: false, remote: false, oscillation: false, tipOver: true, overheat: false, bagno: false, wallMount: false },
    pros: ['Ceramica a basso consumo, marchio italiano Ardes', '1500W adatti a camera e studio', '4,4 stelle su oltre 800 recensioni'],
    cons: ['Comandi essenziali', 'Niente telecomando'],
    buyIf: 'Vuoi un ceramico italiano equilibrato per camera o studio a buon prezzo.',
    avoidIf: 'Cerchi telecomando o display.'
  },
  {
    id: 'midea-ceramico-2000-scrivania', v: 'stufe-elettriche', brand: 'Midea', name: 'Termoventilatore Ceramico 2000W da Scrivania',
    price: 24, quality: 7.7, checked: '2026-11-23',
    tagline: 'Ceramico PTC da scrivania, prezzo piccolo',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: false, ecoMode: true, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Ceramica PTC da 2000W a prezzo contenuto', 'Compatto, adatto a scrivania e stanza piccola', '4,4 stelle su oltre 1.700 recensioni'],
    cons: ['Comandi basici', 'Getto d\'aria percettibile'],
    buyIf: 'Vuoi un ceramico economico e compatto per scrivania o stanza piccola.',
    avoidIf: 'Cerchi silenzio o comandi digitali.'
  },
  {
    id: 'delonghi-trrs0920-olio-9', v: 'stufe-elettriche', brand: 'De\'Longhi', name: 'TRRS0920 Radiatore a Olio 9 Elementi',
    price: 88, quality: 8.8, checked: '2026-11-23',
    tagline: 'Il radiatore a olio di riferimento: caldo costante e silenzioso',
    attrs: { power: 2000, heat: 'convezione', noise: null, thermostat: false, ecoMode: true, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Calore a olio diffuso, costante e totalmente silenzioso: ideale di notte', '9 elementi De\'Longhi, marchio leader dei radiatori a olio', '4,5 stelle su oltre 5.000 recensioni'],
    cons: ['Ci mette qualche minuto a scaldare: non è caldo immediato', 'Pesante da spostare, anche con le ruote'],
    buyIf: 'Vuoi scaldare camera o soggiorno con un caldo costante e silenzioso, da tenere acceso a lungo.',
    avoidIf: 'Ti serve caldo istantaneo per pochi minuti: meglio un termoventilatore.'
  },
  {
    id: 'vonhaus-olio-2500-11', v: 'stufe-elettriche', brand: 'VonHaus', name: 'Radiatore a Olio 2500W 11 Elementi',
    price: 85, quality: 8.3, checked: '2026-11-23',
    tagline: '11 elementi, 2500W: tanto caldo costante per stanze grandi',
    attrs: { power: 2500, heat: 'convezione', noise: null, thermostat: true, ecoMode: true, timer: true, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['2500W e 11 elementi: scalda bene anche una stanza grande', 'Caldo a olio silenzioso e uniforme', '4,3 stelle su oltre 4.000 recensioni'],
    cons: ['Grande e pesante', 'Avvio graduale, non immediato'],
    buyIf: 'Devi scaldare in modo costante e silenzioso una stanza grande o una zona giorno.',
    avoidIf: 'Hai poco spazio o vuoi caldo immediato.'
  },
  {
    id: 'orbegozo-cv2300-convettore', v: 'stufe-elettriche', brand: 'Orbegozo', name: 'CV 2300 Termoconvettore 2000W',
    price: 33, quality: 7.7, checked: '2026-11-23',
    tagline: 'Convettore essenziale, caldo diffuso a prezzo basso',
    attrs: { power: 2000, heat: 'convezione', noise: null, thermostat: true, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: true, bagno: false, wallMount: false },
    pros: ['Convezione silenziosa a prezzo molto basso', '3 livelli di potenza, montabile a parete', '4,2 stelle su oltre 3.000 recensioni'],
    cons: ['Scalda più lentamente di un termoventilatore', 'Termostato meccanico basilare'],
    buyIf: 'Vuoi un caldo diffuso e silenzioso spendendo poco, anche da fissare a parete.',
    avoidIf: 'Ti serve caldo immediato o una stanza molto grande.'
  },
  {
    id: 'pro-breeze-olio-2500-11', v: 'stufe-elettriche', brand: 'Pro Breeze', name: 'Radiatore a Olio 2500W 11 Elementi',
    price: 117, quality: 8.1, checked: '2026-11-23',
    tagline: 'Olio da 11 elementi con timer, per il caldo costante',
    attrs: { power: 2500, heat: 'convezione', noise: null, thermostat: true, ecoMode: false, timer: true, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['2500W e 11 elementi per stanze grandi, con timer', 'Caldo a olio silenzioso e uniforme', '4,2 stelle su oltre 2.400 recensioni'],
    cons: ['Pesante e ingombrante', 'Avvio graduale'],
    buyIf: 'Vuoi un radiatore a olio potente con timer per scaldare a lungo una stanza grande.',
    avoidIf: 'Cerchi caldo immediato o un modello leggero.'
  },
  {
    id: 'imetec-rapid-comfort-convettore', v: 'stufe-elettriche', brand: 'Imetec', name: 'Rapid Comfort Termoconvettore 2000W',
    price: 70, quality: 8, checked: '2026-11-23',
    tagline: 'Convettore italiano con risparmio dichiarato fino al 40%',
    attrs: { power: 2000, heat: 'convezione', noise: null, thermostat: false, ecoMode: true, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Convezione silenziosa, marchio italiano Imetec', 'Risparmio energetico dichiarato fino al 40%', '4,1 stelle su quasi 2.000 recensioni'],
    cons: ['Il risparmio dichiarato è del produttore, da verificare nell\'uso', 'Scalda meno in fretta di un termoventilatore'],
    buyIf: 'Vuoi un convettore italiano silenzioso con attenzione ai consumi.',
    avoidIf: 'Ti serve caldo istantaneo.'
  },
  {
    id: 'dreo-oh310-olio-smart', v: 'stufe-elettriche', brand: 'Dreo', name: 'OH310 Radiatore a Olio Smart 2000W',
    price: 140, quality: 8.4, checked: '2026-11-23',
    tagline: 'Radiatore a olio con app e termostato: olio che diventa smart',
    attrs: { power: 2000, heat: 'convezione', noise: null, thermostat: false, ecoMode: true, timer: true, remote: true, oscillation: false, tipOver: false, overheat: true, bagno: false, wallMount: false },
    pros: ['Caldo a olio costante e silenzioso con controllo da app e termostato', 'Risparmio energetico grazie alla gestione intelligente', '4,3 stelle su oltre 1.000 recensioni'],
    cons: ['Prezzo superiore a un olio tradizionale', 'Pesante, avvio graduale'],
    buyIf: 'Vuoi il caldo costante e silenzioso dell\'olio ma gestito da app e termostato.',
    avoidIf: 'Non ti servono le funzioni smart e vuoi spendere meno.'
  },
  {
    id: 'rowenta-vectissimo-convettore-2400', v: 'stufe-elettriche', brand: 'Rowenta', name: 'Vectissimo Turbo Termoconvettore 2400W',
    price: 87, quality: 7.9, checked: '2026-11-23',
    tagline: 'Convettore Rowenta con turbo: caldo diffuso e spinta rapida',
    attrs: { power: 2400, heat: 'convezione', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['2400W con funzione turbo per accelerare il riscaldamento', 'Convezione silenziosa di marca Rowenta', '4,0 stelle su oltre 1.100 recensioni'],
    cons: ['La convezione resta più lenta del termoventilatore', 'Termostato meccanico'],
    buyIf: 'Vuoi un convettore di marca con una spinta turbo per scaldare più in fretta.',
    avoidIf: 'Cerchi comandi digitali o la spesa minima.'
  },
  {
    id: 'delonghi-nano-trns0808-olio', v: 'stufe-elettriche', brand: 'De\'Longhi', name: 'Serie Nano TRNS0808M Radiatore a Olio 8 Elementi',
    price: 104, quality: 8.5, checked: '2026-11-23',
    tagline: 'Il radiatore a olio compatto: caldo d\'olio dove lo spazio è poco',
    attrs: { power: null, heat: 'convezione', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Formato Nano compatto: il caldo a olio anche in stanze piccole', '8 elementi De\'Longhi, silenzioso e costante', '4,5 stelle su oltre 3.600 recensioni'],
    cons: ['Scalda gradualmente, non è immediato', 'Adatto a stanze piccole-medie, non grandi'],
    buyIf: 'Vuoi il caldo costante e silenzioso dell\'olio ma hai poco spazio.',
    avoidIf: 'Devi scaldare una stanza grande o vuoi caldo immediato.'
  },
  {
    id: 'blumfeldt-infrarossi-2000-terra', v: 'stufe-elettriche', brand: 'Blumfeldt', name: 'Stufa a Infrarossi 2000W da Terra',
    price: 150, quality: 7.8, checked: '2026-11-23',
    tagline: 'Infrarossi da terra: caldo addosso come il sole, anche fuori',
    attrs: { power: 2000, heat: 'radiante', noise: null, thermostat: false, ecoMode: false, timer: false, remote: true, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Caldo radiante immediato puntato addosso, utile anche su balcone o veranda', 'Non asciuga l\'aria come un termoventilatore', '4,2 stelle su oltre 800 recensioni'],
    cons: ['Scalda chi è davanti, non l\'intera stanza', 'La luce rossa può dare fastidio di sera'],
    buyIf: 'Vuoi caldo immediato addosso in un punto preciso, anche in spazi aperti o semiaperti.',
    avoidIf: 'Devi scaldare uniformemente una stanza chiusa.'
  },
  {
    id: 'olimpia-splendid-solaria-alogena', v: 'stufe-elettriche', brand: 'Olimpia Splendid', name: 'Solaria Evo S Alogena 1200W',
    price: 35, quality: 7.6, checked: '2026-11-23',
    tagline: 'Alogena classica, caldo istantaneo a prezzo piccolo',
    attrs: { power: 1200, heat: 'radiante', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: true, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Caldo radiante immediato appena accesa', 'Marchio italiano, prezzo molto contenuto', '4,1 stelle su oltre 800 recensioni'],
    cons: ['Scalda solo nella direzione in cui è puntata', 'Luce arancione intensa'],
    buyIf: 'Vuoi caldo istantaneo e mirato spendendo poco, per scaldarti velocemente addosso.',
    avoidIf: 'Vuoi scaldare la stanza o un caldo diffuso.'
  },
  {
    id: 'ardes-tizzo-carbonio-oscillante', v: 'stufe-elettriche', brand: 'Ardes', name: 'Tizzo Stufa al Carbonio Oscillante 900W',
    price: 38, quality: 7.7, checked: '2026-11-23',
    tagline: 'Fibra di carbonio oscillante: caldo radiante dolce che si muove',
    attrs: { power: 900, heat: 'radiante', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: true, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Fibra di carbonio: caldo radiante più dolce e luce meno intensa dell\'alogena', 'Oscillazione: distribuisce il caldo su un\'area più ampia', '4,1 stelle su oltre 800 recensioni'],
    cons: ['900W: riscaldamento di zona, non dell\'intera stanza', 'Resta un radiante direzionale'],
    buyIf: 'Vuoi un caldo radiante dolce e oscillante per una zona del salotto.',
    avoidIf: 'Devi scaldare uniformemente tutta la stanza.'
  },
  {
    id: 'kesser-infrarossi-2000-terra', v: 'stufe-elettriche', brand: 'Kesser', name: 'Riscaldamento Radiante a Infrarossi 2000W',
    price: 63, quality: 7.5, checked: '2026-11-23',
    tagline: 'Infrarossi da terra regolabile, per interni e spazi aperti',
    attrs: { power: 2000, heat: 'radiante', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Caldo radiante immediato, regolabile, anche per esterni coperti', 'Non asciuga l\'aria', '4,3 stelle su oltre 700 recensioni'],
    cons: ['Scalda in modo direzionale', 'Luce rossa di sera'],
    buyIf: 'Vuoi caldo radiante immediato e regolabile per terrazzo, veranda o angolo del soggiorno.',
    avoidIf: 'Cerchi un caldo diffuso per tutta la stanza.'
  },
  {
    id: 'dreo-parete-2000-oscillante', v: 'stufe-elettriche', brand: 'Dreo', name: 'Termoventilatore da Parete 2000W Oscillante',
    price: 102, quality: 8.5, checked: '2026-11-23',
    tagline: 'Da parete e oscillante: libera il pavimento, sicuro in bagno',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: true, ecoMode: false, timer: true, remote: true, oscillation: true, tipOver: false, overheat: false, bagno: true, wallMount: true },
    pros: ['Montaggio a parete: libera il pavimento, utile e sicuro in bagno', 'Oscillazione a 30° e 2000W', '4,4 stelle su oltre 3.000 recensioni'],
    cons: ['Richiede installazione a muro', 'Resta un modello ad aria'],
    buyIf: 'Vuoi un termoventilatore fisso a parete per il bagno o una stanza dove serve liberare il pavimento.',
    avoidIf: 'Vuoi un apparecchio da spostare liberamente senza installarlo.'
  },
  {
    id: 'olimpia-splendid-caldo-up-t-parete', v: 'stufe-elettriche', brand: 'Olimpia Splendid', name: 'Caldo Up T WiFi da Parete',
    price: 70, quality: 7.9, checked: '2026-11-23',
    tagline: 'Ceramico da parete WiFi, comandi da app',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: false, ecoMode: false, timer: true, remote: true, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: true },
    pros: ['Da parete con WiFi: comandi da smartphone', 'Ceramico, marchio italiano', '4,0 stelle su oltre 1.300 recensioni'],
    cons: ['Installazione a muro necessaria', 'La connessione WiFi va configurata'],
    buyIf: 'Vuoi un termoventilatore fisso a parete gestibile da app, anche in bagno.',
    avoidIf: 'Non vuoi installarlo o non ti interessa il WiFi.'
  },
  {
    id: 'delonghi-capsule-desk-360', v: 'stufe-elettriche', brand: 'De\'Longhi', name: 'Capsule Desk 360W',
    price: 55, quality: 8, checked: '2026-11-23',
    tagline: 'Il mini da scrivania firmato De\'Longhi, 39 dB',
    attrs: { power: 360, heat: 'ventilato', noise: 39, thermostat: true, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Formato Capsule piccolissimo da scrivania, 39 dB silenzioso', '360W: consumo minimo per il caldo personale', '4,4 stelle su oltre 1.500 recensioni'],
    cons: ['360W scaldano solo chi è vicino', 'Non scalda la stanza'],
    buyIf: 'Vuoi un mini silenzioso e di marca per il caldo personale sotto la scrivania.',
    avoidIf: 'Vuoi scaldare l\'ambiente.'
  },
  {
    id: 'delonghi-hvy1020-young', v: 'stufe-elettriche', brand: 'De\'Longhi', name: 'HVY1020 Young Verticale',
    price: 23, quality: 7.9, checked: '2026-11-23',
    tagline: 'Verticale leggero e silenzioso, il best value De\'Longhi',
    attrs: { power: 2000, heat: 'ventilato', noise: null, thermostat: false, ecoMode: false, timer: false, remote: false, oscillation: false, tipOver: false, overheat: false, bagno: false, wallMount: false },
    pros: ['Verticale leggero e silenzioso, marchio De\'Longhi', 'Prezzo molto contenuto per la marca', '4,3 stelle su oltre 2.600 recensioni'],
    cons: ['Comandi manuali essenziali', '2 potenze senza termostato digitale'],
    buyIf: 'Vuoi un termoventilatore verticale di marca, leggero e silenzioso, spendendo poco.',
    avoidIf: 'Cerchi termostato digitale o telecomando.'
  },
);

/* ---------- UMIDIFICATORI (aggiunti 2026-11-23, dati reali amazon.it) ---------- */
window.PRODUCTS.push(
  {
    id: 'dreo-smart-4l-camera', v: 'umidificatori', brand: 'Dreo', name: 'Umidificatore Smart 4L da Camera',
    price: 54, quality: 8.9, checked: '2026-11-23',
    tagline: 'Il più amato in assoluto: smart, silenzioso, riempimento dall\'alto',
    attrs: { tank: 4, type: 'ultrasuoni', mq: null, noise: null, autonomy: 32, humidistat: true, warmMist: false, topFill: false, aroma: false, nightLight: true, autoOff: false, remote: true },
    pros: ['Oltre 29.000 recensioni a 4,4 stelle: di gran lunga il più venduto della categoria', 'Riempimento dall\'alto: versi l\'acqua senza smontare nulla', 'Smart con igrometro: regola la nebbia da solo per mantenere l\'umidità impostata'],
    cons: ['La nebbia fredda a ultrasuoni, con acqua molto dura, può lasciare polvere bianca', 'Il serbatoio da 4L in ambienti grandi va riempito ogni giorno'],
    buyIf: 'Vuoi l\'umidificatore collaudato e senza pensieri per la camera, con riempimento comodo e regolazione automatica.',
    avoidIf: 'Hai acqua del rubinetto molto calcarea e non vuoi usare acqua demineralizzata.'
  },
  {
    id: 'levoit-neoclassic-450s', v: 'umidificatori', brand: 'Levoit', name: 'NeoClassic 450S Smart 4,2L',
    price: 48, quality: 8.8, checked: '2026-11-23',
    tagline: 'Caldo e freddo, smart, con oltre 20.000 recensioni',
    attrs: { tank: 4.2, type: 'ibrido', mq: null, noise: 21, autonomy: 42, humidistat: false, warmMist: true, topFill: true, aroma: false, nightLight: false, autoOff: false, remote: true },
    pros: ['Nebbia calda e fredda in un solo apparecchio: la calda è più igienica d\'inverno', 'Smart (app e comandi vocali) con sensore di umidità integrato', '4,5 stelle su oltre 20.000 recensioni: una delle valutazioni più alte'],
    cons: ['Prezzo sopra la media degli ultrasuoni base', 'La pulizia di un ibrido richiede un po\' più di attenzione'],
    buyIf: 'Vuoi un umidificatore completo (caldo+freddo) e intelligente, da tenere in camera o soggiorno.',
    avoidIf: 'Cerchi solo il modello più economico per umidificare una stanza piccola.'
  },
  {
    id: 'levoit-lv600s-6l', v: 'umidificatori', brand: 'Levoit', name: 'LV600S 6L Caldo e Freddo',
    price: 80, quality: 8.6, checked: '2026-11-23',
    tagline: '6 litri, caldo e freddo: copre stanze grandi tutta la notte',
    attrs: { tank: 6, type: 'ibrido', mq: 70, noise: null, autonomy: null, humidistat: false, warmMist: true, topFill: true, aroma: true, nightLight: false, autoOff: false, remote: true },
    pros: ['6L di serbatoio: autonomia lunga anche in ambienti grandi', 'Nebbia calda e fredda, smart con app', 'Modello di riferimento, citato dai test internazionali'],
    cons: ['Ingombrante rispetto a un piccolo da camera', 'Prezzo da fascia alta'],
    buyIf: 'Devi umidificare una stanza grande o il soggiorno e vuoi lunga autonomia senza rabbocchi.',
    avoidIf: 'Ti serve un modello piccolo e discreto per il comodino.'
  },
  {
    id: 'levoit-classic-3l-25h', v: 'umidificatori', brand: 'Levoit', name: 'Umidificatore 3L 25H',
    price: 38, quality: 8.4, checked: '2026-11-23',
    tagline: '3 litri, 25 ore di autonomia, luce e aromaterapia',
    attrs: { tank: 3, type: 'ultrasuoni', mq: null, noise: 28, autonomy: 25, humidistat: false, warmMist: false, topFill: false, aroma: true, nightLight: false, autoOff: false, remote: false },
    pros: ['Fino a 25 ore di autonomia dichiarata con un serbatoio da 3L', 'Luce notturna e vaschetta per oli essenziali', 'Marchio Levoit affidabile, 4,4 stelle su oltre 6.500 recensioni'],
    cons: ['Ultrasuoni a nebbia fredda: con acqua dura possibile polvere bianca', 'Niente igrometro automatico su questa versione base'],
    buyIf: 'Vuoi un buon ultrasuoni di marca per la camera, con luce notturna e lunga autonomia a prezzo giusto.',
    avoidIf: 'Vuoi la regolazione automatica dell\'umidità.'
  },
  {
    id: 'levoit-4-5l-45h-caldo-freddo', v: 'umidificatori', brand: 'Levoit', name: 'Umidificatore 4,5L 45H Caldo e Freddo',
    price: 80, quality: 8.5, checked: '2026-11-23',
    tagline: '45 ore di autonomia e nebbia calda/fredda',
    attrs: { tank: 4.5, type: 'ibrido', mq: 40, noise: 26, autonomy: 45, humidistat: false, warmMist: true, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Fino a 45 ore di autonomia: lo riempi ogni due giorni', 'Caldo e freddo, adatto a camera e stanza dei bambini', '4,4 stelle su oltre 6.500 recensioni'],
    cons: ['Più ingombrante di un piccolo da comodino', 'Prezzo medio-alto'],
    buyIf: 'Vuoi lunga autonomia e nebbia calda per l\'inverno senza riempirlo di continuo.',
    avoidIf: 'Hai poco spazio o vuoi spendere il minimo.'
  },
  {
    id: 'clarston-2l-camera', v: 'umidificatori', brand: 'Clarston', name: 'Umidificatore 2L Nebbia Fredda',
    price: 36, quality: 7.9, checked: '2026-11-23',
    tagline: 'Compatto da camera, nebbia fredda a prezzo giusto',
    attrs: { tank: 2, type: 'ultrasuoni', mq: null, noise: 24, autonomy: 25, humidistat: false, warmMist: false, topFill: true, aroma: false, nightLight: true, autoOff: false, remote: false },
    pros: ['Formato compatto da 2L, perfetto per il comodino', 'Nebbia fredda silenziosa, buono per la notte', '4,4 stelle su oltre 2.600 recensioni'],
    cons: ['2L bastano per una stanza piccola, non per ambienti grandi', 'Funzioni essenziali'],
    buyIf: 'Vuoi un umidificatore piccolo e silenzioso per la camera da letto senza spendere troppo.',
    avoidIf: 'Devi coprire una stanza grande o vuoi lunga autonomia.'
  },
  {
    id: 'megawise-3-5l-nebbia-fredda', v: 'umidificatori', brand: 'MegaWise', name: 'Umidificatore 3,5L Nebbia Fredda',
    price: 51, quality: 7.9, checked: '2026-11-23',
    tagline: '3,5 litri silenzioso, buon equilibrio prezzo/capacità',
    attrs: { tank: 3.5, type: 'ultrasuoni', mq: null, noise: 24, autonomy: null, humidistat: false, warmMist: false, topFill: false, aroma: true, nightLight: true, autoOff: false, remote: false },
    pros: ['3,5L per una stanza media con buona autonomia', 'Nebbia fredda silenziosa, spegnimento automatico senz\'acqua', '4,3 stelle su quasi 1.500 recensioni'],
    cons: ['Senza igrometro automatico', 'Plastica basica'],
    buyIf: 'Vuoi una capacità media e il silenzio per la camera, a prezzo contenuto.',
    avoidIf: 'Cerchi la regolazione automatica o la nebbia calda.'
  },
  {
    id: 'megawise-1-5l-piccolo', v: 'umidificatori', brand: 'MegaWise', name: 'Umidificatore 1,5L da Comodino',
    price: 22, quality: 7.6, checked: '2026-11-23',
    tagline: 'Piccolo e economico per camera e cameretta',
    attrs: { tank: 1.5, type: 'ultrasuoni', mq: null, noise: 25, autonomy: 10, humidistat: false, warmMist: false, topFill: false, aroma: true, nightLight: false, autoOff: false, remote: false },
    pros: ['Compatto da 1,5L, ideale sul comodino o sulla scrivania', 'Prezzo tra i più bassi, 4,2 stelle su oltre 5.000 recensioni', 'Spegnimento automatico quando finisce l\'acqua'],
    cons: ['1,5L durano poco: rabbocchi frequenti', 'Solo per stanze piccole'],
    buyIf: 'Vuoi spendere poco per umidificare il comodino o la scrivania.',
    avoidIf: 'Vuoi coprire una stanza media o dormire senza rabboccare.'
  },
  {
    id: 'aroeve-6l-igrometro', v: 'umidificatori', brand: 'AROEVE', name: 'Umidificatore 6L con Igrometro',
    price: 49, quality: 8.1, checked: '2026-11-23',
    tagline: '6 litri, igrometro, riempimento dall\'alto: tanto a poco',
    attrs: { tank: 6, type: 'ultrasuoni', mq: null, noise: 25, autonomy: 60, humidistat: true, warmMist: false, topFill: true, aroma: true, nightLight: false, autoOff: false, remote: false },
    pros: ['6L con riempimento dall\'alto e igrometro per regolarsi da solo', 'Lunga autonomia per ambienti grandi', '4,4 stelle, prezzo aggressivo per la dotazione'],
    cons: ['Marchio meno noto dei leader', 'Recensioni meno numerose dei best seller'],
    buyIf: 'Vuoi tanta capacità, riempimento comodo e igrometro spendendo poco.',
    avoidIf: 'Preferisci un marchio molto diffuso con tantissime recensioni.'
  },
  {
    id: 'homvana-4l-bambini', v: 'umidificatori', brand: 'Homvana', name: 'Umidificatore 4L Bambini',
    price: 43, quality: 8.4, checked: '2026-11-23',
    tagline: 'Pensato per la cameretta: silenzioso, con aromaterapia',
    attrs: { tank: 4, type: 'ultrasuoni', mq: null, noise: null, autonomy: 40, humidistat: false, warmMist: false, topFill: false, aroma: true, nightLight: false, autoOff: false, remote: false },
    pros: ['Studiato per la stanza dei bambini, 4L di capacità', 'Silenzioso e con vaschetta per oli essenziali', '4,4 stelle su oltre 18.000 recensioni'],
    cons: ['Nebbia fredda: con acqua dura possibile polvere bianca', 'La vaschetta aromi va tenuta pulita'],
    buyIf: 'Vuoi un umidificatore affidabile e silenzioso per la cameretta dei bambini.',
    avoidIf: 'Preferisci la nebbia calda o hai acqua molto calcarea.'
  },
  {
    id: 'homvana-3-6l-bambini', v: 'umidificatori', brand: 'Homvana', name: 'Umidificatore 3,6L Bambini',
    price: 34, quality: 8.2, checked: '2026-11-23',
    tagline: 'Versione da 3,6L per la cameretta, economica',
    attrs: { tank: 3.6, type: 'ultrasuoni', mq: null, noise: 23, autonomy: 36, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: true, autoOff: false, remote: false },
    pros: ['3,6L silenzioso per la stanza dei bambini', 'Prezzo accessibile, aromaterapia inclusa', '4,4 stelle su oltre 18.000 recensioni'],
    cons: ['Senza igrometro automatico', 'Nebbia fredda'],
    buyIf: 'Vuoi la soluzione Homvana per la cameretta spendendo il meno possibile.',
    avoidIf: 'Vuoi la regolazione automatica dell\'umidità.'
  },
  {
    id: 'dreo-3l-bambini-26db', v: 'umidificatori', brand: 'Dreo', name: 'Umidificatore 3L Bambini 26 dB',
    price: 36, quality: 8.3, checked: '2026-11-23',
    tagline: '26 dB e igrometro: il silenzio per la cameretta',
    attrs: { tank: 3, type: 'ultrasuoni', mq: null, noise: 26, autonomy: 30, humidistat: true, warmMist: false, topFill: false, aroma: true, nightLight: false, autoOff: false, remote: false },
    pros: ['26 dB dichiarati: tra i più silenziosi, ideale per neonati', 'Igrometro integrato: mantiene l\'umidità giusta da solo', '4,4 stelle su oltre 7.600 recensioni'],
    cons: ['Serbatoio 3L: in stanze grandi va riempito spesso', 'Nebbia fredda'],
    buyIf: 'Vuoi il massimo silenzio e la regolazione automatica per la stanza di un neonato.',
    avoidIf: 'Devi coprire un ambiente grande con lunga autonomia.'
  },
  {
    id: 'megawise-topfill-3-5l-kids', v: 'umidificatori', brand: 'MegaWise', name: 'Top Fill 3,5L con Luce Notturna',
    price: 60, quality: 7.8, checked: '2026-11-23',
    tagline: 'Riempimento dall\'alto e luce a 7 colori per la cameretta',
    attrs: { tank: 3.5, type: 'ultrasuoni', mq: null, noise: null, autonomy: null, humidistat: false, warmMist: false, topFill: true, aroma: true, nightLight: true, autoOff: false, remote: false },
    pros: ['Riempimento dall\'alto comodo, 3,5L', 'Luce notturna a 7 colori, piace ai bambini', '4,3 stelle su oltre 4.000 recensioni'],
    cons: ['Senza igrometro automatico', 'La luce colorata non piace a tutti di notte'],
    buyIf: 'Vuoi un umidificatore per la cameretta facile da riempire e con luce notturna.',
    avoidIf: 'Vuoi il buio totale o la regolazione automatica.'
  },
  {
    id: 'babymoov-hygro-plus', v: 'umidificatori', brand: 'Babymoov', name: 'Hygro Plus Digitale',
    price: 66, quality: 8, checked: '2026-11-23',
    tagline: 'Marchio per l\'infanzia: caldo/freddo e igrometro digitale',
    attrs: { tank: null, type: 'ultrasuoni', mq: null, noise: null, autonomy: null, humidistat: true, warmMist: false, topFill: false, aroma: true, nightLight: true, autoOff: false, remote: false },
    pros: ['Marchio specializzato nei prodotti per neonati', 'Nebbia calda e fredda con igrometro digitale e luce notturna', '4,1 stelle su oltre 2.500 recensioni'],
    cons: ['Prezzo sopra la media per la capacità', 'Serbatoio non enorme'],
    buyIf: 'Vuoi un umidificatore di un marchio dedicato all\'infanzia, con regolazione e nebbia calda.',
    avoidIf: 'Cerchi il massimo serbatoio o il prezzo più basso.'
  },
  {
    id: 'bear-5l-topfill-28db', v: 'umidificatori', brand: 'Bear', name: 'Umidificatore 5L Top Fill 28 dB',
    price: 44, quality: 8.1, checked: '2026-11-23',
    tagline: '5 litri, riempimento dall\'alto, 28 dB',
    attrs: { tank: 5, type: 'ultrasuoni', mq: null, noise: 28, autonomy: 35, humidistat: false, warmMist: false, topFill: true, aroma: false, nightLight: false, autoOff: true, remote: false },
    pros: ['5L con riempimento dall\'alto: comodo e lunga autonomia', '28 dB dichiarati, adatto alla notte', '4,2 stelle su oltre 5.000 recensioni'],
    cons: ['Senza igrometro automatico', 'Ingombro maggiore di un piccolo'],
    buyIf: 'Vuoi tanta capacità e riempimento comodo per camera o stanza media, restando silenzioso.',
    avoidIf: 'Vuoi un modello mini o la regolazione automatica.'
  },
  {
    id: 'bear-6l-topfill', v: 'umidificatori', brand: 'Bear', name: 'Umidificatore 6L Top Fill 28 dB',
    price: 44, quality: 8.1, checked: '2026-11-23',
    tagline: '6 litri per ambienti grandi, riempimento dall\'alto',
    attrs: { tank: 6, type: 'ultrasuoni', mq: null, noise: 28, autonomy: 35, humidistat: false, warmMist: false, topFill: true, aroma: true, nightLight: false, autoOff: false, remote: false },
    pros: ['6L: tanta autonomia anche in soggiorno', 'Riempimento dall\'alto e 28 dB silenziosi', '4,2 stelle su oltre 5.000 recensioni'],
    cons: ['Ingombrante', 'Senza igrometro automatico'],
    buyIf: 'Devi umidificare un ambiente grande e vuoi lunga autonomia con riempimento comodo.',
    avoidIf: 'Hai poco spazio o vuoi la regolazione automatica.'
  },
  {
    id: 'dreo-6l-camera', v: 'umidificatori', brand: 'Dreo', name: 'Umidificatore 6L da Camera',
    price: 100, quality: 8.3, checked: '2026-11-23',
    tagline: '6 litri Dreo per stanze grandi, smart',
    attrs: { tank: 6, type: 'ultrasuoni', mq: null, noise: null, autonomy: 60, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: true },
    pros: ['6L di capacità per ambienti grandi, marchio Dreo collaudato', 'Gestione smart e nebbia regolabile', '4,3 stelle su quasi 4.000 recensioni'],
    cons: ['Prezzo di fascia alta', 'Ingombrante'],
    buyIf: 'Vuoi la capacità da 6L di un marchio affidabile con gestione smart.',
    avoidIf: 'Cerchi un modello piccolo o economico.'
  },
  {
    id: 'megawise-topfill-3-5l-fredda', v: 'umidificatori', brand: 'MegaWise', name: 'Top Fill 3,5L Nebbia Fredda',
    price: 68, quality: 7.8, checked: '2026-11-23',
    tagline: 'Riempimento dall\'alto, nebbia fredda, 3,5L',
    attrs: { tank: 3.5, type: 'ultrasuoni', mq: null, noise: null, autonomy: null, humidistat: false, warmMist: false, topFill: true, aroma: true, nightLight: false, autoOff: true, remote: false },
    pros: ['Riempimento dall\'alto comodo', 'Nebbia fredda silenziosa, 3,5L', '4,4 stelle su oltre 1.000 recensioni'],
    cons: ['Senza igrometro automatico', 'Marchio meno noto'],
    buyIf: 'Vuoi un 3,5L facile da riempire e silenzioso per la camera.',
    avoidIf: 'Vuoi la regolazione automatica o la nebbia calda.'
  },
  {
    id: 'livatro-3l-vapore-caldo', v: 'umidificatori', brand: 'Livatro', name: 'Umidificatore 3L Vapore Caldo Top Fill',
    price: 123, quality: 8, checked: '2026-11-23',
    tagline: 'Vapore caldo igienico con riempimento dall\'alto',
    attrs: { tank: 3, type: 'vapore-caldo', mq: null, noise: null, autonomy: null, humidistat: false, warmMist: true, topFill: true, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Vapore caldo: più igienico e piacevole d\'inverno', 'Riempimento dall\'alto, 3L', '4,3 stelle su oltre 2.400 recensioni'],
    cons: ['Il vapore caldo consuma più corrente', 'Prezzo alto per la capacità'],
    buyIf: 'Vuoi la nebbia calda igienica, comoda da riempire, per la camera d\'inverno.',
    avoidIf: 'Ti preoccupa il consumo o cerchi il prezzo più basso.'
  },
  {
    id: 'cecotec-breezecare-3500-warm', v: 'umidificatori', brand: 'Cecotec', name: 'BreezeCare 3500 Warm',
    price: 53, quality: 7.6, checked: '2026-11-23',
    tagline: 'Vapore caldo Cecotec a prezzo contenuto',
    attrs: { tank: null, type: 'vapore-caldo', mq: 35, noise: null, autonomy: 22, humidistat: false, warmMist: true, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Nebbia calda igienica, marchio Cecotec economico', 'Prezzo accessibile per un vapore caldo', 'Oltre 1.300 recensioni'],
    cons: ['Valutazione nella media (3,9 stelle)', 'Il vapore caldo consuma di più'],
    buyIf: 'Vuoi provare la nebbia calda spendendo poco.',
    avoidIf: 'Cerchi la valutazione più alta o la lunga autonomia.'
  },
  {
    id: 'miko-nebbia-fresca-calda', v: 'umidificatori', brand: 'Miko', name: 'Umidificatore Nebbia Fresca e Calda',
    price: 122, quality: 8, checked: '2026-11-23',
    tagline: 'Ibrido caldo/freddo con controlli avanzati',
    attrs: { tank: null, type: 'ibrido', mq: null, noise: null, autonomy: null, humidistat: false, warmMist: true, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Nebbia sia fredda sia calda, scegli in base alla stagione', 'Controlli avanzati e umidità regolabile', '4,2 stelle su oltre 1.300 recensioni'],
    cons: ['Prezzo di fascia alta', 'Pulizia più impegnativa (ha la parte riscaldante)'],
    buyIf: 'Vuoi un ibrido completo caldo/freddo con regolazione fine.',
    avoidIf: 'Vuoi semplicità e spesa contenuta.'
  },
  {
    id: 'ac-infinity-cloudforge-t3', v: 'umidificatori', brand: 'AC Infinity', name: 'CloudForge T3 4,5L per Piante',
    price: 109, quality: 8.4, checked: '2026-11-23',
    tagline: 'Umidificatore smart dedicato alle piante',
    attrs: { tank: 4.5, type: 'ultrasuoni', mq: null, noise: null, autonomy: null, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Progettato per le piante: nebbia regolabile e programmabile', 'Smart, 4,5L, marchio di riferimento nel grow', '4,3 stelle su oltre 2.400 recensioni'],
    cons: ['Pensato per le piante più che per la camera', 'Prezzo alto'],
    buyIf: 'Vuoi il livello di umidità giusto per piante tropicali o una grow room.',
    avoidIf: 'Ti serve solo umidificare la camera da letto.'
  },
  {
    id: 'ac-infinity-cloudforge-t7', v: 'umidificatori', brand: 'AC Infinity', name: 'CloudForge T7 15L per Piante',
    price: 235, quality: 8.3, checked: '2026-11-23',
    tagline: '15 litri per serre e grow room grandi',
    attrs: { tank: 15, type: 'ultrasuoni', mq: null, noise: null, autonomy: null, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['15L enormi: per serre, grow room e tante piante', 'Smart e programmabile, nebbia potente', '4,3 stelle su oltre 2.400 recensioni'],
    cons: ['Grande e costoso', 'Sovradimensionato per una stanza normale'],
    buyIf: 'Hai una serra, una grow room o molte piante tropicali da umidificare.',
    avoidIf: 'Ti serve umidificare una camera o un soggiorno.'
  },
  {
    id: 'vivosun-5l-piante', v: 'umidificatori', brand: 'VIVOSUN', name: 'Umidificatore 5L per Piante',
    price: 80, quality: 8, checked: '2026-11-23',
    tagline: 'Smart per piante, 5L con riempimento dall\'alto',
    attrs: { tank: 5, type: 'ultrasuoni', mq: null, noise: 24, autonomy: 50, humidistat: false, warmMist: false, topFill: true, aroma: false, nightLight: false, autoOff: false, remote: true },
    pros: ['5L pensati per le piante, smart e con app', 'Riempimento dall\'alto comodo', 'Marchio noto nel giardinaggio indoor'],
    cons: ['Orientato alle piante più che alla camera', 'Recensioni meno numerose dei best seller'],
    buyIf: 'Vuoi mantenere l\'umidità giusta per le tue piante con un modello smart.',
    avoidIf: 'Ti serve soprattutto per dormire meglio in camera.'
  },
  {
    id: 'vivosun-9l-piante', v: 'umidificatori', brand: 'VIVOSUN', name: 'Umidificatore 9L per Piante',
    price: 120, quality: 8, checked: '2026-11-23',
    tagline: '9 litri per tante piante o ambienti grandi',
    attrs: { tank: 9, type: 'ultrasuoni', mq: null, noise: 24, autonomy: 60, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: true },
    pros: ['9L di capacità: lunga autonomia per molte piante', 'Smart con app, nebbia potente', 'Marchio noto nel grow indoor'],
    cons: ['Grande e orientato alle piante', 'Eccessivo per una camera'],
    buyIf: 'Hai molte piante o un ambiente grande da tenere umido a lungo.',
    avoidIf: 'Ti serve un umidificatore da camera.'
  },
  {
    id: 'philips-3000-45mq', v: 'umidificatori', brand: 'Philips', name: 'Serie 3000 fino a 45 m²',
    price: 90, quality: 8.5, checked: '2026-11-23',
    tagline: 'Philips premium: copre 45 m², 33 dB, tecnologia NanoCloud',
    attrs: { tank: null, type: 'ultrasuoni', mq: 45, noise: 33, autonomy: null, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Copre fino a 45 m²: tra i più potenti per ambienti grandi', '33 dB silenzioso, tecnologia NanoCloud che limita la nebbia batterica', 'Marchio Philips, 4,2 stelle su oltre 2.200 recensioni'],
    cons: ['Prezzo premium', 'I filtri NanoCloud sono un materiale di consumo da sostituire'],
    buyIf: 'Vuoi umidificare in modo igienico un ambiente grande con un marchio di fascia alta.',
    avoidIf: 'Cerchi il prezzo più basso o non vuoi pensare ai filtri.'
  },
  {
    id: 'philips-hu4803-nanocloud', v: 'umidificatori', brand: 'Philips', name: 'HU4803 NanoCloud',
    price: 144, quality: 8.1, checked: '2026-11-23',
    tagline: 'Il Philips compatto NanoCloud, nebbia igienica',
    attrs: { tank: null, type: 'ultrasuoni', mq: 25, noise: null, autonomy: null, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Tecnologia NanoCloud: nebbia più igienica, niente alone bianco', 'Compatto e silenzioso, marchio Philips', 'Oltre 1.600 recensioni'],
    cons: ['Serbatoio piccolo: autonomia limitata', 'Filtro da sostituire periodicamente'],
    buyIf: 'Vuoi un Philips compatto e igienico per una stanza piccola o la camera.',
    avoidIf: 'Vuoi lunga autonomia o tanta capacità.'
  },
  {
    id: 'maxcio-2-5l-smart', v: 'umidificatori', brand: 'Maxcio', name: 'Umidificatore Smart 2,5L',
    price: 44, quality: 7.6, checked: '2026-11-23',
    tagline: 'Smart WiFi economico da 2,5L',
    attrs: { tank: 2.5, type: 'ultrasuoni', mq: null, noise: 28, autonomy: null, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['Controllo smart WiFi/app a prezzo basso', '2,5L per una stanza media', '4,2 stelle su quasi 900 recensioni'],
    cons: ['Marchio minore', 'Senza nebbia calda'],
    buyIf: 'Vuoi le funzioni smart (app, vocale) spendendo poco.',
    avoidIf: 'Vuoi un marchio noto o la nebbia calda.'
  },
  {
    id: 'xiaomi-humidifier-2-lite', v: 'umidificatori', brand: 'Xiaomi', name: 'Smart Humidifier 2 Lite 4L',
    price: 30, quality: 8, checked: '2026-11-23',
    tagline: 'Xiaomi smart 4L, semplice e ben fatto',
    attrs: { tank: 4, type: 'ultrasuoni', mq: null, noise: 38, autonomy: 30, humidistat: false, warmMist: false, topFill: true, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['4L smart con app Mi Home, a prezzo contenuto', 'Design pulito e silenzioso, marchio affidabile', 'Facile da usare e integrare con la smart home'],
    cons: ['Nebbia fredda, niente igrometro di precisione', 'App a volte macchinosa'],
    buyIf: 'Hai la smart home Xiaomi o vuoi un 4L smart e ben fatto a buon prezzo.',
    avoidIf: 'Vuoi nebbia calda o regolazione dell\'umidità precisa.'
  },
  {
    id: 'vankaa-5l-bambini-topfill', v: 'umidificatori', brand: 'Vankaa', name: 'Umidificatore 5L Bambini Top Fill',
    price: 35, quality: 7.7, checked: '2026-11-23',
    tagline: '5 litri per la cameretta, riempimento dall\'alto, economico',
    attrs: { tank: 5, type: 'ultrasuoni', mq: null, noise: 28, autonomy: null, humidistat: false, warmMist: false, topFill: true, aroma: false, nightLight: false, autoOff: false, remote: false },
    pros: ['5L con riempimento dall\'alto a prezzo basso', 'Pensato per la cameretta, con aromaterapia', 'Buona autonomia per la capacità'],
    cons: ['Marchio poco noto, recensioni ancora poche', 'Senza igrometro automatico'],
    buyIf: 'Vuoi tanta capacità per la cameretta spendendo poco.',
    avoidIf: 'Preferisci un marchio consolidato con molte recensioni.'
  },
  {
    id: 'raydrop-3l-camera', v: 'umidificatori', brand: 'raydrop', name: 'Umidificatore 3L da Camera',
    price: 40, quality: 7.9, checked: '2026-11-23',
    tagline: '3 litri essenziale e ben valutato',
    attrs: { tank: 3, type: 'ultrasuoni', mq: null, noise: null, autonomy: null, humidistat: false, warmMist: false, topFill: false, aroma: false, nightLight: true, autoOff: false, remote: false },
    pros: ['3L semplice e silenzioso per la camera', '4,5 stelle: valutazione molto alta', 'Prezzo contenuto'],
    cons: ['Recensioni ancora poche', 'Funzioni essenziali, senza igrometro'],
    buyIf: 'Vuoi un 3L semplice e ben valutato per la camera, senza spendere molto.',
    avoidIf: 'Vuoi funzioni smart o regolazione automatica.'
  },
  {
    id: 'chivalz-6l-topfill', v: 'umidificatori', brand: 'Chivalz', name: 'Umidificatore 6L Top Fill',
    price: 43, quality: 7.8, checked: '2026-11-23',
    tagline: '6 litri economico con riempimento dall\'alto',
    attrs: { tank: 6, type: 'ultrasuoni', mq: null, noise: 26, autonomy: 50, humidistat: false, warmMist: false, topFill: true, aroma: false, nightLight: false, autoOff: true, remote: false },
    pros: ['6L con riempimento dall\'alto a prezzo basso', '4,5 stelle sulle prime recensioni', 'Buona autonomia per ambienti medio-grandi'],
    cons: ['Marchio nuovo, poche recensioni', 'Senza igrometro automatico'],
    buyIf: 'Vuoi 6L e riempimento comodo spendendo poco.',
    avoidIf: 'Preferisci un marchio consolidato.'
  },
);

/* ============================ TERMOCOPERTE (dic 2026, dati reali PA-API + recensioni amazon.it) ============================ */
window.PRODUCTS.push(
  {
    id: 'imetec-scaldasonno-adapto-singolo-cotone', v: 'termocoperte', brand: 'Imetec', name: 'Scaldasonno Adapto Scaldaletto singolo cotone',
    price: 69.99, quality: 9, checked: '2026-11-26',
    tagline: 'Lo scaldaletto singolo più amato: cotone, 6 temperature, marchio italiano',
    attrs: { tipo: 'scaldaletto', formato: 'singolo', dim: '150x80', zones: 1, levels: 6, autoStop: null, overheat: null, washable: null, power: null, material: 'cotone' },
    pros: ['4,6 stelle su oltre 6.500 recensioni: è lo scaldaletto singolo più valutato su Amazon.it', 'Tessuto 100% cotone: traspirante e piacevole sulla pelle, non il solito sintetico', 'Scalda il letto in pochi minuti e ha 6 livelli, così trovi la temperatura giusta senza esagerare'],
    cons: ['Costa più di uno scaldaletto generico: paghi marchio italiano e cotone', 'È singolo 150x80: per un matrimoniale serve il modello a due piazze'],
    buyIf: 'Dormi da solo o vuoi scaldare il tuo lato del letto, e preferisci un marchio affidabile al risparmio a tutti i costi.',
    avoidIf: 'Ti serve coprire un letto matrimoniale o vuoi spendere il meno possibile.'
  },
  {
    id: 'imetec-scaldasonno-adapto-matrimoniale-lana', v: 'termocoperte', brand: 'Imetec', name: 'Scaldasonno Adapto Scaldaletto matrimoniale lana merino',
    price: 139.99, quality: 8.8, checked: '2026-11-26',
    tagline: 'Il matrimoniale premium: lana merino e due zone separate per chi dorme in due',
    attrs: { tipo: 'scaldaletto', formato: 'matrimoniale', dim: '150x160', zones: 2, levels: null, autoStop: true, overheat: null, washable: null, power: null, material: 'lana merino' },
    pros: ['4,6 stelle su oltre 4.500 recensioni: il matrimoniale di riferimento della categoria', 'Due zone separate: ciascuno regola il proprio lato, utile quando uno è più freddoloso dell\'altro', '100% lana merino con timer di autospegnimento: materiale caldo e pregiato, e si spegne da solo'],
    cons: ['È la fascia alta: 140 € non sono pochi per uno scaldaletto', 'La lana merino va trattata con cura nel lavaggio, meno pratica del sintetico lavabile in lavatrice'],
    buyIf: 'Siete in due con esigenze di caldo diverse e volete il meglio per materiale e comandi separati.',
    avoidIf: 'Dormi da solo o cerchi qualcosa di economico e lavabile in lavatrice senza pensieri.'
  },
  {
    id: 'imetec-scaldasonno-adapto-maxi-195x165', v: 'termocoperte', brand: 'Imetec', name: 'Scaldasonno Adapto Scaldaletto matrimoniale maxi 195x165',
    price: 169.99, quality: 8.6, checked: '2026-11-26',
    tagline: 'Per letti grandi: maxi 195x165, anallergico, doppio comando',
    attrs: { tipo: 'scaldaletto', formato: 'maxi', dim: '195x165', zones: 2, levels: 6, autoStop: null, overheat: null, washable: null, power: null, material: 'sintetico anallergico' },
    pros: ['4,7 stelle: la valutazione più alta tra gli scaldaletto che abbiamo selezionato', 'Misura maxi 195x165: copre anche i letti matrimoniali più grandi, dove i 150x160 restano corti', 'Rivestimento anallergico trapuntato e doppio comando con 6 temperature per lato'],
    cons: ['È il più caro della selezione: ha senso solo con un letto davvero grande', 'Per un matrimoniale standard la misura maxi è sprecata'],
    buyIf: 'Hai un letto matrimoniale grande (king size) e vuoi che lo scaldaletto lo copra per intero, con comandi separati.',
    avoidIf: 'Hai un matrimoniale normale: il 150x160 costa meno e basta.'
  },
  {
    id: 'medisana-hu-665-coprimaterasso', v: 'termocoperte', brand: 'medisana', name: 'HU 665 Coprimaterasso termico singolo',
    price: 24.95, quality: 8.3, checked: '2026-11-26',
    tagline: 'Il best buy economico: 25 €, oltre 24.000 recensioni, con le sicurezze giuste',
    attrs: { tipo: 'scaldaletto', formato: 'singolo', dim: '150x80', zones: 1, levels: 3, autoStop: true, overheat: true, washable: true, power: null, material: 'pile' },
    pros: ['Oltre 24.000 recensioni a 4,2 stelle: pochissimi prodotti della categoria hanno questa mole di riscontri', 'Ha spegnimento automatico e protezione da surriscaldamento, le due sicurezze che contano davvero', 'Lavabile ed economico: a 25 € è il modo più semplice per provare uno scaldaletto'],
    cons: ['Solo 3 livelli di temperatura: meno margine di regolazione dei modelli Imetec', 'È un singolo 150x80 in sintetico: fa il suo lavoro senza fronzoli'],
    buyIf: 'Vuoi spendere poco ma con le sicurezze giuste, e ti fidi del giudizio di decine di migliaia di persone.',
    avoidIf: 'Cerchi cotone o lana, molti livelli di regolazione o una misura matrimoniale.'
  },
  {
    id: 'innoliving-inn-767-scaldaletto', v: 'termocoperte', brand: 'Innoliving', name: 'INN-767 Scaldaletto una piazza e mezza',
    price: 31.25, quality: 7.6, checked: '2026-11-26',
    tagline: 'Una piazza e mezza a prezzo basso: più spazio del singolo',
    attrs: { tipo: 'scaldaletto', formato: 'una-piazza-e-mezza', dim: '150x122', zones: 1, levels: null, autoStop: null, overheat: null, washable: null, power: null, material: 'sintetico' },
    pros: ['4,3 stelle su oltre 3.000 recensioni: economico ma ampiamente collaudato', 'Misura una piazza e mezza (150x122): più comoda del singolo stretto se ti giri nel letto', 'Semplice e a basso prezzo: scalda il letto senza spendere'],
    cons: ['Scheda essenziale: il numero di livelli non è dichiarato chiaramente', 'Materiale sintetico, niente cotone o lana'],
    buyIf: 'Vuoi qualcosa di più ampio del singolo spendendo poco, per un letto a una piazza e mezza.',
    avoidIf: 'Ti serve un matrimoniale o cerchi materiali più pregiati e comandi separati.'
  },
  {
    id: 'tlgreen-scaldaletto-matrimoniale-100w', v: 'termocoperte', brand: 'TLGREEN', name: 'Scaldaletto matrimoniale 100W lavabile',
    price: 47.49, quality: 7.7, checked: '2026-11-26',
    tagline: 'Matrimoniale lavabile in lavatrice a meno di 50 €',
    attrs: { tipo: 'scaldaletto', formato: 'matrimoniale', dim: '187x139', zones: 1, levels: 6, autoStop: true, overheat: null, washable: true, power: 100, material: 'coral fleece' },
    pros: ['Matrimoniale sotto i 50 €: copre entrambi i lati senza arrivare alla fascia Imetec', 'Lavabile in lavatrice e con spegnimento automatico: pratico e sicuro', '6 temperature e 4,3 stelle su oltre 1.400 recensioni'],
    cons: ['Comando unico: niente due zone separate per i due lati', 'Marchio meno noto dei big, tessuto sintetico in coral fleece'],
    buyIf: 'Vuoi un matrimoniale economico, lavabile in lavatrice, e vi va bene la stessa temperatura per tutti e due.',
    avoidIf: 'Volete regolare i due lati in modo indipendente o preferite un marchio storico.'
  },
  {
    id: 'redkey-scaldaletto-matrimoniale-7-temp', v: 'termocoperte', brand: 'REDKEY', name: 'Scaldaletto matrimoniale 7 temperature',
    price: 48.44, quality: 7.4, checked: '2026-11-26',
    tagline: 'Matrimoniale con 7 livelli e spegnimento automatico',
    attrs: { tipo: 'scaldaletto', formato: 'matrimoniale', dim: '170x150', zones: 1, levels: 7, autoStop: true, overheat: null, washable: true, power: null, material: 'flanella' },
    pros: ['7 livelli di temperatura: la regolazione più fine tra i matrimoniali economici della selezione', 'Spegnimento automatico e lavabile: le comodità che cerchi nell\'uso quotidiano', '4,2 stelle su quasi 1.200 recensioni a meno di 50 €'],
    cons: ['Comando singolo, non due zone', 'Marchio di import, finitura più semplice dei modelli di marca'],
    buyIf: 'Vuoi un matrimoniale economico con tanta scelta di temperatura, lavabile e con autospegnimento.',
    avoidIf: 'Cercate due zone separate o un marchio consolidato.'
  },
  {
    id: 'cecotec-thermalunder-doppio', v: 'termocoperte', brand: 'Cecotec', name: 'HeatConfort ThermalUnder Doppio',
    price: 47.9, quality: 7.5, checked: '2026-11-26',
    tagline: 'Matrimoniale Cecotec con autospegnimento e 6 livelli',
    attrs: { tipo: 'scaldaletto', formato: 'matrimoniale', dim: '160x140', zones: 1, levels: 6, autoStop: true, overheat: null, washable: null, power: null, material: 'sintetico' },
    pros: ['4,4 stelle: tra le valutazioni più alte dei matrimoniali economici', 'Spegnimento automatico e 6 livelli di temperatura', 'Marchio Cecotec con rete di assistenza, raro sotto i 50 €'],
    cons: ['Recensioni ancora poche (circa 180) rispetto ai best seller storici', 'Comando unico, non a doppia zona'],
    buyIf: 'Vuoi un matrimoniale economico di un marchio strutturato, con autospegnimento e buona valutazione.',
    avoidIf: 'Ti rassicura solo un prodotto con migliaia di recensioni, o vuoi le due zone separate.'
  },
  {
    id: 'imetec-caldoplaid-velvet-square', v: 'termocoperte', brand: 'Imetec', name: 'CaldoPlaid Velvet Square Coperta riscaldante',
    price: 59.99, quality: 8.7, checked: '2026-11-26',
    tagline: 'La coperta riscaldante da divano più amata: velluto, da mettere addosso',
    attrs: { tipo: 'plaid', formato: 'plaid-singolo', dim: '150x95', zones: 1, levels: 6, autoStop: true, overheat: null, washable: true, power: null, material: 'velluto' },
    pros: ['4,5 stelle su oltre 2.500 recensioni: il plaid riscaldante di riferimento per il divano', 'Te la metti addosso mentre leggi o guardi la TV: scalda te, non tutta la stanza', 'Velluto morbido, 6 temperature, timer di spegnimento e lavabile in lavatrice'],
    cons: ['È una coperta da addosso 150x95, non copre un letto matrimoniale', 'Costa più di un plaid generico'],
    buyIf: 'Vuoi scaldarti sul divano la sera senza accendere i termosifoni, con una coperta morbida e lavabile.',
    avoidIf: 'Ti serve scaldare il letto sotto le lenzuola: lì serve uno scaldaletto.'
  },
  {
    id: 'imetec-caldoplaid-elegance-180x140', v: 'termocoperte', brand: 'Imetec', name: 'CaldoPlaid Elegance Coperta riscaldante 180x140',
    price: 79.97, quality: 8.5, checked: '2026-11-26',
    tagline: 'Il plaid riscaldante grande: 180x140, double face, anche in due sul divano',
    attrs: { tipo: 'plaid', formato: 'plaid-matrimoniale', dim: '180x140', zones: 1, levels: 6, autoStop: null, overheat: null, washable: true, power: null, material: 'double face' },
    pros: ['4,6 stelle su oltre 1.500 recensioni: tra i plaid riscaldanti più apprezzati', 'Misura grande 180x140: ci stai sotto in due sul divano, o avvolto per intero', 'Tessuto double face e 6 temperature, lavabile'],
    cons: ['Fascia alta per un plaid: quasi 80 €', 'Comando unico: a due sotto la stessa coperta avete la stessa temperatura'],
    buyIf: 'Vuoi una coperta riscaldante grande e bella da divano, da usare anche in due.',
    avoidIf: 'Ti basta scaldare una persona o vuoi spendere meno.'
  },
  {
    id: 'beurer-termocoperta-waffle', v: 'termocoperte', brand: 'Beurer', name: 'Termocoperta Waffle leggera',
    price: 44.99, quality: 7.7, checked: '2026-11-26',
    tagline: 'Plaid leggero made in Europe, design a nido d\'ape',
    attrs: { tipo: 'plaid', formato: 'plaid-singolo', dim: null, zones: 1, levels: 3, autoStop: null, overheat: true, washable: true, power: null, material: 'waffle' },
    pros: ['Marchio Beurer, specialista tedesco del calore: cura costruttiva e sicurezza', 'Design a nido d\'ape leggero e lavabile a 30°: più coperta estetica che plaid pesante', 'Sistema di sicurezza integrato e 4,4 stelle sulle prime recensioni'],
    cons: ['Solo 3 livelli di temperatura', 'Recensioni ancora poche (circa 140), prodotto recente'],
    buyIf: 'Vuoi un plaid riscaldante leggero e curato di un marchio specializzato, più da appoggiare che da avvolgere.',
    avoidIf: 'Cerchi tante regolazioni di temperatura o una coperta grande e avvolgente.'
  },
  {
    id: 'coperta-riscaldante-matrimoniale-130x160', v: 'termocoperte', brand: 'Generico', name: 'Coperta riscaldante matrimoniale 130x160',
    price: 32.99, quality: 7.6, checked: '2026-11-26',
    tagline: 'Il plaid riscaldante economico: matrimoniale 130x160 a 33 €',
    attrs: { tipo: 'plaid', formato: 'plaid-matrimoniale', dim: '130x160', zones: 1, levels: 4, autoStop: true, overheat: null, washable: null, power: null, material: 'flanella' },
    pros: ['4,4 stelle su oltre 800 recensioni a soli 33 €: il modo più economico per una coperta riscaldante grande', 'Misura 130x160: buona per il divano o appoggiata sul letto, anche in due', 'Spegnimento automatico e 4 impostazioni di tempo e temperatura'],
    cons: ['Marchio generico senza nome noto', 'Finitura e materiali basici, da prodotto entry level'],
    buyIf: 'Vuoi provare una coperta riscaldante grande spendendo il minimo, per il divano o sopra il letto.',
    avoidIf: 'Vuoi un marchio riconosciuto o materiali e rifiniture di fascia alta.'
  },
);

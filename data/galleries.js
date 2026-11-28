/* ============================================================
   GALLERIE FOTO
   ------------------------------------------------------------
   Fino a 4 scatti per prodotto, letti dal blocco immagini della
   scheda amazon.it e verificati uno per uno con richiesta HTTP.

   Regola: nessun URL costruito a mano. Gli identificativi delle
   foto secondarie non sono derivabili da quello della principale,
   quindi o li abbiamo letti dalla pagina o il prodotto resta
   con la sola immagine di copertina.
   ============================================================ */

window.GALLERIES = {

  /* --- SEDIE ERGONOMICHE --- */
  'sihoo-m18': [
    'https://m.media-amazon.com/images/I/61nb9ErcVpL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71Nc5e5MJ0L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61XQxqyGbeL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61+MHfXIrHL._AC_SL1500_.jpg'
  ],
  'sihoo-doro-c300': [
    'https://m.media-amazon.com/images/I/71ir96hzGeL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71M28wdmSpL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71pdpxPthJL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71IuBW8PHhL._AC_SL1500_.jpg'
  ],
  'songmics-obn': [
    'https://m.media-amazon.com/images/I/81pA0ACpAPL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71fEo19wg7L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/715-1oADtAL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/812I9bYlBCL._AC_SL1500_.jpg'
  ],
  'diablo-v-basic': [
    'https://m.media-amazon.com/images/I/81k619uc-7L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/51m09CKgNuL._AC_.jpg',
    'https://m.media-amazon.com/images/I/71Taw-wqjkL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71RXXPopGDL._AC_SL1500_.jpg'
  ],
  'hbada-e3': [
    'https://m.media-amazon.com/images/I/71QeOXteBgL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61yACnO3WML._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71W7UrhyZ5L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71ppIX-Mh2L._AC_SL1500_.jpg'
  ],
  'flexispot-bs11': [
    'https://m.media-amazon.com/images/I/81g0YajLOmL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71DExtzRs3L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71O7ybHgM8L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71ZfwIuUtCL._AC_SL1500_.jpg'
  ],

  /* --- MATERASSI --- (galleria Marcapiuma nativa a 1100px, non è un downscale) */
  'marcapiuma-silver-22': [
    'https://m.media-amazon.com/images/I/61HOGUZj+GL._AC_SL1100_.jpg',
    'https://m.media-amazon.com/images/I/61wqG2XpUaL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/51M8-TsrONL._AC_SL1100_.jpg',
    'https://m.media-amazon.com/images/I/614R50DRlqL._AC_SL1100_.jpg'
  ],
  'baldiflex-zaffiro': [
    'https://m.media-amazon.com/images/I/81N8Wpgks+L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71-4KbXi+KL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81sWH3yCYjL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71ZaRFrcR8L._AC_SL1500_.jpg'
  ],

  /* --- ROBOT ASPIRAPOLVERE --- */
  'dreame-l10s-ultra': [
    'https://m.media-amazon.com/images/I/61-5+1poAHL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/8125B5xhU5L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/91ZZT6zC-nL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71Vp47YcrtL._AC_SL1500_.jpg'
  ],
  'ecovacs-n20-pro': [
    'https://m.media-amazon.com/images/I/61GYQGY5XmL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71EV2Xs9dPL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81GP8RskAqL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81sfe9FJr1L._AC_SL1500_.jpg'
  ],
  'roborock-s8-maxv': [
    'https://m.media-amazon.com/images/I/71ZCXAWP1uL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/613F64vjBWL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61Pua8j59qL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71WsIqOaZhL._AC_SL1500_.jpg'
  ],
  'dreame-d10-plus': [
    'https://m.media-amazon.com/images/I/61ROXsVBLiL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81eGnhryHML._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/717jAHfMzfL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71FqvAjKLZL._AC_SL1500_.jpg'
  ],
  'roborock-qrevo-s': [
    'https://m.media-amazon.com/images/I/616DSsrrqpL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71FVCngX7RL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/814CDnUGjNL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71HKZJ+zJrL._AC_SL1500_.jpg'
  ],

  /* --- UTENSILI ELETTRICI --- */
  'bosch-psb-1800': [
    'https://m.media-amazon.com/images/I/71iVWKvBoIL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71XzuliT38L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71oLUjxqJ1L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71VH2f4F4rL._AC_SL1500_.jpg'
  ],
  'makita-dhp482z': [
    'https://m.media-amazon.com/images/I/51YqsgWM+aL._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/51jmCRKr+1L._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/61nVfrjca7L._AC_SL1000_.jpg'
  ],
  'einhell-te-cd': [
    'https://m.media-amazon.com/images/I/61MxfkX67bL._AC_SL1422_.jpg',
    'https://m.media-amazon.com/images/I/61jSw1yeSSL._AC_SL1422_.jpg',
    'https://m.media-amazon.com/images/I/61T5HD+0azL._AC_SL1422_.jpg',
    'https://m.media-amazon.com/images/I/61EK3sQ0RdL._AC_SL1422_.jpg'
  ],
  'bosch-gsb-18v-55': [
    'https://m.media-amazon.com/images/I/81yJHKQ5Q1L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71UOTe3foIL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/41SOQuPfu0L._AC_.jpg',
    'https://m.media-amazon.com/images/I/61lXRKo--FL._AC_SL1500_.jpg'
  ],
  /* DeWalt: Amazon non pubblica versioni ad alta risoluzione per questo listing */
  'dewalt-dcd778': [
    'https://m.media-amazon.com/images/I/31n1jUKlcuL._AC_.jpg',
    'https://m.media-amazon.com/images/I/31WyQs0aPfL._AC_.jpg',
    'https://m.media-amazon.com/images/I/51J+oHvHk5L._AC_.jpg'
  ],
  'blackdecker-bdchd18': [
    'https://m.media-amazon.com/images/I/61bccjQhx6L._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/71OhLYmx2CL._AC_SL1333_.jpg',
    'https://m.media-amazon.com/images/I/81O3PlupfLL._AC_SL1333_.jpg',
    'https://m.media-amazon.com/images/I/71slJLSbLiL._AC_SL1333_.jpg'
  ],
  /* solo 2 scatti in galleria sulla scheda del venditore */
  'makita-hr2470': [
    'https://m.media-amazon.com/images/I/51atbHdFJ+L._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/71fWWChA-IL._AC_SL1000_.jpg'
  ],

  /* --- MACCHINE DA CAFFÈ --- */
  'delonghi-dedica-ec685': [
    'https://m.media-amazon.com/images/I/61Ts+cIZ1CL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61pVjcDu4jL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61JabAl1ANL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61bkgSGttGL._AC_SL1500_.jpg'
  ],
  /* solo 2 scatti: le altre in pagina erano di ASIN diversi (altre colorazioni) */
  'nespresso-vertuo-pop': [
    'https://m.media-amazon.com/images/I/51qxVAQcHoL._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/61SYqCXtcZL._AC_SL1500_.jpg'
  ],
  'delonghi-magnifica-s': [
    'https://m.media-amazon.com/images/I/61h6VSbbKRL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71SoSU2E3NL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61z7fjhi61L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71jJu31ZWPL._AC_SL1500_.jpg'
  ],
  'philips-3200-lattego': [
    'https://m.media-amazon.com/images/I/61kRSNznnWL._AC_SL1266_.jpg',
    'https://m.media-amazon.com/images/I/61Z9FV2GiDL._AC_SL1218_.jpg',
    'https://m.media-amazon.com/images/I/71+h67mJYJL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61irhrU2b3L._AC_SL1500_.jpg'
  ],
  'bialetti-gioia': [
    'https://m.media-amazon.com/images/I/71IhqbB3nYL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/6141aJ8gSxL._AC_SL1000_.jpg',
    'https://m.media-amazon.com/images/I/61SYB6p3joL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61sEU1I-vtL._AC_SL1500_.jpg'
  ],
  'gaggia-classic-evo': [
    'https://m.media-amazon.com/images/I/61jhadThMGL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71fu8EesmdL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71I8ssAvpVL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71LT1LiBOEL._AC_SL1500_.jpg'
  ],
  'delonghi-rivelia': [
    'https://m.media-amazon.com/images/I/613IBmDZnOL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71LQi0JZqlL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61ktV3O3SfL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71vhEZXzF2L._AC_SL1500_.jpg'
  ]
};

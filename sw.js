/* PickForMe SW 2026-10-03 */
const V='2026-10-03';
const SHELL='pfm-shell-'+V, ASSETS='pfm-assets-'+V;
const PRECACHE=['/','/offline/','/assets/rightpick.css','/assets/logo-mark-240.png','/assets/favicon-32.png','/manifest.webmanifest'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(SHELL).then(c=>c.addAll(PRECACHE).catch(()=>null)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==ASSETS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
function isAsset(u){return /\/(assets|app|data)\//.test(u.pathname)||/\.(?:css|js|png|jpg|jpeg|svg|webp|woff2?)$/.test(u.pathname);}
function isNav(req){return req.mode==='navigate'||(req.headers.get('accept')||'').includes('text/html');}
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  const url=new URL(req.url); if(url.origin!==self.location.origin)return;
  if(isNav(req)){
    e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(SHELL).then(x=>x.put(req,c));return r;}).catch(()=>caches.match(req).then(r=>r||caches.match('/offline/')||caches.match('/'))));
    return;
  }
  if(isAsset(url)){
    e.respondWith(caches.open(ASSETS).then(c=>c.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r&&r.ok)c.put(req,r.clone());return r;}).catch(()=>hit);return hit||net;})));
  }
});

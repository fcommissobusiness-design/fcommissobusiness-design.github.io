#!/usr/bin/env bun
/* PickForMe MCP server — stdio, protocollo MCP 2024-11-05.
   Uso: bun mcp-server.js   (o nodo >= 20 con fetch globale)
   Collegalo a Claude Desktop con la voce in ~/Library/Application Support/Claude/claude_desktop_config.json:
     "pickforme": { "command": "bun", "args": ["/path/to/mcp-server.js"] }
*/
const BASE = 'https://www.pickforme.it';
let catalog = null;
async function loadCatalog(){ if (catalog) return catalog; const r = await fetch(BASE + '/api/catalog.json'); catalog = await r.json(); return catalog; }
const tools = [
  { name: 'search_products', description: 'Cerca prodotti nel catalogo per testo libero (nome, brand, tagline, summary) e/o categoria.', inputSchema: { type: 'object', properties: { query: { type: 'string' }, category: { type: 'string' }, limit: { type: 'integer', default: 10 } } } },
  { name: 'get_product', description: 'Scheda completa di un prodotto per id.', inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] } },
  { name: 'list_verticals', description: 'Elenco delle categorie (verticali) disponibili.', inputSchema: { type: 'object' } }
];
async function dispatch(name, args){
  const c = await loadCatalog();
  if (name === 'search_products'){
    const q = (args.query || '').toLowerCase();
    const cat = args.category || null;
    const lim = args.limit || 10;
    const hits = c.products.filter(p => (!cat || p.category === cat) && (!q || (p.name + ' ' + (p.brand || '') + ' ' + p.tagline + ' ' + p.summary).toLowerCase().includes(q))).slice(0, lim);
    return { content: [{ type: 'text', text: JSON.stringify({ matches: hits.length, products: hits }, null, 2) }] };
  }
  if (name === 'get_product'){ const p = c.products.find(x => x.id === args.id); return { content: [{ type: 'text', text: p ? JSON.stringify(p, null, 2) : 'Prodotto non trovato: ' + args.id }] }; }
  if (name === 'list_verticals'){ const vs = [...new Set(c.products.map(p => p.category))].sort(); return { content: [{ type: 'text', text: JSON.stringify(vs) }] }; }
  throw new Error('tool sconosciuto: ' + name);
}
function send(msg){ process.stdout.write(JSON.stringify(msg) + '\n'); }
let buf = '';
process.stdin.on('data', async chunk => {
  buf += chunk.toString();
  let i;
  while ((i = buf.indexOf('\n')) >= 0){
    const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1); if (!line) continue;
    let req; try { req = JSON.parse(line); } catch (e) { continue; }
    try {
      if (req.method === 'initialize') send({ jsonrpc: '2.0', id: req.id, result: { protocolVersion: '2024-11-05', capabilities: { tools: {} }, serverInfo: { name: 'pickforme', version: '1.0.0' } } });
      else if (req.method === 'tools/list') send({ jsonrpc: '2.0', id: req.id, result: { tools } });
      else if (req.method === 'tools/call') { const r = await dispatch(req.params.name, req.params.arguments || {}); send({ jsonrpc: '2.0', id: req.id, result: r }); }
      else if (req.method === 'notifications/initialized') { /* no-op */ }
      else send({ jsonrpc: '2.0', id: req.id, error: { code: -32601, message: 'method not found: ' + req.method } });
    } catch (e) { send({ jsonrpc: '2.0', id: req.id, error: { code: -32000, message: String(e && e.message || e) } }); }
  }
});

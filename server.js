import express from 'express';
import cors from 'cors';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { days as seedDays, hotels as seedHotels, checklist as seedChecklist } from './src/data/itinerary.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;

// --- DB (PostgreSQL or in-memory) ---
let db = null;
let dbReady = false;
let memSuggestions = [];
let memId = 0;

async function initDB() {
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    dbReady = true;
    console.log('💡 In-memory mode');
    return;
  }
  try {
    const pg = (await import('pg')).default;
    db = new pg.Pool({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } });
    const c = await db.connect();
    try {
      await c.query(`
        CREATE TABLE IF NOT EXISTS suggestions (id SERIAL PRIMARY KEY, name TEXT NOT NULL, relation TEXT DEFAULT '', day_id INTEGER, content TEXT NOT NULL, category TEXT DEFAULT 'general', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, status TEXT DEFAULT 'pending');
        CREATE TABLE IF NOT EXISTS admins (id SERIAL PRIMARY KEY, username TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL);
      `);
      const r = await c.query('SELECT COUNT(*) as c FROM suggestions');
      if (parseInt(r.rows[0].c) === 0) {
        const h = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10);
        await c.query('INSERT INTO admins (username, password_hash) VALUES ($1,$2)', ['admin', h]);
        console.log('✅ Admin seeded');
      }
    } finally { c.release(); }
    dbReady = true;
    console.log('✅ PostgreSQL ready');
  } catch (e) { console.error('DB error:', e.message); }
}
initDB();

// --- Middleware ---
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET || 'secret', resave: false, saveUninitialized: false, cookie: { secure: false, httpOnly: true, maxAge: 86400000 } }));

const requireAdmin = (req, res, next) => req.session.isAdmin ? next() : res.status(401).json({ error: '請先登入' });

// --- API ---
const api = express.Router();
api.get('/health', (r, s) => s.json({ ok: true, db: dbReady }));

// Itinerary
const tripInfo = { title: "義大利之旅", cities: ["羅馬","佛羅倫斯","威尼斯","米蘭"], cityNames: {"羅馬":"Rome","佛羅倫斯":"Florence","威尼斯":"Venice","米蘭":"Milan"}, cityColors: {"羅馬":{bg:"#FFF8E7",accent:"#C8953B",dark:"#8B6914"},"佛羅倫斯":{bg:"#EDF5E8",accent:"#6B8F5E",dark:"#3D5A2E"},"威尼斯":{bg:"#E6EEF6",accent:"#4A7BA7",dark:"#1E4A6B"},"米蘭":{bg:"#F5F0EB",accent:"#8B6F5E",dark:"#4A3729"},"交通":{bg:"#F0F0F0",accent:"#777",dark:"#444"}} };
const cityStats = {"羅馬":{nights:5,range:"7/26-7/31",hotels:["拿破崙酒店"]},"佛羅倫斯":{nights:2,range:"7/31-8/2",hotels:["C-安巴夏特利酒店"]},"威尼斯":{nights:2,range:"8/2-8/4",hotels:["威尼斯廣場酒店"]},"米蘭":{nights:4,range:"8/4-8/8",hotels:["米蘭嘉萊士烏納酒店"]}};
const clg = []; const cm = {};
for (const c of seedChecklist.flatMap((x,i) => x.items.map((it,j) => ({ cat: x.category, item: it, sort: i*100+j })))) {
  if (!cm[c.cat]) { cm[c.cat] = { category: c.cat, items: [] }; clg.push(cm[c.cat]); }
  cm[c.cat].items.push(c.item);
}

api.get('/itinerary', (r, s) => s.json({ days: seedDays, tripInfo, cityStats, hotels: seedHotels, checklist: clg }));

// Suggestions
api.post('/suggestions', async (req, res) => {
  const { name, relation, day_id, content, category } = req.body;
  if (!name || !content) return res.status(400).json({ error: '姓名和內容為必填' });
  if (db && dbReady) {
    try {
      const r = await db.query('INSERT INTO suggestions (name,relation,day_id,content,category) VALUES ($1,$2,$3,$4,$5) RETURNING id', [name, relation||'', day_id||null, content, category||'general']);
      return res.json({ success: true, id: r.rows[0].id, message: '感謝！' });
    } catch (e) { return res.status(500).json({ error: 'Server error' }); }
  }
  const s = { id: ++memId, name, relation: relation||'', day_id: day_id||null, content, category: category||'general', status: 'pending', created_at: new Date().toISOString() };
  memSuggestions.push(s);
  res.json({ success: true, id: s.id, message: '感謝！' });
});

const getSugs = async () => {
  if (db && dbReady) { const r = await db.query('SELECT * FROM suggestions ORDER BY created_at DESC'); return r.rows; }
  return [...memSuggestions].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

api.get('/public/suggestions', async (r, s) => {
  const d = await getSugs();
  s.json(d.map(x => ({ id: x.id, name: x.name, relation: x.relation, day_id: x.day_id, content: x.content, category: x.category, status: x.status, created_at: x.created_at })));
});

api.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: '請輸入帳號密碼' });
  const pw = process.env.ADMIN_PASSWORD || 'admin123';
  if (username !== 'admin') return res.status(401).json({ error: '帳號或密碼錯誤' });
  if (!bcrypt.compareSync(password, bcrypt.hashSync(pw, 10))) return res.status(401).json({ error: '帳號或密碼錯誤' });
  req.session.isAdmin = true;
  req.session.save(e => e ? res.status(500).json({ error: 'Session error' }) : res.json({ success: true }));
});

api.post('/admin/logout', (req, res) => { req.session.destroy(() => res.json({ success: true })); });
api.get('/admin/check', (req, res) => res.json({ isAdmin: !!req.session.isAdmin }));

api.get('/admin/suggestions', requireAdmin, async (r, s) => { s.json(await getSugs()); });

api.patch('/admin/suggestions/:id', requireAdmin, async (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;
  if (!['pending', 'accepted', 'declined'].includes(status)) return res.status(400).json({ error: '無效狀態' });
  if (db && dbReady) { await db.query('UPDATE suggestions SET status=$1 WHERE id=$2', [status, id]); return res.json({ success: true }); }
  const sg = memSuggestions.find(x => x.id === id);
  if (sg) { sg.status = status; res.json({ success: true }); } else res.status(404).json({ error: 'Not found' });
});

api.delete('/admin/suggestions/:id', requireAdmin, async (req, res) => {
  const id = parseInt(req.params.id);
  if (db && dbReady) { await db.query('DELETE FROM suggestions WHERE id=$1', [id]); return res.json({ success: true }); }
  memSuggestions = memSuggestions.filter(x => x.id !== id);
  res.json({ success: true });
});

api.get('/admin/stats', requireAdmin, async (req, res) => {
  const d = await getSugs();
  const bs = {}, bc = {}, bd = {};
  for (const x of d) { bs[x.status] = (bs[x.status] || 0) + 1; bc[x.category] = (bc[x.category] || 0) + 1; if (x.day_id) bd[x.day_id] = (bd[x.day_id] || 0) + 1; }
  res.json({ total: d.length, byStatus: Object.entries(bs).map(([k, v]) => ({ status: k, count: v })), byCategory: Object.entries(bc).map(([k, v]) => ({ category: k, count: v })), byDay: Object.entries(bd).map(([k, v]) => ({ day_id: parseInt(k), count: v })) });
});

app.use('/api', api);

// Static
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'dist')));
  app.get('*', (req, res) => res.sendFile(join(__dirname, 'dist', 'index.html')));
}

app.listen(PORT, () => console.log(`🚀 http://localhost:${PORT}`));

# 🔥 TEDDY-XMD — Combined Final Edition

> WhatsApp Multi-Device Bot | Pair-Only | No SESSION_ID | 200+ Commands
> **Owner:** Teddy | **Co-Owner:** Muzamil Khan

---

## 📁 Project Structure

```
TEDDY-XMD/
├── index.js          ← Main bot server (Arslan MD architecture)
├── settings.js       ← Bot config (reads from process.env)
├── package.json      ← All dependencies
├── Procfile          ← Heroku: web: node index.js
├── app.json          ← Heroku one-click deploy (FFmpeg buildpack included)
├── railway.json      ← Railway config
├── render.yaml       ← Render config
├── Dockerfile        ← Docker support
├── .env.example      ← All environment variables
│
├── plugins/          ← 34 plugin files, 200+ commands
│   ├── ai.js, ai-gpt.js, ai-llama.js, aify.js
│   ├── fun-cmds.js, fun.js
│   ├── groups-cmds.js, groups.js
│   ├── reactions.js, sticker.js
│   ├── song.js, play.js, playx.js
│   ├── tiktok.js, ytmp4.js, dl-spotify.js, downloaders.js
│   ├── translate.js, tools.js, search.js
│   ├── autoread.js, autoreply.js, autostatus.js, autotyping.js
│   ├── autoForward.js, antilink.js, pmblocker.js
│   ├── owner.js, owner-cmds.js, menu.js
│   ├── audiofx.js, logo.js, brat.js, tempmail.js
│
├── lib/              ← Shared utilities
│   ├── fakevcard.js, database.js, functions.js, functions2.js
│   ├── groupevents.js, fetchGif.js
│   ├── video-utils.js, sticker-utils.js
│   ├── lightweight_store.js, print.js
│
├── data/             ← JSON data files (auto-created)
├── public/           ← Web frontend (served by Express)
│   └── index.html    ← Pair page + Admin panel + Dashboard
└── frontend/         ← Separate Vercel frontend
    ├── index.html    ← Deploy to Vercel separately
    └── vercel.json
```

---

# 🎬 YouTube Speed Keys

A lightweight browser extension that lets you **control YouTube playback speed** with two simple keys:

- `,` → decrease playback speed
- `.` → increase playback speed

⚡ Speeds change in steps of **0.25x** (min: 0.25x, max: 4x).  
✅ Works on **Chrome, Edge, and Firefox**.  
✅ Simple, no permissions beyond YouTube.

---

## 🚀 Installation

### Chrome / Edge

1. Clone or download this repo.
2. Open `chrome://extensions` (or `edge://extensions`).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the project folder.

### Firefox

1. Clone or download this repo.
2. Go to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on** and select `manifest.json`.
   
---

## 🛠 Development

- `manifest.json` → Extension manifest (MV3).
- `content.js` → Injected into YouTube, listens for hotkeys.

---

## 📄 License

MIT License – feel free to use, modify, and share.

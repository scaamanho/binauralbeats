# AGENTS.md

## What this is

Static PWA, no build step, no dependencies, no backend. Spanish-first codebase with bilingual UI (es/en).

## Serve locally

Service worker requires HTTP — `file://` will not work.

```powershell
cd c:\proyectos\scaamanho\binauralbeatspro
py -m http.server 8080
```

- Landing page: `http://localhost:8080/`
- App: `http://localhost:8080/app/`

## Structure

- **Root** — Landing page: `index.html`, `landing.js` (i18n + scroll), `landing.css`
- **`app/`** — The PWA. Entry: `app/index.html`. All app logic lives in `app/app.js` (~690 lines, single monolith). Styles in `app/styles.css`.

## Key gotchas

- **Audio engine** uses Web Audio API with `ChannelMergerNode` for stereo split. Left channel = base frequency, right = base + beat. Oscillators are sine waves. Must call `initAudio()` after user gesture (autoplay policy). Audio node chain: oscillators → per-channel gain → merger → master gain → analyser → destination.
- **i18n** is duplicated across `landing.js` (`translations` object) and `app/app.js` (`TRANSLATIONS` object). Adding a new UI string requires updating both if it appears on both pages. Keys are Spanish strings (e.g., `presetsTab`, `editorHelp`).
- **Service worker** (`app/sw.js`) caches app shell under cache name `binaural-beats-pro-v6`. If you add new files to the app shell, update the `APP_SHELL` array. Bump the cache version when making breaking changes to force re-cache.
- **Custom sessions** are stored in `localStorage` key `bb_saved` as JSON array. Each item: `{ id, name, points: [{x, y}], duration, base, created }`. Points are normalized: `x` = time `[0,1]`, `y` = beat `[0,1]` where `1` = `MAX_BEAT` (40 Hz). Between programmatic points, frequency is held (no interpolation).
- **Code comments** are in Spanish. Match the existing style.
- **No tests, no lint, no typecheck, no CI.** Manual verification only — see `app/README.md` "Desarrollo y comprobaciones manuales".

## PWA checklist (manual)

After changes: verify presets play stereo, custom sessions work end-to-end, language/theme persist on reload, service worker registers and offline mode works after first load.

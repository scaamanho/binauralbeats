# Repository Instructions

## Run locally

There are no dependencies, build steps, tests, or backend. Serve the repository over HTTP; `file://` does not support the service-worker flow.

```powershell
py -m http.server 8080
```

- Landing: `http://localhost:8080/`
- PWA: `http://localhost:8080/app/`

## Boundaries

- Root landing: `index.html`, `landing.js`, `landing.css`.
- App entry: `app/index.html`; `app/app.js` is the monolithic state, UI, Web Audio, editor, and persistence implementation.
- App assets and PWA configuration live in `app/`: `styles.css`, `manifest.json`, `sw.js`, and icons.

## Audio

Audio is initialized lazily by `initAudio()` and must start from a user gesture. Preset playback uses sine oscillators with left `base` Hz and right `base + beat` Hz, routed through per-channel gains and a `ChannelMergerNode`; preserve that channel separation when changing playback code.

## Persistence and i18n

- App preferences use `bb_language` (`es`/`en`), `bb_theme` (`dark`, `light`, `monokai`, `desert`, `ocean`, `solarized`), and `bb_8d` (`1`/`0`). Custom programs use the JSON-array key `bb_saved`.
- A saved program contains `id`, `name`, `points`, `duration`, `base`, and `created`. Points use normalized `x` and `y`; `y * MAX_BEAT` is the beat frequency and `MAX_BEAT` is 40 Hz. Frequency is held between points, not interpolated.
- Landing translations are in `landing.js` and persist as `landing-language`; app translations are separately defined in `app/app.js` as `TRANSLATIONS` and persist as `bb_language`. Update the relevant dictionary when adding visible text.

## Service worker

`app/sw.js` currently uses cache `binaural-beats-pro-v21` and precaches `./`, `./index.html`, `./styles.css`, and `./app.js`. Add new required app-shell assets to `APP_SHELL` and bump `CACHE_NAME` when a change must invalidate existing cached app code.

## Verification

After changes, manually check stereo preset playback after a click, custom session create/save/load/play/delete, language/theme/8D persistence after reload, and service-worker offline behavior after the first HTTP load. Use HTTPS or `localhost` for service-worker testing.

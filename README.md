# awesomeBible Docs
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) [![Better Stack Badge](https://status.awesomebible.de/status-badges/v1/monitor/1ko04.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

Dokumentation für einige awesomeBible Projekte

Read this in: [English 🇺🇸](README_EN.md)
## 🚀 Projektstruktur

In diesem Astro + Starlight Projekt kannst du die folgenden Ordner und Dateien finden:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight sucht nach `.md` oder `.mdx` Dateien in dem `src/content/docs/` Ordner. Jede Datei wird auf der Grundlage ihres Dateinamens als Route angezeigt.

Bilder können in `src/assets/` hinzugefügt und mit relativen Links in Markdown eingebettet werden.

Statische Assets, wie zum Beispiel Favicons oder Open Graph Images, sollten im `public/` Ordner gespeichert werden.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/awesomebible/docs)  [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/awesomebible/docs) [![Open with Github.dev](https://img.shields.io/badge/Open_with-Github.dev-black?style=for-the-badge&logo=github)](https://github.dev/awesomebible/docs)

## 🧞 Befehle

Alle Befehle werden vom Stammverzeichnis des Projekts aus in einem Terminal ausgeführt:

| Befehl                    | Aktion                                               |
| ------------------------- | ---------------------------------------------------- |
| `npm install`             | Installiert Abhängigkeiten                           |
| `npm run dev`             | Startet einen lokalen Server unter `localhost:3000`  |
| `npm run build`           | Baut einen Productionbuild unter `./dist/`           |
| `npm run preview`         | Lokale Vorschau des Builds vor der Bereitstellung    |
| `npm run astro ...`       | Führe CLI Befehle wie `astro add`, `astro check` aus |
| `npm run astro -- --help` | Hilfe bei der Verwendung der Astro CLI               |

## 👀 Du willst mehr erfahren?

Dann schau dir die [Starlight docs](https://starlight.astro.build/) an, lies die [Astro Dokumentation](https://docs.astro.build), oder tritt dem [Astro Discord server](https://astro.build/chat) bei.

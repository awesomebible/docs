# awesomeBible Docs
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

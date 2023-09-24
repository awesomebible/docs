---
title: Setup
description: Setup der Entwicklungsumgebung
---
:::note
 Die Installationsanleitung ist noch ein Work-In-Progress.
:::

my.awesomeBible ist eine [Nuxt-App](https://nuxt.com) die als Datenbank [Supabase](https://supabase.com) nutzt.

## Voraussetzungen
Du brauchst:
- [NodeJS](https://nodejs.org)
- [(p)npm](https://pnpm.io/)
- [einen Supabase Account](https://supabase.com)

## Supabase Projekt Setup
Als erstes richten wir das Supabase Projekt ein. Im ersten Schritt wird der Name des Projekts, ein Datenbankpasswort, die Region und der Preistarif festgelegt.

Dann müssen die `SUPABASE_URL` und der `SUPABASE_KEY` in die `.env`-Datei im Wurzelverzeichnis des Projekts eingetragen werden.

Eine `.env`-Datei sähe zum Beispiel so aus:

```
SUPABASE_URL="https://abcdefgxyz.supabase.co"
SUPABASE_KEY="<your_key>"
```

Als letztes müssen wir auf im Supabase-Projekt unter "Authentication" und dann "Providers" zumindest Email Auth aktivieren.

## Nuxt Setup
Jetzt können wir im Ordner in den wir my.awesomeBible geklont haben, `(p)npm install` ausführen und anschließend mit `npm run dev` den Dev-Server starten.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

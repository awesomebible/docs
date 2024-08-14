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
- [die SurrealDB CLI](https://surrealdb.com/docs/surrealdb/installation) (optional: [Surrealist GUI](https://surrealdb.com/docs/surrealist/installation))

## SurrealDB Setup
Die Datenbank kann mithilfe des [SurrealQL Skriptes](https://docs.awesomebible.de/please/replace-this-v1.surql) eingerichtet werden. Öffne dazu Surrealist, stelle eine Verbindung zum Datenbankserver her und klicke dann auf `Import Data`. Dann kannst du mit dem Dateimanager die ``surql`` Datei auswählen.

![Surrealist Database view](../../../assets/surrealist_import_data.png)

Wenn du die CLI benutzt, kannst du die Datei mit folgendem Befehl importieren:

```sh
surreal import --conn http://localhost:8000 --user root --pass root --ns test --db test <pfad_zur_surql_datei>
```

// Todo: env config

## Nuxt Setup
Jetzt können wir im Ordner in den wir my.awesomeBible geklont haben, `(p)npm install` ausführen und anschließend mit `npm run dev` den Dev-Server starten.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./output/`        |
| `npm run preview`         | Preview your build locally, before deploying     |
---
title: Setup
description: Setup der Entwicklungsumgebung
---
:::note
 This installation guide is still a Work-in-Progress.
:::

my.awesomeBible is a [Nuxt app](https://nuxt.com) that uses [Supabase](https://supabase.com) as its database.

## Requirements
You will need:
- [NodeJS](https://nodejs.org)
- [(p)npm](https://pnpm.io/)
- [the SurrealDB CLI](https://surrealdb.com/docs/surrealdb/installation) (optionally: [Surrealist GUI](https://surrealdb.com/docs/surrealist/installation))

## SurrealDB Setup
The database can be imported using the [SurrealQL script](https://docs.awesomebible.de/please/replace-this-v1.surql). To do that, either open Surrealist, connect to your database and click on `Import Data`. Then choose the ``surql` file.

![Surrealist Database view](../../../../assets/surrealist_import_data.png)

If you use the CLI, you can import the file with the following command:

```sh
surreal import --conn http://localhost:8000 --user root --pass root --ns test --db test <pfad_zur_surql_datei>
```

// Todo: env config

## Kinde Setup
// Todo

## Nuxt Setup
Now we can run `(p)npm install` in the folder we cloned my.awesomeBible into and then run `npm run dev` to start the dev server.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./output/`        |
| `npm run preview`         | Preview your build locally, before deploying     |

---
title: Dev Setup
description: Setup der Entwicklungsumgebung
---
:::note
 This installation guide is still a Work-in-Progress.
:::

my.awesomeBible is a [Nuxt app](https://nuxt.com) that uses [SurrealDB](https://surrealdb.com) as its database.

## Requirements
You will need:
- [NodeJS](https://nodejs.org)
- [(p)npm](https://pnpm.io/)
- [the SurrealDB CLI](https://surrealdb.com/docs/surrealdb/installation) (optionally: [Surrealist GUI](https://surrealdb.com/docs/surrealist/installation))
- [a Kinde account](https://kinde.com)

## SurrealDB Setup
To start the SurrealDB server, run the following command:

<PackageManagerTabs>
  <Fragment slot="Temporary Server">
  ```shell
  # ram based
  surreal start memory -A --user root --pass root
  ```
  </Fragment>
  <Fragment slot="Persistent Server">
  ```shell
  # disk based server
  surreal start --log trace --user root --pass root file:mydatabase.db
  ```
  </Fragment>
</PackageManagerTabs>

The database can be imported using the [SurrealQL script](https://docs.awesomebible.de/please/replace-this-v1.surql). To do that, either open Surrealist, connect to your database and click on `Import Data`. Then choose the ``surql` file.

![Surrealist Database view](../../../../assets/surrealist_import_data.png)

If you use the CLI, you can import the file with the following command:

```sh
surreal import --conn http://localhost:8000 --user root --pass root --ns test --db test <path_to_surql_file>
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

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
- [a Supabase account](https://supabase.com)

## Supabase project setup
The first thing we do is set up the Supabase project. The first step is to set the name of the project, a database password, the region and the price tariff.

Then the `SUPABASE_URL` and the `SUPABASE_KEY` must be entered into the `.env` file in the root directory of the project.

For example, a `.env` file would look like this:

```
SUPABASE_URL="https://abcdefgxyz.supabase.co"
SUPABASE_KEY="<your_key>"
```

The last thing we have to do is to activate at least Email Auth in the Supabase project under "Authentication" and then "Providers".

## Nuxt Setup
Now we can run `(p)npm install` in the folder we cloned my.awesomeBible into and then run `npm run dev` to start the dev server.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./output/`        |
| `npm run preview`         | Preview your build locally, before deploying     |

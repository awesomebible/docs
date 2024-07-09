# awesomeBible Docs
Documentation for some awesomeBible projects

Read this in: [German 🇩🇪](README.md)
## 🚀 Project Structure

In this Astro + Starlight project you can find the following folders and files:

```
.
├── public/
├── src/
│ ├─── assets/
│ ├─── content/
│ │ ├─── docs/
│ │ └─── config.ts
│ └─── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight searches for `.md` or `.mdx` files in the `src/content/docs/` folder. Each file is displayed as a route based on its file name.

Images can be added to `src/assets/` and embedded with relative links in Markdown.

Static assets, such as favicons or Open Graph images, should be stored in the `public/` folder.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/awesomebible/docs)  [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/awesomebible/docs) [![Open with Github.dev](https://img.shields.io/badge/Open_with-Github.dev-black?style=for-the-badge&logo=github)](https://github.dev/awesomebible/docs)

## 🧞 Commands

All commands are executed from the root directory of the project in a terminal:

| Command | Action |
| ------------------------- | ---------------------------------------------------- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts a local server under `localhost:3000` |
| `npm run build` | Builds a production build under `./dist/` |
| `npm run preview` | Local preview of the build before deployment |
| `npm run astro ...` | Execute CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Help with using the Astro CLI |

## 👀 Want to find out more?

Then take a look at the [Starlight docs](https://starlight.astro.build/), read the [Astro documentation](https://docs.astro.build), or join the [Astro Discord server](https://astro.build/chat).
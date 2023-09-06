import { defineConfig, sharpImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://docs.awesomebible.de/';
// https://astro.build/config
export default defineConfig({  
  integrations: [starlight({
    title: 'awesomeBible Docs',
    logo: {
      light: '/src/assets/wordmark_black.svg',
      dark: '/src/assets/wordmark_white.svg',
      replacesTitle: true,
    },
    defaultLocale: 'root',
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: 'Deutsch',
          lang: 'de',
        }
      },
    customCss: [
      '@fontsource-variable/inter',
      '/src/assets/custom-styles.css',
    ],
    head: [
      {
        tag: 'meta',
        attrs: { property: 'og:image', content: site + 'og.png?v=1' },
      },
      {
        tag: 'meta',
        attrs: { property: 'twitter:image', content: site + 'og.png?v=1' },
      },
    ],

  editLink: {
    baseUrl: 'https://github.com/awesomebible/docs/edit/main/',
  },
    social: {
      discord: 'https://chat.awesomebible.de',
      github: 'https://github.com/awesomebible/docs',
      mastodon: 'https://youthweb.social/@awesomebible',
    },
    sidebar: [{
      label: 'Verse',
      autogenerate: { directory: 'verse' },
    }, 
    {
      label: 'my.awesomeBible',
      autogenerate: { directory: 'myawesomebible' },
    },
    {
      label: 'awesomeBible',
      items: [{
        label: 'Branding',
        link: '/branding/',
      },
      {
        label: 'Unsere Vision',
        link: 'https://awesomebible.de/unsere-vision/',
      },
      {
        label: 'Status',
        link: 'https://status.awesomebible.de/',
      }]
    }],
  }),
],
});

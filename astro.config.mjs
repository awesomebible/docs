import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import image from '@astrojs/image';

const site = 'https://docs.awesomebible.de/';
// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'awesomeBible Docs',
    customCss: ['/src/assets/custom-styles.css'],
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

    social: {
      discord: 'https://discord.awesomebible.de',
      github: 'https://github.com/awesomebible/docs',
      mastodon: 'https://youthweb.social/@awesomebible',
    },
    sidebar: [{
      label: 'Verse',
      autogenerate: { directory: 'verse' },
    }, 
    {
      label: 'my.awesomeBible',
      items: [{
        label: 'Übersicht',
        link: '/myawesomebible/',
      }]
    },
    {
      label: 'awesomeBible',
      items: [{
        label: 'Branding',
        link: '/branding/',
      }]
    }],
  }),
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  experimental: { assets: true },
});
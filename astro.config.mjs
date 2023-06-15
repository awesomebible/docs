import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import image from '@astrojs/image';


// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'awesomeBible Docs',
    customCss: ['/src/assets/custom-styles.css'],
    social: {
      discord: 'https://discord.awesomebible.de',
      github: 'https://github.com/awesomebible/docs',
      mastodon: 'https://youthweb.social/@awesomebible',
    },
    sidebar: [{
      label: 'Verse',
      autogenerate: { directory: 'verse' },
    }, {
      label: 'my.awesomeBible',
      items: [{
        label: 'Übersicht',
        link: '/myawesomebible/',
      }]
    }],
  }),
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  experimental: { assets: true },
});
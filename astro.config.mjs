import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import image from '@astrojs/image';


// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'awesomeBible Docs',
    customCss: ['/src/assets/custom-styles.css'],
    social: {
      discord: 'https://astro.build/chat',
      github: 'https://github.com/awesomebible/docs',
      mastodon: 'https://youthweb.social/@awesomebible',
    },
    sidebar: [{
      label: 'Verse',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Installation',
        link: '/verse/installation/'
      }]
    }, {
      label: 'my.awesomeBible',
      items: [{
        label: 'Übersicht',
        link: '/myawesomebible/'
      }]
    }],
  }),
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});
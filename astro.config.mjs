import { defineConfig, sharpImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
const site = 'https://docs.awesomebible.de/';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.awesomebible.de',
  integrations: [starlight({
    title: 'awesomeBible Docs',
    logo: {
      light: '/src/assets/wordmark_black.svg',
      dark: '/src/assets/wordmark_white.svg',
      replacesTitle: true
    },
    defaultLocale: 'root',
    locales: {
      // English docs in `src/content/docs/en/`
      root: {
        label: 'Deutsch',
        lang: 'de'
      },
      en: {
        label: 'English'
      }
    },
    customCss: ['@fontsource-variable/inter', '@fontsource-variable/jetbrains-mono', '/src/assets/custom-styles.css'],
    editLink: {
      baseUrl: 'https://github.com/awesomebible/docs/edit/main/'
    },
    social: {
      discord: 'https://chat.awesomebible.de',
      github: 'https://github.com/awesomebible/docs',
      mastodon: 'https://youthweb.social/@awesomebible'
    },
    sidebar: [{
      label: 'Verse',
      autogenerate: {
        directory: 'verse'
      }
    }, {
      label: 'my.awesomeBible',
      autogenerate: {
        directory: 'myawesomebible'
      }
    }, {
      label: 'awesomeBible',
      items: [{
        label: 'awesomeBible',
        link: 'https://awesomebible.de/',
        badge: {
          text: 'Home'
        }
      }, {
        label: 'OpenBibleProject',
        link: 'https://obp.awesomebible.de/',
        badge: {
          text: 'New',
          variant: 'note'
        }
      }, {
        label: 'Branding',
        link: '/branding/'
      }, {
        label: 'Unsere Vision',
        link: '/vision/',
        translations: {
          en: 'Our Vision'
        }
      }, {
        label: 'Nutzung unserer Texte',
        link: '/lizenz/',
        translations: {
          en: 'Usage of our texts'
        }
      }, {
        label: 'Status',
        link: 'https://status.awesomebible.de/'
      }]
    }],
    components: {
      // Relative path to the custom component.
      Head: './src/components/Head.astro',
    },
    plugins: [starlightLinksValidator()],
  }),
  ]
});
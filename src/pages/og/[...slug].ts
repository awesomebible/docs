import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

// Get all entries from the `docs` content collection.
const entries = await getCollection('docs');

// Map the entries array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  // Pass down the pages object representing all documentation pages.
  pages,
  // Define the name of the parameter used in the endpoint path, here `slug`
  // as the file is named `[...slug].ts`.
  param: 'slug',
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_path, page: typeof pages[number]) => {
    return {
      // Use the page title and description as the image title and description.
      title: page.data.title,
      description: page.data.description,
      // Customize various options.
      bgGradient: [[59, 130, 246], [124, 58, 237]],

      font: {
        description: {
          color: [213, 213, 216],
          families: ['Inter'],
          weight: 'Normal',
        },
        title: {
          color: [250, 250, 250],
          families: ['Inter'],
          lineHeight: 1.2,
          weight: 'ExtraBold',
        },
      },
      fonts: [
        'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff2',
        'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-800-normal.woff2',
      ],
      padding: 120,
    };
  },
});

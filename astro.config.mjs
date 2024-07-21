import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import starlight from "@astrojs/starlight";
import expressiveCode from "astro-expressive-code";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://tina-tinker.vercel.app/',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [
    expressiveCode(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight'
        },
        wrap: true
      },
      drafts: true
    }),
    sitemap(),
    tailwind(),
    // starlight({
    //   title: 'My Docs',
    //   social: {
    //     github: 'https://github.com/withastro/starlight',
    //   },
    //   sidebar: [
    //     {
    //       label: 'Guides',
    //       items: [
    //         // Each item here is one entry in the navigation menu.
    //         { label: 'Example Guide', slug: 'guides/example' },
    //       ],
    //     },
    //     {
    //       label: 'Reference',
    //       autogenerate: { directory: 'reference' },
    //     },
    //   ],
    // }),
  ],
  output: "server",
  adapter: vercel()
});
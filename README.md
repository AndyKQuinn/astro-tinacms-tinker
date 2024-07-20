# Astro with TinaCMS Tinker

## Tech Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tabler Icons](https://tabler-icons.io/i/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [PageFind](https://pagefind.app/)
- [Motion](https://motion.dev/)
- [TinaCMS](https://tina.io/)

## Local Development

```bash
# install dependencies
npm i
yarn
pnpm install
bun i
```

```bash
# serve website locally, defaults to http://localhost:4321
npm run dev
yarn run dev
pnpm dev
bun run dev
```

## Site Configuration

- Edit the configuration file **src/data/site.config.ts** for the basic blog metadata.
- Update the **astro.config.mjs** file at the root of the project with your own domain.
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the blog link. For posts, the preview image is the post cover.
- Edit the social networks in the Header component - **src/components/Header.astro**, change the URL to your social network.

## 🗂️ Adding Categories

To add a new category to your blog, simply go to the src/data/categories.ts file and add it to the array. For example:

```ts
export  const  CATEGORIES  =  [
'JavaScript',
'React',
'new category here'  <---
]  as  const
```

## Creating Posts

Adding a post is as simple as adding a .md or .mdx file to the blog folder at the path **src/content/blog**. The filename will be used to create the slug/URL of the page.

For example, if you have a file named **jsx-and-react.md**, it will be transformed into: **<http://yourdomain.com/post/jsx-and-react/>**

## Draft Articles

To activate draft mode, add the property **draft: true** to the file, and it will no longer be displayed on the blog. For example:

```ts
title: Hipster Ipsum
description: 'Skateboard gorpcore ramps retro messenger bag ugh twee big mood quinoa vibecession hella JOMO air plant trust fund. Chia echo park portland JOMO fashion axe health goth keffiyeh fingerstache truffaut taxidermy pok pok plaid. Vexillologist activated charcoal fingerstache hashtag typewriter glossier green juice, chartreuse cronut chicharrones hot chicken mlkshk stumptown disrupt yes plz. Hella taxidermy mlkshk venmo glossier actually, scenester jawn retro wolf keffiyeh green juice bodega boys pour-over cronut. Snackwave chillwave adaptogen, mixtape gatekeep mukbang tumblr.'
... (other required metadata)
draft: true
```

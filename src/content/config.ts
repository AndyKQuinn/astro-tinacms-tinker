import { defineCollection, z } from 'astro:content'
// import { docsSchema } from '@astrojs/starlight/schema'
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val: any) => new Date(val)),
			heroImage: image(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

// const docs = defineCollection({ schema: docsSchema() })

// export const collections = { blog, docs }
export const collections = { blog }

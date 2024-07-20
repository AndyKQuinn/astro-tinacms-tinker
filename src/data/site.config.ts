interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'AndyQuinn',
	title: 'Blogging and Docs Site using AstroJS alongside other cool stuff',
	description: "Trying to figure out my ideal pattern for architecturing my team's future",
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share post',
	paginationSize: 6
}

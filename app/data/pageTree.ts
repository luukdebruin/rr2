export interface Page {
	title: string
	link: string
	className?: string
}

export interface PageTree {
	[key: string]: Page[]
}

export const pageTree: PageTree = {
	recipes: [
		{
			title: 'Recipes',
			link: '/recipes',
		},
		{
			title: 'Main Course',
			link: '/recipes/main',
			className: 'lowercase',
		},
		{
			title: 'Bread',
			link: '/recipes/bread',
			className: 'lowercase',
		},
		{
			title: 'Soup',
			link: '/recipes/soup',
			className: 'lowercase',
		},
		{
			title: 'Dessert',
			link: '/recipes/dessert',
			className: 'lowercase',
		},
	],
	blog: [
		{
			title: 'Blog',
			link: '/blog',
		},
		{
			title: 'Travel',
			link: '/blog/travel',
			className: 'lowercase',
		},
		{
			title: 'Random',
			link: '/blog/random',
			className: 'lowercase',
		},
	],
	about: [
		{
			title: 'About',
			link: '/about',
		},
	],
}

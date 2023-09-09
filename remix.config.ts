/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	future: {
		v2_routeConvention: true,
		v2_dev: true,
		v2_errorBoundary: true,
		v2_headers: true,
		v2_normalizeFormMethod: true,
		v2_meta: true,
	},
	mdx: async () => {
		const [rehypeHighlight] = await Promise.all([import('rehype-highlight').then((mod) => mod.default)])

		return {
			rehypePlugins: [rehypeHighlight],
		}
	},
	appDirectory: 'app',
	assetsBuildDirectory: 'public/build',
	serverBuildPath: 'build/index.js',
	publicPath: '/build/',
	serverModuleFormat: 'cjs',
	tailwind: true,
}

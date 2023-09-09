import React from 'react'
import type { LinksFunction, LoaderFunction, V2_MetaFunction } from '@remix-run/node'
import {
	isRouteErrorResponse,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useRouteError,
} from '@remix-run/react'
import clsx from 'clsx'

import { Theme } from '~/utils/theme-provider'
import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/theme-provider'
import { getThemeSession } from './utils/theme.server'

import stylesheet from '~/styles/tailwind-build.css'
import { useIsBot } from './utils/bot-provider'
import { NotFound } from './components/NotFound'
import { GenericError } from './components/GenericError'
import Layout from './components/Layout'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }]

export const meta: V2_MetaFunction = () => {
	return [
		{ charset: 'utf-8' },
		{ title: 'Raving Raccoons' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	]
}

export type LoaderData = {
	theme: Theme | null
}

export const loader: LoaderFunction = async ({ request }) => {
	const themeSession = await getThemeSession(request)

	const data: LoaderData = {
		theme: themeSession.getTheme(),
	}

	return data
}

function App() {
	const data = useLoaderData<LoaderData>()
	const [theme] = useTheme()

	return (
		<html lang="en" className={clsx(theme)}>
			<head>
				<Meta />
				<Links />
				<NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
			</head>
			<body className="font-montreal bg-white-100 dark:bg-black-100">
				<Layout>
					<Outlet />
				</Layout>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

export default function AppWithProviders() {
	const data = useLoaderData<LoaderData>()

	return (
		<ThemeProvider specifiedTheme={data.theme}>
			<App />
		</ThemeProvider>
	)
}

export function Error() {
	const [theme] = useTheme()
	const error = useRouteError()
	const isBot = useIsBot()

	if (isRouteErrorResponse(error)) {
		const isNotFound = error.status === 404
		return (
			<html lang="en" className={clsx(theme)}>
				<head>
					<Meta />
					<title>{isNotFound ? 'Not found' : 'Error'}</title>
					<Links />
					<NonFlashOfWrongThemeEls ssrTheme={Boolean(Theme.DARK)} />
				</head>
				<body className="font-montreal bg-white-100 dark:bg-black-100">
					<Layout>
						{isNotFound ? <NotFound /> : <GenericError error={{ message: `${error.status} ${error.data}` }} />}
					</Layout>
					<ScrollRestoration />
					{isBot ? null : <Scripts />}
					<LiveReload />
				</body>
			</html>
		)
	}

	return (
		<html lang="en">
			<head>
				<Meta />
				<title>Error</title>
				<Links />
			</head>
			<body>
				<Layout>
					<GenericError error={error as Error} />
				</Layout>
				{isBot ? null : <Scripts />}
			</body>
		</html>
	)
}

export function ErrorBoundary() {
	return (
		<ThemeProvider specifiedTheme={Theme.DARK}>
			<Error />
		</ThemeProvider>
	)
}

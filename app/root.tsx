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

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }]

export const meta: V2_MetaFunction = () => {
	return [{ charset: 'utf-8' }, { title: 'Raving Raccoons' }, { viewport: 'width=device-width,initial-scale=1' }]
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
			<body className="font-montreal">
				<Outlet />
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
				<body className="font-montreal">
					{isNotFound ? <NotFound /> : <GenericError error={{ message: `${error.status} ${error.data}` }} />}
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
				<GenericError error={error as Error} />
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

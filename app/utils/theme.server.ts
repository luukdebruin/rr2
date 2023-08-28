import { createCookieSessionStorage } from '@remix-run/node'

// import { getRequiredServerEnvVar } from './misc'
import { Theme, isTheme } from './theme-provider'

const themeStorage = createCookieSessionStorage({
	cookie: {
		name: 'theme',
		secure: true,
		// secrets: [getRequiredServerEnvVar('SESSION_SECRET')],
		sameSite: 'strict',
		path: '/',
		maxAge: 31_536_000,
		httpOnly: true,
	},
})

async function getThemeSession(request: Request) {
	const session = await themeStorage.getSession(request.headers.get('Cookie'))
	return {
		getTheme: () => {
			const themeValue = session.get('theme')
			return isTheme(themeValue) ? themeValue : Theme.DARK
		},
		setTheme: (theme: Theme) => session.set('theme', theme),
		commit: () => themeStorage.commitSession(session),
	}
}

export { getThemeSession }

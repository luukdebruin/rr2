import React from 'react'
import { Theme, useTheme } from '~/utils/theme-provider'
import ThemeToggleIcon from './ThemeToggleIcon'

const themes = [Theme.LIGHT, Theme.DARK]

const ThemeToggle = () => {
	const [theme, setTheme] = useTheme()

	function handleChange() {
		setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))
	}

	return (
		<div className="inline-flex h-full items-center gap-2">
			{themes.map((t) => (
				<label
					key={t}
					className={
						'relative flex cursor-pointer items-center justify-center text-black-100 opacity-100 dark:text-white-100'
					}
				>
					<ThemeToggleIcon theme={t} checked={theme === t} />
					<input
						type="radio"
						name="theme-toggle"
						className="absolute inset-0 z-[-1] opacity-0"
						checked={theme === t}
						value={t}
						title={`Use ${t} theme`}
						aria-label={`Use ${t} theme`}
						onChange={handleChange}
					/>
				</label>
			))}
		</div>
	)
}

export default ThemeToggle

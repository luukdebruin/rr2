import React from 'react'
import { LiaSunSolid, LiaMoonSolid } from 'react-icons/lia'
import { Theme } from '~/utils/theme-provider'

const iconThemeMap = new Map([
	[Theme.LIGHT, LiaSunSolid],
	[Theme.DARK, LiaMoonSolid],
])

export interface ThemeToggleIconProps {
	theme: Theme
	checked: boolean
}

const ThemeToggleIcon = ({ theme, checked }: ThemeToggleIconProps) => {
	const Component = iconThemeMap.get(theme)

	if (Component) {
		return <Component key={theme} size={32} className="text-black-100 dark:text-white-100" />
	}

	return <></>
}

export default ThemeToggleIcon

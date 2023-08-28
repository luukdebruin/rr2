import React, { ButtonHTMLAttributes, ElementType, useCallback } from 'react'
import { Link } from '@remix-run/react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type ButtonColor = 'white' | 'black' | 'lightgrey' | 'yellow' | 'blue' | 'green' | 'none'
export type ButtonSize = 'small' | 'medium' | 'large' | 'huge'

type Props = {
	as?: ElementType
	className?: string
	onClick?: () => void
	preventDefault?: boolean
	to?: string
	color?: ButtonColor
	size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonStyleOptions = {
	color?: ButtonColor
	size?: ButtonSize
}

export const defaultButtonStyles = (options?: ButtonStyleOptions) => {
	const color: ButtonColor = options?.color || 'white'
	const size: ButtonSize = options?.size || 'medium'

	return clsx([
		'inline-flex items-center justify-center font-basier overflow-hidden rounded-md w-max tracking-wider duration-200 ease-in-out cursor-pointer',
		'disabled:opacity-20 disabled:bg-opacity-100',
		clsx([
			color === 'white' && 'bg-white-100 text-black-100 hover:bg-white-200 disabled:bg-white-100',
			color === 'black' && 'bg-black-100 text-white-100 hover:bg-black-300 disabled:bg-black-100',
			color === 'none' && 'bg-none text-white-100',
			size === 'small' && 'px-2 py-1 text-xs',
			size === 'medium' && 'px-4 py-2 text-xs',
			size === 'large' && 'px-6 py-3 text-sm',
			size === 'huge' && 'px-8 py-4 text-base',
		]),
	])
}

export default function Button({ as = 'button', onClick, preventDefault, className, color, size, ...props }: Props) {
	const Component = props?.to ? Link : as

	const handleOnClick = useCallback(
		(e: any) => {
			if (preventDefault) {
				e.preventDefault()
			}
			if (onClick) {
				onClick()
			}
		},
		[onClick],
	)

	return (
		<Component
			onClick={handleOnClick}
			className={twMerge(defaultButtonStyles({ color, size }), className)}
			{...props}
		/>
	)
}

import React, { ReactNode, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type TextColor =
	| 'white'
	| 'lightwhite'
	| 'black'
	| 'grey'
	| 'lightgrey'
	| 'yellow'
	| 'yellow-default'
	| 'blue'
	| 'blue-default'
	| 'green'
	| 'green-default'

type Props = {
	className?: string
	onClick?: () => void
	children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>

type ParagraphProps = {
	className?: string
	onClick?: () => void
	children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>

export function H1({ children, className }: Props) {
	return (
		<h1
			className={twMerge(
				clsx(['text-4xl font-serif text-black !leading-tight break-normal antialiased']),
				className,
			)}
		>
			{children}
		</h1>
	)
}

export function H2({ children, className }: Props) {
	return (
		<h2
			className={twMerge(
				clsx(['text-2xl font-sans text-black !leading-tight break-normal antialiased']),
				className,
			)}
		>
			{children}
		</h2>
	)
}

export function H3({ children, className }: Props) {
	return (
		<h3
			className={twMerge(
				clsx(['text-lg font-sans text-gray-700 !leading-relaxed antialiased']),
				className,
			)}
		>
			{children}
		</h3>
	)
}

export function Paragraph({ children, className }: ParagraphProps) {
	return (
		<p
			className={twMerge(
				clsx(['text-base font-sans text-black !leading-tight antialiased']),
				className,
			)}
		>
			{children}
		</p>
	)
}

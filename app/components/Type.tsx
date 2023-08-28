import React, { ReactNode, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

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
		<h1 className={twMerge(clsx(['text-5xl font-montrealBold !leading-tight break-normal antialiased']), className)}>
			{children}
		</h1>
	)
}

export function H2({ children, className }: Props) {
	return (
		<h2 className={twMerge(clsx(['text-3xl font-calendas !leading-tight break-normal antialiased']), className)}>
			{children}
		</h2>
	)
}

export function H3({ children, className }: Props) {
	return (
		<h3 className={twMerge(clsx(['text-lg font-montreal !leading-releaxed antialiased']), className)}>{children}</h3>
	)
}

export function H4({ children, className }: Props) {
	return (
		<h4 className={twMerge(clsx(['text-xs font-montreal !leading-releaxed antialiased']), className)}>{children}</h4>
	)
}

export function Paragraph({ children, className }: ParagraphProps) {
	return <p className={twMerge(clsx(['text-base font-basier !leading-tight antialiased']), className)}>{children}</p>
}

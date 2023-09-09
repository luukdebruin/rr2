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

export const H1 = ({ children, className }: Props) => {
	return (
		<h1
			className={twMerge(
				clsx(['text-5xl font-montrealBold text-black-100 dark:text-white-100 !leading-tight break-normal antialiased']),
				className,
			)}
		>
			{children}
		</h1>
	)
}

export const H2 = ({ children, className }: Props) => {
	return (
		<h2
			className={twMerge(
				clsx(['text-2xl font-montrealBold text-black-100 dark:text-white-100 !leading-tight break-normal antialiased']),
				className,
			)}
		>
			{children}
		</h2>
	)
}

export const H3 = ({ children, className }: Props) => {
	return (
		<h3
			className={twMerge(
				clsx(['text-base font-montrealBold text-black-100 dark:text-white-100 leading-tight antialiased']),
				className,
			)}
		>
			{children}
		</h3>
	)
}

export const H4 = ({ children, className }: Props) => {
	return (
		<h4
			className={twMerge(
				clsx(['text-xs font-montreal text-black-100 dark:text-white-100 !leading-releaxed antialiased']),
				className,
			)}
		>
			{children}
		</h4>
	)
}

export const H5 = ({ children, className }: ParagraphProps) => {
	return (
		<p
			className={twMerge(
				clsx(['text-base font-montrealBold uppercase text-black-100 dark:text-white-100 !leading-tight antialiased']),
				className,
			)}
		>
			{children}
		</p>
	)
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
	return (
		<p
			className={twMerge(
				clsx(['text-sm font-montrealBold text-black-100 dark:text-white-100 !leading-tight antialiased']),
				className,
			)}
		>
			{children}
		</p>
	)
}

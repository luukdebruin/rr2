import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import React from 'react'
import { Page, pageTree } from '~/data/pageTree'
import ThemeToggle from './ThemeToggle'
import { H5 } from './Type'

const Header = () => {
	return (
		<header className="py-4 sticky top-0">
			<div className="flex justify-between px-2">
				<div className="flex gap-16">
					<NavLink to="/" className="h-fit relative group overflow-hidden">
						{({ isActive }) => (
							<>
								<span
									aria-hidden="true"
									className={clsx([
										'absolute top-0 left-0 overflow-hidden translate-x-[-101%] transition-transform duration-200 ease-in-out group-hover:translate-x-0 bg-black-100 dark:bg-white-100',
										isActive && 'translate-x-0',
									])}
								>
									<H5 className="text-white-100 dark:text-black-100">Raving</H5>
									<H5 className="text-white-100 dark:text-black-100">Raccoons</H5>
								</span>
								<div>
									<H5>Raving</H5>
									<H5>Raccoons</H5>
								</div>
							</>
						)}
					</NavLink>
					{Object.keys(pageTree).map((key: string) => {
						const page = pageTree[key]
						return (
							<div key={key} className="flex flex-col">
								{page.map((page: Page) => (
									<NavLink key={page.title} to={page.link} className="h-fit relative group overflow-hidden">
										{({ isActive }) => (
											<>
												<H5
													aria-hidden="true"
													className={clsx([
														'absolute top-0 left-0 overflow-hidden translate-x-[-101%] transition-transform duration-200 ease-in-out group-hover:translate-x-0 text-white-100 dark:text-black-100 bg-black-100 dark:bg-white-100',
														isActive && 'translate-x-0',
														page.className,
													])}
												>
													{page.title}
												</H5>
												<H5 className={clsx([page.className])}>{page.title}</H5>
											</>
										)}
									</NavLink>
								))}
							</div>
						)
					})}
				</div>
				<ThemeToggle />
			</div>
		</header>
	)
}

export default Header

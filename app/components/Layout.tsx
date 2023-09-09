import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<div className="flex flex-col min-h-screen">
				<div className="">
					<a href="#mainContent" className="sr-only">
						Skip to content
					</a>
				</div>
				<Header />
				<main role="main" id="mainContent" className="flex-grow container">
					{children}
				</main>
				<Footer />
			</div>
		</div>
	)
}

export default Layout

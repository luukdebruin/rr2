import React from 'react'

export function NotFound() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center py-48">
			<h1 color="white">Oops! We lost this page</h1>
			<p color="lightgrey" className="mt-4 mb-8">
				Sorry, the page you are looking for doesn&apos;t exist or has been removed
			</p>
			<a href="/">
				<button color="blue">Back to Homepage</button>
			</a>
		</div>
	)
}

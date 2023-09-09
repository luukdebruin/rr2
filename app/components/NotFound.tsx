import React from 'react'
import Button from './Button'
import { H1, Paragraph } from './Type'

export const NotFound = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center py-48">
			<H1>Oops! We lost this page</H1>
			<Paragraph color="lightgrey" className="mt-4 mb-8">
				Sorry, the page you are looking for doesn&apos;t exist or has been removed
			</Paragraph>
			<Button to="/">Back to Homepage</Button>
		</div>
	)
}

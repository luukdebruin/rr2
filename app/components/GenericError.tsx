import React from 'react'
import { Paragraph } from './Type'

export function GenericError({ error }: { error?: { message: string; stack?: string } }) {
	return (
		<div>
			<Paragraph>Error message: {error?.message}</Paragraph>
		</div>
	)
}

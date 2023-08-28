import React from 'react'

export function GenericError({ error }: { error?: { message: string; stack?: string } }) {
	return (
		<div>
			<p>Error message: {error?.message}</p>
		</div>
	)
}

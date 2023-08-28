import React from 'react'
import Button from '~/components/Button'
import { H2, H3, H4, Paragraph } from '~/components/Type'

export default function Index() {
	return (
		<div className="w-screen h-screen flex flex-col justify-center gap-4 max-w-2xl m-auto">
			<div>
				<H2>Portobello Mushroom Burgers</H2>
				<H3>Wild vibes with familiar flavours</H3>
			</div>
			<H4>Of course we also have a H4 in this bitch</H4>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</Paragraph>
			<Button>Click on me</Button>
		</div>
	)
}

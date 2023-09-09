import { json, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import React from 'react'
import { H2, Paragraph } from '~/components/Type'
import { RecipeList, recipeList } from '~/data/recipeList.server'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export const loader: LoaderFunction = async () => {
	return json(recipeList)
}

export default function Recipes() {
	const recipes = useLoaderData<RecipeList>()

	return (
		<ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 768: 2, 1024: 3 }}>
			<Masonry columnsCount={3} gutter="48px">
				{recipes.map((recipe, idx) => {
					return (
						<Link key={idx} prefetch="intent" to={recipe.to} className="group">
							<img src={recipe.image} alt={recipe.title} />
							<div className="flex flex-col gap-2 mt-4 mb-8">
								<H2>{recipe.title}</H2>
								<div className="flex gap-2">
									<Paragraph className="text-gray-300">#main course</Paragraph>
									<Paragraph className="text-gray-300">#vegan</Paragraph>
									<Paragraph className="text-gray-300">#quick</Paragraph>
								</div>
								{/* <H3 className="lowercase group-hover:underline">{recipe.description}</H3> */}
							</div>
						</Link>
					)
				})}
			</Masonry>
		</ResponsiveMasonry>
	)
}

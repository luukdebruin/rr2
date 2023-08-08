import { H1, H2, H3, Paragraph } from '@/components/type'

export default function Home() {
  return <div className='flex flex-col justify-center items-center h-full self-center'>
		{Array.from(new Array(5)).map(() => {
			return (
				<div className='w-1/2 p-16 border-x-0 border-t-black border-t-2'>
				<H1>Portobello Mushroom Burgers</H1>
				<H2>Wild vibes with familiar flavours</H2>
				</div>
			)
		})}
	</div>
}

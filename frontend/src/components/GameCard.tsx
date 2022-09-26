interface GameCardProps {
	title: string
	bannerUrl: string
	adsCount: number
}

export default function GameCard(props: GameCardProps) {
	const { title, bannerUrl, adsCount } = props
	return (
		<div className='relative'>
			<img src={bannerUrl} className='rounded-lg' />

			<div className='w-full pt-16 pb-4 px-4 absolute bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] rounded-lg'>
				<p className='text-white font-bold'>{title}</p>
				<p className='text-zinc-300 text-sm'>
					{adsCount ?? '0'} {adsCount === 1 ? 'anúncio' : 'anúncios'}
				</p>
			</div>
		</div>
	)
}

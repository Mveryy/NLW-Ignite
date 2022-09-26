import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AdCard from './AdCard'

interface Props {
	gameId: string
	bannerUrl: string
	title: string
}

export interface IAds {
	name: string
	weekDays: string[]
	useVoiceCHannel: boolean
	yearsPlaying: number
	hourStart: string
	hourEnd: string
	discord: string
}

export default function GameCardModal({ gameId, bannerUrl, title }: Props) {
	const [ads, setAds] = useState<IAds[]>([])

	useEffect(() => {
		axios.get(`http://localhost:3000/games/${gameId}/ads`).then(res => {
			setAds(res.data)
		})
	}, [])

	return (
		<Dialog.Portal>
			<Dialog.Overlay className='bg-black/60 inset-0 fixed flex items-center justify-center'>
				<Dialog.Content className='bg-galaxyBg bg-cover bg-no-repeat py-8 px-5 sm:px-10 text-white fixed rounded-lg max-w-[480px] shadow-lg shadow-black/30 w-[90%] max-h-[90%] overflow-y-auto'>
					<img
						src={bannerUrl}
						className='h-44 w-full object-cover rounded-lg'
					/>
					<h1 className='font-bold text-2xl mt-6 mb-1'>{title}</h1>
					<p className=''>Conecte-se e comece a jogar!</p>
					<div className='flex gap-3 overflow-y-auto scrollbar pb-2 h-[310px]'>
						{ads.map(ad => (
							<AdCard ad={ad} />
						))}
					</div>
				</Dialog.Content>
			</Dialog.Overlay>
		</Dialog.Portal>
	)
}

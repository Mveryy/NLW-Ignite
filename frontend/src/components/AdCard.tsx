import { CheckCircle, GameController } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ContextAPI } from '../Context/ContextAPI'
import { IAds } from './GameCardModal'

interface Props {
	ad: IAds
}

export default function AdCard(props: Props) {
	const { ad } = props
	const [showDiscord, setShowDiscord] = useState(false)

	return (
		<div className='bg-[#2A2634] rounded-lg p-5 mt-6 flex flex-col'>
			{showDiscord ? (
				<div className='w-44 flex flex-col text-white items-center'>
					<CheckCircle
						size={50}
						weight='bold'
						className='text-green-400 mb-2'
					/>
					<h1 className='font-bold text-2xl'>Let's play!</h1>
					<p className='text-zinc-400 mb-3 text-center'>
						Agora é só começar a jogar!
					</p>
					<p className='font-semibold  mb-2'>Adicione no Discord</p>
					<div className='rounded-lg w-full h-12 bg-zinc-900 flex items-center justify-center'>
						{ad.discord}
					</div>
				</div>
			) : (
				<div className='w-44 flex flex-col gap-2'>
					<p className='text-zinc-400 flex flex-col text-sm'>
						Nome
						<span className='font-bold text-white'>{ad.name}</span>
					</p>
					<p className='text-zinc-400 flex flex-col text-sm'>
						Tempo de jogo
						<span className='font-bold text-white'>{ad.yearsPlaying}</span>
					</p>
					<p className='text-zinc-400 flex flex-col text-sm'>
						Disponibilidade
						<span className='font-bold text-white'>
							{`${ad.weekDays.length} ${
								ad.weekDays.length === 1 ? 'dia' : 'dias'
							}`}
						</span>
					</p>
					<p className='text-zinc-400 flex flex-col text-sm'>
						Chamada de áudio ?
						<span
							className={`font-bold text-white ${
								ad.useVoiceCHannel ? 'text-green-500' : 'text-red-500'
							}`}
						>
							{ad.useVoiceCHannel ? 'Sim' : 'Não'}
						</span>
					</p>
					<button
						className='w-full h-10 bg-violet-500 rounded-lg hover:bg-violet-600 flex items-center justify-center gap-2'
						onClick={() => setShowDiscord(!showDiscord)}
					>
						<GameController size={20} weight={'bold'} />
						Conectar
					</button>
				</div>
			)}
		</div>
	)
}

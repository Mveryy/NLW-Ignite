import * as Dialog from '@radix-ui/react-dialog'
import { Check, GameController } from 'phosphor-react'
import DaysButtons from './Form/DaysButtons'
import Input from './Form/Input'
import * as Checkbox from '@radix-ui/react-checkbox'
import SelectGame from './Form/Select'
import { FormEvent, useContext, useState } from 'react'
import axios from 'axios'
import { ContextAPI } from '../../Context/ContextAPI'

export default function Modal() {
	const [useVoiceChannel, setUseVoiceChannel] = useState(false)
	const { weekDays } = useContext(ContextAPI)

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault()

		const formData = new FormData(event.target as HTMLFormElement)
		const data = Object.fromEntries(formData)

		if (weekDays.length === 0) return

		axios.post(`http://localhost:3000/games/${data.game}/ads`, {
			name: data.name,
			yearsPlaying: Number(data.yearsPlaying),
			discord: data.discord,
			weekDays: weekDays.map(Number),
			hourStart: data.hourStart,
			hourEnd: data.hourEnd,
			useVoiceCHannel: useVoiceChannel
		})
	}

	return (
		<Dialog.Portal>
			<Dialog.Overlay className='bg-black/60 inset-0 fixed flex items-center justify-center'>
				<Dialog.Content className='bg-[#2A2634] py-8 px-10 text-white fixed rounded-lg max-w-[480px] shadow-lg shadow-black/30 w-[90%] max-h-[90%] overflow-y-auto'>
					<Dialog.Title className='text-3xl font-bold'>
						Publique um anúncio
					</Dialog.Title>
					<form
						className='mt-8 flex flex-col gap-4'
						onSubmit={handleFormSubmit}
					>
						<div className='flex flex-col gap-2'>
							<label htmlFor='game' className='font-semibold'>
								Qual o game ?
							</label>
							<SelectGame />
						</div>

						<div className='flex flex-col gap-2'>
							<label htmlFor='name' className='font-semibold'>
								Seu nome (ou nickname)
							</label>
							<Input
								id='name'
								name='name'
								type='text'
								placeholder='Como te chamam dentro do game ?'
								autoComplete='off'
								required
							/>
						</div>

						<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
							<div className='flex flex-col gap-2'>
								<label htmlFor='yearsPlaying' className='font-semibold'>
									Joga há quantos anos ?
								</label>
								<Input
									id='yearsPlaying'
									name='yearsPlaying'
									type='number'
									placeholder='Tudo bem ser ZERO'
									required
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<label htmlFor='discord' className='font-semibold'>
									Qual seu Discord ?
								</label>
								<Input
									id='discord'
									name='discord'
									type='text'
									placeholder='Usuario#0000'
									required
								/>
							</div>
						</div>

						<div className='flex gap-6 flex-col sm:flex-row '>
							<div className='flex flex-col'>
								<label className='font-semibold'>Quando costuma jogar ?</label>
								<div className='m-auto'>
									<DaysButtons />
								</div>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<label htmlFor='hourStart' className='font-semibold'>
									Qual horário do dia ?
								</label>
								<div className='flex flex-col gap-2'>
									<div className='flex items-center justify-between gap-2'>
										<label htmlFor='hourStart' className='w-7'>
											De
										</label>
										<Input
											id='hourStart'
											name='hourStart'
											type='time'
											required
										/>
									</div>
									<div className='flex items-center justify-between gap-2'>
										<label htmlFor='hourEnd' className='w-7'>
											Até
										</label>
										<Input id='hourEnd' name='hourEnd' type='time' required />
									</div>
								</div>
							</div>
						</div>

						<label className='mt-2 flex gap-2 text-sm items-center select-none'>
							<Checkbox.Root
								checked={useVoiceChannel}
								className='w-6 h-6 rounded bg-zinc-900'
								onCheckedChange={checked => {
									checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false)
								}}
							>
								<Checkbox.CheckboxIndicator>
									<Check
										className='w-4 h-4 text-emerald-400 mx-auto'
										weight='bold'
									/>
								</Checkbox.CheckboxIndicator>
							</Checkbox.Root>
							Costumo me conectar ao chat de voz
						</label>

						<footer className='mt-4 flex flex-col justify-end gap-4 sm:flex-row'>
							<Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-all'>
								Cancelar
							</Dialog.Close>
							<button
								type='submit'
								className='bg-violet-500 justify-center px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-all'
							>
								<GameController size={24} />
								Encontrar duo
							</button>
						</footer>
					</form>
				</Dialog.Content>
			</Dialog.Overlay>
		</Dialog.Portal>
	)
}

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { useContext } from 'react'
import { ContextAPI } from '../../../Context/ContextAPI'

export default function DaysButtons() {
	const { weekDays, setWeekDays } = useContext(ContextAPI)

	return (
		<ToggleGroup.Root
			type='multiple'
			className='flex flex-nowrap w-full gap-2 peer sm:justify-center sm:flex-wrap sm:w-44'
			onValueChange={setWeekDays}
		>
			<ToggleGroup.Item
				value='0'
				className={`w-8 h-8 rounded hover:bg-violet-500 ${
					weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
				}`}
				title='Domingo'
			>
				D
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value='1'
				className={`w-8 h-8 rounded hover:bg-violet-500 ${
					weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
				}`}
				title='Segunda'
			>
				S
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value='2'
				className={`w-8 h-8 rounded hover:bg-violet-500 ${
					weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
				}`}
				title='Terça'
			>
				T
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value='3'
				className={`w-8 h-8 rounded hover:bg-violet-500 ${
					weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
				}`}
				title='Quarta'
			>
				Q
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value='4'
				className={`w-8 h-8 rounded hover:bg-violet-500 ${
					weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
				}`}
				title='Quinta'
			>
				Q
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value='5'
				className={`w-8 h-8 rounded hover:bg-violet-500 ${
					weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
				}`}
				title='Sexta'
			>
				S
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value='6'
				className={`w-8 h-8 rounded hover:bg-violet-500 ${
					weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
				}`}
				title='Sábado'
			>
				S
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	)
}

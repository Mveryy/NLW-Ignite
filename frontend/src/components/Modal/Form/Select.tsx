import * as Select from '@radix-ui/react-select'
import { useContext } from 'react'
import { ContextAPI } from '../../../Context/ContextAPI'

export default function SelectGame() {
	const { games } = useContext(ContextAPI)

	return (
		<Select.Root name='game'>
			<Select.Trigger className='bg-zinc-900 py-3 px-4 rounded text-sm outline-none justify-between flex '>
				<Select.Value placeholder='Selecione o game que quer jogar' />
				<Select.Icon />
			</Select.Trigger>

			<Select.Portal>
				<Select.Content>
					<Select.ScrollUpButton />
					<Select.Viewport className='bg-zinc-900 rounded-lg w-fit p-4 gap-2 flex flex-col shadow-black shadow-lg'>
						{games.map(game => (
							<Select.Item
								key={game.id}
								value={game.id}
								className='cursor-pointer text-white hover:text-violet-500 select-none'
							>
								<Select.ItemText>{game.title}</Select.ItemText>
							</Select.Item>
						))}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	)
}

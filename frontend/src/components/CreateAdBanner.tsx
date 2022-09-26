import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export default function CreateAdBanner() {
	return (
		<div className='bg-[#2A2634] h-fit px-8 py-6 w-full rounded-b-lg mt-8 relative flex flex-col justify-between items-center gap-6 sm:flex-row'>
			<div className='absolute top-0 left-0 right-0 w-full h-1 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E2D45C] rounded-t-lg' />
			<div>
				<p className='text-2xl font-bold text-white mb-1'>
					Não encontrou seu duo?
				</p>
				<p className='text-zinc-400'>
					Publique um anúncio para encontrar novos players!
				</p>
			</div>
			<Dialog.Trigger className='py-3 px-4 bg-violet-500 rounded-md flex items-center gap-3 hover:bg-violet-600 transition-all text-white w-full justify-center max-w-xs'>
				<MagnifyingGlassPlus size={22} color='#FFF' />
				<p className=''>Publicar anúncio</p>
			</Dialog.Trigger>
		</div>
	)
}

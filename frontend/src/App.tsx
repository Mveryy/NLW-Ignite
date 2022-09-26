import * as Dialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import logoNLW from './assets/logo.svg'
import CreateAdBanner from './components/CreateAdBanner'
import GameCard from './components/GameCard'
import GameCardModal from './components/GameCardModal'
import Modal from './components/Modal/Modal'
import { ContextAPI } from './Context/ContextAPI'

function App() {
	const { games } = useContext(ContextAPI)

	return (
		<div className='max-w-fit my-20 flex flex-col items-center mx-auto w-[90%] h-fit'>
			<img src={logoNLW} alt='nlw esports logo' />
			<h1 className='text-6xl text-white font-black mt-20'>
				Seu{' '}
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] '>
					duo{' '}
				</span>
				está aqui.
			</h1>

			<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-16 max-w-5xl'>
				{games.map(game => (
					<Dialog.Root key={game.id}>
						<Dialog.Trigger>
							<GameCard
								title={game.title}
								bannerUrl={game.bannerUrl}
								adsCount={game._count.ads}
							/>
						</Dialog.Trigger>
						<GameCardModal
							gameId={game.id}
							bannerUrl={game.bannerUrl}
							title={game.title}
						/>
					</Dialog.Root>
				))}
			</div>
			<Dialog.Root>
				<CreateAdBanner />
				<Modal />
			</Dialog.Root>
		</div>
	)
}

export default App

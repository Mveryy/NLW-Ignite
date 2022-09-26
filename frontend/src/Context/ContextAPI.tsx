import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface ProviderProps {
	children: ReactNode
}

interface IGame {
	id: string
	title: string
	bannerUrl: string
	_count: {
		ads: number
	}
}

interface ContextProps {
	games: IGame[]
	weekDays: string[]
	setWeekDays: React.Dispatch<React.SetStateAction<string[]>>
}

export const ContextAPI = createContext({} as ContextProps)

export const ContextAPIProvider = ({ children }: ProviderProps) => {
	const [games, setGames] = useState<IGame[]>([])
	const [weekDays, setWeekDays] = useState<string[]>([])

	useEffect(() => {
		axios.get('http://localhost:3000/games').then(res => {
			const sortedData = res.data.sort(function (a: IGame, b: IGame) {
				if (a._count.ads > b._count.ads) {
					return -1
				}
				if (a._count.ads < b._count.ads) {
					return 1
				}
				// if a === b
				return 0
			})
			setGames(sortedData)
		})
	}, [])

	return (
		<ContextAPI.Provider
			value={{
				games,
				weekDays,
				setWeekDays
			}}
		>
			{children}
		</ContextAPI.Provider>
	)
}

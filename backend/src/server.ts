import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHourToMinutes } from './utils/convert-hour-to-minutes'
import { convertMinutesToHour } from './utils/convert-minute-to-hour'

const app = express()

app.use(express.json())

app.use(cors())

const prisma = new PrismaClient()

app.get('/games', async (request, response) => {
	const games = await prisma.game.findMany({
		include: {
			_count: {
				select: {
					ads: true
				}
			}
		}
	})

	return response.json(games)
})

app.get('/games/:id/ads', async (request, response) => {
	const gameId = request.params.id
	const ads = await prisma.ad.findMany({
		select: {
			id: true,
			name: true,
			weekDays: true,
			useVoiceCHannel: true,
			yearsPlaying: true,
			hourStart: true,
			hourEnd: true,
			createdAt: true,
			discord: true
		},
		where: {
			gameId
		},
		orderBy: {
			createdAt: 'desc'
		}
	})
	return response.json(
		ads.map(ad => {
			return {
				...ad,
				weekDays: ad.weekDays.split(','),
				hourStart: convertMinutesToHour(ad.hourStart),
				hourEnd: convertMinutesToHour(ad.hourStart)
			}
		})
	)
})

app.post('/games/:id/ads', async (request, response) => {
	const gameId = request.params.id

	const body = request.body

	const ad = await prisma.ad.create({
		data: {
			gameId,
			name: body.name,
			yearsPlaying: body.yearsPlaying,
			discord: body.discord,
			weekDays: body.weekDays.join(','),
			hourStart: convertHourToMinutes(body.hourStart),
			hourEnd: convertHourToMinutes(body.hourEnd),
			useVoiceCHannel: body.useVoiceCHannel
		}
	})

	return response.status(201).json(ad)
})

app.listen(3000)
console.log('Server ON')

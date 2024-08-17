import express from 'express'
import http from 'http'
import { WebSocketServer } from 'ws'
import { router } from './routes.js'
import { allowOptions } from './middlewares.js'

const PORT = 8000
export const messages = []
export const MAX_MESSAGES = 9

const app = express()
const server = http.createServer(app)
export const wss = new WebSocketServer({ server })

wss.on('connection', ws => {
	console.log('A new client connected.')
})

app.use(express.json())
app.use(allowOptions)
app.use(router)

server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})

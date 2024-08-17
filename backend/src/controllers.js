import { messages, MAX_MESSAGES } from './index.js'
import { broadcast } from './websocket.js'

export function getMessages(req, res) {
	res.json(messages)
}

export function sendMessage(req, res) {
	const { text } = req.body

	if (typeof text !== 'string' || text.trim() === '') {
		res.status(400).json({ error: 'Invalid message format' })
	}

	if (messages.length >= MAX_MESSAGES) {
		const removedMessage = messages.shift()
		broadcast({ type: 'removed', message: removedMessage })
	}

	const message = { id: Date.now(), text }
	messages.push(message)

	broadcast({ type: 'added', message })

	res.status(201).json(message)
}

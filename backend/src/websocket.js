import WebSocket from 'ws'
import { wss } from './index.js'

export function broadcast(data) {
	wss.clients.forEach(client => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(JSON.stringify(data))
		}
	})
}

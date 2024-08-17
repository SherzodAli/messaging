import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { config } from '../config'

async function fetchMessages() {
	const response = await fetch(`${config.API_BASE}/messages`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return response.json()
}

export function useMessages() {
	const { data: initialMessages, status } = useQuery(['messages'], fetchMessages)
	const [messages, setMessages] = useState([])

	function handleWsMessage(event) {
		const { type, message } = JSON.parse(event.data)

		if (type === 'added') {
			setMessages(messages => [...messages, message])
		} else if (type === 'removed') {
			setMessages(messages => messages.filter(msg => msg.id !== message.id))
		}
	}

	useEffect(() => {
		if (initialMessages) {
			setMessages(initialMessages)
		}
	}, [initialMessages])

	useEffect(() => {
		const ws = new WebSocket(config.WS_URL)
		ws.onmessage = handleWsMessage
		return () => ws.close()
	}, [])

	return { messages, status }
}

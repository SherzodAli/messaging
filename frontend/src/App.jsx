import { useMessages } from './hooks/message'
import { config } from './config'
import { Form } from './components/Form'
import { Message } from './components/Message'

export default function App() {
	const { messages, status } = useMessages()

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'error') {
		return <div>Error fetching messages</div>
	}

	return (
		<div className="bg-[url('./assets/bg.jpg')] bg-cover min-h-[100vh]">
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					<ul className='min-h-[70vh] mt-5'>
						{messages.map(message => (
							<Message key={message.id}>{message.text}</Message>
						))}
					</ul>

					<Form onSubmit={handleSubmit} />
				</div>
			</div>
		</div>
	)
}

async function handleSubmit(e) {
	e.preventDefault()
	const newMessage = e.target.elements?.newMessage?.value?.trim()

	if (!newMessage || newMessage === '') {
		return
	}

	await fetch(`${config.API_BASE}/messages`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ text: newMessage }),
	})

	e.target.reset()
}

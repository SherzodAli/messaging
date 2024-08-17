import { useEffect, useRef } from 'react'

export function Form({ onSubmit }) {
	const inputRef = useRef()
	const formRef = useRef()

	useEffect(() => {
		if (formRef.current && inputRef.current) {
			formRef.current.onclick = () => inputRef.current.focus()
		}
	}, [formRef, inputRef])

	return (
		<div className='flex items-start space-x-4'>
			<div className='flex-shrink-0'>
				<img
					className='inline-block h-10 w-10 rounded-full'
					src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
					alt='avatar'
				/>
			</div>
			<div className='min-w-0 flex-1'>
				<form ref={formRef} onSubmit={onSubmit} className='relative'>
					<div className='rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600'>
						<input
							ref={inputRef}
							name='newMessage'
							className='block w-full resize-none border-0 bg-transparent py-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
							placeholder='Сообщение...'
						/>
					</div>

					<div className='absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2'>
						<div className='flex-shrink-0'>
							<button
								type='submit'
								className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Отправить
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export function Message({ key, children }) {
	return (
		<div
			key={key}
			class='flex flex-col w-full max-w-[320px] leading-1.5 p-2 mb-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700'
		>
			<p class='text-sm font-normal py-1 text-gray-900 dark:text-white'>{children}</p>
		</div>
	)
}

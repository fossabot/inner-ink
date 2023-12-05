import clsx from 'clsx'
import { themes } from '../../data/themes'
import themeStore from '../../hooks/themeStore'
import { ThemeButton } from './ThemeButton'

export const ThemeList = () => {
	const theme = themeStore((state) => state.theme)
	const setTheme = themeStore((state) => state.setTheme)
	return (
		<>
			<button
				className={clsx(
					'relative select-none hover:cursor-pointer rounded-box overflow-hidden',
					theme === '' && 'outline-dashed outline-offset-1',
				)}
				onClick={() => setTheme('')}
			>
				<div
					className='absolute top-0 left-0 flex flex-col gap-1 py-2 pl-2 w-full clip-path-left'
					data-theme='light'
				>
					<span className='bg-primary rounded-l-box p-1.5'></span>
					<span className='bg-secondary rounded-l-box p-1.5 w-3/4'></span>
					<span className='bg-accent rounded-l-box p-1.5 w-1/2'></span>
					<p className='text-sm self-end'>Default</p>
				</div>
				<div
					className='absolute top-0 left-0 flex flex-col gap-1 py-2 pr-2 w-full clip-path-right'
					data-theme='dark'
				>
					<span className='bg-primary card p-1.5 w-full'></span>
					<span className='bg-secondary card p-1.5 w-full'></span>
					<span className='bg-accent card p-1.5 w-full'></span>
					<p className='text-sm self-end'>Default</p>
				</div>
			</button>
			{themes.map((theme, index) => {
				return <ThemeButton key={index} themeName={theme} />
			})}
		</>
	)
}
import {
	BookmarkSlashIcon,
	EyeIcon,
	EllipsisVerticalIcon,
} from '@heroicons/react/20/solid'
import { addDays, format, isSameDay, subDays } from 'date-fns'
import dateStore from '../../hooks/dateStore'
import { isHotkeyPressed } from 'react-hotkeys-hook'
import { getSettings } from '../../utils/settings'

export default function Header() {
	const selectedDay = dateStore((state) => state.selectedDay)
	const setSelectedDay = dateStore((state) => state.setSelectedDay)
	const currentDate = format(selectedDay, 'PPPP')

	const handleDateSelect = () => {
		if (isHotkeyPressed('shift')) {
			setSelectedDay(subDays(selectedDay, 1))
		} else if (isHotkeyPressed('ctrl')) {
			if (
				getSettings().disableFutureEntry &&
				isSameDay(selectedDay, new Date())
			) {
				return
			} else {
				setSelectedDay(addDays(selectedDay, 1))
			}
		} else {
			;(
				document.getElementById(
					'dateSelectorModal',
				) as HTMLDialogElement
			).showModal()
		}
	}
	return (
		<div className='flex justify-between'>
			<button
				className='text-lg capitalize btn btn-ghost'
				onClick={handleDateSelect}
			>
				{currentDate}
			</button>
			<div className='flex flex-row gap-1 w-fit h-fit'>
				<button className='btn btn-ghost btn-square'>
					<BookmarkSlashIcon className='h-6' />
				</button>
				<button className='btn btn-ghost btn-square'>
					<EyeIcon className='h-6' />
				</button>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-square'>
						<EllipsisVerticalIcon className='h-6' />
					</label>
					<ul
						tabIndex={0}
						className='dropdown-content z-[1] menu p-2 pt-4 gap-1 shadow-md bg-base-100 rounded-box w-52'
					>
						<li>
							<button className='text-error hover:text-error hover:bg-error/10 focus:focus-visible:bg-error/10 focus:focus-visible:text-error active:bg-red-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
									/>
								</svg>
								Clear
							</button>
						</li>
						<li>
							<button>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
									/>
								</svg>
								Undo
							</button>
						</li>
						<li>
							<button>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
									/>
								</svg>
								Redo
							</button>
						</li>
						<li>
							<button>Item 2</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
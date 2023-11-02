import DateSelector from '../Components/DateSelector'

const HomePage = () => {
	const dateSelectorModal = document.getElementById(
		'dateSelectorModal'
	) as HTMLDialogElement
	const openDateSelector = () => dateSelectorModal.showModal()

	return (
		<>
			<div className='flex justify-between'>
				<button
					className='btn btn-ghost text-lg capitalize'
					onClick={openDateSelector}>
					12 November 2344
				</button>
				<div className='flex flex-row w-fit h-fit'>
					<button className='btn btn-ghost btn-square'>Oh</button>
					<button className='btn btn-ghost btn-square'>Oh</button>
					<button className='btn btn-ghost btn-square'>Oh</button>
				</div>
			</div>
			<div className='grow'></div>
			<DateSelector />
		</>
	)
}

export default HomePage

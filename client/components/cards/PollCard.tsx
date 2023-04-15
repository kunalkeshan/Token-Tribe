import React, { useContext } from 'react';
import { Ideas, Poll } from '@/data/communities';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import {CrowdFundingContext} from '../../context/CrowdFunding'

const PollCard: React.FC<Poll & { ideas: Ideas }> = (
	{
		// deadline,
		// target,
		// ideas,
	}
) => {
	// const renderer: CountdownRendererFn = ({
	// 	days,
	// 	hours,
	// 	minutes,
	// 	seconds,
	// 	completed,
	// }) => {
	// 	if (completed) {
	// 		return <></>;
	// 	} else {
	// 		return (
	// 			<>
	// 				{days}d:{hours}h:{minutes}m:{seconds}s
	// 			</>
	// 		);
	// 	}
	// };
	const {createIdea} = useContext(CrowdFundingContext);

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		try {e.preventDefault();
		const data = new FormData(e.currentTarget);
		const idea = {
			title: data.get('title'),
			description: data.get('description'),
			deadline: data.get('deadline'),
			amount: data.get('amount')
		}
		const ideaData = await createIdea(idea);
		console.log(ideaData);} catch (e){
			console.log(e)
		}
	}

	return (
		<div className='block max-w-md p-6 border bg-[#222] rounded-lg shadow border-black text-secondary mb-4'>
			<h3 className='font-primary text-2xl font-semibold'>
				Create new idea
			</h3>
			{/* <p>{target}</p> */}
			{/* <p>Deadline: {new Date(deadline).toDateString()}</p> */}
			{/* <p className='mt-2 font-primary font-semibold text-lg'>Options</p>
			<ul className='flex flex-col gap-2 mt-2'>
				{ideas.map((idea, idx) => (
					<li
						key={idx}
						className='flex items-center hover:translate-x-1 transition-all cursor-pointer duration-300 justify-between px-4 py-2 rounded-xl bg-tertiary bg-opacity-20'
					>
						<p>{idea.title}</p>
						<AiOutlineArrowRight />
					</li>
				))}
				<li className='flex items-center hover:translate-x-1 transition-all cursor-pointer duration-300 justify-between px-4 py-2 rounded-xl bg-tertiary bg-opacity-20'>
					<p>Create new idea</p> <IoIosAddCircle />
				</li>
			</ul> */}
			<form onSubmit={handleSubmit} className='mt-4 flex flex-col gap-4'>
				<label htmlFor='title'>
					<p>Title</p>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='title for idea'
						className='w-full px-2 py-1 rounded-md border-2 border-tertiary border-opacity-20 transition-all duration-300 bg-opacity-20 bg-tertiary outline-none focus:border-opacity-100'
					required
				/>
				</label>
				<label htmlFor='description'>
					<p>Description</p>
					<input
						type='text'
						id='description'
						name='description'
						placeholder='description for idea'
						className='w-full px-2 py-1 rounded-md border-2 border-tertiary border-opacity-20 transition-all duration-300 bg-opacity-20 bg-tertiary outline-none focus:border-opacity-100'
					required
				/>
				</label>
				<label htmlFor='deadline'>
					<p>Deadline</p>
					<input
						type='date'
						id='deadline'
						name='deadline'
						placeholder='deadline for idea'
						className='w-full px-2 py-1 rounded-md border-2 border-tertiary border-opacity-20 transition-all duration-300 bg-opacity-20 bg-tertiary outline-none focus:border-opacity-100'
					required
				/>
				</label>
				<label htmlFor='amount'>
					<p>Target Amount</p>
					<input
						type='text'
						id='amount'
						placeholder='amount for idea'
						name='amount'
						className='w-full px-2 py-1 rounded-md border-2 border-tertiary border-opacity-20 transition-all duration-300 bg-opacity-20 bg-tertiary outline-none focus:border-opacity-100'
					required
				/>
				</label>
				<button
					type='submit'
					className='w-full text-center py-1 bg-[#5072E7] rounded-md hover:bg-opacity-100 bg-opacity-80 transition-all duration-300'
				>
					Create
				</button>
			</form>
			{/* <p className='mt-2 w-full text-right'>
				Poll ends in: <Countdown renderer={renderer} date={deadline} />
			</p> */}
		</div>
	);
};

export default PollCard;

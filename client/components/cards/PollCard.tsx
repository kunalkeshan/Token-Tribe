import React from 'react';
import { Ideas, Poll } from '@/data/communities';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { AiOutlineArrowRight } from 'react-icons/ai';

const PollCard: React.FC<Poll & { ideas: Ideas }> = ({
	deadline,
	target,
	ideas,
}) => {
	const renderer: CountdownRendererFn = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}) => {
		if (completed) {
			return <></>;
		} else {
			return (
				<>
					{days}d:{hours}h:{minutes}m:{seconds}s
				</>
			);
		}
	};
	return (
		<div className='block max-w-md p-6 border bg-[#222] rounded-lg shadow border-black text-secondary mb-4'>
			<h3 className='font-primary text-2xl font-semibold'>Target</h3>
			<p>{target}</p>
			<p>Deadline: {new Date(deadline).toDateString()}</p>
			<p className='mt-2 font-primary font-semibold text-lg'>Options</p>
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
			</ul>
			<p className='mt-2 w-full text-right'>
				Poll ends in: <Countdown renderer={renderer} date={deadline} />
			</p>
		</div>
	);
};

export default PollCard;

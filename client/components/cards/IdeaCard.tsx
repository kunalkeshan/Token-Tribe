import React from 'react';
import { Idea } from '@/data/communities';
import { AiFillCalendar } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import Countdown, { CountdownRendererFn } from 'react-countdown';

const IdeaCard: React.FC<Idea> = ({
	title,
	target,
	deadline,
	raisedAmt,
	contributors,
}) => {
	const infoItems = [
		{
			Icon: AiFillCalendar,
			info: deadline,
			title: 'Deadline',
		},
		{
			Icon: FaEthereum,
			info: raisedAmt,
			title: 'Amount Raised',
		},
		{
			Icon: IoPeopleOutline,
			info: contributors,
			title: 'Contributors',
		},
	];

	const renderer: CountdownRendererFn = ({ days, completed }) => {
		if (completed) {
			return <></>;
		} else {
			return (
				<p className='bg-tertiary bg-opacity-40 min-w-fit flex items-center justify-center p-4 rounded-lg'>
					{days} d left
				</p>
			);
		}
	};

	return (
		<div className='block max-w-md p-6 border bg-[#222] rounded-lg shadow border-black text-secondary mb-4'>
			<p className='font-primary font-bold text-lg'>{title}</p>
			<div className='flex w-full items-center justify-between gap-4'>
				<p>{target}</p>
				<Countdown renderer={renderer} date={deadline} />
			</div>
			<ul className='flex gap-4 items-center flex-wrap mt-4'>
				{infoItems.map((item) => (
					<li className='flex rounded-3xl bg-tertiary gap-4 bg-opacity-20 items-center px-4 py-2'>
						<item.Icon className='text-xl' />
						<span className='text-left font-primary w-full text-xs'>
							<p className='font-bold'>{item.title}</p>
							<p className=''>{item.info}</p>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default IdeaCard;

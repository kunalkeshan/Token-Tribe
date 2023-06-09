import React, { useState } from 'react';
import { Idea } from '@/data/communities';
import { AiFillCalendar } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import SupportIdeaModal from '../modals/SupportIdeaModal';

const IdeaCard: React.FC<Idea> = (idea) => {
	const [open, setOpen] = useState(false);
	const { title, target, deadline, raisedAmt, contributors, description, numberOfDonations } = idea;
	const infoItems = [
		{
			Icon: AiFillCalendar,
			info: new Date(deadline).toDateString(),
			title: 'Deadline',
		},
		{
			Icon: FaEthereum,
			info: target,
			title: 'Amount to be Raised',
		},
		{
			Icon: IoPeopleOutline,
			info: numberOfDonations,
			title: 'Contributors',
		},
	];

	const handleOpenSupportIdeaModal = () => {
		setOpen(true);
	};

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
		<>
			<SupportIdeaModal open={open} setOpen={setOpen} idea={idea} />
			<div
				onClick={handleOpenSupportIdeaModal}
				className='block max-w-md hover:scale-95 cursor-pointer p-6 border bg-[#222] hover:bg-[#373737] rounded-lg shadow border-black text-secondary mb-4 transition-all duration-300'
			>
				<p className='font-primary font-bold text-lg'>{title}</p>
				<div className='flex w-full items-center justify-between gap-4'>
					<p>{description}</p>
					<Countdown renderer={renderer} date={deadline} />
				</div>
				<ul className='flex gap-4 items-center flex-wrap mt-4'>
					{infoItems.map((item) => (
						<li className='flex rounded-3xl hover:bg-opacity-40 transition-all duration-300 bg-tertiary gap-4 bg-opacity-20 items-center px-4 py-2'>
							<item.Icon className='text-xl' />
							<span className='text-left font-primary w-full text-xs'>
								<p className='font-bold'>{item.title}</p>
								<p className=''>{item.info}</p>
							</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default IdeaCard;

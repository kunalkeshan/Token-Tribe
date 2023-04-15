import React from 'react';
import { Idea } from '@/data/communities';
import { FaEthereum, FaHandsHelping } from 'react-icons/fa';

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	idea: Idea;
}

const SupportIdeaModal: React.FC<Props> = ({ open, setOpen, idea }) => {
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className={`${open ? 'block' : 'hidden'} w-full z-[100]`}>
			<div
				className='z-[100] w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50'
				onClick={handleClose}
			/>
			<div className='text-center z-[150] text-secondary fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md  p-6 border bg-[#2d2d2d] rounded-lg shadow flex flex-col gap-4 border-black'>
				<p className='font-primary text-xl font-semibold'>
					{idea.title}
				</p>
				<p className='max-w-[24ch] mx-auto'>{idea.target}</p>
				<FaEthereum className='text-7xl mx-auto rotate-6' />
				<input
					type='number'
					className='w-full px-2 py-1 rounded-md appearance-none border-2 border-tertiary border-opacity-20 transition-all duration-300 bg-opacity-20 bg-tertiary outline-none focus:border-opacity-100'
					placeholder='enter your amount'
				/>
				<button className='flex gap-2 w-full items-center justify-center py-1 bg-[#5072E7] rounded-md hover:bg-opacity-100 bg-opacity-80 transition-all duration-300'>
					<p>Support</p>
					<FaHandsHelping />
				</button>
				<button
					onClick={handleClose}
					className='ml-auto underline hover:text-red-500 transition-all text-xs duration-300'
				>
					cancel
				</button>
			</div>
		</div>
	);
};

export default SupportIdeaModal;

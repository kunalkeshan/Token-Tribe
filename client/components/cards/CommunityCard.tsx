import React from 'react';
import { Community } from '@/data/communities';
import Image from 'next/image';
import Link from 'next/link';
import { FaEthereum } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';

const CommunityCard: React.FC<Community> = ({
	profile,
	name,
	description,
	price,
	strength,
	slug,
}) => {
	const infoTags = [
		{
			Icon: FaEthereum,
			info: price,
		},
		{
			Icon: IoPeopleOutline,
			info: strength,
		},
	];

	return (
		<Link
			href={`/communities/${slug}`}
			className='border border-tertiary rounded-xl overflow-hidden w-full hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group'
		>
			<div
				className={`bg-[url('/images/community-cover.jpg')] relative bg-no-repeat bg-cover w-full h-32`}
			>
				<Image
					src={profile}
					width={100}
					height={100}
					alt={name}
					className='absolute rounded-full left-4 -bottom-10 border-4 border-primary'
				/>
			</div>
			<div className='pt-12 sm:pt-6 md:pt-4 px-4 w-full py-2'>
				<div className='w-full flex items-center sm:justify-end gap-4 justify-start'>
					{infoTags.map((info, idx) => (
						<div
							key={idx}
							className='flex rounded-xl items-center gap-1 bg-tertiary bg-opacity-20 px-4 py-2 hover:scale-[1.02] transition-all duration-300 hover:bg-opacity-40 hover:font-bold'
						>
							<info.Icon /> <p className='text-xs'>{info.info}</p>
						</div>
					))}
				</div>
				<h3 className='font-primary text-xl font-bold mt-2 md:mt-0'>
					{name}
				</h3>
				<p className='text-tertiary'>{description}</p>
			</div>
		</Link>
	);
};

export default CommunityCard;

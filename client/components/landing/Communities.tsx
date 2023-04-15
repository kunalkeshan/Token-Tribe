import React from 'react';
import communities from '@/data/communities';
import CommunityCard from '../cards/CommunityCard';

const Communities = () => {
	return (
		<section className='w-full mt-8' id='explore'>
			<div className='max-w-[1240px] mx-auto'>
				<h2 className='font-primary text-2xl font-semibold'>
					Explore Communities
				</h2>
				<div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4'>
					{communities.map((community, index) => (
						<CommunityCard {...community} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Communities;

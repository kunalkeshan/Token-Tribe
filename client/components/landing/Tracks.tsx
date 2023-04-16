import React from 'react';

const Tracks = () => {
	const tracks = [
		'polygon',
		'zeeve',
		'replit',
		'ethereum',
		'blockchain',
		'open innovation',
		'spheron',
	];

	return (
		<div className='w-[120%] bg-secondary font-primary text-primary mt-12 py-4'>
			<div className='animate-marquee whitespace-nowrap'>
				{tracks.map((track, index) => (
					<span
						key={index}
						className='mx-10 inline-block text-7xl font-bold'
					>
						{track} •
					</span>
				))}
			</div>
		</div>
	);
};

export default Tracks;

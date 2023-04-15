import PublicLayout from '@/layouts/PublicLayout';
import React, { useState, useEffect, useContext } from 'react';
import { CrowdFundingContext } from '@/context/CrowdFunding';

import Head from 'next/head';
import {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';
import communities, { Community, Idea } from '@/data/communities';
import IdeaCard from '@/components/cards/IdeaCard';
import PollCard from '@/components/cards/PollCard';
import Image from 'next/image';
import {
	FaDiscord,
	FaTwitter,
	FaGlobe,
	FaInstagram,
	FaShare,
} from 'react-icons/fa';
import Link from 'next/link';

const SingleCommunityPage: NextPage<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ community }) => {

	const {
		titleData,
		getIdeas,
		createIdea,
		donate,
		getUserIdeas,
		getDonations,
		userIdeas
	} = useContext(CrowdFundingContext);

	// const [allIdea, setAllIdea] = useState();


	const socialInfo = [
		{
			Icon: FaDiscord,
			url: community.links.discord,
		},
		{
			Icon: FaTwitter,
			url: community.links.twitter,
		},
		{
			Icon: FaGlobe,
			url: community.links.website,
		},
		{
			Icon: FaInstagram,
			url: community.links.instagram,
		},
	];

	return (
		<PublicLayout>
			<Head>
				<title>{community.name}</title>
				<link rel='icon' href={community.profile} />
			</Head>
			<div className="bg-[url('/images/community-cover.jpg')] w-full h-32 bg-cover relative">
				<Link
					href={community.links.website}
					className='rounded-full group overflow-hidden border-4 border-primary w-32 h-32 absolute left-1/2 -bottom-16 -translate-x-1/2 md:left-3/4'
				>
					<div className='w-full h-full absolute items-center justify-center bg-black bg-opacity-50 invisible group-hover:visible flex transition-all duration-75'>
						<FaShare />
					</div>
					<Image
						src={community.profile}
						width={100}
						height={100}
						alt={community.name}
						className='w-full h-auto object-contain'
					/>
				</Link>
			</div>
			<div className='max-w-[1240px] mt-20 md:mt-4 lg:mt-6 mx-auto w-full flex items-center justify-center flex-col gap-4'>
				<div className='w-full'>
					<h1 className='font-primary font-semibold text-3xl w-full'>
						{community.name}
					</h1>
					<div className='flex gap-4'>
						{socialInfo.map((info, index) => (
							<Link
								href={info.url}
								key={index}
								className='hover:scale-105 mt-1'
							>
								<info.Icon />
							</Link>
						))}
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 mt-4 w-full'>
					<section>
						<h2 className='font-primary font-xl font-semibold'>
							Active Polls
						</h2>
						<div className='mt-4'>
							<PollCard
								{...community.pool}
								ideas={community.ideas}
							/>
						</div>
					</section>
					<section>
						<h2 className='font-primary font-xl font-semibold'>
							Active Ideas
						</h2>
						<div className='mt-4'>
							{userIdeas.length > 0 ? 
							// @ts-ignore
							userIdeas.map((idea, idx) => (
								<IdeaCard key={idx} {...idea as Idea} />
							)): <p>wow. so much empty.</p>}
						</div>
					</section>
				</div>
			</div>
		</PublicLayout>
	);
};

export default SingleCommunityPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = communities.map((community) => {
		return {
			params: { communitySlug: community.slug },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<{ community: Community }> = async (
	context
) => {
	const { communitySlug } = context.params!;
	const community = communities.find(
		(commun) => commun.slug === communitySlug
	);
	if (!community) {
		return {
			redirect: {
				destination: '/communities',
				permanent: false,
			},
		};
	}
	return {
		props: { community },
	};
};

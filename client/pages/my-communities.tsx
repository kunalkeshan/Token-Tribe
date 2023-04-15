import PublicLayout from '@/layouts/PublicLayout';
import React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import communities, { Communities } from '@/data/communities';
import CommunityCard from '@/components/cards/CommunityCard';
import Head from 'next/head';

const MyCommunitiesPage: NextPage<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ myCommunities }) => {
	return (
		<PublicLayout>
			<Head>
				<title>My Communities | Token-Tribe</title>
			</Head>
			<section className='w-full mt-8 px-12'>
				<div className='max-w-[1240px] mx-auto'>
					<h2 className='font-primary text-2xl font-semibold'>
						My Communities
					</h2>
					<div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4'>
						{myCommunities.map((community, index) => (
							<CommunityCard {...community} key={index} />
						))}
					</div>
				</div>
			</section>
		</PublicLayout>
	);
};

export default MyCommunitiesPage;

export const getStaticProps: GetStaticProps<{
	myCommunities: Communities;
}> = async () => {
	const myCommunities = communities.filter(
		(community) => community.myCommunity
	);
	return {
		props: {
			myCommunities,
		},
	};
};

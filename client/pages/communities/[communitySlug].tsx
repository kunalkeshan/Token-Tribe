import PublicLayout from '@/layouts/PublicLayout';
import React from 'react';
import Head from 'next/head';
import {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';
import communities, { Community } from '@/data/communities';
import IdeaCard from '@/components/cards/IdeaCard';

const SingleCommunityPage: NextPage<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ community }) => {
	return (
		<PublicLayout>
			<Head>
				<title>{community.name}</title>
				<link rel='icon' href={community.profile} />
			</Head>
			<div className='max-w-[1240px] mx-auto'>
				<h1 className='font-primary font-semibold text-3xl'>
					{community.name}
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<section></section>
				<section>
					<h2 className='font-primary font-xl font-semibold'>
						Active Ideas
					</h2>
					<div>
						{community.ideas.map((idea, idx) => (
							<IdeaCard key={idx} {...idea} />
						))}
					</div>
				</section>
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

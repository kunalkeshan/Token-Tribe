import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';

export default function About() {
	return (
		<PublicLayout>
			<Head>
				<title>About Token-Tribe</title>
			</Head>
			<div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
				<div className='flex flex-col lg:flex-row justify-between gap-8'>
					<div className='w-full  flex flex-col justify-center'>
						<h1 className='text-3xl lg:text-4xl font-bold leading-9 text-secondary pb-4'>
							About Us
						</h1>
						<div className='font-normal text-base leading-6 text-white/70'>
							<p>
								Token Tribe is a cutting-edge web3-based
								communities app designed for social media
								communities. With this app, community heads can
								create their own communities on our website and
								users can make decisions about the content and
								activities within these communities by voting
								using a token called "CommuniCoin."
							</p>

							<p className='mt-4'>
								The CommuniCoin token is a unique feature of
								Token Tribe that enables users to have a say in
								the decision-making process within their
								communities. Users can acquire CommuniCoin
								tokens by purchasing them on the app or earning
								them through community participation. These
								tokens serve as a form of currency within the
								platform, allowing users to vote on community
								decisions and participate in other community
								activities.
							</p>

							<p className='mt-4'>
								With Token Tribe, users can join communities and
								connect with like-minded individuals around the
								world. Community heads can easily create and
								manage their own communities, and users can
								contribute their ideas and participate in
								community decision-making in a secure and
								transparent environment.
							</p>

							<p className='mt-4'>
								Overall, Token Tribe is an innovative app that
								empowers social media communities by giving them
								a voice and a platform to express their opinions
								and shape the future of their communities.
								Whether you're a community head or a community
								member, Token Tribe is the perfect app to help
								you build, grow, and thrive in your online
								community.
							</p>
						</div>
					</div>
				</div>
			</div>
		</PublicLayout>
	);
}

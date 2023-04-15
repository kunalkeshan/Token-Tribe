import React from 'react';

const OgMetaTags = () => {
	const url =
		typeof window !== 'undefined'
			? window.location.protocol + '://' + window.location.hostname
			: 'https://tokentribe.vercel.app';
	return (
		<>
			{/* <!-- Primary Meta Tags --> */}
			<meta
				name='title'
				content='Token Tribe - The Ultimate Web3-Based Communities App | CommuniCoin Tokens'
			/>
			<meta
				name='description'
				content='Token Tribe is the perfect app for community heads and members to build, grow, and thrive in their online communities. With CommuniCoin tokens, users can vote and make decisions about the content and activities within their communities. Join like-minded individuals worldwide and connect with others in a secure and transparent environment. Create and manage your own communities today with Token Tribe.'
			/>

			{/* <!-- Open Graph / Facebook --> */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta
				property='og:title'
				content='Token Tribe - The Ultimate Web3-Based Communities App | CommuniCoin Tokens'
			/>
			<meta
				property='og:description'
				content='Token Tribe is the perfect app for community heads and members to build, grow, and thrive in their online communities. With CommuniCoin tokens, users can vote and make decisions about the content and activities within their communities. Join like-minded individuals worldwide and connect with others in a secure and transparent environment. Create and manage your own communities today with Token Tribe.'
			/>
			<meta property='og:image' content='/thumbnail.png' />

			{/* <!-- Twitter --> */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={url} />
			<meta
				property='twitter:title'
				content='Token Tribe - The Ultimate Web3-Based Communities App | CommuniCoin Tokens'
			/>
			<meta
				property='twitter:description'
				content='Token Tribe is the perfect app for community heads and members to build, grow, and thrive in their online communities. With CommuniCoin tokens, users can vote and make decisions about the content and activities within their communities. Join like-minded individuals worldwide and connect with others in a secure and transparent environment. Create and manage your own communities today with Token Tribe.'
			/>
			<meta property='twitter:image' content='/thumbnail.png' />
		</>
	);
};

export default OgMetaTags;

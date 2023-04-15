/**
 * Communities Data
 */

export interface Idea {
	title: string;
	target: string;
	deadline: number;
	raisedAmt: number;
	contributors: number;
}

export interface Poll {
	target: string;
	deadline: number;
}

export interface Community {
	name: string;
	slug: string;
	description: string;
	profile: string;
	price: number;
	token: string;
	strength: number;
	links: {
		website: string;
		discord: string;
		instagram: string;
		twitter: string;
	};
	ideas: Ideas;
	pool: Poll;
}

export type Communities = Community[];

export type Ideas = Idea[];

const communities: Communities = [
	{
		name: 'Mr. Beast',
		slug: 'mr-beast',
		description:
			'Jimmy Donaldson, better known as MrBeast, is an American YouTuber and philanthropist. He is credited with pioneering a genre of YouTube videos that centers on expensive stunts.',
		profile: '/images/mr-beast.jpg',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
		ideas: [
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
		],
		pool: {
			target: 'Make squid game a real life event.',
			deadline: Date.now() + 1000000000,
		},
	},
	{
		name: 'Tanmay Bhat',
		slug: 'tanmay-bhat',
		description:
			'Tanmay Bhat is an Indian YouTuber, comedian, scriptwriter, Actor, performer and producer.',
		profile: '/images/tanmay.jpg',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
		ideas: [
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
		],
		pool: {
			target: 'Make finance easy to learn with jokes as complementary',
			deadline: Date.now() + 1000000000,
		},
	},
	{
		name: 'PewDiePie',
		slug: 'pewdiepie',
		description:
			"Felix Arvid Ulf Kjellberg, better known as PewDiePie, is a Swedish YouTuber known for his Let's Play videos and comedic formatted videos and shows.",
		profile: '/images/pewdiepie.png',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
		ideas: [
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				contributors: 10,
			},
		],
		pool: {
			target: 'Play minecraft for the next 30 days till I kill the ether dragon.',
			deadline: Date.now() + 1000000000,

		},
	},
];

export default communities;

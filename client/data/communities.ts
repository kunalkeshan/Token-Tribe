/**
 * Communities Data
 */

export interface Idea {
	title: string;
	target: string;
	deadline: string;
	raisedAmt: number;
	contributors: number;
	daysLeft: number;
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
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
		],
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
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
		],
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
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: '2021-12-31',
				raisedAmt: 25,
				contributors: 10,
				daysLeft: 10,
			},
		],
	},
];

export default communities;

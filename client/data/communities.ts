/**
 * Communities Data
 */

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
}

export type Communities = Community[];

const communities: Communities = [
	{
		name: 'Garden Enthusiasts',
		slug: 'garden-enthusiasts',
		description:
			'A community for people who love gardening and growing their own food.',
		profile:
			'https://api.dicebear.com/6.x/icons/svg?seed=GardenEnthusiasts',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'CookingCraze',
		slug: 'cooking-craze',
		description:
			'A community for foodies to share recipes, cooking tips, and showcase their culinary skills.',
		profile: 'https://api.dicebear.com/6.x/icons/svg?seed=CookingCraze',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'GameZone',
		slug: 'game-zone',
		description:
			'A community for gamers to share tips and tricks, discuss gaming news, and connect with other gamers.',
		profile: 'https://api.dicebear.com/6.x/icons/svg?seed=GameZone',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'Garden Enthusiasts',
		slug: 'garden-enthusiasts',
		description:
			'A community for people who love gardening and growing their own food.',
		profile:
			'https://api.dicebear.com/6.x/icons/svg?seed=GardenEnthusiasts',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'CookingCraze',
		slug: 'cooking-craze',
		description:
			'A community for foodies to share recipes, cooking tips, and showcase their culinary skills.',
		profile: 'https://api.dicebear.com/6.x/icons/svg?seed=CookingCraze',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'GameZone',
		slug: 'game-zone',
		description:
			'A community for gamers to share tips and tricks, discuss gaming news, and connect with other gamers.',
		profile: 'https://api.dicebear.com/6.x/icons/svg?seed=GameZone',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'Garden Enthusiasts',
		slug: 'garden-enthusiasts',
		description:
			'A community for people who love gardening and growing their own food.',
		profile:
			'https://api.dicebear.com/6.x/icons/svg?seed=GardenEnthusiasts',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'CookingCraze',
		slug: 'cooking-craze',
		description:
			'A community for foodies to share recipes, cooking tips, and showcase their culinary skills.',
		profile: 'https://api.dicebear.com/6.x/icons/svg?seed=CookingCraze',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
	{
		name: 'GameZone',
		slug: 'game-zone',
		description:
			'A community for gamers to share tips and tricks, discuss gaming news, and connect with other gamers.',
		profile: 'https://api.dicebear.com/6.x/icons/svg?seed=GameZone',
		price: 0.003,
		token: 'eth',
		strength: 249,
		links: {
			website: '#',
			discord: '#',
			instagram: '#',
			twitter: '#',
		},
	},
];

export default communities;

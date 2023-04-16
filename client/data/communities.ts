/**
 * Communities Data
 */

export interface Idea {
	target: string;
	description: string;
	deadline: number;
	raisedAmt: number;
	contributors: number;
	numberOfDonations?: number;
	pId?: number;
  title: string;
}

export interface Poll {
  target: string;
  deadline: number;
}

export interface Community {
  name: string;
  slug: string;
  description: string;
  address?: string;
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
  myCommunity: boolean;
}

export type Communities = Community[];

export type Ideas = Idea[];

const communities: Communities = [
	{
		name: 'Mr. Beast',
    address: "0x05b854cD78C058e8FEC13Af7d5AfC7EbFb43C5d3",
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
				description: '',
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				description: '',
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				description: '',
				contributors: 10,
			},
		],
		pool: {
			target: 'Make squid game a real life event.',
			deadline: Date.now() + 1000000000,
		},
		myCommunity: true,
	},
	{
		name: 'Tanmay Bhat',
    address: "0xd2E578295312533DC9DD204eec7a2eAA50bFc3Fc",
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
				description: '',
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				description: '',
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				description: '',
				contributors: 10,
			},
		],
		pool: {
			target: 'Make finance easy to learn with jokes as complementary',
			deadline: Date.now() + 1000000000,
		},
		myCommunity: false,
	},
	{
		name: 'PewDiePie',
    address: "0x7BcC072b62fa059F10683E9d28551d4B2255BE0B",
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
				description: '',
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				description: '',
				contributors: 10,
			},
			{
				title: 'XYZ Idea',
				target: 'xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy',
				deadline: Date.now() + 1000000000,
				raisedAmt: 25,
				description: '',
				contributors: 10,
			},
		],
		pool: {
			target: 'Play minecraft for the next 30 days till I kill the ether dragon.',
			deadline: Date.now() + 1000000000,
		},
		myCommunity: false,
	},
  {
    name: "MKBHD",
    slug: "mkbhd",
    description:
      "MKBHD, also known as Marques Brownlee, is a popular tech YouTuber and content creator known for his in-depth reviews and analysis of consumer electronics and technology products.",
    profile: "/images/mkbhd.png",
    price: 0.006,
    token: "eth",
    strength: 249,
    links: {
      website: "#",
      discord: "#",
      instagram: "#",
      twitter: "#",
    },
    ideas: [
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        description: '',
        raisedAmt: 25,
        contributors: 10,
      },
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        description: '',
        raisedAmt: 25,
        contributors: 10,
      },
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        raisedAmt: 25,
        description: '',
        contributors: 10,
      },
    ],
    pool: {
      target: "Make a video on how to make a video.",
      deadline: Date.now() + 1000000000,
    },
    myCommunity: true,
  },
  {
    name: "Mrwhoosetheboss",
    slug: "boss",
    description:
      "Mrwhosetheboss, also known as Arun Maini, is a popular tech YouTuber and content creator known for his reviews, tutorials, and analysis of smartphones, gadgets, and other consumer electronics.",
    profile: "/images/theboss.png",
    price: 0.003,
    token: "eth",
    strength: 249,
    links: {
      website: "#",
      discord: "#",
      instagram: "#",
      twitter: "#",
    },
    ideas: [
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        raisedAmt: 25,
        contributors: 10,
        description: '',
      },
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        raisedAmt: 25,
        contributors: 10,
        description: '',
      },
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        raisedAmt: 25,
        contributors: 10,
        description: '',
      },
    ],
    pool: {
      target: "Make a video on best cat ever.",
      deadline: Date.now() + 1000000000,
    },
    myCommunity: true,
  },
  {
    name: "Unbox Therapy",
    slug: "unbox",
    description:
      "Unbox Therapy is a popular YouTube channel hosted by Lewis George Hilsenteger, featuring reviews, unboxings, and demonstrations of the latest technology products, gadgets, and accessories.",
    profile: "/images/unbox.jpeg",
    price: 0.003,
    token: "eth",
    strength: 249,
    links: {
      website: "#",
      discord: "#",
      instagram: "#",
      twitter: "#",
    },
    ideas: [
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        raisedAmt: 25,
        contributors: 10,
        description: '',
      },
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        raisedAmt: 25,
        contributors: 10,
        description: '',
      },
      {
        title: "XYZ Idea",
        target: "xyz lorem ipsum doler amet xyz lorem ipsum dler amet xy",
        deadline: Date.now() + 1000000000,
        raisedAmt: 25,
        contributors: 10,
        description: '',
      },
    ],
    pool: {
      target: "Unbox some epic stuff today.",
      deadline: Date.now() + 1000000000,
    },
    myCommunity: true,
  },
];

export default communities;

import Communities from '@/components/landing/Communities';
import Intro from '@/components/landing/Intro';
import Tracks from '@/components/landing/Tracks';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<PublicLayout>
			<Head>
				<title>Token Tribe</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Intro />
			<Communities />
			<Tracks />
		</PublicLayout>
	);
}

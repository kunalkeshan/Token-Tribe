import OgMetaTags from '@/components/resusable/OgMetaTags';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Syne, Nunito_Sans } from 'next/font/google';
import { CrowdFundingProvider } from '../context/CrowdFunding';
import Head from 'next/head';

const syne = Syne({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	style: ['normal'],
	variable: '--font-syne',
});

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600', '700', '800', '900'],
	style: ['italic', 'normal'],
	variable: '--font-nunito-sans',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CrowdFundingProvider>
			<Head>
				<OgMetaTags />
			</Head>
			<main
				className={`${syne.variable} ${nunitoSans.variable} font-secondary bg-primary text-secondary w-full min-h-screen`}
			>
				<Component {...pageProps} />
			</main>
		</CrowdFundingProvider>
	);
}

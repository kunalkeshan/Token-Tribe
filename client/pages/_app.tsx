import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Syne, Nunito_Sans } from 'next/font/google';

// Rainbow Kit
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { SessionProvider } from 'next-auth/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, webSocketProvider, provider } = configureChains(
	[polygonMumbai],
	[publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: 'Altruize',
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	webSocketProvider,
	connectors,
	provider,
});

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
		<WagmiConfig client={wagmiClient}>
				<SessionProvider
					session={pageProps.session}
					refetchInterval={0}
				>
					<RainbowKitProvider chains={chains}>
						<main
							className={`${syne.variable} ${nunitoSans.variable} font-secondary bg-primary text-secondary w-full min-h-screen`}
						>
							<Component {...pageProps} />
						</main>
					</RainbowKitProvider>
			</SessionProvider>
		</WagmiConfig>
	);
}

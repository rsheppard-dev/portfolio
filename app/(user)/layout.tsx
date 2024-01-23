import '../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Providers from '../../components/Providers';
import { Poppins, Source_Sans_3 } from 'next/font/google';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
	subsets: ['latin-ext'],
	variable: '--poppins',
	weight: ['400', '600', '700'],
});

const sourceSansPro = Source_Sans_3({
	subsets: ['latin'],
	variable: '--source_sans_pro',
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: {
		template: '%s | Roy Sheppard - Full Stack Developer',
		default: 'Roy Sheppard - Full Stack Developer',
	},
	description:
		'A full stack web developer specialising in JavaScript, TypeScript, React, NextJS, Node, C# and .NET',
	icons: {
		icon: [
			{
				rel: 'icon',
				type: 'image/ico',
				url: './favicon.ico',
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: './favicon-16x16.png',
				sizes: '16x16',
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/favicon-32x32.png',
				sizes: '32x32',
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/favicon-192x192.png',
				sizes: '192x192',
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/favicon-512x512.png',
				sizes: '512x512',
			},
			{
				rel: 'mark-icon',
				type: 'image/svg',
				url: '/safari-pinned-tab.svg',
			},
		],
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${poppins.variable} ${sourceSansPro.variable}`}>
			<head />
			<body className='bg-primary-300 min-h-screen flex flex-col'>
				<Providers>
					<Header />
					<main className='flex-grow'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

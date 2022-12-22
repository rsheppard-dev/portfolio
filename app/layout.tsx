import './globals.css';
import Header from '../components/Header';

import { Poppins, Source_Sans_Pro } from '@next/font/google';

const poppins = Poppins({
	variable: '--poppins',
	weight: ['600', '700'],
});

const sourceSansPro = Source_Sans_Pro({
	variable: '--source_sans_pro',
	weight: ['400', '700'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${poppins.variable} ${sourceSansPro.variable}`}>
			<head />
			<body className='bg-primary-300'>
				<Header />
				{children}
			</body>
		</html>
	);
}

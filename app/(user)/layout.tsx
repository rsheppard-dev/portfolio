import '../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Providers from '../../components/Providers';
import { Poppins, Source_Sans_3 } from "next/font/google";

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

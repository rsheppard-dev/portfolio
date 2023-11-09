import '../globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body className='bg-primary-300 min-h-screen flex flex-col'>
				<main className='flex-grow'>{children}</main>
			</body>
		</html>
	);
}

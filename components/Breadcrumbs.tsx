import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
	const pathname = usePathname();
	const hrefs = pathname?.split('/')!;
	const crumbs = hrefs.map((crumb: string): string => {
		if (crumb === '') return 'Home';

		const words = crumb.split('-');

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substring(1);
		}

		return words.join(' ');
	});
	return (
		<ul className='mb-10 flex gap-2 items-center'>
			{crumbs.map((crumb: string, i: number) => (
				<li key={crumb} className='flex gap-2'>
					<div className='text-light'>
						{crumbs.length - 1 !== i ? (
							<Link href={'/' + hrefs[i]} className='text-primary-100'>
								{crumb}
							</Link>
						) : (
							crumb
						)}
					</div>

					{crumbs.length - 1 !== i ? (
						<div className='text-secondary-100'>➤</div>
					) : null}
				</li>
			))}
		</ul>
	);
};

export default Breadcrumbs;

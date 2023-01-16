'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavLinks from './NavLinks';

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className='w-fit hidden md:flex bg-dark text-light items-center space-x-5 rounded-b-lg shadow-md py-5 px-10'>
			{NavLinks.map(link => (
				<div key={link.label} className='relative'>
					<Link
						href={link.href}
						className='font-primary font-semibold hover:text-secondary-200 transition-colors'
					>
						{link.label}
					</Link>
					{pathname === link.href ||
					(link.href !== '/' && pathname?.startsWith(link.href)) ? (
						<div className='h-[3px] bg-secondary-100 rounded-lg absolute left-0 -bottom-2 w-full'></div>
					) : null}
				</div>
			))}
		</nav>
	);
};

export default Navbar;

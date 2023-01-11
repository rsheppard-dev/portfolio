'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className='w-fit hidden md:flex bg-dark text-light items-center space-x-5 rounded-b-lg shadow-md px-10'>
			<div className='relative'>
				<Link
					href='/'
					className='font-primary font-semibold hover:text-secondary-200 transition-colors'
				>
					Home
				</Link>
				{pathname === '/' ? (
					<div className='h-[3px] bg-secondary-100 rounded-lg absolute left-0 -bottom-4 w-full'></div>
				) : null}
			</div>

			<div className='relative'>
				<Link
					href='/'
					className='font-primary font-semibold hover:text-secondary-200 transition-colors'
				>
					About
				</Link>
			</div>

			<div className='relative'>
				<Link
					href='/'
					className='font-primary font-semibold hover:text-secondary-200 transition-colors'
				>
					Blog
				</Link>
			</div>

			<div className='relative'>
				<Link
					href='/'
					className='font-primary font-semibold hover:text-secondary-200 transition-colors'
				>
					Projects
				</Link>
			</div>

			<div className='relative'>
				<Link
					href='/'
					className='font-primary font-semibold hover:text-secondary-200 transition-colors'
				>
					Challenges
				</Link>
			</div>

			<div className='relative'>
				<Link
					href='/contact'
					className='font-primary font-semibold hover:text-secondary-200 transition-colors'
				>
					Contact
				</Link>
				{pathname === '/contact' ? (
					<div className='h-[3px] bg-secondary-100 rounded-lg absolute left-0 -bottom-4 w-full'></div>
				) : null}
			</div>
		</nav>
	);
};

export default Navbar;

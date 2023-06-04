'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Logo } from './SVGs';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

const Header = () => {
	return (
		<header className='container z-10'>
			<div className='w-full flex items-center justify-center md:items-start md:justify-between gap-2'>
				<MobileMenu />

				<Link href='/' className='flex items-center'>
					<div className='relative w-16 h-16'>
						<Image
							src='/img/roy-sheppard-mark.png'
							alt='Roy Sheppard Mark'
							fill
							sizes='(max-width: 768px) 50vw, 33vw'
							className='object-contain'
						/>
					</div>
					<div>
						<Logo title='Roy Sheppard Logo' className='block fill-light w-32' />
					</div>
				</Link>

				<Navbar />
			</div>
		</header>
	);
};

export default Header;

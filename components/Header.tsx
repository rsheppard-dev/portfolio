import Image from 'next/image';
import Link from 'next/link';

import { Logo } from './SVGs';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className='container'>
			<div className='w-full flex justify-center md:justify-between gap-10'>
				<Link href='/' className='flex items-center pt-5'>
					<div className='relative w-20 h-20'>
						<Image
							src='/img/roy-sheppard-mark.png'
							alt='Roy Sheppard Mark'
							fill
							sizes='(max-width: 768px) 50vw, 33vw'
							className='object-contain'
						/>
					</div>
					<div>
						<Logo title='Roy Sheppard Logo' className='block fill-light w-40' />
					</div>
				</Link>

				<Navbar />
			</div>
		</header>
	);
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='container'>
			<div className='w-full flex justify-center md:justify-between gap-10'>
				<div className='flex items-center pt-5'>
					<div className='relative w-20 h-20'>
						<Image
							src='/img/roy-sheppard-mark.png'
							alt='Roy Sheppard Mark'
							fill
							sizes='(max-width: 768px) 50vw, 33vw'
							className='object-contain'
						/>
					</div>
					<div className='relative h-20 w-[10rem]'>
						<Image
							src='/img/logo-light.svg'
							alt='Roy Sheppard Logo'
							fill
							sizes='(max-width: 768px) 50vw, 33vw'
							className='object-contain'
						/>
					</div>
				</div>

				<nav className='w-fit hidden md:flex bg-dark text-light items-center space-x-5 rounded-b-lg shadow-md px-10'>
					<Link
						href='/'
						className='font-primary font-semibold hover:text-secondary-200 transition-colors'
					>
						Home
					</Link>
					<Link
						href='/'
						className='font-primary font-semibold hover:text-secondary-200 transition-colors'
					>
						About
					</Link>
					<Link
						href='/'
						className='font-primary font-semibold hover:text-secondary-200 transition-colors'
					>
						Blog
					</Link>
					<Link
						href='/'
						className='font-primary font-semibold hover:text-secondary-200 transition-colors'
					>
						Projects
					</Link>
					<Link
						href='/'
						className='font-primary font-semibold hover:text-secondary-200 transition-colors'
					>
						Challenges
					</Link>
					<Link
						href='/'
						className='font-primary font-semibold hover:text-secondary-200 transition-colors'
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;

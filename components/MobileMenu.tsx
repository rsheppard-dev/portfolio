import Link from 'next/link';

import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';

import NavLinks from './NavLinks';

const MobileMenu = () => {
	return (
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button className='md:hidden'>
						<HiOutlineMenu title='Close Menu' className='text-3xl text-light' />
					</Menu.Button>

					{open && (
						<div className='absolute top-0 right-1/2 z-20'>
							<Menu.Items
								as={motion.div}
								static
								initial={{ opacity: 0, translateX: '100vw' }}
								animate={{ opacity: 1, translateX: 0 }}
								className='bg-dark flex min-h-screen w-1/2 fixed shadow-md flex-col px-5 py-16 gap-5 font-primary font-bold text-light'
							>
								<Menu.Button className='absolute top-5 right-14'>
									<HiOutlineX
										title='Open Menu'
										className='text-3xl text-light'
									/>
								</Menu.Button>
								{NavLinks.map(link => (
									<Menu.Item
										as={Link}
										key={link.href}
										href={link.href}
										className='ui-active:underline w-fit'
									>
										{link.label}
									</Menu.Item>
								))}
							</Menu.Items>
						</div>
					)}
				</>
			)}
		</Menu>
	);
};

export default MobileMenu;

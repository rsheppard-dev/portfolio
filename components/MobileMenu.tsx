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
						<HiOutlineMenu title='Open Menu' className='text-3xl text-light' />
					</Menu.Button>

					{open && (
						<div className='absolute top-0 right-1/2 z-20'>
							<Menu.Items
								as={motion.div}
								static
								initial={{ opacity: 0, translateX: '100vw' }}
								animate={{ opacity: 1, translateX: 0 }}
								transition={{ duration: 0.5 }}
								className='outline-none ring-0 bg-dark flex min-h-screen w-1/2 fixed shadow-md flex-col px-5 pt-5 gap-5 font-primary font-bold text-light'
							>
								<Menu.Button className='flex justify-end'>
									<HiOutlineX
										title='Close Menu'
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

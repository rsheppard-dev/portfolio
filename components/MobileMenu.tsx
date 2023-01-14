import Link from 'next/link';

import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Menu } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

import NavLinks from './NavLinks';

const MobileMenu = () => {
	return (
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button className='absolute w-fit left-0 container md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-opacity-75'>
						<HiOutlineMenu title='Open Menu' className='text-3xl text-light' />
					</Menu.Button>

					<AnimatePresence>
						{open && (
							<div className='absolute top-0 left-0 z-20'>
								<Menu.Items
									as={motion.div}
									key='menu'
									static
									initial={{ x: '-100vw' }}
									animate={{ x: 0 }}
									exit={{ x: '-100vw' }}
									transition={{ duration: 0.5 }}
									className='focus:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-opacity-75 border-secondary-100 border-r-4 border-double bg-dark flex min-h-screen w-1/2 fixed shadow-md flex-col container pt-5 gap-5 font-primary font-bold text-light'
								>
									<Menu.Button className='w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-opacity-75'>
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
					</AnimatePresence>
				</>
			)}
		</Menu>
	);
};

export default MobileMenu;

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
						<div className='absolute top-0 left-0 z-20'>
							<Menu.Items
								as={motion.div}
								static
								initial={{ x: '-100vw' }}
								animate={{ x: 0 }}
								transition={{ duration: 0.5 }}
								className='outline-secondary-100 bg-dark flex min-h-screen w-1/2 fixed shadow-md flex-col container pt-5 gap-5 font-primary font-bold text-light'
							>
								<Menu.Button>
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

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
					<Menu.Button className='z-30 md:hidden w-10 h-10 rounded-lg bg-light bg-opacity-60 hover:bg-opacity-100 transition-opacity flex justify-center items-center'>
						{open ? (
							<HiOutlineX
								title='Open Menu'
								className='text-3xl text-primary-300'
							/>
						) : (
							<HiOutlineMenu
								title='Close Menu'
								className='text-3xl text-primary-300'
							/>
						)}
					</Menu.Button>

					{open && (
						<Menu.Items
							as={motion.div}
							static
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='absolute container bg-light flex rounded-lg shadow-md top-0 z-10 flex-col p-10 gap-5 font-primary font-bold text-primary-300 border-secondary-100 border-l-4'
						>
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
					)}
				</>
			)}
		</Menu>
	);
};

export default MobileMenu;

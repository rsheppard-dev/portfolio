'use client';

import { Tab } from '@headlessui/react';
import Breadcrumbs from '../../../components/Breadcrumbs';

const PalindromeChecker = () => {
	return (
		<section>
			<h1 className='container mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				Palindrome Checker
			</h1>

			<div className='container'>
				<Breadcrumbs />
			</div>

			<Tab.Group>
				<Tab.List className='container font-primary font-bold space-x-2'>
					<Tab className='bg-primary-200 ui-selected:bg-light py-3 px-4 focus:outline-none focus-visible:border-2 focus-visible:border-b-0 focus-visible:border-primary-200'>
						Overview
					</Tab>
					<Tab className='bg-primary-200 ui-selected:bg-light py-3 px-4 focus:outline-none focus-visible:border-2 focus-visible:border-b-0 focus-visible:border-primary-200'>
						Code
					</Tab>
					<Tab className='bg-primary-200 ui-selected:bg-light py-3 px-4 focus:outline-none focus-visible:border-2 focus-visible:border-b-0 focus-visible:border-primary-200'>
						Result
					</Tab>
				</Tab.List>

				<Tab.Panels className='bg-light flex-grow'>
					<div className='container py-10'>
						<Tab.Panel
							as='article'
							className='focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-light'
						>
							<h2 className='font-primary font-bold text-xl text-primary-300'>
								Overview
							</h2>
						</Tab.Panel>
						<Tab.Panel
							as='article'
							className='focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-light'
						>
							<h2 className='font-primary font-bold text-xl text-primary-300'>
								Code
							</h2>
						</Tab.Panel>
						<Tab.Panel
							as='article'
							className='focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-light'
						>
							<h2 className='font-primary font-bold text-xl text-primary-300'>
								Result
							</h2>
						</Tab.Panel>
					</div>
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default PalindromeChecker;

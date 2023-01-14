'use client';

import { Tab } from '@headlessui/react';

const PalindromeChecker = () => {
	return (
		<>
			<section className='container'>
				<h1 className='my-16 font-primary text-light font-bold text-4xl'>
					Palindrome Checker
				</h1>
			</section>

			<Tab.Group as='section'>
				<Tab.List className='container font-primary font-bold space-x-2'>
					<Tab className='bg-primary-200 ui-selected:bg-light py-3 px-4'>
						Overview
					</Tab>
					<Tab className='bg-primary-200 ui-selected:bg-light py-3 px-4'>
						Code
					</Tab>
					<Tab className='bg-primary-200 ui-selected:bg-light py-3 px-4'>
						Result
					</Tab>
				</Tab.List>

				<Tab.Panels className='bg-light min-h-screen'>
					<div className='container'>
						<Tab.Panel>Content 1</Tab.Panel>
						<Tab.Panel>Content 2</Tab.Panel>
						<Tab.Panel>Content 3</Tab.Panel>
					</div>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
};

export default PalindromeChecker;

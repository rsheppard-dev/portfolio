'use client';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useOpenInWindow } from 'use-open-window';

import { Tab } from '@headlessui/react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { codeString } from '../../../code/evenHundred';

SyntaxHighlighter.registerLanguage('typescript', ts);

const EvenHundred = () => {
	const url = 'https://evenhundred.netlify.app/';
	const options = {
		centered: true /* default */,
		specs: {
			width: 600 /* window width */,
			height: 600 /* window height */,
		},
	};

	const [handleWindowOpen] = useOpenInWindow(url, options);

	return (
		<section className='min-h-screen flex flex-col'>
			<h1 className='container mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				Even Hundred
			</h1>

			<div className='container'>
				<Breadcrumbs />
			</div>

			<Tab.Group>
				<Tab.List className='container font-primary font-bold space-x-2'>
					<Tab className='bg-primary-200 ui-selected:bg-light py-2 xs:py-3 px-2 xs:px-4 focus:outline-none focus-visible:border-2 focus-visible:border-b-0 focus-visible:border-primary-200'>
						Overview
					</Tab>
					<Tab className='bg-primary-200 ui-selected:bg-light py-2 xs:py-3 px-2 xs:px-4 focus:outline-none focus-visible:border-2 focus-visible:border-b-0 focus-visible:border-primary-200'>
						Code
					</Tab>
					<Tab className='bg-primary-200 ui-selected:bg-light py-2 xs:py-3 px-2 xs:px-4 focus:outline-none focus-visible:border-2 focus-visible:border-b-0 focus-visible:border-primary-200'>
						Result
					</Tab>
				</Tab.List>

				<Tab.Panels className='bg-light flex-grow'>
					<div className='container py-10'>
						<Tab.Panel
							as='article'
							className='focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-light'
						>
							<h2 className='font-primary font-bold text-xl text-primary-300 mb-10'>
								Overview
							</h2>
						</Tab.Panel>
						<Tab.Panel
							as='article'
							className='focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-light'
						>
							<h2 className='font-primary font-bold text-xl text-primary-300 mb-10'>
								Code
							</h2>

							<SyntaxHighlighter
								language='typescript'
								showLineNumbers={true}
								style={monokaiSublime}
							>
								{codeString}
							</SyntaxHighlighter>
						</Tab.Panel>
						<Tab.Panel
							as='article'
							className='focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-light'
						>
							<h2 className='font-primary font-bold text-xl text-primary-300 mb-10'>
								Result
							</h2>

							<p className='text-secondary'>
								Application needs to be opened in a new window.{' '}
								<button
									onClick={handleWindowOpen}
									className='underline decoration-secondary-100 underline-offset-4 hover:underline-offset-2 font-semibold hover:decoration-secondary-200 transition-all'
								>
									Click here to launch
								</button>
								.
							</p>
						</Tab.Panel>
					</div>
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default EvenHundred;

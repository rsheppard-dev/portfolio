'use client';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useOpenInWindow } from 'use-open-window';
import { SiHtml5, SiCss3, SiBootstrap, SiTypescript } from 'react-icons/si';
import { FaCheckSquare } from 'react-icons/fa';

import { Tab } from '@headlessui/react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { codeString } from '../../../challengeCode/evenHundred';

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

							<section className='mb-10'>
								<h3 className='font-primary font-bold text-lg text-primary-300 mb-5'>
									Challenge
								</h3>
								<p className='font-secondary text-dark leading-loose'>
									Create a program that accepts a start value and end value from
									a user. Generate all the numbers inbetween these two values.
									Finally, display the numbers and output any even numbers in
									bold.
								</p>
							</section>

							<section className='mb-10'>
								<h3 className='font-primary font-bold text-lg text-primary-300 my-5'>
									Features
								</h3>

								<ul className='font-secondary font-bold space-y-3'>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span className='text-dark'>CSS and BootStrap Layout</span>
									</li>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span className='text-dark'>JavaScript Fundamentals</span>
									</li>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span className='text-dark'>TypeScript</span>
									</li>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span>Loops</span>
									</li>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span className='text-dark'>Functions</span>
									</li>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span className='text-dark'>DOM Manipulation</span>
									</li>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span className='text-dark'>If/Then/Else</span>
									</li>
									<li className='flex gap-2 items-center'>
										<FaCheckSquare className='text-secondary-200 text-2xl' />
										<span className='text-dark'>Boolean Logic</span>
									</li>
								</ul>
							</section>

							<section className='mb-10'>
								<h3 className='font-primary font-bold text-lg text-primary-300 mb-5'>
									Tech Stack
								</h3>

								<ul className='flex flex-wrap items-center gap-4'>
									<li className='flex flex-col items-center gap-2'>
										<SiHtml5
											title='HTML5'
											className='text-orange-600 text-4xl'
										/>
										<span className='text-primary text-xs font-bold'>
											HTML5
										</span>
									</li>
									<li className='flex flex-col items-center gap-2'>
										<SiCss3 title='CSS3' className='text-blue-500 text-4xl' />
										<span className='text-primary text-xs font-bold'>CSS3</span>
									</li>
									<li className='flex flex-col items-center gap-2'>
										<SiBootstrap
											title='BootStrap 5'
											className='text-purple-500 text-4xl'
										/>
										<span className='text-primary text-xs font-bold'>
											BootStrap
										</span>
									</li>
									<li className='flex flex-col items-center gap-2'>
										<SiTypescript
											title='TypeScript'
											className='text-blue-500 text-4xl'
										/>
										<span className='text-primary text-xs font-bold'>
											TypeScript
										</span>
									</li>
								</ul>
							</section>
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

							<p className='font-secondary leading-loose text-dark'>
								Application needs to open in a new window.{' '}
								<button
									onClick={handleWindowOpen}
									className='text-primary-300 underline decoration-secondary-100 underline-offset-4 hover:underline-offset-2 font-semibold hover:decoration-secondary-200 transition-all'
								>
									Click here to launch app
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

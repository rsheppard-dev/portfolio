'use client';
import { notFound } from 'next/navigation';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useOpenInWindow } from 'use-open-window';
import { FaCheckSquare } from 'react-icons/fa';
import { Tab } from '@headlessui/react';

import Breadcrumbs from '../../../components/Breadcrumbs';
import challengeData from '../../../data/challengeData';
import IChallenge from '../../../interfaces/IChallenge';
import displayIcon from '../../../utils/displayIcon';
import Tech from '../../../types/Tech';

SyntaxHighlighter.registerLanguage('typescript', ts);

const getChallengeData = (slug: string): IChallenge | undefined => {
	// retreive current pages challenge data
	return challengeData.find((challenge: IChallenge): IChallenge | undefined => {
		if (challenge.slug === slug) return challenge;
	});
};

const ChallengePage = ({
	params,
}: {
	params: { slug: string };
}): JSX.Element => {
	const data = getChallengeData(params.slug);

	if (!data) notFound();

	const url = data.live;
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
				{data.title}
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
									{data.description}
								</p>
							</section>

							<section className='mb-10'>
								<h3 className='font-primary font-bold text-lg text-primary-300 my-5'>
									Features
								</h3>

								<ul className='font-secondary font-bold space-y-3'>
									{data.features.sort().map(
										(feature: string): JSX.Element => (
											<li key={feature} className='flex gap-2 items-center'>
												<FaCheckSquare className='text-secondary-200 text-2xl' />
												<span className='text-dark'>{feature}</span>
											</li>
										)
									)}
								</ul>
							</section>

							<section className='mb-10'>
								<h3 className='font-primary font-bold text-lg text-primary-300 mb-5'>
									Tech Stack
								</h3>

								<ul className='flex flex-wrap items-center gap-4'>
									{data.tech.map(
										(tech: Tech): JSX.Element => (
											<li
												key={tech}
												className='flex flex-col items-center gap-2'
											>
												{displayIcon(tech, 'text-4xl', true)}
												<span className='text-primary text-xs font-bold'>
													{tech}
												</span>
											</li>
										)
									)}
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
								{data.code[0]}
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

export default ChallengePage;

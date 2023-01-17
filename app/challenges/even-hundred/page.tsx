'use client';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Tab } from '@headlessui/react';
import Breadcrumbs from '../../../components/Breadcrumbs';

SyntaxHighlighter.registerLanguage('typescript', ts);

const EvenHundred = () => {
	const codeString = `
	// function to get values from user interface
	const getValues = (e: Event): void => {
		// prevent default form behaviour (page refresh)
		e.preventDefault();

		// get elements from html page
		const startValueInput = document.getElementById(
			'startValue'
		) as HTMLInputElement;
		const endValueInput = document.getElementById('endValue') as HTMLInputElement;
		const errorBox = document.getElementById('error') as HTMLDivElement;

		// get values from inputs and parse to integers
		const startValue = parseInt(startValueInput.value);
		const endValue = parseInt(endValueInput.value);

		// check values entered by user are valid numbers
		if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
			// call generateNumbers
			const numbers = generateNumbers(startValue, endValue);

			// call displayNumbers function
			displayNumbers(numbers);
		} else {
			// display error on page if invalid input
			errorBox.innerText = 'You can only enter numbers in the inputs above.';
			errorBox.classList.remove('d-none');
		}
	};

	// function to generate numbers between startValue and endValue
	const generateNumbers = (startValue: number, endValue: number): number[] => {
		const numbers: number[] = [];

		// loop through all numbers from startValue to endValue
		for (let i = startValue; i <= endValue; i++) {
			// add current number to end of numbers array
			numbers.push(i);
		}

		return numbers;
	};

	// function to display number range
	const displayNumbers = (numbers: number[]): void => {
		let templateRows = '';

		// loop through all the numbers
		for (let i = 0; i < numbers.length; i++) {
			const number = numbers[i];
			let className: string;

			// check if current number is even or odd and assign correct class
			if (number % 2 === 0) {
				className = 'even';
			} else {
				className = 'odd';
			}

			// update template rows
			templateRows += '<tr><td class="' + className + '">' + number + '<td></tr>';
		}

		// update html in table body
		document.getElementById('results')!.innerHTML = templateRows;
	};

	// get button element
	const submitButton = document.getElementById('submit') as HTMLButtonElement;

	// create event listener for when user clicks button
	submitButton.addEventListener('click', getValues);

	export {};
	
`;
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

							<SyntaxHighlighter language='typescript' style={monokaiSublime}>
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
							<iframe
								src='https://rsheppard-dev.github.io/even-hundred'
								width='100%'
								height='100%'
								className='min-h-screen'
								sandbox='allow-forms allow-scripts allow-presentation'
							/>
						</Tab.Panel>
					</div>
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default EvenHundred;

import IChallenge from '../interfaces/IChallenge';
import { codeString as evenHundredCode } from '../challengeCode/evenHundred';
import { codeString as stringFlipCode } from '../challengeCode/stringFlip';
import { codeString as fizzBuzzCode } from '../challengeCode/fizzBuzz';

const challengeData: IChallenge[] = [
	{
		title: 'Even Hundred 💯',
		description:
			'Create a program that accepts a start value and end value from a user. Generate all the numbers inbetween those two values. Finally, display the numbers and output any even numbers in bold.',
		features: [
			'CSS and BootStrap Layout',
			'Arrow Functions',
			'Arrays',
			'DOM Manipulation',
			'Event Listeners',
			'For Loops',
			'If/Else Statements',
			'Ternary Operators',
			'Template Literals',
		],
		tech: ['HTML5', 'CSS3', 'BootStrap', 'TypeScript'],
		slug: 'even-hundred',
		code: [evenHundredCode],
		live: 'https://evenhundred.netlify.app',
	},
	{
		title: 'String Flip',
		description:
			'Create a program to accept a string, reverse it and display the result.',
		features: [
			'CSS and BootStrap Layout',
			'Arrow Functions',
			'Array Methods',
			'String Methods',
			'DOM Manipulation',
			'Event Listeners',
			'If/Else Statements',
		],
		tech: ['HTML5', 'CSS3', 'BootStrap', 'TypeScript'],
		slug: 'string-flip',
		code: [stringFlipCode],
		live: 'https://string-flip.netlify.app',
	},
	{
		title: 'FizzBuzz',
		description:
			'Create a program that prints the numbers from 1 to 100. For numbers that are a multiple of 3 display Fizz, numbers that are a multiple of 5 display Buzz and for numbers that are a multiple of 3 and 5 display FizzBuzz.',
		features: [
			'CSS and BootStrap Layout',
			'Arrow Functions',
			'Arrays',
			'String Methods',
			'DOM Manipulation',
			'Event Listeners',
			'If/Then/Else Statements',
			'HTML Templating',
		],
		tech: ['HTML5', 'CSS3', 'BootStrap', 'TypeScript'],
		slug: 'fizzbuzz',
		code: [fizzBuzzCode],
		live: 'https://rs-fizzbuzz.netlify.app',
	},
];

export default challengeData;

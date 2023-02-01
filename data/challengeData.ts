import IChallenge from '../interfaces/IChallenge';
import { codeString as evenHundredCode } from '../challengeCode/evenHundred';
import { codeString as stringFlipCode } from '../challengeCode/stringFlip';
import { codeString as fizzBuzzCode } from '../challengeCode/fizzBuzz';
import { codeString as palindromeCheckerCode } from '../challengeCode/palindromeCheckerCode';
import { codeString as loanCalculatorCode } from '../challengeCode/loanCalculator';

const challengeData: IChallenge[] = [
	{
		title: 'Even Hundred',
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
	{
		title: 'Palindrome Checker',
		description:
			'A palindrome is a word, phrase or sequence that reads the same backwards as forwards. Create program that checks if the phrase entered is a palindrome.',
		features: [
			'CSS and BootStrap Layout',
			'Arrow Functions',
			'Arrays',
			'Array Methods',
			'String Methods',
			'DOM Manipulation',
			'Event Listeners',
			'If Statements',
			'HTML Templating',
		],
		tech: ['HTML5', 'CSS3', 'BootStrap', 'TypeScript'],
		slug: 'palindrome-checker',
		code: [palindromeCheckerCode],
		live: 'https://rs-palindrome.netlify.app',
	},
	{
		title: 'Loan Calculator',
		description:
			'Write a mortgage loan calculator application that takes in three parameters: The amount of money loaned (balance). The time over which the loan will be repaid in months (term). The percentage rate at which interest will accrue on the loan (rate).',
		features: [
			'CSS and BootStrap Layout',
			'Functions',
			'Type Casting',
			'DOM Manipulation',
			'Event Listeners',
			'If Statements',
			'For Loops',
			'String Methods',
			'HTML Templating',
		],
		tech: ['HTML5', 'CSS3', 'BootStrap', 'TypeScript'],
		slug: 'loan-calculator',
		code: [loanCalculatorCode],
		live: 'https://rs-loan-calculator.netlify.app',
	},
];

export default challengeData;

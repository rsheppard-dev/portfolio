import IChallenge from '../interfaces/IChallenge';

const challengeData: IChallenge[] = [
	{
		title: 'Even Hundred 💯',
		description:
			'Create a program that accepts a start value and end value from a user. Generate all the numbers inbetween those two values. Finally, display the numbers and output any even numbers in bold.',
		tech: ['TypeScript'],
		link: '/challenges/even-hundred',
	},
	{
		title: 'String Flip 👈',
		description:
			'Create a program to accept a string, reverse it and display the result.',
		tech: ['TypeScript'],
		link: '/challenges/string-flip',
	},
	{
		title: 'FizzBuzz',
		description:
			'Create a program that prints the numbers from 1 to 100. For numbers that are a multiple of 3 display Fizz, numbers that are a multiple of 5 display Buzz and for numbers that are a multiple of 3 and 5 display FizzBuzz.',
		tech: ['TypeScript'],
		link: '/challenges/fizzbuzz',
	},
];

export default challengeData;

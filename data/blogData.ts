import IBlog from '../interfaces/IBlog';
import Image from '../interfaces/Image';

const blogData: IBlog[] = [
	{
		title: 'How I made my blog with C# and .NET',
		description: 'How to use C# and .NET to create your own blog.',
		image: {
			src: '#',
			width: '',
			height: '',
		},
		date: new Date('2013-08-03T02:00:00Z'),
		slug: '#',
	},
	{
		title: '5 Ways to Reverse a String in JavaScript',
		description:
			'Learn 5 ways to solve one of the most common interview questions asked.',
		image: {
			src: '#',
			width: '',
			height: '',
		},
		date: new Date(),
		slug: '#',
	},
];

export default blogData;

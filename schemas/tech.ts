import { defineType } from 'sanity';

export default defineType({
	name: 'tech',
	title: 'Tech',
	type: 'string',
	options: {
		list: [
			{ title: 'HTML5', value: 'HTML5' },
			{ title: 'CSS3', value: 'CSS3' },
			{ title: 'TailwindCSS', value: 'TailwindCSS' },
			{ title: 'Bootstrap', value: 'Bootstrap' },
			{ title: 'JavaScript', value: 'JavaScript' },
			{ title: 'TypeScript', value: 'TypeScript' },
			{ title: 'React', value: 'React' },
			{ title: 'NextJS', value: 'NextJS' },
			{ title: 'NodeJS', value: 'NodeJS' },
			{ title: 'C#', value: 'C#' },
			{ title: '.NET', value: '.NET' },
		],
	},
});

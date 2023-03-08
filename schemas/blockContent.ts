import { defineArrayMember, defineType } from 'sanity';

export default defineType({
	name: 'blockContent',
	title: 'Block Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'block',
		}),
		defineArrayMember({
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineArrayMember({
			name: 'code',
			type: 'code',
			title: 'Code',
			options: {
				languageAlternatives: [
					{ title: 'JavaScript', value: 'javascript' },
					{ title: 'TypeScript', value: 'typescript' },
				],
			},
		}),
	],
});

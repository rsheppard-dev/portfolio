import { defineArrayMember, defineType, defineField } from 'sanity';

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
			fields: [
				defineField({
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
				}),
			],
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

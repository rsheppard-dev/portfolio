import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
	name: 'challenge',
	type: 'document',
	title: 'Challenges',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: Rule => Rule.required().warning('Title is a required field.'),
		}),
		defineField({
			name: 'description',
			type: 'blockContent',
			title: 'Description',
		}),
		defineField({
			name: 'blurb',
			type: 'string',
			title: 'Blurb',
			description:
				'Short description that will be displayed on the challenge card.',
		}),
		defineField({
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
		defineField({
			name: 'features',
			type: 'array',
			of: [defineArrayMember({ type: 'string' })],
			title: 'Features',
		}),
		defineField({
			title: 'Tech Stack',
			name: 'techStack',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'tech',
					title: 'Tech',
					type: 'tech',
				}),
			],
		}),
		defineField({
			title: 'Main Language',
			name: 'mainLanguage',
			type: 'tech',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
			},
			validation: Rule => Rule.required().warning('Slug is a required field.'),
		}),
		defineField({
			name: 'url',
			type: 'url',
			title: 'Live Link',
		}),
	],
});

import { defineArrayMember, defineField, defineType } from 'sanity';
import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
	name: 'project',
	title: 'Projects',
	type: 'document',
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: 'project' }),
		defineField({
			name: 'title',
			title: 'Project Name',
			type: 'string',
			validation: Rule =>
				Rule.required().warning('You must supply a project name.'),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
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
		defineField({
			name: 'description',
			title: 'Description',
			type: 'blockContent',
		}),
		defineField({
			name: 'techStack',
			title: 'Tech Stack',
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
			name: 'readMe',
			title: 'Read Me',
			type: 'markdown',
		}),
		defineField({
			name: 'privateRepo',
			title: 'Private Repo',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'github',
			title: 'Github Repo',
			type: 'url',
			hidden: ({ parent }) => parent?.privateRepo,
		}),
		defineField({
			name: 'live',
			title: 'Live Link',
			type: 'url',
		}),
	],
});

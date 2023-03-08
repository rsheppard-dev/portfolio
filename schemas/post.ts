import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
	name: 'post',
	type: 'document',
	title: 'Blog Posts',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: Rule => Rule.required().warning('Title is a required field.'),
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
			name: 'blurb',
			type: 'string',
			title: 'Blurb',
			description:
				'Short description that will be displayed on the preview card.',
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'category' }],
				}),
			],
		}),
		defineField({
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'blockContent',
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
		}),
	],
});

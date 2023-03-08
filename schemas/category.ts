import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Categories',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Category Name',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
	],
});

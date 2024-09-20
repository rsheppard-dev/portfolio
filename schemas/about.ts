import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'about',
	title: 'About Page',
	type: 'document',
	options: {
		singleton: true, // Identify this document as a singleton
	},
	fields: [
		defineField({
			name: 'content',
			type: 'blockContent',
			title: 'Content',
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'About Page',
			};
		},
	},
});

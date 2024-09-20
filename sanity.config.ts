import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { defineConfig } from 'sanity';
import { markdownSchema } from 'sanity-plugin-markdown';

import types from './schemas/index';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const config = defineConfig({
	projectId,
	dataset,
	title: 'Sanity Portfolio',
	basePath: '/admin',
	plugins: [
		structureTool({
			structure: (S, context) => {
				// Get all document types
				const documentTypes = S.documentTypeListItems();

				// Filter out the 'project' document type
				const filteredDocumentTypes = documentTypes.filter(
					item => item.getId() !== 'project'
				);

				return S.list()
					.title('Content')
					.items([
						...filteredDocumentTypes,
						orderableDocumentListDeskItem({
							type: 'project',
							title: 'Projects',
							S,
							context,
						}),
					]);
			},
		}),
		visionTool(),
		codeInput(),
		markdownSchema(),
	],

	schema: {
		types,
	},
});

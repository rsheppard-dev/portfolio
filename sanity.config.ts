import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { defineConfig } from 'sanity';
import { markdownSchema } from 'sanity-plugin-markdown';

import types from './schemas/index';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const config = defineConfig({
	projectId,
	dataset,
	title: 'Sanity Portfolio',
	basePath: '/admin',
	plugins: [deskTool(), visionTool(), codeInput(), markdownSchema()],

	schema: {
		types,
	},
});

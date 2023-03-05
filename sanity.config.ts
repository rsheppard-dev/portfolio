import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import challenge from './schemas/challenge';
import { defineConfig } from 'sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const config = defineConfig({
	projectId,
	dataset,
	title: 'Sanity Portfolio',
	basePath: '/admin',
	plugins: [deskTool(), visionTool(), codeInput()],

	schema: {
		types: [challenge],
	},
});
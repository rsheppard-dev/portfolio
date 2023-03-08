import imageUrlBuilder from '@sanity/image-url';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const token = process.env.SANITY_AUTH_TOKEN!;

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
	token,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityAsset | string) {
	return builder.image(source);
}

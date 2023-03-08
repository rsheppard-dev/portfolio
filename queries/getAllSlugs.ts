import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function getAllSlugs(type: string) {
	return client.fetch(
		groq`
		*[_type == $type] {
			"slug": slug.current
		}
	`,
		{ type }
	);
}

export default getAllSlugs;

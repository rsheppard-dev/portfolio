import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function getAllSlugs(type: string = '') {
	return client.fetch(
		groq`
		*[_type == 'challenge'] {
			"slug": slug.current
		}
	`
	);
}

export default getAllSlugs;

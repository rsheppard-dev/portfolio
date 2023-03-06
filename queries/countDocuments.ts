import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function countDocuments(document: string) {
	return client.fetch(
		groq`
		count(*[_type == $document])
	`,
		{ document }
	);
}

export default countDocuments;

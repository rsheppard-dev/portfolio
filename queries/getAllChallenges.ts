import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function getAllChallenges() {
	return client.fetch(
		groq`
		*[_type == "challenge"] | order(_createdAt desc) {
			_id,
			title,
			description,
			blurb,
			code,
			features,
			techStack[],
			mainLanguage,
			"slug": slug.current,
			url
		}
	`
	);
}

export default getAllChallenges;

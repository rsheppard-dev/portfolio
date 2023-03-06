import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function getChallenges(start = 0, end = 10) {
	return client.fetch(
		groq`
		*[_type == "challenge"] | order(_createdAt desc) [$start...$end] {
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
	`,
		{ start, end }
	);
}

export default getChallenges;

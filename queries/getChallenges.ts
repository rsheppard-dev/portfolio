import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function getChallenges(startCount = 0, endCount = 10) {
	return client.fetch(
		groq`
		*[_type == "challenge"] | order(_createdAt desc) [$startCount...$endCount] {
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
		{ startCount, endCount }
	);
}

export default getChallenges;

import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function getChallenges() {
	return client.fetch(groq`
		*[_type == "challenge"] | order(_createdAt asc) {
			_id,
			title,
			description,
			code,
			features,
			techStack[],
			mainLanguage,
			"slug": slug.current,
			url
		}
	`);
}

export default getChallenges;

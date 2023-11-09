import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

async function getChallenges(resultsPerPage = 3, page = 1) {
	const start = resultsPerPage * page - resultsPerPage;
	const end = resultsPerPage * page;

	return client.fetch(
		groq`
		{
			"data": *[_type == "challenge"] | order(_createdAt desc) [$start...$end] {
			_id,
			title,
			description,
			blurb,
			code,
			features[],
			techStack[],
			mainLanguage,
			"slug": slug.current,
			url
		},
		"totalResults": count(*[_type == "challenge"]),
		}
	`,
		{ start, end },
		{
			next: {
				revalidate: 60,
			},
		}
	);
}

export default getChallenges;

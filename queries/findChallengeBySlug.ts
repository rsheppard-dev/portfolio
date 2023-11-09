import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

function findChallengeBySlug(slug: string) {
	return client.fetch(
		groq`
		*[_type == "challenge" && slug.current == $slug][0] {
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
		}
	`,
		{ slug },
		{
			next: {
				revalidate: 60,
			},
		}
	);
}

export default findChallengeBySlug;

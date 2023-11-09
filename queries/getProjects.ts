import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';
import { Projects } from '../interfaces/Project';

async function getProjects(resultsPerPage = 3, page = 1): Promise<Projects> {
	const start = resultsPerPage * page - resultsPerPage;
	const end = resultsPerPage * page;

	return client.fetch(
		groq`
		{
			"data": *[_type == "project"] | order(_createdAt desc) [$start...$end] {
			_id,
			title,
			"slug": slug.current,
            logo,
			description,
            readMe,
			techStack[],
			privateRepo,
            github,
            live
		},
		"totalResults": count(*[_type == "project"]),
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

export default getProjects;

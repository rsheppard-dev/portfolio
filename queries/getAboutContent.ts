import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';
import About from '../interfaces/About';

async function getAboutContent(): Promise<About> {
	return client.fetch(
		groq`
        *[_type == "about"][0] {
                content
        }
    `,
		{},
		{
			next: {
				revalidate: 60,
			},
		}
	);
}

export default getAboutContent;

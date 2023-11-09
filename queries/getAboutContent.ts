import { groq } from 'next-sanity';
import { client } from '../server/sanity.client';

async function getAboutContent() {
	return (
		client.fetch(
			groq`
        *[_type == "about"][0] {
                content
        }
    `
		),
		{
			next: {
				relvalidate: 60,
			},
		}
	);
}

export default getAboutContent;

import { notFound } from 'next/navigation';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import ChallengeFile from '../../../../components/ChallengeFile';
import Challenge from '../../../../interfaces/Challenge';
import getAllSlugs from '../../../../queries/getAllSlugs';
import findChallengeBySlug from '../../../../queries/findChallengeBySlug';

export async function generateStaticParams() {
	const slugs = await getAllSlugs('challenge');

	return slugs.map((challenge: Pick<Challenge, 'slug'>) => ({
		slug: challenge.slug,
	}));
}

async function ChallengePage({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const challenge = (await findChallengeBySlug(slug)) as Challenge;

	if (!challenge) notFound();

	return (
		<section className='min-h-screen flex flex-col'>
			<h1 className='container mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				{challenge.title}
			</h1>

			<div className='container'>
				<Breadcrumbs />
			</div>

			<ChallengeFile data={challenge} />
		</section>
	);
}

export default ChallengePage;

import { notFound } from 'next/navigation';

import Breadcrumbs from '../../../components/Breadcrumbs';
import ChallengeFile from '../../../components/ChallengeFile';
import Challenge from '../../../interfaces/Challenge';
import getAllChallenges from '../../../queries/getAllChallenges';
import getChallenges from '../../../queries/getChallenges';

export async function generateStaticParams() {
	const challenges = await getAllChallenges();

	return challenges.map((challenge: Challenge) => ({
		slug: challenge.slug,
	}));
}

async function ChallengePage({ params }: { params: { slug: string } }) {
	const challenges = await getChallenges(0, 10);
	const { slug } = params;

	const data = challenges.find(
		(challenge: Challenge): Challenge | undefined => {
			if (challenge.slug === slug) return challenge;
		}
	);

	if (!data) notFound();

	return (
		<section className='min-h-screen flex flex-col'>
			<h1 className='container mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				{data.title}
			</h1>

			<div className='container'>
				<Breadcrumbs />
			</div>

			<ChallengeFile data={data} />
		</section>
	);
}

export default ChallengePage;

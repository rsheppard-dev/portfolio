import { notFound } from 'next/navigation';

import Breadcrumbs from '../../../components/Breadcrumbs';
import challengeData from '../../../data/challengeData';
import IChallenge from '../../../interfaces/IChallenge';
import ChallengeFile from '../../../components/ChallengeFile';

export async function generateStaticParams() {
	return challengeData.map(challenge => ({
		slug: challenge.slug,
	}));
}

const ChallengePage = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const data = challengeData.find(
		(challenge: IChallenge): IChallenge | undefined => {
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
};

export default ChallengePage;

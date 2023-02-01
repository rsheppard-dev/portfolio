'use client';

import Breadcrumbs from '../../components/Breadcrumbs';
import ChallengeCard from '../../components/ChallengeCard';
import IChallenge from '../../interfaces/IChallenge';
import challengeData from '../../data/challengeData';

const Challenges = () => {
	return (
		<section className='container'>
			<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				Coding Challenges
			</h1>

			<Breadcrumbs />

			<div className='flex flex-wrap flex-col-reverse justify-center md:justify-start gap-10 mb-10'>
				{challengeData.map(
					(challenge: IChallenge): JSX.Element => (
						<ChallengeCard key={challenge.title} challenge={challenge} />
					)
				)}
			</div>
		</section>
	);
};

export default Challenges;

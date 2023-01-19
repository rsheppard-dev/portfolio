'use client';

import ChallengeCard from './ChallengeCard';
import IChallenge from '../interfaces/IChallenge';
import { ReactElement } from 'react';

const ChallengesSection = ({
	challengeData,
}: {
	challengeData: IChallenge[];
}) => {
	return (
		<section className='bg-light py-16'>
			<div className='container'>
				<h2 className='mb-16 font-primary text-primary-300 font-bold text-4xl'>
					Recent Coding Challenges
				</h2>
				<div className='flex flex-wrap justify-center md:justify-start gap-10'>
					{challengeData.map(
						(challenge: IChallenge): ReactElement => (
							<ChallengeCard key={challenge.title} challenge={challenge} />
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default ChallengesSection;

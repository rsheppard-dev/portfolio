import Link from 'next/link';

import { FaArrowRight } from 'react-icons/fa';

import ChallengeCard from './ChallengeCard';
import getChallenges from '../queries/getChallenges';
import Challenge from '../interfaces/Challenge';

const ChallengesSection = async () => {
	const challenges = await getChallenges(3);
	return (
		<section className='bg-light py-16'>
			<div className='container'>
				<h2 className='mb-16 font-primary text-primary-300 font-bold text-4xl'>
					Recent Coding Challenges
				</h2>
				<div className='flex flex-wrap justify-center md:justify-start gap-10'>
					{challenges.data.map(
						(challenge: Challenge): JSX.Element => (
							<ChallengeCard key={challenge._id} challenge={challenge} />
						)
					)}

					<div className='flex justify-end w-full'>
						<Link
							href='/challenges'
							className='text-sm bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-md px-3 py-2 font-primary font-semibold whitespace-nowrap flex gap-2 items-center'
						>
							View All <FaArrowRight title='View All Challenges' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChallengesSection;

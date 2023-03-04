import ChallengeCard from './ChallengeCard';
import getChallenges from '../utils/getChallenges';
import Challenge from '../interfaces/Challenge';

const ChallengesSection = async () => {
	const challenges = await getChallenges();
	return (
		<section className='bg-light py-16'>
			<div className='container'>
				<h2 className='mb-16 font-primary text-primary-300 font-bold text-4xl'>
					Recent Coding Challenges
				</h2>
				<div className='flex flex-wrap flex-col-reverse justify-center md:justify-start gap-10'>
					{challenges.map(
						(challenge: Challenge): JSX.Element => (
							<ChallengeCard key={challenge._id} challenge={challenge} />
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default ChallengesSection;

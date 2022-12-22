import ChallengeCard from './ChallengeCard';

const ChallengesSection = () => {
	return (
		<section className='bg-light py-16'>
			<div className='container'>
				<h2 className='mb-16 font-primary text-primary-300 font-bold text-4xl'>
					Coding Challenges
				</h2>
				<div className='flex flex-wrap justify-center md:justify-start gap-16'>
					<ChallengeCard />
					<ChallengeCard />
					<ChallengeCard />
				</div>
			</div>
		</section>
	);
};

export default ChallengesSection;

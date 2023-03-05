import Breadcrumbs from '../../components/Breadcrumbs';
import ChallengeCard from '../../components/ChallengeCard';
import Challenge from '../../interfaces/Challenge';
import getChallenges from '../../queries/getChallenges';

async function Challenges() {
	const challenges = await getChallenges();
	return (
		<section className='container'>
			<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				Coding Challenges
			</h1>

			<Breadcrumbs />

			<div className='flex flex-wrap justify-center md:justify-start gap-10 mb-10'>
				{challenges.map(
					(challenge: Challenge): JSX.Element => (
						<ChallengeCard key={challenge._id} challenge={challenge} />
					)
				)}
			</div>
		</section>
	);
}

export default Challenges;

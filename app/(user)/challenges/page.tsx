'use client';

import { useQuery } from 'react-query';

import Breadcrumbs from '../../../components/Breadcrumbs';
import ChallengeCard from '../../../components/ChallengeCard';
import Challenge from '../../../interfaces/Challenge';
import getAllChallenges from '../../../queries/getAllChallenges';

function Challenges() {
	const {
		isLoading,
		isError,
		error,
		data: challenges,
	} = useQuery({
		queryKey: ['challenges'],
		queryFn: async () => await getAllChallenges(),
	});

	return (
		<section className='container'>
			<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				Coding Challenges
			</h1>

			<Breadcrumbs />

			{isLoading ? (
				<h2 className='mt-16 mb-5 font-primary text-light font-bold text-xl'>
					Loading...
				</h2>
			) : isError ? (
				<>
					<h2 className='mt-16 mb-5 font-primary text-light font-bold text-xl'>
						Sorry, something went wrong.
					</h2>
					<pre className='font-secondary text-light'>
						{JSON.stringify(error)}
					</pre>
				</>
			) : (
				<div className='flex flex-wrap justify-center md:justify-start gap-10 mb-10'>
					{challenges.map(
						(challenge: Challenge): JSX.Element => (
							<ChallengeCard key={challenge._id} challenge={challenge} />
						)
					)}
				</div>
			)}
		</section>
	);
}

export default Challenges;

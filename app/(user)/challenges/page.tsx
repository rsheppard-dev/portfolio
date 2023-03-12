'use client';

import { useState } from 'react';

import { useQuery } from 'react-query';

import Breadcrumbs from '../../../components/Breadcrumbs';
import ChallengeCard from '../../../components/ChallengeCard';
import Challenge from '../../../interfaces/Challenge';
import getChallenges from '../../../queries/getChallenges';
import Paginatation from '../../../components/Paginatation';

function Challenges() {
	const [page, setPage] = useState(1);

	const resultsPerPage = 4;

	const {
		isLoading,
		isError,
		error,
		isPreviousData,
		data: challenges,
	} = useQuery({
		queryKey: ['challenges', page],
		queryFn: async () => await getChallenges(resultsPerPage, page),
		keepPreviousData: true,
	});

	const totalPages = Math.ceil(
		parseInt(challenges?.totalResults) / resultsPerPage
	);

	return (
		<section className='container'>
			<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				Coding Challenges
			</h1>

			<Breadcrumbs />

			{isLoading ? (
				<h2 className='mt-16 mb-5 font-primary text-light font-bold text-xl'>
					Loading challenges...
				</h2>
			) : isError ? (
				<>
					<h2 className='mt-16 mb-5 font-primary text-light font-bold text-xl'>
						Sorry, something went wrong.
					</h2>
					<pre className='font-secondary text-light'>
						{error instanceof Error && JSON.stringify(error.message)}
					</pre>
				</>
			) : (
				<>
					<div className='flex flex-wrap justify-center md:justify-start gap-10 mb-10'>
						{challenges?.data?.map(
							(challenge: Challenge): JSX.Element => (
								<ChallengeCard key={challenge._id} challenge={challenge} />
							)
						)}
					</div>

					{totalPages > 1 && (
						<Paginatation
							totalPages={totalPages}
							page={page}
							setPage={setPage}
							isPreviousData={isPreviousData}
						/>
					)}
				</>
			)}
		</section>
	);
}

export default Challenges;

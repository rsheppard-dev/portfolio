'use client';

import { useState } from 'react';

import { useQuery } from 'react-query';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Breadcrumbs from '../../../components/Breadcrumbs';
import ChallengeCard from '../../../components/ChallengeCard';
import Challenge from '../../../interfaces/Challenge';
import getChallenges from '../../../queries/getChallenges';

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

	function nextPage() {
		setPage(prev => prev + 1);
	}

	function prevPage() {
		setPage(prev => prev - 1);
	}

	const totalPages = Math.ceil(
		parseInt(challenges?.totalResults) / parseInt(challenges?.resultsPerPage)
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
					<pre className='font-secondary text-light break-words'>
						{error instanceof Error && JSON.stringify(error.message)}
					</pre>
				</>
			) : (
				<>
					<div className='flex flex-wrap justify-center md:justify-start gap-10 mb-10'>
						{challenges.data.map(
							(challenge: Challenge): JSX.Element => (
								<ChallengeCard key={challenge._id} challenge={challenge} />
							)
						)}
					</div>

					<div className='flex justify-center gap-2 mb-10'>
						<button
							onClick={prevPage}
							disabled={page === 1}
							className='bg-primary-100 transition-colors text-primary-300 font-primary font-bold w-10 h-10 rounded enabled:hover:bg-primary-200 disabled:opacity-60'
						>
							<FaArrowLeft className='mx-auto' title='Previous' />
						</button>

						{totalPages &&
							[...Array(totalPages)].map((_, index) => (
								<button
									key={index}
									onClick={() => setPage(index + 1)}
									disabled={isPreviousData}
									className={`${
										index + 1 === page
											? 'bg-light cursor-default'
											: 'bg-primary-100 enabled:hover:bg-primary-200'
									} transition-colors text-primary-300 font-primary font-bold w-10 h-10 rounded disabled:opacity-60`}
								>
									{index + 1}
								</button>
							))}

						<button
							onClick={nextPage}
							disabled={page === totalPages}
							className='bg-primary-100 transition-colors text-primary-300 font-primary font-bold w-10 h-10 rounded enabled:hover:bg-primary-200 disabled:opacity-60'
						>
							<FaArrowRight className='mx-auto' title='Next' />
						</button>
					</div>
				</>
			)}
		</section>
	);
}

export default Challenges;

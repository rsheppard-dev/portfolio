import { Dispatch, SetStateAction } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Paginatation({
	totalPages,
	page,
	setPage,
	isPreviousData,
}: {
	totalPages: number;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	isPreviousData: boolean;
}) {
	function nextPage() {
		setPage(prev => prev + 1);
	}

	function prevPage() {
		setPage(prev => prev - 1);
	}

	return (
		<div className='flex justify-center gap-2 mb-10'>
			<button
				onClick={prevPage}
				disabled={page === 1}
				className='bg-primary-100 transition-colors text-primary-300 font-primary font-bold w-10 h-10 rounded enabled:hover:bg-primary-200 disabled:opacity-40'
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
						} transition-colors text-primary-300 font-primary font-bold w-10 h-10 rounded disabled:opacity-40`}
					>
						{index + 1}
					</button>
				))}

			<button
				onClick={nextPage}
				disabled={page === totalPages}
				className='bg-primary-100 transition-colors text-primary-300 font-primary font-bold w-10 h-10 rounded enabled:hover:bg-primary-200 disabled:opacity-40'
			>
				<FaArrowRight className='mx-auto' title='Next' />
			</button>
		</div>
	);
}

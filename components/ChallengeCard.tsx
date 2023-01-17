import Link from 'next/link';

const ChallengeCard = () => {
	return (
		<div className='bg-white px-6 py-4 space-y-2 w-full rounded-lg shadow-md'>
			<h2 className='font-primary text-primary-300 font-bold text-xl'>
				Even Hundred 💯
			</h2>
			<p className='font-secondary leading-loose'>
				Challenge: Take a range of numbers for a user and output all numbers
				within that range.
			</p>
			<p className='font-secondary leading-loose'>
				Even numbers should be displayed in bold.
			</p>
			<Link
				href='/challenges/even-hundred'
				className='bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1 w-fit'
			>
				Explore Challenge
			</Link>
		</div>
	);
};

export default ChallengeCard;

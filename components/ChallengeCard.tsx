import Link from 'next/link';

const ChallengeCard = () => {
	return (
		<div className='bg-white px-6 py-4 space-y-2 w-full rounded-lg shadow-md'>
			<h2 className='font-primary text-primary-300 font-bold text-xl'>
				Even Hundred 💯
			</h2>
			<p className='font-secondary leading-loose'>
				Challenge: Create a program that accepts a start value and end value
				from a user. Generate all the numbers inbetween these two values.
				Finally, display the numbers and output any even numbers in bold.
			</p>
			<Link
				href='/challenges/even-hundred'
				className='bg-primary-100 mt-2 hover:bg-primary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold w-fit'
			>
				Explore Challenge
			</Link>
		</div>
	);
};

export default ChallengeCard;

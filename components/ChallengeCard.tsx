import Image from 'next/image';
import Link from 'next/link';

const ChallengeCard = () => {
	return (
		<div className='bg-white px-6 py-4 space-y-2 w-full rounded-lg shadow-md'>
			<h2 className='font-primary text-primary-300 font-bold text-xl'>
				Palindrome Checker 🚀
			</h2>
			<p className='font-secondary leading-loose'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eius
				voluptate quibusdam deserunt beatae qui. Vel impedit sed eligendi sequi.
			</p>
			<p className='font-secondary leading-loose'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, vitae.
			</p>
			<Link
				href='/challenges/palindrome-checker'
				className='bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1 w-fit'
			>
				Explore Challenge
			</Link>
		</div>
	);
};

export default ChallengeCard;

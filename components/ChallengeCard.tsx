import Link from 'next/link';

import IChallenge from '../interfaces/IChallenge';
import Tech from '../types/Tech';

const ChallengeCard = ({ challenge }: { challenge: IChallenge }) => {
	const { title, description, tech, link } = challenge;
	return (
		<div className='bg-white px-6 py-4 flex flex-col gap-3 w-full rounded-lg shadow-md'>
			<div className='flex items-center justify-between flex-wrap gap-3'>
				<h2 className='font-primary text-primary-300 font-bold text-xl'>
					{title}
				</h2>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col gap-5 justify-between items-center'>
						{tech.map(
							(t: Tech): JSX.Element => (
								<span
									key={t}
									className='font-secondary text-xs text-light font-bold bg-primary-300 rounded-md px-2 py-1'
								>
									{t}
								</span>
							)
						)}
					</div>
				</div>
			</div>
			<p className='font-secondary leading-loose text-dark'>
				<span className='font-bold'>Challenge:</span> {description}
			</p>
			<Link
				href={link}
				className='block mt-4 bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-md px-3 py-2 font-primary font-semibold w-fit'
			>
				Explore Challenge
			</Link>
		</div>
	);
};

export default ChallengeCard;

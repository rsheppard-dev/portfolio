import Link from 'next/link';

import Challenge from '../interfaces/Challenge';

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
	const { title, description, blurb, mainLanguage, slug } = challenge;

	return (
		<div className='bg-white px-6 py-4 flex flex-col gap-3 w-full rounded-lg shadow-md'>
			<div className='flex justify-between gap-3'>
				<h2 className='font-primary text-primary-300 font-bold text-xl'>
					{title}
				</h2>
				<div>
					<div className='font-secondary text-xs text-light font-bold bg-primary-300 rounded-md px-2 py-1'>
						{mainLanguage}
					</div>
				</div>
			</div>
			<div className='font-secondary text-dark prose max-w-none'>
				{/* if blurb show it or show first paragraph of description */}
				{blurb ? blurb : description[0].children[0].text}
			</div>
			<Link
				href={'/challenges/' + slug}
				className='block mt-2 bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-md px-3 py-2 font-primary font-semibold w-fit'
			>
				View Challenge
			</Link>
		</div>
	);
};

export default ChallengeCard;

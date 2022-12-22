import Image from 'next/image';

const ChallengeCard = () => {
	return (
		<div className='w-72 h-96 group perspective'>
			{/* card */}
			<div className='w-full h-full relative group-hover:cursor-pointer group-hover:rotate-y-180 transition-transform duration-1000 preserve-3d'>
				{/* front of card */}
				<div className='h-full w-full flex items-center justify-center absolute bg-yellow-500 rounded-lg shadow-md'>
					<div className='bg-red-500 h-20 w-20 rounded-full'></div>
				</div>

				{/* back of card */}
				<div className='h-full w-full absolute bg-primary-300 rounded-lg shadow-md rotate-y-180 backface-invisible px-6 py-3'>
					<h3 className='my-10 text-center text-light font-bold text-xl'>
						Racecar
					</h3>
					<p className='font-secondary text-light'>
						Additional information about coding challenge.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChallengeCard;

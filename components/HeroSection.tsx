import Image from 'next/image';

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const HeroSection = () => {
	return (
		<section className='container pt-16 pb-10 md:pb-20 relative'>
			<div className='flex flex-col md:flex-row justify-between gap-10'>
				<div className='w-full lg:w-3/5'>
					<h1 className='text-center md:text-start mb-10 text-4xl md:text-5xl text-light font-primary font-bold subpixel-antialiased leading-snug md:leading-snug'>
						I am a full-stack developer that uses code to build cool and amazing
						things!
					</h1>

					<div className='flex gap-5 justify-center md:justify-start'>
						<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-primary-300 xs:text-lg md:text-xl font-semibold font-primary px-4 py-2 rounded-lg'>
							View My Work
						</button>
						<button className='bg-primary-100 hover:bg-primary-200 transition-colors text-primary-300 xs:text-lg md:text-xl font-semibold font-primary px-4 py-2 rounded-lg'>
							Download CV
						</button>
					</div>
				</div>

				<div className='justify-center flex mt-16 md:mt-0 md:flex-col gap-10 z-10'>
					<a
						target='_blank'
						href='https://github.com/rsheppard-dev'
						rel='noopener noreferrer'
					>
						<FaGithub
							title='GitHub'
							className='text-light text-4xl opacity-60 hover:opacity-100 transition-opacity'
						/>
					</a>

					<a
						target='_blank'
						href='https://www.linkedin.com/in/roy-sheppard'
						rel='noopener noreferrer'
					>
						<FaLinkedin
							title='LinkedIn'
							className='text-light text-4xl opacity-60 hover:opacity-100 transition-opacity'
						/>
					</a>

					<a
						target='_blank'
						href='https://twitter.com/rsheppard_dev'
						rel='noopener noreferrer'
					>
						<FaTwitter
							title='Twitter'
							className='text-light text-4xl opacity-60 hover:opacity-100 transition-opacity'
						/>
					</a>

					<a
						target='_blank'
						href='https://www.youtube.com/@roysheppard-dev'
						rel='noopener noreferrer'
					>
						<FaYoutube
							title='YouTube'
							className='text-light text-4xl opacity-60 hover:opacity-100 transition-opacity'
						/>
					</a>
				</div>
			</div>

			<div className='hidden lg:block absolute bottom-0 right-3 w-[35rem] h-[25rem]'>
				<Image
					src='/img/roy-sheppard-profile.png'
					alt='Roy Sheppard'
					fill
					priority={true}
					sizes='(min-width: 1024px) 40vw'
					className='object-contain object-bottom'
				/>
			</div>
		</section>
	);
};

export default HeroSection;

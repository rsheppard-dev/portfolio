import displayIcon from "../utils/displayIcon";

const AboutSection = () => {
	return (
		<article className='bg-light min-w-screen'>
			<div className='container py-16 space-y-4'>
				<div className='grid md:block text-dark space-y-6 font-primary'>
					<img
						src='https://res.cloudinary.com/roy-sheppard-digital/image/upload/v1685882193/roy_sheppard_family_vk9i12.jpg'
						alt='Roy Sheppard Family Photo'
						className='order-last mt-6 md:mt-0 md:order-none float-right position-cover rounded-lg shadow-md md:w-72 mb-4 md:ml-4'
					/>

					<h2 className='font-primary text-primary-300 font-bold text-2xl'>
						Hi there, I'm Roy 👍
					</h2>
					<p>
						I am a full-stack web developer who lives in Watford with my wife
						Emily and four boys, Jacob, Dexter, Teddy and Ronnie.
					</p>

					<h2 className='font-primary text-primary-300 font-bold text-2xl'>
						How did I get into web development?
					</h2>

					<p>
						I have been programming for over two years now and taught myself by
						going through Free Code Camp's cirriculum, multiple Udemy courses
						and Coder Foundry's self-paced course.
					</p>
					<p>
						I began doing freelance projects for local businesses via{' '}
						<a
							href='https://roysheppard.digital'
							target='_blank'
							className='text-primary-300 hover:text-primary-200 transition-color'
						>
							Roy Sheppard Digital
						</a>{' '}
						from standard marketing sites, to more complex sites including full
						user registation systems, connecting to third party APIs and
						whatever other custom functionality the client needed.
					</p>
				</div>

				<div className='space-y-4'>
					<h2 className='font-primary text-primary-300 font-bold text-2xl mb-6'>
						Some of the tech I love working with
					</h2>

					<div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-10'>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('HTML5', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								HTML5
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('CSS3', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								CSS3
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('TailwindCSS', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								TailwindCSS
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('JavaScript', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								JavaScript
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('TypeScript', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								TypeScript
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('React', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								React
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('NextJS', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								NextJS
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('NodeJS', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								NodeJS
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('C#', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								C#
							</span>
						</div>
						<div className='flex flex-col items-center gap-3'>
							{displayIcon('.NET', 'text-dark text-5xl', true)}
							<span className='bg-primary-300 font-primary px-2 py-1 rounded text-light text-sm'>
								.NET
							</span>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default AboutSection;

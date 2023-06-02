'use client';

import Breadcrumbs from '../../../components/Breadcrumbs';
import displayIcon from '../../../utils/displayIcon';

const About = () => {
	return (
		<section>
			<div className='container'>
				<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
					About Me
				</h1>

				<Breadcrumbs />
			</div>

			<article className='bg-light min-w-screen'>
				<div className='container py-16'>
					<span className='text-dark prose max-w-none'>
						<h2 className='font-primary text-primary-300 font-bold text-2xl'>
							Hi there, I'm Roy 👍
						</h2>
						<p className='font-secondary text-lg'>
							I am a creative and enthusiastic web developer. I live in Watford,
							England with my wife and four sons.
						</p>

						<h2 className='font-primary text-primary-300 font-bold text-2xl'>
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

						<h2 className='font-primary text-primary-300 font-bold text-2xl'>
							How did I get into web development?
						</h2>
					</span>
				</div>
			</article>
		</section>
	);
};

export default About;

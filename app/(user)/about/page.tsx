'use client';

import Breadcrumbs from '../../../components/Breadcrumbs';

const About = () => {
	return (
		<section>
			<div className='container'>
				<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
					About Me
				</h1>

				<Breadcrumbs />
			</div>

			<article className='bg-light min-h-screen min-w-screen'>
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

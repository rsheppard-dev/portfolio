const AboutSection = () => {
	return (
		<section className='bg-light py-16 prose max-w-none'>
			<div className='container'>
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
					going through Free Code Camp's cirriculum, multiple Udemy courses and
					Coder Foundry's self-paced course.
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
					user registation systems, connecting to third party APIs and other
					custom functionality.
				</p>
			</div>
		</section>
	);
};

export default AboutSection;

import Link from 'next/link';

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Logo } from './SVGs';

const Footer = () => {
	return (
		<footer className='bg-dark w-full py-8'>
			<div className='container'>
				<div className='flex flex-col sm:flex-row justify-between items-center gap-5'>
					<Link href='/'>
						<Logo title='Roy Sheppard Logo' className='fill-light w-40' />
					</Link>

					<div className='flex gap-5'>
						<a
							target='_blank'
							href='https://github.com/rsheppard-dev'
							rel='noopener noreferrer'
						>
							<FaGithub
								title='GitHub'
								className='text-light text-3xl opacity-60 hover:opacity-100 transition-opacity'
							/>
						</a>

						<a
							target='_blank'
							href='https://www.linkedin.com/in/roy-sheppard'
							rel='noopener noreferrer'
						>
							<FaLinkedin
								title='LinkedIn'
								className='text-light text-3xl opacity-60 hover:opacity-100 transition-opacity'
							/>
						</a>

						<a
							target='_blank'
							href='https://twitter.com/rsheppard_dev'
							rel='noopener noreferrer'
						>
							<FaTwitter
								title='Twitter'
								className='text-light text-3xl opacity-60 hover:opacity-100 transition-opacity'
							/>
						</a>

						<a
							target='_blank'
							href='https://www.youtube.com/@roysheppard-dev'
							rel='noopener noreferrer'
						>
							<FaYoutube
								title='YouTube'
								className='text-light text-3xl opacity-60 hover:opacity-100 transition-opacity'
							/>
						</a>
					</div>

					<div className='text-light font-secondary sm:order-first'>
						© 2023 Roy Sheppard
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

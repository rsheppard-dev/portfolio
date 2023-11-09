import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import getAboutContent from '../queries/getAboutContent';
import displayIcon from '../utils/displayIcon';

const AboutSection = async () => {
	const { content } = await getAboutContent();
	return (
		<article className='bg-light min-w-screen'>
			<div className='container py-16 space-y-4'>
				<div className='grid md:block text-dark space-y-6 font-primary'>
					<div className='relative overflow-hidden order-last mt-6 md:mt-0 md:order-none float-right rounded-lg shadow-md w-full h-96 md:w-72 mb-4 md:ml-4'>
						<Image
							src='https://res.cloudinary.com/roy-sheppard-digital/image/upload/v1685882193/roy_sheppard_family_vk9i12.jpg'
							alt='Roy Sheppard Family Photo'
							className='object-cover'
							fill
							sizes='(min-width: 780px) 288px, (min-width: 640px) 608px, (min-width: 420px) 343px, calc(75vw + 43px)'
						/>
					</div>

					<div className='prose max-w-none w-full prose-h2:text-primary-300 prose-h2:font-primary prose-h2:font-bold prose-h2:text-2xl prose-p:font-secondary space-y-4'>
						<PortableText value={content} />
					</div>
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

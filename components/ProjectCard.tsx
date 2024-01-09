import { PortableText } from '@portabletext/react';

import { FaLaptop, FaGithub } from 'react-icons/fa';
import { Project } from '../interfaces/Project';

import displayIcon from '../utils/displayIcon';
import ReadMe from './ReadMe';
import SanityImage from './SanityImage';

const ProjectCard = ({
	project,
	rightAlign = true,
}: {
	project: Project;
	rightAlign?: boolean;
}) => {
	const {
		title,
		description,
		logo,
		readMe,
		techStack,
		privateRepo,
		live,
		github,
	} = project;

	return (
		<div
			className={`flex flex-col ${
				rightAlign ? 'md:flex-row' : 'md:flex-row-reverse'
			} justify-between gap-10 mb-20`}
		>
			<a
				href={live}
				target='_blank'
				className='flex items-center justify-center md:w-2/5 my-10 md:my-0'
			>
				<SanityImage value={logo} />
			</a>

			<div className='md:w-3/5'>
				<h3 className='mb-5 font-primary text-light font-bold text-xl'>
					{title}
				</h3>

				<div className='flex flex-wrap gap-5 mb-5'>
					<ReadMe readMe={readMe} />
					<a
						href={github}
						target='_blank'
						className={`${
							privateRepo && 'pointer-events-none opacity-40'
						} relative bg-secondary-100 enabled:hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1`}
					>
						<span>Code</span>
						<FaGithub title='Github Repo' />
					</a>
					<a
						href={live}
						target='_blank'
						className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'
					>
						<span>Live</span>
						<FaLaptop title='View Live Site' />
					</a>
				</div>

				<div className='font-secondary text-light prose max-w-none mb-5'>
					<PortableText value={description} />
				</div>

				<div className='flex gap-5 items-center mb-5'>
					<h4 className='font-primary font-bold text-light whitespace-nowrap'>
						Tech Stack
					</h4>
					<span className='w-full h-[1px] bg-light' />
				</div>

				<div className='flex flex-wrap items-center gap-5 mb-5'>
					{techStack?.map(
						(t: string): JSX.Element => (
							<div
								key={t}
								className='flex flex-col gap-5 justify-center items-center'
							>
								{displayIcon(t)}
								<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
									{t}
								</span>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

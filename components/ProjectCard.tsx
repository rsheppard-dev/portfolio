import { FaBook, FaLaptop, FaGithub } from 'react-icons/fa';

import displayIcon from '../utils/displayIcon';

const ProjectCard = ({
	project,
	rightAlign = true,
}: {
	project: any;
	rightAlign?: boolean;
}) => {
	const { title, description, image, tech, links } = project;

	return (
		<div
			className={`flex flex-col ${
				rightAlign ? 'md:flex-row' : 'md:flex-row-reverse'
			} justify-between gap-10 mb-20`}
		>
			<div className='flex items-center justify-center md:w-2/5 my-10 md:my-0'>
				<div className='rounded-lg h-48 w-48 bg-red-500 rotate-45'></div>
			</div>

			<div className='md:w-3/5'>
				<h3 className='mb-5 font-primary text-light font-bold text-xl'>
					{title}
				</h3>

				<div className='flex flex-wrap gap-5 mb-5'>
					<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
						<span>Read Me</span>
						<FaBook />
					</button>
					<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
						<span>Code</span>
						<FaGithub />
					</button>
					<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
						<span>Live</span>
						<FaLaptop />
					</button>
				</div>

				<p className='font-secondary text-light leading-loose mb-5'>
					{description}
				</p>

				<div className='flex gap-5 items-center mb-5'>
					<h4 className='font-primary font-bold text-light whitespace-nowrap'>
						Tech Stack
					</h4>
					<span className='w-full h-[1px] bg-light' />
				</div>

				<div className='flex flex-wrap items-center gap-5 mb-5'>
					{tech.map(
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

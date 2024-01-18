import ProjectCard from './ProjectCard';
import getProjects from '../queries/getProjects';
import { Project } from '../interfaces/Project';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

async function ProjectsSection() {
	const { data: projects }: { data: Project[] } = await getProjects(3);
	return (
		<section className='container py-16'>
			<h2 className='mb-16 font-primary text-light font-bold text-4xl'>
				Projects
			</h2>

			{projects.map(
				(project, index): JSX.Element => (
					<ProjectCard
						key={project.title}
						project={project}
						rightAlign={index % 2 === 0 ? false : true}
					/>
				)
			)}

			<div className='flex justify-end w-full'>
				<Link
					href='/projects'
					className='text-sm bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-md px-3 py-2 font-primary font-semibold whitespace-nowrap flex gap-2 items-center'
				>
					View All <FaArrowRight title='View All Projects' />
				</Link>
			</div>
		</section>
	);
}

export default ProjectsSection;

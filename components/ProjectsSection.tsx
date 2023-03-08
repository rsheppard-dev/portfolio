import ProjectCard from './ProjectCard';
import getProjects from '../queries/getProjects';
import Project from '../interfaces/Project';

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
		</section>
	);
}

export default ProjectsSection;

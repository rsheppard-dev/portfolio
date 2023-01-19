import { FaBook, FaGithub, FaLaptop, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiCsharp } from 'react-icons/si';
import ProjectCard from './ProjectCard';
import projectData from '../data/projectData';
import { ReactElement } from 'react';

const ProjectsSection = () => {
	return (
		<section className='container py-16'>
			<h2 className='mb-16 font-primary text-light font-bold text-4xl'>
				Projects
			</h2>

			{projectData.map(
				(project, index): ReactElement => (
					<ProjectCard
						key={project.title}
						project={project}
						rightAlign={index % 2 === 0 ? false : true}
					/>
				)
			)}
		</section>
	);
};

export default ProjectsSection;

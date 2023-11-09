'use client';
import { useState } from 'react';

import { useQuery } from 'react-query';

import Breadcrumbs from '../../../components/Breadcrumbs';
import { Project } from '../../../interfaces/Project';
import getProjects from '../../../queries/getProjects';
import ProjectCard from '../../../components/ProjectCard';
import Paginatation from '../../../components/Paginatation';

const Projects = () => {
	const [page, setPage] = useState(1);

	const resultsPerPage = 1;

	const {
		isLoading,
		isError,
		error,
		isPreviousData,
		data: projects,
	} = useQuery({
		queryKey: ['projects', page],
		queryFn: async () => await getProjects(resultsPerPage, page),
		keepPreviousData: true,
	});

	const totalPages = Math.ceil(
		parseInt(String(projects?.totalResults)) / resultsPerPage
	);
	return (
		<section className='container'>
			<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				Web Development Projects
			</h1>

			<Breadcrumbs />

			{isLoading ? (
				<h2 className='mt-16 mb-5 font-primary text-light font-bold text-xl'>
					Loading challenges...
				</h2>
			) : isError ? (
				<>
					<h2 className='mt-16 mb-5 font-primary text-light font-bold text-xl'>
						Sorry, something went wrong.
					</h2>
					<pre className='font-secondary text-light'>
						{error instanceof Error && JSON.stringify(error.message)}
					</pre>
				</>
			) : (
				<>
					{projects?.data?.map(
						(project: Project, index: number): JSX.Element => (
							<ProjectCard
								key={project.title}
								project={project}
								rightAlign={index % 2 === 0 ? false : true}
							/>
						)
					)}

					{totalPages > 1 && (
						<Paginatation
							totalPages={totalPages}
							page={page}
							setPage={setPage}
							isPreviousData={isPreviousData}
						/>
					)}
				</>
			)}
		</section>
	);
};

export const revalidate = 60;

export default Projects;

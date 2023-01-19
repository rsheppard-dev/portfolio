import Tech from '../types/Tech';

interface IProject {
	title: string;
	description: string;
	image: string;
	tech: Tech[];
	links: {
		readme: string;
		github: string;
		live: string;
	};
}

export default IProject;

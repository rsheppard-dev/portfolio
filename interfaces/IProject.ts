import Image from './Image';

interface IProject {
	title: string;
	description: string;
	image: Image;
	tech: [];
	links: {
		readme: string;
		github: string;
		live: string;
	};
}

export default IProject;

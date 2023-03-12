import Block from './Block';
import Image from './Image';

interface Project {
	_createdAt: Date;
	_updatedAt: Date;
	_id: string;
	_rev: string;
	_type: 'project';
	title: string;
	logo: Image;
	description: Block[];
	techStack: string[];
	readMe: string;
	slug: string;
	privateRepo: boolean;
	github: string;
	live: string;
}

export default Project;

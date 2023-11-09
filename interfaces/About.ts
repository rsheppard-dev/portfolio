import Block from './Block';

interface About {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: 'about';
	_updatedAt: Date;
	content: Block[];
}

export default About;

import Block from './Block';
import Code from './Code';

interface Challenge {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: 'challenge';
	_updatedAt: Date;
	title: string;
	description: Block[];
	blurb: string;
	code: Code;
	features: string[];
	techStack: string[];
	mainLanguage: string;
	slug: string;
	url: string;
}

export default Challenge;

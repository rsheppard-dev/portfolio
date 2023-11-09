import Block from './Block';
import Code from './Code';

export interface Challenges {
	data: Challenge[];
	totalResults: number;
}

export interface Challenge {
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

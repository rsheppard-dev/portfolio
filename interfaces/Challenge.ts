import { SanityDocument, TypedObject } from 'sanity';
import Code from './Code';

interface Challenge extends SanityDocument {
	title: string;
	description: TypedObject | TypedObject[];
	code: Code;
	features: string[];
	techStack: string[];
	mainLanguage: string;
	slug: string;
	url: string;
}

export default Challenge;

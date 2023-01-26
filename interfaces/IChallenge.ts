import Tech from '../types/Tech';

interface IChallenge {
	title: string;
	description: string;
	features: string[];
	tech: Tech[];
	slug: string;
	live: string;
	code: string[];
}

export default IChallenge;

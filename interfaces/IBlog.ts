import Image from './Image';

interface IBlog {
	title: string;
	description: string;
	image: Image;
	date: Date;
	slug: string;
}

export default IBlog;

import Image from './Image';

interface Blog {
	title: string;
	description: string;
	image: Image;
	date: Date;
	slug: string;
}

export default Blog;

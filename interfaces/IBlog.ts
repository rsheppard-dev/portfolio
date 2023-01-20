interface IBlog {
	title: string;
	description: string;
	image: {
		src: string;
		width: string | number;
		height: string | number;
	};
	date: Date;
	slug: string;
}

export default IBlog;

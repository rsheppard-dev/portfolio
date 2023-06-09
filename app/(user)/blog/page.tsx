'use client';

import Breadcrumbs from '../../../components/Breadcrumbs';

const Blog = () => {
	return (
		<section className='container'>
			<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
				My Blog Posts
			</h1>

			<Breadcrumbs />
		</section>
	);
};

export const revalidate = 60;

export default Blog;

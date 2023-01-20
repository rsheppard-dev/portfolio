import { ReactElement } from 'react';

import BlogCard from './BlogCard';
import blogData from '../data/blogData';
import IBlog from '../interfaces/IBlog';

const BlogSection = () => {
	return (
		<section className='bg-light py-16'>
			<div className='container'>
				<h2 className='mb-16 font-primary text-primary-300 font-bold text-4xl'>
					Latest Blog Posts
				</h2>

				<ul className='list-none flex overflow-x-scroll pb-10 gap-10 snap-x scrollbar'>
					{blogData.map(
						(blog: IBlog): ReactElement => (
							<li key={blog.title} className='snap-start'>
								<BlogCard blog={blog} />
							</li>
						)
					)}
				</ul>
			</div>
		</section>
	);
};

export default BlogSection;

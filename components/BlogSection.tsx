import BlogCard from './BlogCard';

const BlogSection = () => {
	return (
		<section className='bg-light py-16'>
			<div className='container'>
				<h2 className='mb-16 font-primary text-primary-300 font-bold text-4xl'>
					Latest Blog Posts
				</h2>

				<ul className='list-none flex overflow-x-scroll pb-10 gap-10 snap-x scrollbar'>
					<li className='snap-start'>
						<BlogCard />
					</li>
					<li className='snap-start'>
						<BlogCard />
					</li>
					<li className='snap-start'>
						<BlogCard />
					</li>
					<li className='snap-start'>
						<BlogCard />
					</li>
					<li className='snap-start'>
						<BlogCard />
					</li>
					<li className='snap-start'>
						<BlogCard />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default BlogSection;

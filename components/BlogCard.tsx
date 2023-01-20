import Image from 'next/image';
import Link from 'next/link';

import { FaBookOpen } from 'react-icons/fa';
import { format } from 'date-fns';

import IBlog from '../interfaces/IBlog';

const BlogCard = ({ blog }: { blog: IBlog }) => {
	const { title, description, image, date, slug } = blog;
	return (
		<div className='bg-white rounded-lg w-72 overflow-hidden flex flex-col min-h-full'>
			<div className='bg-red-400 h-48 w-full'></div>
			<div className='flex-grow px-6 py-4 flex flex-col gap-5 '>
				<h3 className='text-primary-300 font-primary font-bold text-xl'>
					{title}
				</h3>

				<div className='flex-grow font-secondary text-dark'>{description}</div>

				<div className='flex justify-between items-center'>
					<div className='font-secondary text-gray-600 text-sm'>
						<>- {format(date, 'MMM Mo yy')}</>
					</div>

					<div>
						<Link
							href={'/blog/' + slug}
							className='bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-md px-3 py-2 font-primary font-semibold whitespace-nowrap'
						>
							Read <FaBookOpen className='inline-block align-middle' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;

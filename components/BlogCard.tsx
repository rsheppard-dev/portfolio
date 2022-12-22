import Image from 'next/image';

import { FaBookOpen } from 'react-icons/fa';

const BlogCard = () => {
	return (
		<div className='bg-white rounded-lg w-72 overflow-hidden'>
			<div className='bg-red-400 h-48 w-full'></div>
			<div className='px-6 py-3 flex flex-col gap-5'>
				<h3 className='text-primary-300 font-primary font-bold text-xl'>
					How I made my blog with C# and .NET
				</h3>
				<p className='font-secondary text-dark'>
					How to use C# and .NET to create your own blog.
				</p>
				<div className='flex justify-between items-center'>
					<div className='font-secondary text-gray-600 text-sm'>
						- Jan 15th 2023
					</div>

					<div>
						<button className='bg-primary-100 hover:bg-primary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold'>
							Read <FaBookOpen className='inline-block align-middle' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;

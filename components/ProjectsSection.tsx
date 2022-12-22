import { FaBook, FaGithub, FaLaptop, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiCsharp } from 'react-icons/si';

const ProjectsSection = () => {
	return (
		<section className='container py-16'>
			<h2 className='mb-16 font-primary text-light font-bold text-4xl'>
				Projects
			</h2>

			<div className='flex flex-col md:flex-row justify-between gap-10 mb-20'>
				<div className='flex items-center justify-center md:w-2/5 my-10 md:my-0'>
					<div className='rounded-lg h-48 w-48 bg-red-500 rotate-45'></div>
				</div>

				<div className='md:w-3/5'>
					<h3 className='mb-5 font-primary text-light font-bold text-xl'>
						Bug Crunch
					</h3>

					<div className='flex flex-wrap gap-5 mb-5'>
						<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
							<span>Read Me</span>
							<FaBook />
						</button>
						<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
							<span>Code</span>
							<FaGithub />
						</button>
						<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
							<span>Live</span>
							<FaLaptop />
						</button>
					</div>

					<p className='font-secondary text-light leading-loose mb-5'>
						A full-scale enterprise web application. Used by teams to help find,
						track and fix bugs in their applications.
					</p>

					<div className='flex gap-5 items-center mb-5'>
						<h4 className='font-primary font-bold text-light whitespace-nowrap'>
							Tech Stack
						</h4>
						<span className='w-full h-[1px] bg-light' />
					</div>

					<div className='flex flex-wrap items-center gap-5 mb-5'>
						<div className='flex flex-col gap-5 justify-center items-center'>
							<FaHtml5 title='HTML5' className='text-light text-3xl' />
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								HTML5
							</span>
						</div>

						<div className='flex flex-col gap-5 justify-center items-center'>
							<FaCss3Alt title='CSS3' className='text-light text-3xl' />
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								CSS3
							</span>
						</div>

						<div className='flex flex-col gap-5 justify-center items-center'>
							<SiJavascript
								title='JavaScript'
								className='text-light text-3xl'
							/>
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								JavaScript
							</span>
						</div>

						<div className='flex flex-col gap-5 justify-center items-center'>
							<SiCsharp title='C#' className='text-light text-3xl' />
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								C#
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col md:flex-row-reverse gap-10 justify-between mb-10'>
				<div className='flex items-center justify-center md:w-2/5'>
					<div className='rounded-lg h-48 w-48 bg-purple-500 rotate-45 my-10'></div>
				</div>

				<div className='md:w-3/5'>
					<h3 className='mb-5 font-primary text-light font-bold text-xl'>
						Movie Contender
					</h3>

					<div className='flex flex-wrap gap-5 mb-5'>
						<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
							<span>Read Me</span>
							<FaBook />
						</button>
						<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
							<span>Code</span>
							<FaGithub />
						</button>
						<button className='bg-secondary-100 hover:bg-secondary-200 transition-colors text-secondary-300 rounded-lg px-3 py-2 font-primary font-semibold flex items-center gap-1'>
							<span>Live</span>
							<FaLaptop />
						</button>
					</div>

					<p className='font-secondary text-light leading-loose mb-5'>
						An application that connects to a movie API and generates a quiz
						based on the response.
					</p>

					<div className='flex gap-5 items-center mb-5'>
						<h4 className='font-primary font-bold text-light whitespace-nowrap'>
							Tech Stack
						</h4>
						<span className='w-full h-[1px] bg-light' />
					</div>

					<div className='flex flex-wrap items-center gap-5 mb-5'>
						<div className='flex flex-col gap-5 justify-center items-center'>
							<FaHtml5 title='HTML5' className='text-light text-3xl' />
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								HTML5
							</span>
						</div>

						<div className='flex flex-col gap-5 justify-center items-center'>
							<FaCss3Alt title='CSS3' className='text-light text-3xl' />
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								CSS3
							</span>
						</div>

						<div className='flex flex-col gap-5 justify-center items-center'>
							<SiJavascript
								title='JavaScript'
								className='text-light text-3xl'
							/>
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								JavaScript
							</span>
						</div>

						<div className='flex flex-col gap-5 justify-center items-center'>
							<SiCsharp title='C#' className='text-light text-3xl' />
							<span className='font-secondary text-xs text-light font-bold bg-dark rounded-md px-2 py-1'>
								C#
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;

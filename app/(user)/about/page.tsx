import AboutSection from '../../../components/AboutSection';
import Breadcrumbs from '../../../components/Breadcrumbs';

const About = () => {
	return (
		<section>
			<div className='container'>
				<h1 className='mt-16 mb-5 font-primary text-light font-bold text-4xl'>
					About Me
				</h1>

				<Breadcrumbs />
			</div>
			{/* ts-expect-error Async Server Component */}
			<AboutSection />
		</section>
	);
};

export default About;

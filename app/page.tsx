import BlogSection from '../components/BlogSection';
import ChallengesSection from '../components/ChallengesSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<BlogSection />
			<ProjectsSection />
			{/* @ts-expect-error Server Component */}
			<ChallengesSection />
			<ContactSection />
		</>
	);
}

import AboutSection from '../../components/AboutSection';
import ChallengesSection from '../../components/ChallengesSection';
import ContactSection from '../../components/ContactSection';
import HeroSection from '../../components/HeroSection';
import ProjectsSection from '../../components/ProjectsSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			{/* ts-expect-error Async Server Component */}
			<ProjectsSection />
			{/* ts-expect-error Async Server Component */}
			<ChallengesSection />
			<ContactSection />
		</>
	);
}

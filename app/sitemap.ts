import { MetadataRoute } from 'next';
import getChallenges from '../queries/getChallenges';
import getProjects from '../queries/getProjects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://www.roysheppard.dev';
	const challengeData = await getChallenges();
	const projectData = await getProjects();

	const routes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/challenges`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.8,
		},
	];

	const challenges = challengeData.data.map(challenge => {
		return {
			url: `${baseUrl}/challenges/${challenge.slug}`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.8,
		};
	});

	const projects = projectData.data.map(project => {
		return {
			url: `${baseUrl}/projects/${project.slug}`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.8,
		};
	});

	return [...routes, ...challenges, ...projects];
}

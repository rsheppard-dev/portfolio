import {
	SiHtml5,
	SiCss3,
	SiBootstrap,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiCsharp,
	SiTailwindcss,
	SiNextdotjs,
} from 'react-icons/si';

// function that takes a tech name and converts it to an icon
const displayIcon = (
	tech: string,
	className: string = 'text-3xl text-light',
	colour: boolean = false
): JSX.Element => {
	switch (tech) {
		case 'HTML5':
			return (
				<SiHtml5
					title={tech}
					className={`${className} ${colour && 'text-orange-600'}`}
				/>
			);
		case 'CSS3':
			return (
				<SiCss3
					title={tech}
					className={`${className} ${colour && 'text-blue-500'}`}
				/>
			);
		case 'JavaScript':
			return (
				<SiJavascript
					title={tech}
					className={`${className} ${colour && 'text-yellow-500'}`}
				/>
			);
		case 'TypeScript':
			return (
				<SiTypescript
					title={tech}
					className={`${className} ${colour && 'text-blue-500'}`}
				/>
			);
		case 'C#':
			return (
				<SiCsharp
					title={tech}
					className={`${className} ${colour && 'text-purple-500'}`}
				/>
			);
		case 'React':
			return (
				<SiReact
					title={tech}
					className={`${className} ${colour && 'text-sky-500'}`}
				/>
			);
		case 'NextJS':
			return (
				<SiNextdotjs
					title={tech}
					className={`${className} ${colour && 'text-gray-800'}`}
				/>
			);
		case 'TailwindCSS':
			return (
				<SiTailwindcss
					title={tech}
					className={`${className} ${colour && 'text-sky-400'}`}
				/>
			);
		case 'Bootstrap':
			return (
				<SiBootstrap
					title={tech}
					className={`${className} ${colour && 'text-purple-500'}`}
				/>
			);
		default:
			throw new Error('Invalid tech input!');
	}
};

export default displayIcon;

export const sections = {
	experience: {
		title: "Experience",
		image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e",
		description:
			"A journey through my professional career in software development. Each role has shaped my expertise and contributed to my growth as an engineer.",
		items: [
			{
				title: "Senior Software Engineer at Tech Corp",
				duration: "2021 - Present",
				description:
					"Leading development of cloud-native applications using React, Node.js, and AWS. Mentoring junior developers and implementing CI/CD pipelines. Passionate about creating scalable solutions and fostering team growth.",
				technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
			},
			{
				title: "Full Stack Developer at Zaack",
				duration: "2019 - 2021",
				description:
					"Built and maintained multiple web applications with a focus on user experience and performance. Implemented real-time features using WebSocket and contributed to the company's technical architecture.",
				technologies: ["React.js", "Docker", "MySQL", "GCP", "Spring"],
			},
		],
	},
	skills: {
		title: "Skills",
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
		description:
			"My technical expertise spans across various technologies and domains. I'm passionate about learning new technologies and keeping up with industry trends.",
		items: [
			{
				title: "Frontend Development",
				duration: "Advanced",
				description:
					"Expertise in modern frontend frameworks and tools. I love creating beautiful, responsive, and accessible user interfaces. Music-inspired design is my specialty, bringing rhythm and harmony to user experiences.",
				technologies: [
					"React",
					"Next.js",
					"TypeScript",
					"Tailwind CSS",
					"Material UI",
				],
			},
			{
				title: "Backend Development",
				duration: "Advanced",
				description:
					"Strong backend development and API design skills. I focus on creating scalable and maintainable server-side applications with a passion for clean architecture.",
				technologies: [
					"Node.js",
					"Python",
					"RESTful APIs",
					"RCP",
					"Nest.js",
					"Docker",
					"Postgres",
					"GCP",
					"AWS",
				],
			},
		],
	},
	projects: {
		title: "Projects",
		image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
		description:
			"A showcase of my creative work and technical projects. Each project represents a unique challenge and learning experience.",
		items: [
			{
				title: "E-commerce Platform",
				duration: "2023",
				description:
					"Built a full-featured e-commerce platform with real-time inventory management. Inspired by my love for music, the UI features smooth transitions and rhythmic animations.",
				technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
			},
			{
				title: "Social Media Dashboard",
				duration: "2022",
				description:
					"Developed a social media analytics dashboard with real-time data visualization. The design incorporates musical elements in its data presentation.",
				technologies: ["React", "D3.js", "Node.js", "MongoDB"],
			},
		],
	},
	education: {
		title: "Education",
		image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
		description:
			"My academic journey has provided me with a strong foundation in computer science and software engineering.",
		items: [
			{
				title: "Master's in Computer Science",
				duration: "2018 - 2020",
				description:
					"Specialized in Artificial Intelligence and Machine Learning. Combined my passion for music with technology through projects in audio processing and music generation.",
				technologies: ["University of Technology"],
			},
			{
				title: "Bachelor's in Software Engineering",
				duration: "2014 - 2018",
				description:
					"Focus on Software Architecture and Design Patterns. Active member of the university's tech and music clubs, bridging my interests in both fields.",
				technologies: ["Tech Institute"],
			},
		],
	},
	contact: {
		title: "Contact",
		image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa",
		description:
			"Let's connect! I'm always excited to discuss new opportunities, tech, music, or anything interesting.",
		items: [
			{
				title: "Email",
				duration: "Primary",
				description: "hazim.benslimane@gmail.com",
				technologies: ["Available for collaborations and opportunities"],
			},
			{
				title: "LinkedIn",
				duration: "Social",
				description: "linkedin.com/in/hazimbenslimane",
				technologies: ["Connect with me for professional networking"],
			},
		],
	},
} as const;

export type SectionType = keyof typeof sections;

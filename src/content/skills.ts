import type { L } from "@/lib/locale";

export interface Skill {
	name: L;
	evidence: { label: string; href: string }[];
}

const same = (text: string): L => ({ en: text, fr: text });

const link = {
	korint: { label: "Korint", href: "/experience#korint" },
	zaack: { label: "Zaack", href: "/experience#zaack" },
	stuf: { label: "STUF", href: "/experience#stuf" },
	smartgarant: { label: "SmartGarant", href: "/experience#smartgarant" },
	wikissey: { label: "Wikissey", href: "/projects/wikissey" },
	reactor: { label: "Reactor Simulator", href: "/projects/reactor-simulator" },
};

// Each skill links only to roles or projects where the CV or the project source shows it.
export const skills: Skill[] = [
	{ name: same("TypeScript · React"), evidence: [link.korint, link.zaack, link.wikissey, link.reactor] },
	{ name: same("Go · Nakama · WebSockets"), evidence: [link.wikissey] },
	{ name: same("PostgreSQL · Redis"), evidence: [link.wikissey] },
	{ name: { en: "Payments and billing", fr: "Paiement et facturation" }, evidence: [link.stuf, link.korint] },
	{ name: same("Node.js · Express · OpenAPI"), evidence: [link.stuf] },
	{ name: same("Firebase · Vite"), evidence: [link.zaack] },
	{ name: same("Python · Keras"), evidence: [link.zaack] },
	{ name: same("Next.js · SEO"), evidence: [link.smartgarant] },
	{ name: { en: "Numerical simulation", fr: "Simulation numérique" }, evidence: [link.reactor] },
];

export const otherSkills: L = {
	en: "NestJS, SQL, AWS, Docker, Terraform, CI/CD, unit and E2E tests, Supabase, Java/Spring Boot",
	fr: "NestJS, SQL, AWS, Docker, Terraform, CI/CD, tests unitaires et E2E, Supabase, Java/Spring Boot",
};

// The CV's "Compétences techniques" block, group by group.
export const skillGroups: { name: L; items: L[] }[] = [
	{ name: same("Frontend"), items: ["TypeScript", "JavaScript", "React", "Next.js", "Vite"].map(same) },
	{
		name: same("Backend"),
		items: [...["Node.js", "NestJS", "Go", "Express"].map(same), { en: "REST APIs", fr: "API REST" }, same("WebSockets")],
	},
	{
		name: { en: "Data and cloud", fr: "Données et cloud" },
		items: ["PostgreSQL", "Redis", "SQL", "AWS", "Docker", "Terraform"].map(same),
	},
	{
		name: { en: "Quality", fr: "Qualité" },
		items: [
			{ en: "Unit and E2E tests", fr: "Tests unitaires et E2E" },
			same("CI/CD"),
			same("Git"),
			{ en: "Asynchronous workflows", fr: "Workflows asynchrones" },
		],
	},
	{
		name: { en: "Also", fr: "Autres" },
		items: ["Python", "Keras", "Firebase", "Supabase", "Java/Spring Boot"].map(same),
	},
];

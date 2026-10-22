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
	pr: { label: "PR Walkthrough", href: "/projects/pr-walkthrough" },
	reactor: { label: "Reactor Simulator", href: "/projects/reactor-simulator" },
	chalet: { label: "Chalet La Llyre", href: "/projects/chalet-la-llyre" },
};

// Each skill links only to roles or projects where the CV or the project source shows it.
export const skills: Skill[] = [
	{ name: same("TypeScript · React"), evidence: [link.korint, link.zaack, link.wikissey, link.pr, link.reactor] },
	{ name: same("Go · Nakama · WebSockets"), evidence: [link.wikissey] },
	{ name: same("PostgreSQL · Redis"), evidence: [link.wikissey] },
	{ name: { en: "Payments and billing", fr: "Paiement et facturation" }, evidence: [link.stuf, link.korint] },
	{ name: same("Node.js · Express · OpenAPI"), evidence: [link.stuf] },
	{ name: same("Firebase · Vite"), evidence: [link.zaack] },
	{ name: same("Python · Keras"), evidence: [link.zaack] },
	{ name: same("Next.js · SEO"), evidence: [link.smartgarant] },
	{ name: { en: "Static analysis (ts-morph)", fr: "Analyse statique (ts-morph)" }, evidence: [link.pr] },
	{ name: { en: "Numerical simulation", fr: "Simulation numérique" }, evidence: [link.reactor] },
	{ name: same("Astro"), evidence: [link.chalet] },
];

export const otherSkills: L = {
	en: "NestJS, SQL, AWS, Docker, Terraform, CI/CD, unit and E2E tests, Supabase, Java/Spring Boot",
	fr: "NestJS, SQL, AWS, Docker, Terraform, CI/CD, tests unitaires et E2E, Supabase, Java/Spring Boot",
};

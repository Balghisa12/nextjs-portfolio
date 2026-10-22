import type { L } from "@/lib/locale";
import portrait256 from "@/assets/portrait-256.webp";
import portrait512 from "@/assets/portrait-512.webp";

// Source for every field: CV_Hazim_2026_Design_FR.pdf (see docs/content-ledger.md).
export const profile = {
	name: "Hazim Benslimane",
	headline: {
		en: "Software Engineer · Full-stack · Paris",
		fr: "Software Engineer · Développeur full-stack · Paris",
	} satisfies L,
	context: {
		en: "Software Engineer at Korint · Co-founder of Wikissey",
		fr: "Software Engineer chez Korint · Cofondateur de Wikissey",
	} satisfies L,
	tagline: {
		en: "I build intuitive products and reliable systems — from insurance workflows to real-time multiplayer games.",
		fr: "Je conçois des produits intuitifs et des systèmes fiables, des outils d’assurance aux jeux multijoueurs en temps réel.",
	} satisfies L,
	summary: {
		en: "Product-minded full-stack engineer: I design intuitive interfaces and reliable backend services, from architecture to production. Experience in payments, internal tools and automation. Co-founder of Wikissey, a real-time multiplayer game whose community I run.",
		fr: "Ingénieur logiciel full-stack orienté produit : je conçois des interfaces intuitives et des services backend fiables, de l’architecture à la mise en production. Expérience en paiements, outils internes et automatisation. Cofondateur de Wikissey, jeu multijoueur temps réel dont j’anime la communauté.",
	} satisfies L,
	location: { en: "Paris, France", fr: "Paris, France" } satisfies L,
	languages: {
		en: "French and English: fluent · Arabic: native",
		fr: "Français et anglais : courants · Arabe : natif",
	} satisfies L,
	email: "hazim.benslimane@gmail.com",
	linkedin: "https://www.linkedin.com/in/hazim1",
	github: "https://github.com/Balghisa12",
	cv: "/cv/Hazim-Benslimane-CV-FR.pdf",
	portrait: { src: portrait256, srcSet: `${portrait256} 256w, ${portrait512} 512w` },
};

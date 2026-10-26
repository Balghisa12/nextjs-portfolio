import type { LucideIcon } from "lucide-react";
import {
	CalendarDays,
	CreditCard,
	Languages,
	LayoutDashboard,
	MessagesSquare,
	ShieldCheck,
	Sparkles,
	Trophy,
	Users,
	Zap,
} from "lucide-react";
import type { L } from "@/lib/locale";

export interface Highlight {
	icon: LucideIcon;
	title: L;
	body: L;
}

// Restates the CV; no metrics beyond it.
export const whatIDo: Highlight[] = [
	{
		icon: LayoutDashboard,
		title: { en: "Product interfaces", fr: "Interfaces produit" },
		body: {
			en: "React and TypeScript interfaces that make complex work simple: a multi-tenant back office for operations teams at Korint, a clearer IoT SaaS at Zaack, and an operation cut from five actions to one click.",
			fr: "Des interfaces React et TypeScript qui simplifient le travail complexe : un back-office multi-tenant pour les équipes opérationnelles chez Korint, un SaaS IoT plus clair chez Zaack, et une opération passée de cinq actions à un clic.",
		},
	},
	{
		icon: CreditCard,
		title: { en: "Payments and reliable backends", fr: "Paiements et backends fiables" },
		body: {
			en: "Billing regularization with balance calculation and duplicate checks, retries and recovery for asynchronous jobs, Stripe payments and APIs documented with OpenAPI.",
			fr: "Régularisations de facturation avec calcul des soldes et contrôles anti-doublons, relances et reprises pour les traitements asynchrones, paiements Stripe et API documentées avec OpenAPI.",
		},
	},
	{
		icon: Zap,
		title: { en: "Real-time multiplayer", fr: "Multijoueur temps réel" },
		body: {
			en: "Wikissey’s live races and tournaments, built with React/TypeScript and Go/Nakama over WebSockets, with PostgreSQL and Redis.",
			fr: "Les courses en direct et les tournois de Wikissey, construits en React/TypeScript et Go/Nakama sur WebSockets, avec PostgreSQL et Redis.",
		},
	},
	{
		icon: Sparkles,
		title: { en: "Automation and AI", fr: "Automatisation et IA" },
		body: {
			en: "AI-assisted document classification at Korint, and Keras anomaly-detection models on sensor signals at Zaack.",
			fr: "Classification de documents assistée par IA chez Korint, et modèles Keras de détection d’anomalies sur des signaux capteurs chez Zaack.",
		},
	},
];

// Source: wikissey.com, checked 26 Oct 2026, and the owner (weekly tournaments).
export const wikisseyHighlights: Highlight[] = [
	{
		icon: Trophy,
		title: { en: "Weekly tournaments", fr: "Tournois hebdomadaires" },
		body: {
			en: "Wikissey Weekly runs every Saturday for up to 64 players, in rounds of small heats with a bracket. The higher you finish in the final, the more ladder points you earn, on an all-time leaderboard worldwide and per region.",
			fr: "Le Wikissey Weekly a lieu chaque samedi, jusqu’à 64 joueurs, en manches de petites poules avec un tableau. Plus on finit haut en finale, plus on gagne de points, sur un classement historique mondial et par région.",
		},
	},
	{
		icon: CalendarDays,
		title: { en: "A daily challenge", fr: "Un défi quotidien" },
		body: {
			en: "Today’s Odyssey: one start page and one target a day, the same for everyone, with a 5-minute limit and no account needed. Past challenges show how many raced and the shortest known path.",
			fr: "Today’s Odyssey : une page de départ et une cible par jour, les mêmes pour tous, en 5 minutes maximum et sans compte. Les défis passés montrent le nombre de joueurs et le plus court chemin connu.",
		},
	},
	{
		icon: Users,
		title: { en: "Live races with friends", fr: "Des courses en direct entre amis" },
		body: {
			en: "Up to 8 players race the same pair of pages at once. Private games with a 6-character code, 1 to 10 races of 1 to 30 minutes, WikiRace or Elimination, then rematch or spectate.",
			fr: "Jusqu’à 8 joueurs courent sur les mêmes pages en même temps. Parties privées avec un code à 6 caractères, de 1 à 10 courses de 1 à 30 minutes, WikiRace ou Élimination, puis revanche ou mode spectateur.",
		},
	},
	{
		icon: ShieldCheck,
		title: { en: "Fair play", fr: "Fair-play" },
		body: {
			en: "No search bar and no back button during a race, and the server checks every click.",
			fr: "Pas de barre de recherche ni de bouton retour pendant une course, et le serveur vérifie chaque clic.",
		},
	},
	{
		icon: MessagesSquare,
		title: { en: "A community I run", fr: "Une communauté que j’anime" },
		body: {
			en: "I run the Discord community and ship the releases.",
			fr: "J’anime la communauté Discord et je m’occupe des mises en ligne.",
		},
	},
	{
		icon: Languages,
		title: { en: "Free, bilingual, mobile", fr: "Gratuit, bilingue, mobile" },
		body: {
			en: "Free to play, on English and French Wikipedia, with guest play and a layout built for phones.",
			fr: "Gratuit, sur Wikipédia en anglais et en français, jouable en invité et pensé pour le mobile.",
		},
	},
];

import type { L } from "@/lib/locale";

export interface Role {
	id: string;
	company: string;
	role: L;
	context: L;
	period: L;
	/** Always visible on the page. */
	highlights: L[];
	/** Shown under "More details"; essential evidence belongs in `highlights`. */
	more: L[];
	/** Only technologies the CV names for this role. */
	stack: string[];
}

// Facts, dates and wording follow the CV. The Zaack/STUF overlap is as supplied.
export const experience: Role[] = [
	{
		id: "korint",
		company: "Korint",
		role: { en: "Software Engineer", fr: "Software Engineer" },
		context: { en: "Insurance SaaS", fr: "SaaS assurance" },
		period: { en: "2024 – present", fr: "2024 – aujourd’hui" },
		highlights: [
			{
				en: "Built a multi-tenant back office for operations teams: dashboards, case tracking and administration actions.",
				fr: "Développement d’un back-office multi-tenant pour les équipes opérationnelles : tableaux de bord, suivi de dossiers et actions d’administration.",
			},
			{
				en: "Implemented billing regularization after a failed payment or contract termination, with balance calculation and duplicate checks.",
				fr: "Mise en place de régularisations après échec de paiement ou arrêt de contrat, avec calcul des soldes et contrôles contre les doublons.",
			},
			{
				en: "Redesigned the regularization check to rely on the actual billing state rather than on workflow progress.",
				fr: "Refonte du contrôle de régularisation pour s’appuyer sur l’état réel de la facturation, plutôt que sur l’avancement d’un workflow.",
			},
		],
		more: [
			{
				en: "Added configurable automatic retries, recovery mechanisms and error handling for asynchronous processing.",
				fr: "Ajout de relances automatiques configurables, de mécanismes de reprise et de gestion d’erreurs pour les traitements asynchrones.",
			},
			{
				en: "Delivered React/TypeScript features, backend APIs and automation end to end, including AI-assisted document classification.",
				fr: "Livraison de fonctionnalités React/TypeScript, API backend et automatisation, dont la classification de documents assistée par IA.",
			},
			{
				en: "Simplified an operation from five actions to one click; contributed to bringing a pricing engine in-house.",
				fr: "Simplification d’une opération de cinq actions à un clic ; contribution à l’internalisation d’un moteur de calcul tarifaire.",
			},
		],
		stack: ["React", "TypeScript"],
	},
	{
		id: "zaack",
		company: "Zaack",
		role: { en: "Full-stack developer", fr: "Développeur full-stack" },
		context: { en: "IoT SaaS", fr: "SaaS IoT" },
		period: { en: "2022 – 2024", fr: "2022 – 2024" },
		highlights: [
			{
				en: "Redesigned an IoT SaaS application with React and Firebase to make user journeys clearer and easier to use.",
				fr: "Refonte d’une application SaaS IoT avec React et Firebase pour clarifier les parcours et faciliter l’utilisation.",
			},
			{
				en: "Migrated the frontend to Vite and improved development practices so the product could evolve more smoothly.",
				fr: "Migration du frontend vers Vite et amélioration des pratiques de développement pour fluidifier les évolutions du produit.",
			},
			{
				en: "Built Keras anomaly-detection models and sensor-signal processing.",
				fr: "Création de modèles Keras de détection d’anomalies et traitement de signaux capteurs.",
			},
		],
		more: [],
		stack: ["React", "Firebase", "Vite", "Keras"],
	},
	{
		id: "stuf",
		company: "STUF",
		role: { en: "Full-stack developer", fr: "Développeur full-stack" },
		context: { en: "Gaming SaaS", fr: "SaaS gaming" },
		period: { en: "Jan – May 2023", fr: "janv. – mai 2023" },
		highlights: [
			{
				en: "Built a gaming PC rental platform, from the React interface to the Node.js/Express services.",
				fr: "Conception d’une plateforme de location de PC gaming, de l’interface React aux services Node.js/Express.",
			},
			{
				en: "Integrated APIs documented with OpenAPI, and Stripe to handle the platform’s payments.",
				fr: "Intégration d’API documentées avec OpenAPI et de Stripe pour gérer les paiements de la plateforme.",
			},
		],
		more: [],
		stack: ["React", "Node.js", "Express", "OpenAPI", "Stripe"],
	},
	{
		id: "smartgarant",
		company: "SmartGarant",
		role: { en: "Frontend developer intern", fr: "Stagiaire développeur frontend" },
		context: { en: "Insurtech", fr: "Insurtech" },
		period: { en: "Apr – Sep 2022", fr: "avr. – sept. 2022" },
		highlights: [
			{
				en: "Improved React interfaces with a multidisciplinary team on a SaaS product.",
				fr: "Amélioration d’interfaces React en collaboration avec une équipe pluridisciplinaire sur un produit SaaS.",
			},
			{
				en: "Optimized Next.js pages for search: keyword research, content and on-page SEO.",
				fr: "Optimisation de pages Next.js : recherche de mots-clés, contenu et référencement naturel on-page.",
			},
		],
		more: [],
		stack: ["React", "Next.js"],
	},
];

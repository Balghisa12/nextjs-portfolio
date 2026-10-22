import type { L } from "@/lib/locale";
import wikisseyCover from "@/assets/projects/wikissey-cover.webp";
import reactorCover from "@/assets/projects/reactor-cover.webp";
import reactorBoard720 from "@/assets/projects/reactor-shift-board-720.webp";
import reactorBoard1440 from "@/assets/projects/reactor-shift-board-1440.webp";
import reactorRoom720 from "@/assets/projects/reactor-control-room-720.webp";
import reactorRoom1440 from "@/assets/projects/reactor-control-room-1440.webp";

export interface Screenshot {
	small: string;
	large: string;
	alt: L;
	caption: L;
}

export interface Step {
	title: L;
	body: L;
}

export interface Project {
	slug: string;
	name: string;
	tagline: L;
	role: L;
	period?: L;
	status: L;
	stack: string[];
	/** Hero wash colour, taken from the product's own palette. */
	accent: string;
	cover: string;
	links: { label: L; href: string }[];
	problem: L[];
	myRole: L;
	flow?: { heading: L; steps: Step[] };
	screens: Screenshot[];
	architecture: L[];
	decisions: Step[];
	shipped: L[];
	constraints: L[];
	evidence: L[];
}

const shot = (small: string, large: string, alt: L, caption: L): Screenshot => ({
	small,
	large,
	alt,
	caption,
});

const sourceLink = (repo: string) => ({
	label: { en: "Source on GitHub", fr: "Code source sur GitHub" },
	href: `https://github.com/Balghisa12/${repo}`,
});

// Sources: CV, public product pages, public READMEs, and test runs on 22 Oct 2026.
// See docs/content-ledger.md before adding a claim.
export const projects: Project[] = [
	{
		slug: "wikissey",
		name: "Wikissey",
		tagline: {
			en: "A real-time multiplayer Wikipedia race.",
			fr: "Une course Wikipédia multijoueur en temps réel.",
		},
		role: { en: "Co-founder · Full-stack engineer", fr: "Cofondateur · Full-stack engineer" },
		period: { en: "2025 – present", fr: "2025 – aujourd’hui" },
		status: { en: "Live", fr: "En ligne" },
		stack: ["React", "TypeScript", "Go", "Nakama", "WebSockets", "PostgreSQL", "Redis"],
		accent: "#6E5A17",
		cover: wikisseyCover,
		links: [{ label: { en: "Play Wikissey", fr: "Jouer à Wikissey" }, href: "https://www.wikissey.com" }],
		problem: [
			{
				en: "A Wikipedia race starts with two articles: get from the start page to the target by clicking only links inside the articles.",
				fr: "Une course Wikipédia part de deux articles : aller de la page de départ à la page cible en ne cliquant que sur les liens des articles.",
			},
			{
				en: "Wikissey turns it into a live competition: every player gets the same start and target, and everyone races at the same time.",
				fr: "Wikissey en fait une compétition en direct : tous les joueurs ont le même départ et la même cible, et tout le monde court en même temps.",
			},
		],
		myRole: {
			en: "Co-founded the game and work on it as a full-stack engineer: building it with React/TypeScript and Go/Nakama (WebSockets, PostgreSQL, Redis), shipping releases, and running the Discord community.",
			fr: "Cofondateur du jeu et full-stack engineer : développement en React/TypeScript et Go/Nakama (WebSockets, PostgreSQL, Redis), mises en ligne et animation du Discord.",
		},
		flow: {
			heading: { en: "The player journey", fr: "Le parcours joueur" },
			steps: [
				{
					title: { en: "Lobby", fr: "Salon" },
					body: {
						en: "Create a private lobby and share its party code, or join a public game. The host starts the race.",
						fr: "Créer un salon privé et partager son code, ou rejoindre une partie publique. L’hôte lance la course.",
					},
				},
				{
					title: { en: "Race", fr: "Course" },
					body: {
						en: "Everyone starts on the same article and can only follow links inside the articles. First to the target wins.",
						fr: "Tout le monde part du même article et ne peut suivre que les liens des articles. Le premier arrivé à la cible gagne.",
					},
				},
				{
					title: { en: "Results", fr: "Résultats" },
					body: {
						en: "WikiRace awards points by finishing position (25, 18, …); in Elimination the last finisher of each race is out. Then rematch or spectate.",
						fr: "En WikiRace, les points dépendent de la place d’arrivée (25, 18, …) ; en Élimination, le dernier de chaque course est éliminé. Ensuite, revanche ou mode spectateur.",
					},
				},
				{
					title: { en: "Beyond one race", fr: "Au-delà d’une course" },
					body: {
						en: "A daily challenge, scheduled tournaments played in rounds of small heats with a bracket, and weekly, monthly and all-time leaderboards.",
						fr: "Un défi quotidien, des tournois planifiés en manches de petites poules avec un tableau, et des classements hebdomadaires, mensuels et historiques.",
					},
				},
			],
		},
		screens: [],
		architecture: [],
		decisions: [],
		shipped: [
			{
				en: "Live races for up to 8 players, with party codes, public games, rematches and spectating",
				fr: "Courses en direct jusqu’à 8 joueurs, avec codes de salon, parties publiques, revanches et mode spectateur",
			},
			{ en: "Two modes: WikiRace and Elimination", fr: "Deux modes : WikiRace et Élimination" },
			{ en: "A daily challenge and scheduled tournaments", fr: "Un défi quotidien et des tournois planifiés" },
			{
				en: "English and French, for both the interface and the Wikipedia content",
				fr: "Anglais et français, pour l’interface comme pour le contenu Wikipédia",
			},
			{ en: "Guest play without an account", fr: "Jeu en invité, sans compte" },
		],
		constraints: [],
		evidence: [],
	},
	{
		slug: "reactor-simulator",
		name: "Reactor Simulator",
		tagline: {
			en: "A browser game where you start up and run a simulated pressurized water reactor.",
			fr: "Un jeu dans le navigateur où l’on démarre et pilote un réacteur à eau pressurisée simulé.",
		},
		role: { en: "Author", fr: "Auteur" },
		status: { en: "Open source (MIT)", fr: "Open source (MIT)" },
		stack: ["TypeScript", "React", "Vite", "Vitest"],
		accent: "#5E3F17",
		cover: reactorCover,
		links: [sourceLink("nuclear-fission-game")],
		problem: [
			{
				en: "The player operates a simulated reactor whose behaviour comes from the model, not from a script: six-group point kinetics, lumped thermal-hydraulics, xenon and samarium poisoning, decay heat and feedback coefficients.",
				fr: "Le joueur pilote un réacteur simulé dont le comportement vient du modèle, pas d’un script : cinétique ponctuelle à six groupes, thermohydraulique à paramètres localisés, empoisonnement xénon et samarium, chaleur résiduelle et coefficients de contre-réaction.",
			},
			{
				en: "The challenge is to keep that model honest and still make it playable by someone who has never seen a reactor equation.",
				fr: "Le défi : garder ce modèle rigoureux tout en le rendant jouable par quelqu’un qui n’a jamais vu une équation de réacteur.",
			},
		],
		myRole: {
			en: "Author of the public repository: physics model, simulation engine, control-room interface, scenarios and tests.",
			fr: "Auteur du dépôt public : modèle physique, moteur de simulation, interface de salle de commande, scénarios et tests.",
		},
		flow: {
			heading: { en: "Three things nobody scripted", fr: "Trois choses que personne n’a scriptées" },
			steps: [
				{
					title: { en: "Boron before power", fr: "Le bore avant la puissance" },
					body: {
						en: "At startup the coolant holds 1300 ppm of boron. Above 1000 ppm the moderator coefficient turns positive — heating the core adds power — so the first job is to dilute, at the 2 ppm per second the chemistry allows.",
						fr: "Au démarrage, l’eau contient 1300 ppm de bore. Au-dessus de 1000 ppm, le coefficient modérateur devient positif — chauffer le cœur ajoute de la puissance — donc la première tâche est de diluer, au rythme de 2 ppm par seconde permis par la chimie.",
					},
				},
				{
					title: { en: "The iodine pit", fr: "Le puits iode" },
					body: {
						en: "After a shutdown, a neutron-absorbing poison keeps building up in the fuel and gets worse before it gets better. One scenario is a restart inside that window.",
						fr: "Après un arrêt, un poison absorbant les neutrons continue de s’accumuler dans le combustible et empire avant de se résorber. Un scénario consiste à redémarrer dans cette fenêtre.",
					},
				},
				{
					title: { en: "Heat after shutdown", fr: "La chaleur après l’arrêt" },
					body: {
						en: "A scrammed reactor still makes serious heat from radioactive decay and needs cooling for hours — the station-blackout scenario is built on it.",
						fr: "Un réacteur arrêté produit encore beaucoup de chaleur par décroissance radioactive et doit être refroidi pendant des heures — le scénario de perte des alimentations électriques repose dessus.",
					},
				},
			],
		},
		screens: [
			shot(
				reactorBoard720,
				reactorBoard1440,
				{
					en: "Reactor Simulator shift board listing scenarios, each with a short briefing, a plain-language explanation and a Begin button.",
					fr: "Tableau de service de Reactor Simulator listant les scénarios, chacun avec un briefing, une explication en langage courant et un bouton Commencer.",
				},
				{
					en: "The shift board: each scenario comes with a plain-language briefing.",
					fr: "Le tableau de service : chaque scénario a un briefing en langage courant.",
				},
			),
			shot(
				reactorRoom720,
				reactorRoom1440,
				{
					en: "Reactor Simulator control room: step instructions, annunciator panel, eight instrument dials, a plant schematic and operator controls with a SCRAM button.",
					fr: "Salle de commande de Reactor Simulator : consignes d’étape, panneau d’alarmes, huit cadrans, schéma de l’installation et commandes avec un bouton SCRAM.",
				},
				{
					en: "The control room at the start of the hot-startup exam.",
					fr: "La salle de commande au début de l’examen de démarrage à chaud.",
				},
			),
		],
		architecture: [
			{
				en: "physics/: pure functions and ODE integrators — no UI, no globals, no clock.",
				fr: "physics/ : fonctions pures et intégrateurs d’EDO — pas d’UI, pas de globales, pas d’horloge.",
			},
			{
				en: "engine/: owns the state, plans deterministic substeps, handles trips and interlocks, records replays.",
				fr: "engine/ : détient l’état, planifie des sous-pas déterministes, gère arrêts automatiques et verrouillages, enregistre les replays.",
			},
			{
				en: "game/ and ui/: scenarios as pure data with a generic runner; a control room that renders engine state and computes no physics.",
				fr: "game/ et ui/ : scénarios en données pures avec un exécuteur générique ; une salle de commande qui affiche l’état du moteur sans calculer de physique.",
			},
		],
		decisions: [
			{
				title: { en: "The interface computes no physics", fr: "L’interface ne calcule aucune physique" },
				body: {
					en: "Every constant lives in one file with its source and units, and the engine hands the UI a snapshot. A test reads the UI source to prove no physics number has leaked into it.",
					fr: "Chaque constante vit dans un seul fichier avec sa source et ses unités, et le moteur transmet un instantané à l’interface. Un test lit le code de l’UI pour prouver qu’aucune valeur physique n’y a fuité.",
				},
			},
			{
				title: { en: "Deterministic time, replayable runs", fr: "Temps déterministe, parties rejouables" },
				body: {
					en: "Same initial state, same inputs, same timestep sequence: same output. A substep planner handles time compression, so a run can be recorded and replayed bit for bit.",
					fr: "Même état initial, mêmes entrées, même suite de pas de temps : même résultat. Un planificateur de sous-pas gère l’accélération du temps, ce qui permet d’enregistrer et de rejouer une partie à l’identique.",
				},
			},
			{
				title: { en: "The spec wins arguments", fr: "La spécification fait foi" },
				body: {
					en: "When the implementation disagrees with a number in the physics spec, the spec value stays and the disagreement is written up in an errata file with a source and the arithmetic.",
					fr: "Quand l’implémentation contredit une valeur de la spécification physique, la valeur reste et le désaccord est consigné dans un fichier d’errata avec une source et le calcul.",
				},
			},
		],
		shipped: [
			{
				en: "Four scenarios: hot startup, load-follow day, the iodine-pit restart, station blackout",
				fr: "Quatre scénarios : démarrage à chaud, suivi de charge, redémarrage dans le puits iode, perte des alimentations",
			},
			{ en: "A campaign across a full fuel cycle", fr: "Une campagne sur un cycle de combustible complet" },
			{
				en: "An Equations tab that shows the live equations with the player’s numbers",
				fr: "Un onglet Équations qui montre les équations en direct avec les valeurs du joueur",
			},
			{
				en: "A tutor that explains alarms and failures in plain language",
				fr: "Un tuteur qui explique alarmes et défaillances en langage courant",
			},
		],
		constraints: [
			{
				en: "A simulation game and teaching tool — not engineering or safety software.",
				fr: "Un jeu de simulation et un outil pédagogique — pas un logiciel d’ingénierie ni de sûreté.",
			},
		],
		evidence: [
			{
				en: "907 automated tests across 41 files, all passing when run on 22 October 2026.",
				fr: "907 tests automatisés répartis sur 41 fichiers, tous au vert lors d’une exécution le 22 octobre 2026.",
			},
			{
				en: "Each physics module is tested against an independent reference — for example the kinetics against the inhour relation solved analytically, decay heat against the ANS-5.1 power law.",
				fr: "Chaque module physique est testé contre une référence indépendante — par exemple la cinétique contre la relation inhour résolue analytiquement, la chaleur résiduelle contre la loi de puissance ANS-5.1.",
			},
		],
	},
];

export function findProject(slug: string | undefined): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

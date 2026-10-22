import type { L } from "@/lib/locale";
import wikisseyCover from "@/assets/projects/wikissey-cover.webp";
import wikisseyHome720 from "@/assets/projects/wikissey-home-720.webp";
import wikisseyHome1440 from "@/assets/projects/wikissey-home-1440.webp";
import wikisseyRules720 from "@/assets/projects/wikissey-rules-720.webp";
import wikisseyRules1440 from "@/assets/projects/wikissey-rules-1440.webp";
import prCover from "@/assets/projects/pr-walkthrough-cover.webp";
import prDemo720 from "@/assets/projects/pr-walkthrough-demo-720.webp";
import prDemo1440 from "@/assets/projects/pr-walkthrough-demo-1440.webp";
import reactorCover from "@/assets/projects/reactor-cover.webp";
import reactorBoard720 from "@/assets/projects/reactor-shift-board-720.webp";
import reactorBoard1440 from "@/assets/projects/reactor-shift-board-1440.webp";
import reactorRoom720 from "@/assets/projects/reactor-control-room-720.webp";
import reactorRoom1440 from "@/assets/projects/reactor-control-room-1440.webp";
import chaletCover from "@/assets/projects/chalet-cover.webp";
import chaletHome720 from "@/assets/projects/chalet-home-720.webp";
import chaletHome1440 from "@/assets/projects/chalet-home-1440.webp";

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
	featured: boolean;
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
		featured: true,
		links: [{ label: { en: "Play Wikissey", fr: "Jouer à Wikissey" }, href: "https://www.wikissey.com" }],
		problem: [
			{
				en: "A Wikipedia race starts with two articles: get from the start page to the target by clicking only links inside the articles.",
				fr: "Une course Wikipédia part de deux articles : aller de la page de départ à la page cible en ne cliquant que sur les liens des articles.",
			},
			{
				en: "Wikissey turns it into a fair, live competition: every player gets the same start and target, races at the same time, and the server checks every click so nobody can skip ahead.",
				fr: "Wikissey en fait une compétition en direct et équitable : tous les joueurs ont le même départ et la même cible, courent en même temps, et le serveur vérifie chaque clic pour que personne ne prenne de raccourci.",
			},
		],
		myRole: {
			en: "Co-founded the game and work on it as a full-stack engineer: development of the React/TypeScript and Go/Nakama architecture (WebSockets, PostgreSQL, Redis), releases, and running the Discord community.",
			fr: "Cofondateur du jeu et full-stack engineer : développement de l’architecture React/TypeScript et Go/Nakama (WebSockets, PostgreSQL, Redis), mises en ligne et animation du Discord.",
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
						en: "Everyone starts on the same article. Each click goes to the server, which checks it against the links on the player’s current page before moving them.",
						fr: "Tout le monde part du même article. Chaque clic est envoyé au serveur, qui le vérifie par rapport aux liens de la page actuelle du joueur avant de le déplacer.",
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
		screens: [
			shot(
				wikisseyHome720,
				wikisseyHome1440,
				{
					en: "Wikissey home screen: today’s Odyssey challenge from one Wikipedia article to another, with Create game and Join game buttons.",
					fr: "Accueil de Wikissey : le défi Odyssey du jour, d’un article Wikipédia à un autre, avec les boutons Créer et Rejoindre une partie.",
				},
				{
					en: "Home screen with the daily Odyssey challenge. Captured logged out from wikissey.com, 22 October 2026.",
					fr: "Écran d’accueil avec le défi Odyssey du jour. Capturé déconnecté sur wikissey.com, le 22 octobre 2026.",
				},
			),
			shot(
				wikisseyRules720,
				wikisseyRules1440,
				{
					en: "Wikissey How to Play page explaining the goal and rules, with an example three-click route from Honey to Mount Olympus.",
					fr: "Page Comment jouer de Wikissey expliquant le but et les règles, avec un exemple de parcours en trois clics de Honey à Mount Olympus.",
				},
				{
					en: "The public rules page, with a real three-click example route.",
					fr: "La page publique des règles, avec un vrai parcours d’exemple en trois clics.",
				},
			),
		],
		architecture: [
			{
				en: "Frontend: React, TypeScript and Vite. Live match traffic runs over WebSockets; other calls are HTTP RPCs.",
				fr: "Frontend : React, TypeScript et Vite. Le trafic des parties passe par WebSockets ; les autres appels sont des RPC HTTP.",
			},
			{
				en: "Backend: a Go plugin loaded by the Nakama game server runs the matches, the RPCs and the background tasks.",
				fr: "Backend : un plugin Go chargé par le serveur de jeu Nakama exécute les parties, les RPC et les tâches de fond.",
			},
			{
				en: "PostgreSQL holds game data and article metadata loaded from monthly Wikipedia dumps; Redis holds background tasks and a cache of the pages fetched during play.",
				fr: "PostgreSQL stocke les données de jeu et les métadonnées d’articles chargées depuis les dumps mensuels de Wikipédia ; Redis gère les tâches de fond et un cache des pages récupérées pendant les parties.",
			},
		],
		decisions: [
			{
				title: { en: "The server is the referee", fr: "Le serveur est l’arbitre" },
				body: {
					en: "A race result is only fair if every move was legal. The match handler validates each navigation against the links on the player’s current page before it counts, so positions and points come only from validated moves.",
					fr: "Un résultat n’est juste que si chaque coup est légal. Le gestionnaire de partie valide chaque navigation par rapport aux liens de la page actuelle du joueur avant de la compter : places et points ne viennent que de coups validés.",
				},
			},
			{
				title: { en: "Article data offline, pages live", fr: "Données d’articles hors ligne, pages en direct" },
				body: {
					en: "Random starts, search and themes need titles, categories and scores for a very large set of articles. That metadata is loaded from monthly Wikipedia dumps into PostgreSQL, while the pages players actually read are fetched live and cached in Redis.",
					fr: "Les départs aléatoires, la recherche et les thèmes ont besoin des titres, catégories et scores d’un très grand nombre d’articles. Ces métadonnées sont chargées depuis les dumps mensuels de Wikipédia dans PostgreSQL, tandis que les pages réellement lues sont récupérées en direct et mises en cache dans Redis.",
				},
			},
		],
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
		evidence: [
			{
				en: "The game is public at wikissey.com. The source repository is private, so this page describes behaviour rather than linking code.",
				fr: "Le jeu est public sur wikissey.com. Le dépôt est privé : cette page décrit le fonctionnement sans lien vers le code.",
			},
		],
	},
	{
		slug: "pr-walkthrough",
		name: "PR Walkthrough",
		tagline: {
			en: "Grounded, visual code review for large pull requests.",
			fr: "Une revue de code visuelle et fondée sur le code, pour les grosses pull requests.",
		},
		role: { en: "Author", fr: "Auteur" },
		status: { en: "Open source (MIT)", fr: "Open source (MIT)" },
		stack: ["TypeScript", "ts-morph", "React", "Vite", "MCP"],
		accent: "#2F4A7A",
		cover: prCover,
		featured: true,
		links: [sourceLink("pr-story")],
		problem: [
			{
				en: "A large pull request is hard to review from a flat diff, and AI review that only reads the diff can describe effects that aren’t there.",
				fr: "Une grosse pull request est difficile à relire depuis un diff à plat, et une revue IA qui ne lit que le diff peut décrire des effets qui n’existent pas.",
			},
			{
				en: "PR Walkthrough separates what can be proven from the code from what needs judgment, then presents the change as a short, chaptered story with clickable evidence.",
				fr: "PR Walkthrough sépare ce qui se prouve à partir du code de ce qui relève du jugement, puis présente le changement comme un court récit en chapitres, avec des preuves cliquables.",
			},
		],
		myRole: {
			en: "Author of the public repository: the analyzer, the narration contract, the walkthrough interface and the Claude Code plugin packaging.",
			fr: "Auteur du dépôt public : l’analyseur, le contrat de narration, l’interface de lecture et le packaging en plugin Claude Code.",
		},
		flow: {
			heading: { en: "How a review runs", fr: "Déroulé d’une revue" },
			steps: [
				{
					title: { en: "Analyze", fr: "Analyser" },
					body: {
						en: "A ts-morph pass resolves the real type graph: change units, a causal graph (a signature change and the call sites it forces), the blast radius, and findings with file:line evidence.",
						fr: "Une passe ts-morph résout le vrai graphe de types : unités de changement, graphe causal (un changement de signature et les appels qu’il impose), rayon d’impact, et constats avec preuve fichier:ligne.",
					},
				},
				{
					title: { en: "Narrate", fr: "Raconter" },
					body: {
						en: "The reviewer’s own Claude session writes the why of each change and groups changes by intent into 3 to 7 chapters.",
						fr: "La session Claude du relecteur rédige le pourquoi de chaque changement et regroupe les changements par intention en 3 à 7 chapitres.",
					},
				},
				{
					title: { en: "Validate", fr: "Valider" },
					body: {
						en: "The narration is merged against a locked JSON Schema. The model can explain a finding but cannot invent, drop or downgrade one.",
						fr: "La narration est fusionnée selon un JSON Schema verrouillé. Le modèle peut expliquer un constat, mais pas en inventer, en supprimer ni en minimiser un.",
					},
				},
				{
					title: { en: "Read", fr: "Lire" },
					body: {
						en: "A local web app shows the overview, the chapter spine, the diff with touched lines highlighted, and the explanation with the impacted files.",
						fr: "Une application web locale affiche la synthèse, le sommaire des chapitres, le diff avec les lignes touchées en évidence, et l’explication avec les fichiers impactés.",
					},
				},
			],
		},
		screens: [
			shot(
				prDemo720,
				prDemo1440,
				{
					en: "PR Walkthrough interface: an overview of a sample pull request, a chapter list on the left, the diff in the middle and the explanation with a breaking-change badge on the right.",
					fr: "Interface de PR Walkthrough : synthèse d’une pull request d’exemple, liste des chapitres à gauche, diff au centre et explication avec un badge de rupture d’API à droite.",
				},
				{
					en: "The walkthrough on the repository’s built-in sample data (an example idempotent-checkout pull request).",
					fr: "La revue sur les données d’exemple fournies avec le dépôt (une pull request fictive sur un paiement idempotent).",
				},
			),
		],
		architecture: [
			{
				en: "Analyzer: deterministic Node scripts that emit a changeset conforming to a locked JSON Schema.",
				fr: "Analyseur : scripts Node déterministes qui produisent un changeset conforme à un JSON Schema verrouillé.",
			},
			{
				en: "MCP server: exposes analyze_pr and get_blast_radius to Claude; posting a review is dry-run only.",
				fr: "Serveur MCP : expose analyze_pr et get_blast_radius à Claude ; la publication d’une revue reste en mode simulation.",
			},
			{
				en: "Interface: React and Vite, served locally next to the changeset.",
				fr: "Interface : React et Vite, servie en local avec le changeset.",
			},
		],
		decisions: [
			{
				title: { en: "Facts and narration are separate layers", fr: "Faits et narration sont deux couches distinctes" },
				body: {
					en: "Contract changes, stale callers, side effects and coverage gaps come from static analysis. The model only explains them, and the merge step locks the facts so an explanation can’t contradict them.",
					fr: "Les changements de contrat, appels obsolètes, effets de bord et trous de couverture viennent de l’analyse statique. Le modèle ne fait que les expliquer, et l’étape de fusion verrouille les faits pour qu’aucune explication ne les contredise.",
				},
			},
			{
				title: { en: "Chapters by intent, causes kept together", fr: "Chapitres par intention, causes regroupées" },
				body: {
					en: "Changes are grouped by what they are for, and a cause is never split from the call sites it forces, so a 40-file pull request reads as a handful of chapters.",
					fr: "Les changements sont regroupés selon leur but, et une cause n’est jamais séparée des appels qu’elle impose : une pull request de 40 fichiers se lit en quelques chapitres.",
				},
			},
		],
		shipped: [
			{ en: "Claude Code plugin with marketplace install", fr: "Plugin Claude Code installable depuis une marketplace" },
			{ en: "CLI to analyze, merge narration and serve a walkthrough", fr: "CLI pour analyser, fusionner la narration et servir la revue" },
			{ en: "Static demo build with sample data", fr: "Démo statique avec données d’exemple" },
		],
		constraints: [
			{
				en: "TypeScript and JavaScript repositories with a tsconfig.json; other files are skipped.",
				fr: "Dépôts TypeScript et JavaScript avec un tsconfig.json ; les autres fichiers sont ignorés.",
			},
			{
				en: "The analysis needs a full checkout with its dependencies, not just a diff.",
				fr: "L’analyse a besoin du dépôt complet avec ses dépendances, pas seulement d’un diff.",
			},
		],
		evidence: [
			{
				en: "162 automated tests (Vitest), all passing when run on 22 October 2026.",
				fr: "162 tests automatisés (Vitest), tous au vert lors d’une exécution le 22 octobre 2026.",
			},
		],
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
		featured: true,
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
	{
		slug: "chalet-la-llyre",
		name: "Chalet La Llyre",
		tagline: {
			en: "A bilingual website for a mountain chalet rental.",
			fr: "Un site bilingue pour la location d’un chalet de montagne.",
		},
		role: { en: "Developer", fr: "Développeur" },
		status: { en: "Live", fr: "En ligne" },
		stack: ["Astro", "TypeScript"],
		accent: "#35506B",
		cover: chaletCover,
		featured: false,
		links: [
			{ label: { en: "Visit the site", fr: "Voir le site" }, href: "https://lallyre.vercel.app" },
			sourceLink("pr"),
		],
		problem: [
			{
				en: "A property website in French and English with a photo gallery, amenities, pricing, and a contact and booking section.",
				fr: "Un site de location en français et en anglais avec galerie photo, équipements, tarifs, et une section contact et réservation.",
			},
		],
		myRole: {
			en: "Built the site with Astro.",
			fr: "Développement du site avec Astro.",
		},
		screens: [
			shot(
				chaletHome720,
				chaletHome1440,
				{
					en: "Chalet La Llyre home page: a snowy mountain chalet photo with the site title and a Book your stay button.",
					fr: "Accueil du site Chalet La Llyre : photo d’un chalet enneigé avec le titre du site et un bouton de réservation.",
				},
				{ en: "The home page, captured 22 October 2026.", fr: "La page d’accueil, capturée le 22 octobre 2026." },
			),
		],
		architecture: [],
		decisions: [],
		shipped: [],
		constraints: [],
		evidence: [],
	},
];

export const featuredProjects = projects.filter((p) => p.featured);

export function findProject(slug: string | undefined): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

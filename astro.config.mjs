import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://spmsn.github.io',
	base: '/doc',
    trailingSlash: "never",
	integrations: [
		starlight({
			title: 'Base de Connaissance',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr-FR',
				},
			},
			social: {
				github: 'https://github.com/spmsn',
			},
			sidebar: [
				{ label: 'Bienvenue !', slug: 'lisez-moi' },
				{
					label: 'Informatique & Réseaux',
					items: [
						{ label: 'Programmation', autogenerate: { directory: 'informatique/programmation' }, collapsed: true },
						{ label: 'Systèmes', autogenerate: { directory: 'informatique/systemes' }, collapsed: true },
						{ label: 'Réseaux', autogenerate: { directory: 'informatique/reseaux' }, collapsed: true },
						{ label: 'Travaux Pratiques', autogenerate: { directory: 'informatique/travaux-pratiques', collapsed: true } },
					],
				},
				{
					label: 'Électricité & Électronique',
					items: [
						{ label: 'Électricité', autogenerate: { directory: 'elec/electricite' }, collapsed: true },
						{ label: 'Électronique', autogenerate: { directory: 'elec/electronique' }, collapsed: true },
						{ label: 'Automatisme', autogenerate: { directory: 'elec/automatisme' }, collapsed: true },
						{ label: 'Travaux Pratiques', autogenerate: { directory: 'elec/travaux-pratiques' }, collapsed: true },
					],
				},
				{
					label: 'Projets',
					items: [
						{ label: 'Nos projets', slug: 'projets' },
						{ label: 'HomeLab', autogenerate: { directory: 'projets/homelab' }, collapsed: true },
						{ label: 'Réseau Local', autogenerate: { directory: 'projet/lan' }, collapsed: true },
					],
				},
				{ label: 'Les Défis', slug: 'defis' },
				{ label: 'A Propos', slug: 'a-propos' },
			],
		}),
	],
});

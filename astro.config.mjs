import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';
import { targetBlank } from './src/plugins/targetBlank';


// https://astro.build/config
export default defineConfig({
	site: 'https://spmsn.github.io',
    trailingSlash: "never",
	markdown: {
		rehypePlugins: [
			[targetBlank, { domain: 'spmsn.github.io' }],
			[
				rehypeExternalLinks,
				{
				  content: { type: 'text', value: ' 🡥' }
				}
			],
		],
	},
	integrations: [
		starlight({
			title: 'Base de Connaissance SN',
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
						{ label: 'Programmation', autogenerate: { directory: 'informatique/programmation' }},
						{ label: 'Systèmes', autogenerate: { directory: 'informatique/systemes' }},
						{ label: 'Réseaux', autogenerate: { directory: 'informatique/reseaux' }},
						{ label: 'Travaux Pratiques', autogenerate: { directory: 'informatique/travaux-pratiques'} },
					],
					collapsed: true,
				},
				{
					label: 'Électricité & Électronique',
					items: [
						{ label: 'Électricité', autogenerate: { directory: 'elec/electricite' }},
						{ label: 'Électronique', autogenerate: { directory: 'elec/electronique' }},
						{ label: 'Automatisme', autogenerate: { directory: 'elec/automatisme' }},
						{ label: 'Travaux Pratiques', autogenerate: { directory: 'elec/travaux-pratiques' }},
					],
					collapsed: true,
				},
				{
					label: 'Projets',
					items: [
						{ label: 'Nos projets', slug: 'projets' },
						{ label: 'HomeLab', autogenerate: { directory: 'projets/homelab' }},
						{ label: 'Réseau Local', autogenerate: { directory: 'projet/lan' }},
					],
					collapsed: true,
				},
				{ label: 'Les Défis', slug: 'defis' },
				{ label: 'A Propos', slug: 'a-propos' },
			],
		}),
	],
});

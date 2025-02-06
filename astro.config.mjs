import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';
import { targetBlank } from './src/plugins/targetBlank';

// https://astro.build/config
export default defineConfig({
	site: 'https://spmsn.github.io',
	trailingSlash: "always",
	build: {
		assets: 'astro',
	},
	markdown: {
		rehypePlugins: [
			[targetBlank, { domain: 'spmsn.github.io' }],
			[
				rehypeExternalLinks,
				{
					content: { type: 'text', value: '\u{00A0}\u{1F855}' }
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
				github: 'https://github.com/spmsn/',
			},
			sidebar: [
				{ label: 'Bienvenue !', slug: 'lisez-moi' },
				{
					label: 'Informatique & Réseaux',
					items: [
						{ label: 'Programmation', autogenerate: { directory: 'informatique/programmation' }, collapsed: true },
						{ label: 'Systèmes', autogenerate: { directory: 'informatique/systemes' }, collapsed: true },
						{ label: 'Réseaux', autogenerate: { directory: 'informatique/reseaux' }, collapsed: true },
						{ label: 'Travaux Pratiques', autogenerate: { directory: 'informatique/travaux-pratiques' }, collapsed: true },
					],
					collapsed: true,
				},
				{
					label: 'Électricité & Électronique',
					items: [
						{ label: 'Électricité', autogenerate: { directory: 'elec/electricite' }, collapsed: true },
						{ label: 'Électronique', autogenerate: { directory: 'elec/electronique' }, collapsed: true },
						{ label: 'Automatisme', autogenerate: { directory: 'elec/automatisme' }, collapsed: true },
						{ label: 'Travaux Pratiques', autogenerate: { directory: 'elec/travaux-pratiques' }, collapsed: true },
					],
					collapsed: true,
				},
				{ label: 'Projets', autogenerate: { directory: 'projets' }, collapsed: true },
				{ label: 'Les Défis', slug: 'defis' },
				{ label: 'A Propos', slug: 'a-propos' },
			],
		}),
	],
});

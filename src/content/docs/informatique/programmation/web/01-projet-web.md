---
title: Développement web
description: Projet et technologies des développements full-stack
---

## Etapes d'un projet web

1. **Spécifications initiales**
   - Cahier des charges
   - Spécifications fonctionnelles
   - Spécifications techniques
2. **Mise en place des chaînes CI/CD**
3. **Cycles de développement**
   - On avance par étapes / cycles (2-3 semaines)
   - Bilan n-1 + specs + devs + tests / stabilisation
   - Implication du client
   - Cf. méthodes agiles
4. **Production de la V1**
5. **Maintenance**

## Gestion du projet

Pour qu'un projet soit un succès, la relation avec le client est essentielle.

:::danger[Quelques écueils fréquents]
- Changements d'avis réguliers du client.
- Demandes d'ajout de fonctionnalités hors-scope.
- Ingérence sur la charte graphique.
- Gap entre le besoin et ce que le client imagine.
- Manque de communication et oubli du besoin essentiel.
:::

Bonnes pratiques&nbsp;:

- Connaître le client et ses objectifs.
  - Avoir en tête le besoin fondamental du client.
  - Savoir lui expliquer la raison de tel ou tel choix.
- Acter le cahier des charges et les specs fonctionnelles.
  - Bien définir les limites (inclus, pas inclus).
  - Proposer un plan de réalisation.
- Communiquer régulièrement avec le client.
  - Mettre en place des rendez-vous pour chaque cycle.
  - Toujours TOUT noter et faire valider en fin de réunion.
- Faire preuve de psychologie et s'il le faut de fermeté.
  - Rester cohérent avec les objectifs.
  - Mettre de côté les demandes hors-scope.
  - Maintenir un lien sur la durée.
  - Produire du concret et le commenter.
- Sauf exception, les aspects techniques ne concernent pas le client.

## Réalisation technique

### Les technologies full-stack

- **Le front-end** (HTML, CSS) : toute la partie visuelle interprétée par le client (navigateur) : gabarit de page, paragraphes, titres, tableaux (html); couleurs, disposition des éléments, dynamismes, etc. (css).
- **Le back-end** (PHP, node, ...) : gestion des données, des sessions et des fonctionnalités dites "dynamiques" (login/logout, inscriptions, gestion des événements, édition de pages, etc.).
- **La base de données** : liée au backend, elle contient la plupart des données structurées et persistantes (utilisateurs, événements, etc.).

:::tip[Frameworks et bibliothèques]
Toutes ces technologies ont un écosystème avec des outils "haut niveau" avec des fonctionnalités courantes pré-développées : site web dynamique, gestion de BD, gestion d'événements et d'utilisateurs, etc.

- Back-end PHP : frameworks (laravel, symfony...) + bibliothèques via "composer".
- Front-end : frameworks CSS (bootstrap, tailwind) et JS (Vue, React)
:::

### Etapes d'apprentissage

- Architecture client-serveur
- Chaîne d'intégration / de déploiement
  - Les environnements : dev, recette, prod
  - Les tests : unitaires, fonctionnels
  - Les outils de build / check
  - L'intégration à git / github
  - Hébergements : serveurs, conteneurs
- Fondamentaux :
  - [Algorithmique](https://grafikart.fr/formations/apprendre-algorithmique)
  - [Sécurité web](https://grafikart.fr/formations/securite-application-web)
  - [GIT](https://grafikart.fr/formations/git)
- [PHP](https://grafikart.fr/formations/php)
  - Syntaxe et fonctionnement
  - Variables
  - Tableaux
  - Structures de contrôle
  - Fonctions
  - Travailler avec plusieurs fichiers
  - Formulaires
  - Intégration HTML
  - Gestion des fichiers
  - Cookies et sessions
  - [POO](https://grafikart.fr/formations/mise-pratique-poo)
    - Classes et objets
    - Héritage
    - Mot clé static
    - Exceptions
    - Autoload
    - [Design patterns](https://refactoring.guru/fr/design-patterns/php) : MCD, singleton, façade, etc...
  - Frameworks : symfony, [laravel](https://laravel.com/), [phalcon](https://docs.phalcon.io/)...
- Bases de données
  - Fonctionnement d'un SGBD
  - Tables, champs, types de données, liaisons, contraintes
  - Triggers, vues, modèles
  - Modèle conceptuel de données (MCD)
  - Modèle physique de données (MPD)
  - [SQL (+sqlite)](https://grafikart.fr/formations/apprendre-sql)
- HTML
- [CSS](https://grafikart.fr/formations/css)
  - [Vue](https://grafikart.fr/formations/vuejs)
- [Hébergement de site web](https://grafikart.fr/formations/upload-site)
- Bonnes pratiques
  - Tests
  - Refactorings
  - Veille technologique
---
title: Modélisation 3D (CAO)
subtitle: Et découverte du logiciel FreeCAD
---

FreeCAD est un puissant logiciel de modélisation 2D/3D paramétrique. A travers sa découverte, nous allons aborder les notions essentielles liées à la modélisation.

:::note[Fais valider les étapes]
A la fin de chaque étape, appelle ton enseignant pour la valider.
:::

:::caution[Versions de FreeCAD]
Nous travaillerons avec une version de FreeCAD ultérieure à celle du tutoriel qu'on va découvrir.

- Certains icones ont changé dans la barre d'outil.
- Quelques paramètres par défaut aussi.

Cependant, les manipulations sont parfaitement réalisables&nbsp;!
:::

## Rappels

Avant ce TP, tu as abordé les notions suivantes avec ton enseignant :

- La modélisation 2D / 3D.
- Les domaines d'utilisation de la CAO.
- Les axes X, Y, Z utilisés pour la 3D.
- Les éléments suivants :
  - Un plan de référence.
  - Une esquisse.
  - Une contrainte.
  - Une esquisse entièrement contrainte.
  - Un congé et un chanfrein.
  - Une protrusion (extrusion).
  - Un plan 2D (mise en plan) et un typon.
- Les étapes de construction d'un plan 3D.
- Comment s'organise l'interface de FreeCAD.
  - Modèle, arbre de construction, tâches / propriétés.
  - Fenêtre de visualisation.
  - Ateliers (Part Design, TechDraw), barres d'outils.

## 1. Modéliser une pièce de LEGO

Grâce aux 3 premières vidéos de la série [Apprendre progressivement FreeCAD](https://www.youtube.com/watch?v=0jIQ_1piYZk&list=PLmCpX3se4fUlRZIIgG4Ply7Rxj6PYFisX&index=1), modélise pas à pas une pièce de LEGO en suivant le tutoriel.

## 2. Mise en plan 2D

Crée un plan 2D de la pièce avec l'ensemble des cotes utiles à sa fabrication, en suivant [l'étape "créer un plan" du tutoriel](https://www.youtube.com/watch?v=hr2ACrJIyUY&list=PLmCpX3se4fUlRZIIgG4Ply7Rxj6PYFisX&index=4).

## 3. Assemblage

Grâce à un plugin à installer sous FreeCAD, tu peux [créer un assemblage](https://www.youtube.com/watch?v=MuoRg79jo_I&list=PLmCpX3se4fUlRZIIgG4Ply7Rxj6PYFisX&index=5) avec la pièce LEGO que tu as créée.

## 4. Bonnes pratiques

Tu peux optionnellement regarder ce qu'est [le problème de "dénomination topologique"](https://www.youtube.com/watch?v=-3DKDojgypY&list=PLmCpX3se4fUlRZIIgG4Ply7Rxj6PYFisX&index=7) puis [créer une modélisation de 3 cubes en suivant les bonnes pratiques](https://www.youtube.com/watch?v=-3DKDojgypY&list=PLmCpX3se4fUlRZIIgG4Ply7Rxj6PYFisX&index=8) suivantes&nbsp;:

- Faire un schéma (sur une feuille papier).
- Donner un nom aux éléments.
- Faire des esquisses sur des plans de référence.
- Faire des esquisses entièrement contraintes.
- Créer les volumes principaux avant les détails.
- Créer les plans 2D à la fin.

## 5. Pièce LEGO à 4 bornes en autonomie

Nous allons créer une pièce de LEGO à 4 bornes en utilisant ce que nous avons appris.

- Ouvrir la brique réalisée à l'étape 1.
- Renommer les éléments de l'arbre de construction avec des noms pertinents.
- Enregistrer et dupliquer le fichier pour créer "brique-4.FCStd".
- Modifier l'élément pour obtenir une brique avec 4 bornes.

:::tip[Comment faire ?]
Tu as deux solutions :
- Utiliser les notions que tu as apprises pour modifier le bloc et créer 2 autres bornes.
- Créer la nouvelle brique avec [la fonction symétrique expliquée ici](https://www.youtube.com/watch?v=ePYs9VL1UEI&list=PLmCpX3se4fUlRZIIgG4Ply7Rxj6PYFisX&index=10).
:::

:::note
Une fois ces notions de base acquises, on pourra pourquoi pas proposer un deuxième TP 3D consistant en une réalisation commune ou chaque élève s'occupera d'une pièce élémentaire d'une réalisation à assembler.
:::

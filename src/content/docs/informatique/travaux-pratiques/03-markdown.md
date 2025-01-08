---
title: Rédiger une doc technique
subtitle: Et découverte de la syntaxe Markdown
---

Tu seras régulièrement amené à rédiger des rapports (de stage, d'intervention...), des documentations et des notes, pour tes études, ton travail et tes formalités. D'autre part, nous réalisons sur notre HomeLab une base de connaissances qui comportera des notes, cours et informations utiles pour tous.

La syntaxe Markdown permet d'écrire toutes sortes de documents avec les avantages suivants&nbsp;:

- Un simple éditeur de texte est suffisant.
- Elle est très simple à apprendre et à utiliser.
- On peut convertir du Markdown en plein d'autres formats.
- Sa simplicité nous oblige à utiliser un format sobre.
- Il est durable, contrairement aux formats plus complexes.

:::note[Pourquoi sobre ?]
Tu ne peux pas mettre des couleurs comme tu veux et du texte et énorme ou trop petit. La qualité visuelle du document reste de ce fait cohérente.
:::

:::note[Pourquoi durable ?]
Sa syntaxe simple rend le document lisible dans la durée et compatible avec un large écosystème. A l'inverse, un document word qui date de 20-30 ans finit par ne plus être lisible.
:::

Par exemple, notre base de connaissance est convertie en HTML avec le [générateur starlight](https://starlight.astro.build/fr/guides/authoring-content/) ou [Hugo](https://gohugo.io/content-management/formats/), ainsi qu'en PDF.

## Objectifs

**Rédiger une documentation technique sur le sujet de ton choix.**

Ce TP te permettra :

- De réfléchir à la structure d'un document.
- De faire de la veille technologique.
- De te former sur la syntaxe Markdown.
- De t'entraîner à taper **avec tes 10 doigts** !

:::note[Ce TP sera-t-il publié ?]
Si ta documentation est agréable bien faite, on l'intègrera à ce site. Pour cela, la qualité du contenu est aussi importante que la forme&nbsp;!
:::

:::tip[Notation]
- Attitude professionnelle.
- Qualité du document.
- Qualité et pédagogie du contenu.
- Densité du contenu.
:::

:::caution[Quelques règles]
- Ne fait pas de copier-coller de documents existants.
- Cite la source si tu utilises une image externe.
- Les liens externes sont permis (et même recommandés).
- Les balises HTML ne sont pas permises.
:::

## Préparation

Utiliser un éditeur tel que **Visual Studio Code** pour rédiger le document.

:::tip[Visual Studio Code]
Cet éditeur reconnait Markdown directement. **Astuce** : en haut à droite tu as un bouton pour pré-visualiser ton document dans une fenêtre.
:::

- **Vérifier qu'un éditeur est installé**, ou l'installer.
- **Choisir un sujet** sur lequel rédiger ta documentation ou tutoriel.
- **Créer un dossier** `tp-documentation`.
- **Editer un document** `[mon-sujet].md` dans ce dossier.

:::note[Entête du document]
Il contient le titre et des méta-informations :
```markdown
---
title: [A remplacer par le titre de ton document]
author: [Prénom Nom]
---
```
:::

Dans [forgejo](http://homelab:3000) (lien interne), créer un dépôt `tp-markdown` lié à son compte personnel (et non au groupe), puis cloner&nbsp;:

:::danger[Préparation du dépôt GIT]
```sh
## Demander à git d'enregistrer identifiant + mot de passe
git config --global credential.helper store

## Cloner
git clone [url-du-depot]

## Aller dans le dossier du projet
cd tp-markdown

## Vérifier que cette commande fonctionne sans
## demander d'identifiant ou de mot de passe
git pull
```
:::

## Les prémices d'une bonne documentation (~1h)

Une bonne documentation est cohérente, agréable à lire, précise et concise. Détaillons tout cela. Mais avant tout [voici la syntaxe Markdown](https://starlight.astro.build/guides/authoring-content/). Commence par parcourir cette page.

### Chercher des sources et faire un plan

Pour chacun de ces sujets, trouve des sources d'information sur internet. Commence par les lire et si elles te paraissent intéressantes, laisse les onglets ouverts.

:::caution[Cette étape est importante]
Prends le temps qu'il faut pour parcourir ces sources et en apprendre le plus possible sur ton sujet.
:::

Réfléchis au plan de ta rédaction (dans le fichier markdown ou sur un papier). Prends le temps de relire ces titres, ils sont très importants pour la lisibilité et la cohérence de ton document&nbsp;!

Pour faire un plan, commence par mettre les titre principaux&nbsp;:

```markdown
## Un premier titre

## Un deuxième titre

## Etc.
```

Puis, détaille avec des sous-titres&nbsp;:

```markdown
## Un titre

### Un sous-titre
```

### Prendre des notes

Pour chaque titre / sous-titre, ajoute des informations sur les sujets que tu souhaites aborder. Inutile de faire de longues phrases, il s'agit juste d'un "aide-mémoire". Par exemple&nbsp;:

```markdown
- Langage bas / haut niveau
- Langage interprété / compilé
- Programmation procédurale / oo / fonctionnelle
- Programmation web / client-lourd / embarquée
```

:::caution[Si tu bloques sur le contenu, pas de panique]
Tu peux dans un premier temps t'aider du contenu que tu as sélectionné sur internet. Et enfin, rédige tes idées, même si elles ne te plaisent pas... l'important c'est d'écrire quelque chose. Quand tu reviendras dessus, tu auras le réflexe de corriger.
:::

:::danger[Valide ton plan dans GIT]
Ajoute et valide tes sources :

```sh
git add .
git commit -m "Plan de la documentation"
```
:::

## Rédaction (~2h)

Avec ce premier travail, nous avons un plan cohérent et une idée du contenu à rédiger. Il faut maintenant s'attaquer aux détails. Voici quelques conseils importants pour cette partie, à lire avant de commencer.

### Prends soin de la forme

La forme, c'est l'aspect de ton document. S'il est soigné, c'est plus agréable à lire. Par exemple&nbsp;:

- N'abuse pas du gras et de l'italique, reste sobre.
- Fais des paragraphes ni trop petits, ni trop grands.
- Fais de [jolies listes à puce](https://yellowdolphins.com/2017/04/7-bonnes-pratiques-pour-vos-listes-a-puces/) et [énumérations cohérentes](https://dictionnaire.lerobert.com/guide/enumeration-quelles-sont-les-regles-de-ponctuation).
- Tableaux : titres en gras, mais pas le contenu.
- Admire ton document dans la fenêtre de pré-visualisation.

### Structures plutôt que grandes phrases

Sauf si tu rédiges un roman, les explications structurées avec des listes à point ou numérotées, des tableaux, etc. sont plus faciles à lire.

:::note[Exemple]
Plutôt que&nbsp;:

> Les langages fonctionnels utilisent des récursions, les langages objet utilisent des classes, propriétés et méthodes, les langages procéduraux sont composés de fonctions.

Il vaut mieux :

> - Les **langages fonctionnels** utilisent des récursions.
> - Les **langages objet** des classes, propriétés et méthodes.
> - Les **langages procéduraux** sont composés de fonctions.
:::

Enfin, de bons schémas et illustrations sont préférables à de longues explications&nbsp;!

:::danger[Valide cette première rédaction]
```sh
git add .
git commit -m "Documentation version alpha"
```
:::

### Relecture, remaniements

Un "refactoring" en programmation, c'est l'art de relire son code pour en supprimer le plus possible et le rendre plus clair. Pour un document, on procède de la même façon&nbsp;:

- S'il y a des doublons, les éliminer.
- Si une phrase est trop longue, la raccourcir.
- Si une explication n'est pas claire, remanier.
- S'il y a des répétitions, trouver des synonymes.

:::tip[La relecture]
Est essentielle pour obtenir un document de qualité. Même les pros de la rédaction et de l'orthographe se relisent plusieurs fois.
:::

:::danger[Valide la relecture]
```sh
git add .
git commit -m "Relecture complète"
```
:::

## Finalisation (~30min)

Maintenant que ton document est rédigé et relu, que tu es fier de son contenu, tu peux l'embellir avec une introduction et pourquoi pas une conclusion.

- **L'introduction** a pour objectif de donner l'envie au lecteur de lire la suite. Elle n'est pas forcément un résumé du document. Par ailleurs, une introduction de qualité présume un contenu de qualité.
- **La conclusion** permet de tirer des enseignements et d'avoir une vue globale des problématiques. Elle peut proposer de la matière pour en savoir davantage sur le sujet.

:::danger[Validation finale]
```sh
git add .
git commit -m "Introduction et conclusion"
```
:::
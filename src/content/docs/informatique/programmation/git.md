---
title: GIT
description: Introduction à GIT
---

Quelques commandes de bases avec GIT.

## Introduction

GIT permet de gérer le code source d'un projet informatique :

- Les versions du projet et des fichiers.
- La mise en commun des sources (travail à plusieurs).

Notions de base : 

- **Le dépôt de données distant** est un serveur qui contient le code et les versions.
- **Le dépôt de données local**, c'est la même chose, sur ton ordinateur local.
- **L'espace de travail** est le code sur lequel tu travailles.

:::note[Dépôt local ?]
Dans le dossier de ton projet, il y a un dossier `.git` qui contient ton dépôt local, c'est à dire le code avec les versions et l'historique. Tu peux valider (`commit`) ton code au fur et à mesure dans ce dépôt, puis le synchroniser (`pull` et `push`) avec le dépôt distant.
:::

## Opérations de base


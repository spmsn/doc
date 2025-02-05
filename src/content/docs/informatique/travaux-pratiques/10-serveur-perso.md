---
title: Mon Serveur
---

Objectif : installer un serveur pour proposer des services.

## 1 : choisir un système et l'installer

Nous allons installer chaque serveur dans une machine virtuelle.

Choix du système Linux :

- Debian : un choix courant
- Ubuntu serveur : plus facile à gérer
- DietPi : des outils d'installation faciles
- NixOS : déclaratif et spécifique

Etapes :

- Spécifier le rôle du serveur et son système
- Préparer la machine virtuelle
- Lancer l'installation et installer
- Enregistrer le serveur dans sn-network

:::note
A l'issue de l'installation on doit pouvoir :

- Se connecter en SSH (l/p à définir)
- Pinger le serveur
:::

## 2 : installer et configurer un service

Choisir un service à configurer et l'installer.

Idées de services :

- Partage de fichiers publique (samba ou nfs)
- Serveur web (avec virtualhost et php)
- Serveur de sauvegarde (outil de sauvegarde)
- Serveur minecraft ?
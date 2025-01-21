---
title: Homelab Update
---

TP mise à jour de notre réseau SN.

:::caution
Ce TP est une opération de maintenance réelle sur notre réseau.
:::

## Objectifs

Principaux :

- Installer un noeud XCP-ng sur un des serveurs de l'hopital.
- Installer en dual-boot Windows + NixOS sur les 8 PCs.

Secondaires :

- Mettre en place une configuration Nix commune à tout le réseau.
- Remplacer Zential par un serveur de domaine sous NixOS.

## Installation du noeud XCP-ng

- Télécharger la dernière version de XCP-ng (8.3).
- Installer XCP-ng sur le serveur du haut.
- Lier le noeud XCP-ng au réseau :
  - Attribuer une adresse IP
  - Lier le nouveau noeud au noeud principal
- Tester le déploiement d'une machine virtuelle.

## Dual-boot Windows + NixOS

- Faire le ménage sur tous les windows.
- Avec un système live Windows, libérer 200Go.
- Installer NixOS sur la partition libre.
- Configurer NixOS pour booter par défaut sous Windows.

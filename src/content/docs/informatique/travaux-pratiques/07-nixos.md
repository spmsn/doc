---
title: Windows / NixOS
---

Lors de ce TP nous allons installer Windows puis NixOS en dual-boot.

:::caution
Ce TP prépare une opération de maintenance réelle sur notre réseau SN. Une fois l'opération validée, nous pourrons la mettre en oeuvre sur les postes de travail réguliers.
:::

## Préparation

:::note
Avec un PC de récupération déjà doté de Windows, nous pouvons passer les étapes d'installation de Windows.
:::

- (Télécharger Windows 11.)
- Pendant ce temps, préparer un ordinateur de récupération.
- (Créer une clé bootable.)
- Télécharger NixOS (image gnome).
- Créer une clé bootable.

## Installation de windows

- (Installer windows, sans clé, avec les paramètres par défaut.)
  - Sur l'ensemble du disque.
- (Vérifier que Windows est bien installé.)

## Redimentionnement de la partition Windows

:::tip[nix-shell]
Votre enseignant vous expliquera ce que c'est et comment ça marche.
:::

- Booter sur la clé NixOS.
- Dans un nix-shell, exécuter gparted.
- Procéder au redimentionnement (~100G).

## Installer NixOS

- Démarrer l'installation graphique de NixOS.
- Installer NixOS en dual-boot avec Windows.
- Redémarrer sur NixOS pour vérifier si ça marche.
- Redémarrer sur Windows pour vérifier aussi.

## Mettre à jour NixOS

- Démarrer sur NixOS et modifier des paramètres.
- Mettre à jour.
- Vérifier qu'on peut toujours booter sur NixOS et Windows.

## Installation sur le réseau

:::danger
Cette installation est critique et technique, elle doit être assistée par votre enseignant.
:::

Les étapes suivantes devront être effectuées :

- Faire du "ménager" sous les windows à redimentionner.
- Procéder au redimentionnement puis à l'installation.
- Ecrire une configuration commune pour les postes.
- Pousser la configuration.
- Mettre en place un partage NFS pour les homes élèves.
- Déclarer le partage dans la configuration.
- Mettre à jour la configuration avec les homes élèves.

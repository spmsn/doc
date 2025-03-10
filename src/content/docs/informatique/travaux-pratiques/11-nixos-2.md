---
title: Installation d'un OS minimal
---

Objectif : installer un système avec une console graphique.

## 1. Télécharger l'iso et lire la documentation

- Télécharger l'image minimale de NixOS en bas de [cette page](https://nixos.org/download/).
- Consulter la [documentation](https://nixos.org/manual/nixos/stable/#sec-installation-manual) sur l'installation du système.

:::note
Créez un fichier "notes-tp-11.md" dans lequel vous mettrez :

- L'ensemble des commandes utilisées pour l'installation du système.
- Votre configuration NixOS.
- Les commandes de maintenance une fois le système installé.
:::

:::caution
Pour une installation manuelle d'un système d'exploitation, **la préparation en amont est très importante**.
Préparez les commandes à exécuter dans le fichier de rendu.
:::

## 2. préparer une machine Virtualbox

Démarrer sous Linux, puis démarrer Virtualbox et préparer une machine avec les caractéristiques suivantes&nbsp;:

- 4 CPUs
- 8 Go de RAM
- 1 disque dur de 20 Go
- Boot UEFI
- Réseau : sélectionner "pont réseau"

## 3. Installation

:::note
NixOS est un système "déclaratif" : les logiciels à installer et leur configuration est contenu dans des fichiers situés dans `/etc/nixos`.
A chaque modification, il faut "builder" puis "switcher". Il est ensuite possible de revenir en arrière sur les versions précédentes en cas de problème.
:::

:::tip
Vous pouvez vous débrouiller pour installer ce système dans la machine "hôte" pour faciliter le copier-coller des commandes et de la configuration.

- Dans la VM, entrer `ip a` pour connaitre son ip.
- Entrer `passwd` pour définir un mot de passe.
- Se connecter avec `ssh nixos@<ip-vm>`.
:::

- Installer le système conformément à la documentation.
- L'utilisateur à déclarer s'appelle "nix".
- Son mot de passe est défini à "password".

## 4. Configuration du système

Une fois installé, on va mettre à jour la configuration pour ajouter des logiciels.

- Ajouter les modules "firefox", "gnome" et "gdm".
- Ajouter les programmes "vscode" et "wget".
- Rebuilder puis switcher sur la nouvelle configuration.
- Nettoyer l'historique des générations avec le garbage collector.

## 5. Rendu

Créer un dépôt de données "tp-11-install-nixos" dans forgejo comme [nous l'avons déjà fait ici](/informatique/travaux-pratiques/03-markdown/#pr%C3%A9paration), puis y mettre votre fichier de rendu.

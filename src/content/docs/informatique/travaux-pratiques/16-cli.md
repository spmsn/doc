---
title: Ligne de commandes
subtitle: Installer un OS sans interface graphique et s'entraîner aux commandes de base
---

On va s'entraîner à utiliser les commandes de base Linux sur une debian minimale.

:::note
Pour ce TP, nous n'utiliserons pas d'interface graphique. La plupart des serveurs fonctionnent sans interface évoluée, il est donc important de savoir se débrouiller exclusivement avec la ligne de commande.
:::

## Installation

Installez une machine virtuelle "debian-minimal" avec l'iso correspondante dans `/mnt/common/iso` (vous n'avez pas besoin de la télécharger).

- Utilisez votre nom et un pseudonyme simple pour l'utilisateur principal
- N'installez pas d'interface graphique, seulement OpenSSH

## Commandes essentielles

Essayez les [commandes essentielles](https://www.hostinger.com/fr/tutoriels/commandes-linux) de Linux et leurs options.

- Entraînez-vous a les taper plusieurs fois avec des options différentes.
- Utilisez la commande `man` pour découvrir les options complémentaires.
- Si une commande n'existe pas, il faut l'installer avec l'utilitaire `apt`.
- Demandez de l'aide à votre enseignant si vous bloquez sur une commande.

:::tip
Pour plus de confort d'utilisation, vous pouvez vous connecter à votre machine virtuelle dans un terminal de votre machine hôte. Pour cela il faut&nbsp;:

- Démarrer votre machine virtuelle avec un réseau "bridge"
- Connaître l'adresse ip de votre machine virtuelle (commande `ip`)
- Utiliser la commande `ssh` pour vous connecter à la VM
:::

---
title: Home Assistant
subtitle: Installation et Découverte de Home Assistant
---

À la fin de ce TP, vous aurez installé et configuré Home Assistant sur un PC de récupération x86_64. Vous aurez également découvert comment intégrer des périphériques domestiques intelligents et configurer des automatisations et des scripts. Home Assistant offre de nombreuses possibilités pour créer une maison intelligente personnalisée, alors n'hésitez pas à explorer davantage !

## Objectifs
- Installer Home Assistant sur un PC.
- Configurer les composants de base de Home Assistant.
- Découvrir et intégrer des périphériques domestiques intelligents.

## Prérequis
- Un PC avec au moins 2 Go de RAM et 16 Go de stockage.
- Une clé USB pour créer une image bootable.
- Accès à Internet.

## Étape 1 : Préparation de l'Image Bootable

1. **Télécharger l'Image Home Assistant** :
   - Rendez-vous sur le site officiel de Home Assistant et téléchargez l'image pour les architectures x86_64.
   - Lien : [Home Assistant OS](https://www.home-assistant.io/installation/generic-x86-64)

2. **Créer une Clé USB Bootable** :
   - Utilisez un outil comme Rufus (Windows) ou balenaEtcher (macOS/Linux) pour créer une clé USB bootable avec l'image téléchargée.

## Étape 2 : Installation de Home Assistant

1. **Booter sur la Clé USB** :
   - Insérez la clé USB dans le PC et démarrez-le.
   - Accédez au menu de démarrage (souvent en appuyant sur F12, ESC ou DEL) et sélectionnez la clé USB comme périphérique de démarrage.

2. **Installer Home Assistant** :
   - Suivez les instructions à l'écran pour installer Home Assistant sur le disque dur du PC.
   - Une fois l'installation terminée, redémarrez le PC.

## Étape 3 : Configuration Initiale

1. **Accéder à l'Interface Web** :
   - Après le redémarrage, Home Assistant devrait être accessible via l'interface web.
   - Ouvrez un navigateur et allez à l'adresse `http://homeassistant.local:8123`.

2. **Créer un Compte Utilisateur** :
   - Suivez les instructions pour créer un compte utilisateur et configurer les paramètres de base.

## Étape 4 : Découverte et Intégration de Périphériques

1. **Ajouter des Intégrations** :
   - Allez dans `Configuration` > `Intégrations` et cliquez sur `Ajouter une intégration`.
   - Recherchez et ajoutez des intégrations pour des périphériques.

2. **Configurer des Automatisations** :
   - Allez dans `Configuration` > `Automatisations` et créez une nouvelle automatisation.
   - Par exemple, configurez une automatisation pour allumer une lumière à une heure spécifique.

3. **Ajouter des Scripts** :
   - Allez dans `Configuration` > `Scripts` et créez un script pour exécuter une série d'actions.
   - Par exemple, un script pour éteindre toutes les lumières et verrouiller les portes.

## Étape 5 : Exploration Avancée

1. **Installer des Add-ons** :
   - Allez dans `Supervisor` > `Add-on Store` et explorez les add-ons disponibles.
   - Installez des add-ons comme `File Editor` pour modifier les fichiers de configuration ou `Mosquitto` pour utiliser MQTT.

2. **Modifier les Fichiers de Configuration** :
   - Utilisez l'add-on `File Editor` pour modifier les fichiers de configuration YAML de Home Assistant.
   - Ajoutez des composants personnalisés ou des intégrations avancées.

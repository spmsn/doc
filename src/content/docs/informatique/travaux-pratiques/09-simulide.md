---
title: SimulIDE
---

Ce TP va permettre de découvrir la simulation de montages électroniques.

## Découverte de SimulIDE

Exemple 1 :

- Aller dans "Explorateur de fichiers" puis "Examples". 
- Dans les exemples, choisir "Passive", "Resist_Sensors" puis "thermistor.sim1"
- Lancer la simulation : bouton rouge en haut.
- Tu peux voir ce qui se passe quand on change :
  - La valeur de la thermistance.
  - La valeur de la résistance.
  - La tension d'entrée.

Exemple 2 : 

- Aller dans "Outputs" -> "Leds" -> "led_rgb".
- Lance la simulation et change les valeurs des potentiomètres.

Autres exemples :

Parcours les exemples du logiciels et lance les simulations pour te familiariser avec le logiciel et ses composants. Tu as des circuits analogiques, numériques et basés sur des cartes de type Arduino.

## Exercice 1 : circuit simple

Crée un nouveau projet SimulIDE que tu nommeras `exercice-1` dans le répertoire `Documents/tp9`. Puis crée un circuit comportant les éléments suivants&nbsp;:

- Une LED et une résistance en parallèle.
- Une masse et une tension constante de 12V pour alimenter.
- Pour que la LED soit correctement alimentée, calcule la valeur de la résistance et modifie là.
- La simulation doit allumer la LED.

## Exercice 2 : un relais

Duplique le fichier de l'exercice 1 et nomme-le `exercice-2`. Nous allons ajouter au circuit&nbsp;:

- Un relais : mettre l'interrupteur du relais en série avec la résistance et la LED.
- Alimente la bobine du relais avec une alimentation "tension constante". Met en série l'alimentation, la bobine, un bouton poussoir et une masse.

Quand on appuie sur le bouton, ça doit activer le relais et allumer la LED.

## Exercice 3 : défi chenillard

Un chenillard est un circuit qui allume des LEDs les unes après les autres. Le plus simple est d'utiliser les circuits intégrés **NE555** (l'horloge) et **CD4017** (74HC4017, le compteur).

Dans un nouveau fichier `exercice-3`, reproduis un circuit proposé sur [la page suivante](https://www.sonelec-musique.com/electronique_realisations_chenillard_001.html) pour réaliser un chenillard.

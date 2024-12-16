---
title: 06 Créer un jeu
description: Débuter en jeu avec Pygame Zero
---

[Pygame Zero](https://pgzero-french.readthedocs.io/fr/latest/index.html) permet de développer des jeux vidéos rapidement avec Python et [Pygame](https://www.pygame.org/). Dans ce TP, nous allons créer un petit jeu puis l'améliorer.

## Rendu

Crée un dossier `pygamezero` dans lequel tu dois mettre tes fichiers de code. A la fin du TP, tu feras une archive ZIP que tu mettras sur l'ENT de ton enseignant. 

:::caution
**Les IAs ne sont pas autorisées** pour ce TP, sauf mention contraire.
:::

## 0. A consulter

Pour ce TP, tu as besoin de connaître :

- [Les bases de Python](/informatique/programmation/python/01-introduction) (documentation à compléter)
- [Les conditions (if, else)](https://python.doctor/page-apprendre-conditions-structures-conditionnelles-if-else-python-cours-debutant)
- [Les boucles (for)](https://python.doctor/page-apprendre-boucles-python-loop)
- [Les fonctions (qu'on crée avec "def")](https://python.doctor/page-apprendre-creer-fonction-en-python)

## 1. Installation et Tutoriel (8 pts)

Installe Pygame Zero et suis [le tutoriel d'introduction](https://pgzero-french.readthedocs.io/fr/latest/installation.html) pour créer le petit jeu de l'Alien.

:::caution
Pour pouvoir continuer le TP, il est important de ne pas opérer de modification au code proposé dans le tutoriel.
:::

:::tip[Conseil]
Lis bien le tutoriel et comprends le code que tu écris, ça te servira pour la suite.
:::

## 2. Améliorer le jeu (7 pts)

Nous allons modifier le code source de ce petit jeu pour l'améliorer.

### 2.1 Avoir une fenêtre de 800x600 (1)

Pour cela, il suffit de modifier les dimensions dans le code.

### 2.1 Faire aller l'alien plus vite (1)

Fais le traverser à une vitesse légèrement plus élevée pour qu'il soit un peu plus difficile de cliquer dessus.

:::note[Suggestion]
Sur la ligne de code à changer, une valeur de **5** est correcte. Ne le fais pas aller trop vite.
:::

### 2.3 Faire "tomber" l'alien (2)

L'alien doit apparaître en haut de la fenêtre puis disparaître en bas de la fenêtre comme si on le voyait tomber d'une vraie fenêtre.

:::tip
Aide-toi de la [documentation pour positionner ton acteur](https://pgzero-french.readthedocs.io/fr/latest/builtins.html#positionner-les-acteurs).
:::

### 2.4 Position horizontale aléatoire (3)

Le joueur ne doit pas savoir à quelle position, sur l'axe horizontal, l'alien va apparaître. A toi de faire en sorte qu'il apparaisse de manière aléatoire sur cet axe.

:::caution
- Ton alien doit pouvoir apparaître sur toute la largeur.
- Mais il ne doit pas dépasser de la fenêtre.
:::

:::tip
Utilise la [bibliothèque "random"](https://docs.python.org/fr/3.13/library/random.html) pour générer un nombre aléatoire :

```python
# A mettre en haut de ton fichier pour importer cette bibliothèque
import random

# Affichage d'un nombre aléatoire compris entre 2 et 10
print(random.randint(2, 10))
```
:::

## 3 Créer un jeu avec ChatGPT (5 pts)

Pour la fin de ce TP, je laisse libre cours à ton imagination pour créer un jeu en Python à l'aide de [ChatGPT](https://chatgpt.com/). Écris ton jeu dans un fichier `jeu-ia.py`.

:::note[Découvrir ChatGPT]
Si tu ne sais pas comment l'utiliser, pose-lui la question en copiant-collant le prompt suivant :
```
Peux-tu me dire comment t'utiliser très simplement ?
```
:::

### Quelques conseils

- Commence par un jeu simple !
- Décris ton jeu avec des détails.
- Demande à l'améliorer au fur et à mesure.
- Regarde le code et efforce toi de le comprendre.


:::note[Exemple]
Prompt 1 :

> Peux-tu m'écrire simplement en python le jeu "pierre papier ciseaux" ? Le joueur doit jouer contre l'ordinateur et il faut qu'il tape "P" pour pierre, "PP" pour papier et "C" pour ciseaux.

Prompt 2 :

> Merci, il faut qu'on puisse jouer à l'infini, et que si le joueur tape "q", ça quitte le jeu.

Résultat (tu peux l'essayer dans un fichier `ppc.py`) : 

```python
import random

def jouer():
    choix_possibles = {"P": "Pierre", "PP": "Papier", "C": "Ciseaux"}
    
    print("Bienvenue au jeu Pierre, Papier, Ciseaux !")
    print("Tapez : P pour Pierre, PP pour Papier, C pour Ciseaux")
    print("Tapez : Q pour quitter le jeu.")

    while True:
        # Choix de l'ordinateur
        choix_ordi = random.choice(list(choix_possibles.keys()))

        # Choix du joueur
        choix_joueur = input("Votre choix : ").strip().upper()

        # Vérification de l'entrée pour quitter
        if choix_joueur == "Q":
            print("Merci d'avoir joué ! À bientôt.")
            break

        # Vérification de l'entrée valide
        if choix_joueur not in choix_possibles:
            print("Entrée invalide. Veuillez choisir entre P, PP, C ou Q.")
            continue

        print(f"Vous avez choisi : {choix_possibles[choix_joueur]}")
        print(f"L'ordinateur a choisi : {choix_possibles[choix_ordi]}")

        # Déterminer le gagnant
        if choix_joueur == choix_ordi:
            print("C'est une égalité !")
        elif (
            (choix_joueur == "P" and choix_ordi == "C") or
            (choix_joueur == "PP" and choix_ordi == "P") or
            (choix_joueur == "C" and choix_ordi == "PP")
        ):
            print("Vous gagnez !")
        else:
            print("L'ordinateur gagne !")

# Lancer le jeu
if __name__ == "__main__":
    jouer()
```
:::

:::caution[Attention]
ChatGPT risque d'ouvrir une fenêtre spéciale pour l'écriture de code source, qui est une fonction limitée dans sa version gratuite. Demande à "revenir dans le chat" pour pouvoir continuer.
:::

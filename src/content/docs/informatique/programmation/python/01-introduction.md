---
title: Introduction à Python
description: Une introduction à Python pour débutants
---

:::caution[Aller plus loin]
Ce cours est une rapide introduction à Python. Pour aller plus loin, tu peux par exemple consulter [le cours "Apprenez les bases du langage Python"](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python) sur OpenClassRooms ou [ce tutoriel complet et pratique](https://www.w3schools.com/python/default.asp) (en anglais).
:::

:::note[Un défis qui t'attend !]
Cette documentation est incomplète. Alors pourquoi pas relever le défi de continuer à l'écrire ? Ça serait un bon moyen d'apprendre à programmer en Python.
:::

## Installer un environnement Python

Python est un programme qui exécute du code. Par exemple pour exécuter `test.py`, il suffit de taper ça en ligne de commande :

```sh
python test.py
```

:::tip
Tu peux créer ce fichier `test.py` pour faire des essais. Manipuler est le meilleur moyen d'apprendre un langage de programmation.
:::

Mais tu peux aussi utiliser [l'éditeur IDLE](https://docs.python.org/fr/3.13/library/idle.html) pour exécuter du ton code directement avec `F5` (Run).

## Commentaire de code

Les commentaires ne sont pas lus par l'exécutable `python`, ils sont juste là pour commenter ton code.

```python
# Je suis un commentaire qui n'est pas interprété
# Les commentaires suivent le caractère "#"
```

## Afficher du texte

Pour afficher du texte on utilise la fonction `print` :

```python
# Affichage de la chaîne de caractères "Bonjour"
print("Bonjour")

# Affichage du nombre 10
print(10)
```
---
title: Ligne de commandes
---

Ce TP va nous permettre de réviser les [commandes essentielles](https://www.hostinger.com/fr/tutoriels/commandes-linux) et l'utilisation de la ligne de commandes. Nous travaillerons sous NixOS.

:::caution[Important]
- Vous serez amené à faire des recherches par vous-même.
- Merci de respecter les consignes pour le rendu.
:::

:::tip[Utilisez la commande `man`]
Elle permet d'avoir une page de manuel sur une commande. Par exemple `man man` affiche la page de manuel sur la commande `man` elle-même. On peut aussi taper `man ls`, `man find`, etc.
Il existe des [versions françaises](https://www.man-linux-magique.net/) moins récentes.
:::

## Préparation

:::note
Quelques commandes utiles : `cd`, `mkdir`, `touch`, `nano`, `git`.
:::

Créez un dépôt git `tp-cli` dans [le forgejo local](http://homelab:3000). Puis dans `~/Documents`, cloner ce dépôt.

```sh
# Demander à git d'enregistrer identifiant + mot de passe
git config --global credential.helper store

# Cloner
git clone [url-du-depot]

# Aller dans le dossier du projet
cd tp-cli

# Vérifier que cette commande fonctionne sans
# demander d'identifiant ou de mot de passe
git pull
```

En ligne de commandes :

- Créez un fichier `reponses.md` pour écrire vos réponses en markdown.
- Mettez comme titre "TP ligne de commandes".
- Faites une première validation dans git :

```sh
git add .
git commit -m "Création du fichier de réponses"
```

:::note
A la fin de chaque étape, faites un `git add` puis `git commit` comme précédemment, avec une phrase adaptée pour chaque commit.
:::

## 1. La commande `du`

Voici une commande :

```sh
du -csh ~
```

Essayez là et en faisant des recherches, expliquez dans le fichier de réponses à quoi servent cette commande et ses arguments.

:::tip[Fin d'étape...]
N'oubliez pas de valider (`git add`, `git commit...`).
:::

## 2. La commande `find`

Même question pour la commande suivante :

```sh
find ~ -name "gnome-*" | sort
```

Ecrivez à quoi sert cette commande et le caractère |. Expliquez comment fonctionne ce dernier.

Completons :

```sh
find ~ -name "gnome-*" | sort | tee gnome.txt
ls -l
```

Que s'est-il passé et à quoi sert `tee` ?

:::tip[Fin d'étape...]
N'oubliez pas de valider (`git add`, `git commit...`).
:::

## 3. Liens symboliques

Soit la série de commandes suivante :

```sh
mkdir -p a/b/c
ln -s a/b/c d
ls -l
cd d
pwd
pwd -P
cd ..
```

Exécutez toutes ces commandes UNE PAR UNE, puis dans le fichier de réponses décrivez ce qui se passe.

- Qu'est-ce qu'un lien symbolique et à quoi ça sert ?
- Quelle est la différence entre `pwd` et `pwd -P`.

:::tip[Fin d'étape...]
N'oubliez pas de valider (`git add`, `git commit...`).
:::

## 4. Gestion de fichiers

Trouvez et écrivez les commandes dans le fichier de réponses :

- Renommer le fichier `gnome.txt` en `gnome.list`.
- Copier le fichier `reponses.md` en `reponses.md.bak`.

:::tip[Fin d'étape...]
N'oubliez pas de valider (`git add`, `git commit...`).
:::

## 5. grep

`grep` est une commande très utilisée. Elle permet de faire des recherches et du filtrage. Devinez ce que font les commandes suivantes.

```sh
# Celle-ci ?
ls ~ | grep -i doc

# Je crée un fichier avec une phrase...
echo "J'aime bien gnome" > a/b/test.txt

# Que fait cette commande ?
grep -r gnome .

# Et celle-ci ?
rm -f gnome2.txt && grep -r gnome . | tee gnome2.txt
```

:::tip[Fin d'étape...]
N'oubliez pas de valider (`git add`, `git commit...`).
:::

## 6. Commandes informatives

Décrivez ce que donnent comme information les commandes suivantes.

```sh
df
duf
uname -a
mount
ip addr
htop
btop
```

:::tip[Fin d'étape...]
N'oubliez pas de valider (`git add`, `git commit...`).
:::

## Bonus : cli games

:::note
Il faut avoir terminé les étapes précédentes.
:::

En ligne de commande, il existe aussi de nombreux jeux. En voici un.

```sh
nix-shell -p vitetris
tetris
exit
```

- Qu'est-ce qu'un nix-shell et à quoi ça sert ?
- Que fait la commande `tetris` ?
- Comment faire pour jouer en réseau avec adversaire ?
- Pourquoi faut-il faire un `exit` à la fin ?

:::tip[Fin d'étape...]
N'oubliez pas de valider (`git add`, `git commit...`).
:::

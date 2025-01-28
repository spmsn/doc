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

:::caution[Mise à jour]
Suite aux premiers TP, nous avons vu qu'il était difficile d'installer Windows 11 par dessus Linux. Nous allons donc changer des stratégie.
:::

Sur un poste :

- Installer Windows 11.
- Shrinker la partition à 280Go (si ce n'est pas déjà fait).
- Installer NixOS avec le [script préparé par l'enseignant](#configuration-initiale).
- Modifier le bootloader pour démarrer sur Windows par défaut.
- Cloner le disque avec clonezilla.

Sur les autres postes :

- Deployer avec clonezilla.

Sur tous les postes :

- Deployer les configurations.

## Partage NFS

Un partage NFS doit être mis en place pour les partitions home.

- Créer un serveur NFS sur le serveur de l'hopital + un partage.
- Sur chaque poste, avoir un montage `/mnt/home`.
- Changer les homes utilisateurs pour `/mnt/home/<user>`.

## Configuration initiale

```sh
# Disque à formatter
export DISK=/dev/sda
export OPTS=defaults,x-mount.mkdir,noatime,nodiratime,ssd,compress=zstd:3

# Disque GPT
#parted $DISK -- mklabel gpt
#parted $DISK -- mkpart ESP fat32 1MB 128MB
#parted $DISK -- mkpart root btrfs 128MB -2GB
#parted $DISK -- mkpart swap linux-swap -2GB 100%
#parted $DISK -- set 1 esp on
#parted $DISK -- print

# A changer en fonction du partitionnement de windows
mkfs.fat -F 32 -n BOOT ${DISK}'1'
mkfs.btrfs -L NIXOS ${DISK}'2'
mkswap -L SWAP ${DISK}'3'

# Création des sous-volumes btrfs
mount /dev/disk/by-label/NIXOS /mnt
btrfs subvolume create /mnt/@
btrfs subvolume create /mnt/@home
umount /mnt

mount -o $OPTS,subvol=@ /dev/disk/by-label/NIXOS /mnt
mount -o $OPTS,subvol=@home /dev/disk/by-label/NIXOS /mnt/home
mount --mkdir -o umask=077 /dev/disk/by-label/BOOT /mnt/boot
swapon /dev/disk/by-label/SWAP

nixos-generate-config --root /mnt

echo '''{ config, lib, pkgs, ... }:
{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  networking.hostName = "pc1";
  time.timeZone = "America/Miquelon";
  i18n.defaultLocale = "fr_FR.UTF-8";
  console = {
    font = "Lat2-Terminus16";
    keyMap = lib.mkForce "fr";
    useXkbConfig = true;
  };
  users.users.nix = {
    uid = 65000;
    initialPassword = "nixos";
    isNormalUser = true;
    extraGroups = [ "wheel" ];
  };
  security.sudo.wheelNeedsPassword = false;
  environment.systemPackages = with pkgs; [
    vim
  ];
  services.openssh.enable = true;
  system.stateVersion = "24.11";
}
''' > /mnt/etc/nixos/configuration.nix

# Installation + demande password à la fin
nixos-install
```

```nix
{ config, lib, pkgs, ... }:
{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  networking.hostName = "pc1";
  time.timeZone = "America/Miquelon";
  i18n.defaultLocale = "fr_FR.UTF-8";
  console = {
    font = "Lat2-Terminus16";
    keyMap = lib.mkForce "fr";
    useXkbConfig = true;
  };
  users.users.nix = {
    uid = 65000;
    initialPassword = "nixos";
    isNormalUser = true;
    extraGroups = [ "wheel" ];
  };
  security.sudo.wheelNeedsPassword = false;
  environment.systemPackages = with pkgs; [
    vim
  ];
  services.openssh.enable = true;
  system.stateVersion = "24.11";
}
```


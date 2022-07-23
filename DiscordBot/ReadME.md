# Discord Bot (Node JS)

Dans cette partie de projet, vous saurez comment manipuler un Bot sur Discord pour qu'il puisse vous informer des résultats des JO par message instantané.
Regardez la [vidéo](https://www.loom.com/share/d058df26afcc4eab96517219e8d25c91) pour une démonstration ainsi que l'explication du code.

## Prérequis

• Avoir Node installé dans votre machine (version 14 minimum). Vous pouvez accéder via ce [site](https://nodejs.org/en/).

• Avoir un IDE installé (ex : [Visual Studio Code](https://code.visualstudio.com)).

• Avoir le serveur local utilisé plus tôt pour la partie de projet Laravel.

• Avoir paramétré au préalable le serveur Discord ainsi que le Bot JS : rendez-vous sur [cette vidéo](https://www.loom.com/share/b8284fe500f04f039d422fa82be55d6a) pour apprendre à créer le serveur Discord, créer puis ajouter le bot au serveur en générant un token requis pour établir une connexion avec le script du projet.

## Instructions

• Effectuer la commande `cd discordbot` pour se rendre dans le dossier du script du bot. Si vous êtes toujours dans le dossier Laravel *API*, se rendre à la racine du projet avec la commande `cd ..` avant d'effectuer la commande précédente.

• Entrer `npm install` pour récupérer les dépendances nécessaires au fonctionnement du projet.

• Renseigner dans le fichier *.env* le DATABASE_USER (identifiant), le DATABASE_PASSWORD (mot de passe) et le DATABASE_NAME (que j'ai nommé "laravel_api"). User et password dépendent de la configuration de votre serveur local. Bien veiller à avoir renseigné le token du Bot Discord ici (cf vidéo précédente dans les prérequis).

• Activer ce serveur local.

• Lancer le script avec la commande `node bot`. Si le paramétrage du serveur et du Bot a bien été respecté, vous pouvez désormais entrer des commandes dans le chat du salon *général* du serveur que vous avez créé pour tester le script du Bot.

• Effectuer cette commande Discord : 

exemple : `!football` -> Préfixe "!" + nom du sport souhaité. Seuls les sports à terme unique fonctionnent dans ce projet.

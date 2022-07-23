# API (Laravel)

Dans cette partie de projet, vous saurez comment soumettre les sports et les résultats correspondants à la base de donnée.

## Prérequis

• Avoir Composer installé dans votre machine. Vous pouvez cliquier sur ce [fichier exécutable pour le télécharger](https://getcomposer.org/Composer-Setup.exe).

• Avoir un IDE installé (ex : [Visual Studio Code](https://code.visualstudio.com)).

• Avoir un serveur local (ex : j'utilise Laragon. [Xampp](https://www.apachefriends.org/fr/index.html) est une solution non risquée puisqu'elle inclut Mac, Windows et Linux).

• Avoir [Postman](https://www.postman.com)

### Instructions

• Effectuer la commande `cd api` sur votre terminal.

• Ensuite, `php artisan serve` pour lancer le serveur

• Dans votre serveur local, créer une base de données "laravel_api" sans ajouter de table.

• Dans le dossier *API* du projet, se rendre dans le fichier *.env* et rensigner la DB_DATABASE ("laravel_api"), le DB_USERNAME et DB_PASSWORD qui sont le pseudonyme et le mot de passe pour cette base de données (dépent de l'utilisateur).

• Revenir sur votre terminal, et entrer `php artisan migrate` pour créer les tables à l'intérieur de *laravel_api*

### Envoyer des données JO à la base de données (cf vidéo LOOM)

#### Sport

• Aller sur Postman et créer une route de type **POST**

• Coller le lien http://127.0.0.1:8000/api/sports sur le champ de requête.

• Cliquer sur *Params*. Dans *KEY*, renseigner "name" puis dans *VALUE*, renseigner un sport olympique de votre choix !

• Cliquer sur *SEND*

#### Résultats

• Créer une route de type **POST**

• Coller le lien http://127.0.0.1:8000/api/results sur le champ de requête.

• Cliquer sur *Params*, et renseigner les champs. _Le sports_id doit avoir la même valeur que l'id du name dans la table sport_. Voici un exemple :

```
sports_id = 1
country = France
position = 1 (1 signifie 1ère position)
```

• Cliquer sur *SEND*


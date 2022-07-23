# API (Laravel)

Dans cette partie de projet, vous saurez comment soumettre les sports et les résultats correspondants à la base de donnée

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

### Envoyer des données JO à la base de données

#### Sport

• 


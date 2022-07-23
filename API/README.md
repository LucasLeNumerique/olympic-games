# API (Laravel)

Dans cette partie de projet, vous saurez comment soumettre les sports et les résultats correspondants à la base de donnée.
Regardez la [vidéo](https://www.loom.com/share/b487ff8df1e64cdeb01c0f2929822d23) pour une démonstration ainsi que l'explication du code.

## Prérequis

• Avoir Composer installé dans votre machine. Vous pouvez cliquier sur ce [fichier exécutable pour le télécharger](https://getcomposer.org/Composer-Setup.exe).

• Avoir un IDE installé (ex : [Visual Studio Code](https://code.visualstudio.com)).

• Avoir un serveur local MySQL (ex : j'utilise Laragon. [Xampp](https://www.apachefriends.org/fr/index.html) est une solution non risquée puisqu'elle inclut Mac, Windows et Linux).

• Avoir [Postman](https://www.postman.com)

### Instructions

• Effectuer la commande `cd api` sur votre terminal.

• Lancer votre serveur local, puis créer une base de données "laravel_api" sans ajouter de table.

• Dans le dossier *API* du projet, dupliquer le fichier *.env.example* et renommer le doublon en *.env*. À l'intérieur de ce fichier, renseigner la DB_DATABASE ("laravel_api"), le DB_USERNAME et DB_PASSWORD qui sont le pseudonyme et le mot de passe pour cette base de données (dépent de la configuration de votre application de serveur local).

• Après les informations de la base de données informées, effectuer `php artisan serve` pour lancer le serveur Laravel.

• Revenir sur votre terminal, et entrer `php artisan migrate` pour créer les tables à l'intérieur de *laravel_api*.

### Envoyer des données JO à la base de données (cf vidéo LOOM)

#### Sport

• Aller sur Postman et créer une route de type **POST**.

• Coller le lien http://127.0.0.1:8000/api/sports sur le champ de requête.

• Cliquer sur *Params*. Dans *KEY*, renseigner "name" puis dans *VALUE*, renseigner un sport olympique de votre choix !

• Cliquer sur *SEND*.

#### Résultats

• Créer une route de type **POST**

• Coller le lien http://127.0.0.1:8000/api/results sur le champ de requête.

• Cliquer sur *Params*, et renseigner les champs *KEY* et *VALUE*. 

>Attention, le sports_id a un lien avec l'id du name dans la table sports (Dans la table *sport*, si l'id du football et 1 - et que vous souhaitez soumettre par rapport au football - alors le sports_id dans la table *results* sera également 1. Voici un exemple :

```
sports_id = 1
country = France
position = 1
```

• Cliquer sur *SEND*.

• Vérifier la soumission de données dans la base de données locale.

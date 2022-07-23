const clientLoader = require('./src/clientLoader');
// const commandLoader = require('./src/commandLoader');
const MysqlConnector = require('./src/MySqlConnector');

require('colors');

const COMMAND_PREFIX = '!';
MysqlConnector.connect();

clientLoader.createClient(['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'])
  .then(async (client) => {
    // await commandLoader.load(client);

    client.on('messageCreate', async (message) => {
      // Ne pas tenir compte des messages envoyés par les bots, ou qui ne commencent pas par le préfix
      if (message.author.bot || !message.content.startsWith(COMMAND_PREFIX)) return;

      // Découper le message pour récupérer tous les mots
      const words = message.content.split(' ');

      const commandName = words.shift().slice(1); // Le premier mot du message, auquel on retire le préfix
      const arguments = words; // Tous les mots suivants sauf le premier

      // ---------------------------------------------- CI-DESSUS LE CODE DU TEMPLATE FOURNI PENDANT LE COURS DE DISCORD JS --------------------------------------- //

      // Sélectionner le sport de la base de données équivalent à la commande sur Discord
      var sql = "SELECT * FROM `sports` WHERE name = '" + commandName + "'"
      MysqlConnector.executeQuery(sql)
      .then((response) => {
        
        if (response[0]) {
          // Si la sélection du sport de la base de données s'est bien faite...
          // Sélectionner les données du premier pays (enregistré le premier dans la base de données)
          var sql2 = "SELECT * FROM `results` WHERE sports_id = " + response[0].id
          MysqlConnector.executeQuery(sql2)    
          .then((response2) => {

            if (response2[0]) {
              // Si au moins un pays, concernant le sport choisi, est présent dans la base...
              // Faire une boucle pour afficher chaque pays et sa position
              for (let i = 0 ; i < response2.length; i++) {
                const element = response2[i];
                // Envoyer un message (par le Bot) sur Discord avec le pays et sa position sur le sport demandé
                message.channel.send(element.country + ': Position -> ' + element.position);
              }
            } else {
              message.channel.send('No results about this sport are available');
            }
          })

        } else {
          message.channel.send('This sport is not even being played in this Olympic Games edition!');
        }

      })
    })
  });

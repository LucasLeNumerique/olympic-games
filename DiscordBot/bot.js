const clientLoader = require('./src/clientLoader');
const commandLoader = require('./src/commandLoader');
const MysqlConnector = require('./src/MySqlConnector');

require('colors');

const COMMAND_PREFIX = '!';
MysqlConnector.connect();

clientLoader.createClient(['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'])
  .then(async (client) => {
    await commandLoader.load(client);

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
      
    })
  });

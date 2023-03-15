const { REST, Routes } = require('discord.js');

//dotenv do js
const dotenv = require('dotenv');
dotenv.config();

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// importação dos comandos nos arquivos

const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));


const commands = [];

for (const file of commandsFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}


//instancia REST
const rest = new REST({version: "10"}).setToken(TOKEN);



// console.log(commands);

//deploy de fato
(async () => {
  // console.log('entrou aqui');
  try {
    console.log(`Redefinindo ${commands.length} comandos...`);

    //put
    const data = await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),{ body: commands });

    console.log('Comandos registrados com sucesso!');
  } catch(e) {
    console.error('Ocorreu um erro ao redefinir os comandos: '+ e);
  }
})()

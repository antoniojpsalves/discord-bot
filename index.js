const {Client, Events, GatewayIntentBits, Collection} = require('discord.js');

//dotenv do js
const dotenv = require('dotenv');
dotenv.config();

const {TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();


const docsUrls = [
  {
    linguagem: 'Git',
    link: "https://www.w3schools.com/git/default.asp"
  },
  {
    linguagem: 'PHP',
    link: "https://www.php.net/manual/pt_BR/index.php"
  },
  {
    linguagem: 'Javascript',
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
  },
  {
    linguagem: 'Jquery',
    link: "https://api.jquery.com/"
  },
  {
    linguagem: 'ReactJS',
    link: "https://pt-br.reactjs.org/docs/getting-started.html"
  },
  {
    linguagem: 'React Native',
    link: "https://reactnative.dev/docs/getting-started"
  },
  {
    linguagem: 'DiscordJS',
    link: "https://discord.js.org/#/docs/discord.js/main/general/welcome"
  },
];

// importação dos comandos nos arquivos

const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

// console.log(commandsFiles)


for(file of commandsFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.error("Comando não encontrado");
  }
}

// console.log(client.commands)


client.once(Events.ClientReady, c => {
  console.log(`Pronto! Login realizado como ${c.user.tag}`);
})

client.login(TOKEN);

//Listener de interações com o bot

client.on(Events.InteractionCreate, async interaction => {

  //checando primeiro o tipo de interação, caso seja o select
  if(interaction.isStringSelectMenu()) {
    const selected = interaction.values[0];

    // console.log(docsUrls.filter(tech => tech.linguagem === selected));

    //destructuring massa dms
    const [{ linguagem, link }] = docsUrls.filter(tech => tech.linguagem === selected);

    await interaction.reply(`Aqui está o link com a documentação da tech ${linguagem}: ${link}`);
  }

  
  //se a interação não vier de um input do chat return
  if(!interaction.isChatInputCommand()) return
    
  // console.log(interaction)

  const command = interaction.client.commands.get(interaction.commandName);

  if(!command) {
    console.error("Comando não encontrado");
    return;
  }
  
  try {
    await command.execute(interaction);
  } catch(e) {
    console.error('Erro ao executar o comando');
    await interaction.reply("Houve um erro ao executar esse comando");
  }
})
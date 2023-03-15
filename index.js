const {Client, Events, GatewayIntentBits, Collection} = require('discord.js')

//dotenv do js
const dotenv = require('dotenv')
dotenv.config()

const {TOKEN, CLIENT_ID, GUILD_ID } = process.env

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.commands = new Collection()

// importação dos comandos nos arquivos

const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, 'commands')
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

// console.log(commandsFiles)


for(file of commandsFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)

  if("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command)
  } else {
    console.error("Comando não encontrado");
  }
}

// console.log(client.commands)


client.once(Events.ClientReady, c => {
  console.log(`Pronto! Login realizado como ${c.user.tag}`)
})

client.login(TOKEN)
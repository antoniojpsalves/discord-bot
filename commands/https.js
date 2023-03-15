const { SlashCommandBuilder } = require('discord.js')



module.exports = {

  data: new SlashCommandBuilder()
    .setName("https")
    .setDescription("Lista todos status code utilizados no protocolo HTTPS"),

  async execute(interaction) {
    await interaction.reply("Ainda em desenvolvimento!")
  }
}


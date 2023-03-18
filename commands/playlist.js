const { SlashCommandBuilder } = require('discord.js')



module.exports = {

  data: new SlashCommandBuilder()
    .setName("lofi")
    .setDescription("Melhor playlist de lofi para desenvolver e estudar"),

  async execute(interaction) {
    await interaction.reply("https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=84de1f7104a24060");
  }
}

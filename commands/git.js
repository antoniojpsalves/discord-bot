const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')



//Embed
const exempleEmbed = new EmbedBuilder()
  .setColor('#8257e6')
  .setTitle("Teste Artigo Interno GIT")
  .setURL('https://google.com')
  .setAuthor({ 
    name: 'Antonio Alves', 
    iconURL: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'})
  .setDescription("Teste de descrição para embed preparado no response")
  .setThumbnail('https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')
  .addFields(
    {name: 'Comando', value: 'Mais usados'},
    {name: '\u200B', value: '\u200B'},
    {name: '$git init', value: 'inicializa repositório local', inline: true},
    {name: '$ git status', value: 'show diff entre main e o head', inline: true}
  )
  .setImage('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80')
  .setTimestamp()
  .setFooter({ text: 'Artigo criado apenas para teste', iconURL: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'});

  // channel.send({embeds: [exempleEmbed]});



module.exports = {

  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Relembrar comandos do git que usamos no dia a dia"),

  async execute(interaction) {
    await interaction.reply({embeds: [exempleEmbed]})
  }
}


const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')



//Embed
const exempleEmbed = new EmbedBuilder()
  .setColor('#8257e6')
  .setTitle("Artigo Interno GIT")
  .setAuthor({ 
    name: 'Antonio Alves', 
    iconURL: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'})
  .setDescription("Principais comandos que utilizamos na comfica no dia a dia")
  .addFields(
    { name: '\u200B', value: '\u200B' },
    { name: '$ git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome especificado', inline: true },
    { name: '$ git clone [url]', value: 'Baixa um projeto e seu histórico de versão inteiro', inline: true },
    { name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git status', value: 'Revise edições e crie uma transação de commit', inline: true },
    { name: '$ git add [arquivo]', value: 'Faz o snapshot de um arquivo na preparação para versionamento', inline: true },
    { name: '$ git commit -m "[mensagem]"', value: 'Grava o snapshot permanentemente do arquivo no histórico de versão', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git branch', value: 'Lista todos os branches locais no repositório atual', inline: true },
    { name: '$ git branch [nome-branch]', value: 'Cria uma nova branch', inline: true },
    { name: '$ git switch -c [nome-branch]', value: 'Muda para a branch especificada e atualiza o diretório de trabalho', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada a branch atual', inline: true },
    { name: '$ git push [alias] [branch]', value: 'Envia todos os commits do branch local para o GitHub', inline: true },
    { name: '$ git pull', value: 'Baixa o histórico e incorpora as mudanças', inline: true },
  )
  .setImage('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80')
  .setTimestamp()
  .setFooter({ text: 'Guia rápido de comandos git', iconURL: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'});

module.exports = {

  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Relembrar comandos do git que usamos no dia a dia"),

  async execute(interaction) {
    await interaction.reply({embeds: [exempleEmbed]});
  }
}


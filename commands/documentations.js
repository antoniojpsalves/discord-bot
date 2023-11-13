const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Selecione uma das linguagens")
      .addOptions(
        {
          label: "Git Tutorial",
          description: "Achei que seria menos complexo e direto ao ponto",
          value: "Git"
        },
        {
          label: "PHP",
          description: "Veja a documentação do php",
          value: "PHP"
        },
        {
          label: "Javascript",
          description: "Veja a documentação do JS",
          value: "Javascript"
        },
        {
          label: "Jquery",
          description: "Veja a documentação do Jquery",
          value: "Jquery"
        },
        {
          label: "ReactJS",
          description: "Veja a documentação do React ",
          value: "ReactJS"
        },
        {
          label: "React Native",
          description: "Veja a documentação do RN",
          value: "React Native"
        },
        {
          label: "DiscordJS",
          description: "Veja a documentação do DiscordJS ><",
          value: "DiscordJS"
        },
        {
          label: "Typescript",
          description: "Veja a documentação do Typescript",
          value: "Typescript"
        }
      )
  );

module.exports = {

  data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Acesse rapidamente a documentação das linguagens que mais usamos"),

  async execute(interaction) {
    await interaction.reply({ content: "Selecione uma das techs abaixo: ", components: [row] });
  }
}

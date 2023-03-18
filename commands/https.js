const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const statusCode = new EmbedBuilder()
  .setColor('#3eff89')
  .setTitle("HTTP STATUS CODE")
  .setAuthor({
    name: 'Victor Marques',
    iconURL: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
  })
  .setDescription("Descrição dos principais status code do protocolo HTTP")
  .addFields(
    { name: '\u200B', value: '\u200B' },
    { name: 'Information [100 - 199]', value: 'Intervalo de códigos que informam algo ao cliente'},
    { name: '\u200B', value: '\u200B' },
    { name: 'Código: 100', value: 'Continue.' },
    { name: 'Código: 101', value: 'Switching Protocols.' },
    { name: 'Código: 102', value: 'Processing.' },
    { name: 'Código: 103', value: 'Early hints.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Information [200 - 299]', value: 'Intervalo de códigos que informam sucesso no request.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Código: 200', value: 'OK. Status de sucesso. É DEFALT para qualquer rota encontrada.' },
    { name: 'Código: 201', value: 'Created.' },
    { name: 'Código: 202', value: 'Accepted.' },
    { name: 'Código: 204', value: 'No Content.' },
    { name: 'Código: 206', value: 'Partial Content.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Information [300 - 399]', value: 'Intervalo de códigos que informam redirecionamento' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Código: 300', value: 'Multiple choices.' },
    { name: 'Código: 301', value: 'Moved Permanantly.' },
    { name: 'Código: 304', value: 'Not Modifield.' },
    { name: 'Código: 307', value: 'Temporary Redirect.' },
    { name: 'Código: 308', value: 'Permanant Redirect.' },
  )
  .setTimestamp()
  .setFooter({ text: 'API Restful simplificada', iconURL: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' });


const metodosHttp = new EmbedBuilder()
  .setColor('#e855cb')
  .setTitle("Verbos do protocolo HTTP")
  .setAuthor({
    name: 'Antonio Alves',
    iconURL: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
  })
  .setDescription("Resumo dos principais verbos utilizados em RESTFul APIs")
  .addFields(
    { name: '\u200B', value: '\u200B' },
    { name: 'GET', value: 'Request que busca um recurso no backend.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'POST', value: 'Request que cria um recurso no backend.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'PUT', value: 'Request que atualiza um recurso no backend. Exemplo: um formulário em que muitos campos são alterados.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'PATCH', value: 'Request que atualiza uma informação específica de um recurso no backend. Exemplo: modifica apenas um campo de ativo / inativo.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'DELETE', value: 'Request que deleta um recurso no backend.' },
  )
  .setTimestamp()
  .setFooter({ text: 'API Restful simplificada', iconURL: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' });


const errorCode = new EmbedBuilder()
  .setColor('#e65c57')
  .setTitle("Quando a requisição falha...")
  .setAuthor({
    name: 'Victor Marques',
    iconURL: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
  })
  .setDescription("Principais códigos de erros client e server side.")
  .addFields(
    { name: '\u200B', value: '\u200B' },
    { name: 'Information [400 - 499]', value: 'Intervalo de códigos que informam erro no request (CLIENT SIDE)' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Código: 400', value: 'Bad Request.' },
    { name: 'Código: 401', value: 'Unauthorized.' },
    { name: 'Código: 403', value: 'Forbidden.' },
    { name: 'Código: 404', value: 'Not Found.'},
    { name: 'Código: 409', value: 'Conflict.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Information [500 - 599]', value: 'Intervalo de códigos que informam erro no servidor (SERVER SIDE)' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Código: 500', value: 'Internal Server Error.' },
    { name: 'Código: 501', value: 'Not Implemented.' },
    { name: 'Código: 502', value: 'Bad Gateway.' },
    { name: 'Código: 503', value: 'Service unavailable.' },
    { name: 'Código: 504', value: 'Gateway Timeout.' }
  )
  .setTimestamp()
  .setFooter({ text: 'API Restful simplificada', iconURL: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' });


module.exports = {

  data: new SlashCommandBuilder()
    .setName("https")
    .setDescription("Lista todos status code utilizados no protocolo HTTPS"),

  async execute(interaction) {
    await interaction.reply({ embeds: [metodosHttp, statusCode, errorCode] })
  }
}


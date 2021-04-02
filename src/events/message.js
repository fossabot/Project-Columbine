//Puxandos os modulos pastas e arquivos nescessarios
const Discord = require('discord.js');
const firebase = require('firebase');
const db = firebase.database()

module.exports = async (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'DM') return;

    //Puxando do banco de dados o prefixo!
    let prefix = await db.ref(`Configurações/Servidores/${message.guild.id}/Prefixo`).once('value')
    prefix = prefix.val().prefixo
    
    //Puxando o prefixo do arquivo config.json
    if(!prefix) prefix = prefix;

    //Caso o user mencione o bot ira mencionar ele e o bot
    //Criando a menção e a embed para enviar no canal
        if(message.content == `<@!${client.user.id}>`) {
            let embed = new Discord.MessageEmbed()

            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png' }))
			.setThumbnail(client.user.displayAvatarURL({ format: 'png' }))
            .setTitle('Prefixo')
            .setDescription(`Meu Prefixo nesse servidor é \`${prefix}\`, Use \`${prefix}ajuda\` Para Ver Meus Comandos!`)
        message.channel.send(embed)
    };
    //Agora puxando a handler para executar o comando
    const member = message.author.username;
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    let cmd = args.shift().toLowerCase();

    //Puxando os iniciadores dos comandos
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let command = client.commands.get(cmd);
    if (command) {command.run(client, message, args);
    } else {

    }
}
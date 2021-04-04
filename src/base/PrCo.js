const { Client, Collection } = require('discord.js'),
    //{ Guild } = require('../database/models'),
    Enmap = require('enmap');

module.exports = class PrCo extends Client {
    constructor(options) {
        super(options);
        //comand handler
        this.commands = new Enmap();
        this.cooldowns = new Collection();
        //Configurando o arquivo da database
        this.firebase = require('../database/db')

          //Arquivo config.js
          this.config = require('../config')

          //Atividade do bot
          this.Activity = [];
          this.PresenceType = 'PLAYING';
          
          //Estatisticas basica do bot
          this.messagesSent = 0;
          this.commandsUsed = 0;
    }
          //Encontrar o ID do user na API do discord
          async getUser(id) {
              try {
                  const user = await this.users.fetch(id);
                  return user;
              } catch (err) {
                  console.log(err.message);
                  return false;
              }
          }

          //Pegando os canais em cache
          async getChannel(id) {
            try {
                const channel = await this.channels.cache.get(id);
                return channel;
            } catch (err) {
                console.log(err.message);
                return false;
            }
        }

        //Setando a atividade do bot
        async SetStatus(status = 'online') {
            try {
                await this.user.setStatus(status);
                return;
            } catch (err) {
                console.log(err.message);
                return false;
            }
        }

        //Setando a atividade do bot
        SetActivity(array = [], type = 'STREAMING') {
            this.Activity = array;
            this.PresenceType = type;
            try {
                let j = 0;
                setInterval(() => this.user.setActivity(`${this.Activity[j++ % this.Activity.length]}`, { type: type }), 10000);
                return;
            } catch (e) {
                console.log(e);
            }
        }
          
    }
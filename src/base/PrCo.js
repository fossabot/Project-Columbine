const { Client, Collection } = require('discord.js');

module.exports = class PrCo extends Client {
    constructor(options) {
        super(options);
        //comand handler
        this.commands = new Collection();
        this.aliases = new Collection();
        this.cooldowns = new Collection();

        //Iniciando a database1
        this.firebase = require('../database/firebase');
        //Iniciando a database2
        this.mongoose = require('../database/mongoose');

          //Arquivo config.js
          this.config = require('../config/config')
          this.webhooks = require('../config/webhooks')

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
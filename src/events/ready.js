module.exports = async client => {
    //Puxando as estatísticas do bot
    console.log(
        `Bot iniciado com sucesso! ${client.user.tag} ${client.guilds.cache.reduce((total,guild) => total + guild.memberCount, 0)} usúarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.\n`
    );

    client.appInfo = await client.fetchApplication();
    //Iniciando o Player de Audio
    client.manager.init(client.user.id)

    setInterval(async () =>{
        client.appInfo = await client.fetchApplication();
    }, 60000)
    
    //Puxando o localhost para iniciar os dados do bot
    //Iniciando servidor web
    try {
        require('../http/api')(client);
        //require('../http/webhook/dbl')(client);
    } catch (e) {  
    console.log(e)
        }

      //Adicionandos os status ao bot
      //WATCHING = ASSISTINDO, LISTENING = OUVINDO, PLAYING = JOGANDO faz aí os status que quiser
      //Pode se adicionar quantos status quiser, só seguir o exemplo abaixo!!
      var status = [
          {name: "Working in version v2.1.0", type: "WATCHING" },
          {name: `Jogando com ${client.guilds.cache.reduce((total,guild) => total + guild.memberCount, 0)} usuários!`, type: "STREAMING", url: "https://www.twitch.tv/cyberplank_2077"},
      ];

      function setStatus() {
          var altstatus = status[Math.floor(Math.random() * status.length)]
          client.user.setActivity(altstatus);
      }
      //Defina o tempo que deseja para que os status alternem entre-si
      //Defina em MS 1seg = 1000ms
      setStatus();
      setInterval(() => setStatus(), 10000);
        //Evento de enviar msg no ready
        if (client.config.support) {
        var msga = `Bot iniciado com sucesso! ${client.user.tag} ${client.guilds.cache.reduce((total,guild) => total + guild.memberCount, 0)} usúarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.\n`
        var channel = client.guilds.cache.get(client.config.supportserver.serverID).channels.cache.get(client.config.supportserver.serverChannel)
        setInterval(function() {
            channel.send(msga);
        }, 1000 * 60 * 60 * 60);
        channel.send(msga);
    }
}
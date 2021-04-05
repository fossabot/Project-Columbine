const config = {
    token: 'you token here', //https://discord.com/developers/applications
    clientID: 'you clientsecret here', //https://discord.com/developers/applications/YOUR_BOT_ID/oauth2
    prefix: 'you prefix here',
    //Pegando as keys das API'S
    api_keys: {
        spotify: {
            iD: 'Spotify ID here',
            secret: 'Spotify client secret here' //https://developer.spotify.com/dashboard/applications
        },
    },
    DiscordBotList: {
        DBL_key: '',
    },
    //Caso queira que o bot envie uma mensagem sempre que iniciar alterar de false para true
    supportserver: {
        serverID: '', //You server ID here
        serverChannel: '' //You server channelID here
    },
    //Aviso de iniciamento
    support: false,
    //Para ajudar na correção de bugs!
    debug: false, 
}
module.exports = config;
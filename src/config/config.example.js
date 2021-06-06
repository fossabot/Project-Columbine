const config = {
    ownerID: '', //Owner ID//Seu ID
    token: '', //https://discord.com/developers/applications
    clientSecret: '', //https://discord.com/developers/applications/YOUR_BOT_ID/oauth2
    clientID: '', //Client BOT ID
    //Pegando as keys das API'S //GET_API_KEYS 
    api_keys: { //https://developer.spotify.com/dashboard/applications
        spotify: {
            iD: '',
            secret: ''
        },
        genius: 'genius lyrics api here', //https://genius.com/api-clients
    },

    DiscordBotLists: {
        DBL_key: '',
    },
    //Support server ID/Channel 
    SupportServer: {
        serverID: '',
        serverChannel: ''
    },
    defaultSettings: {
        prefix: '!', //YouPrefix here
        Language: 'pt-Br', //you lang here
    },
    //Mostrando o ping continuo do uptime do bot
    PING_PORT: 65535,
    //MongoDB URL
    MongoDBURl: 'mongodb//url',
    //Para ajudar na correção de bugs!
    debug: false,
}
module.exports = config;
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
    //Habilita/Desabilita o plugin ant-raid/self-bot
    AntRaidPlugin: false,

    DiscordBotLists: {
        DBL_key: '',
    },
    //Support server ID/Channel 
    SupportServer: {
        serverID: '',
        serverChannel: ''
    },
    defaultSettings: {
        prefix: 'prefix', //YouPrefix here
    },
    //Aviso de iniciamento //Caso queira que o bot envie uma mensagem sempre que iniciar alterar de false para true
    support: false,
    //Para ajudar na correção de bugs!
    debug: false,
    //Mostrando quando o bot foi iniciado
    PING_PORT: 65535,
}
module.exports = config;
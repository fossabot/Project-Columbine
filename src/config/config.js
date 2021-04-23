const config = {
    ownerID: '583676051838861342',
    token: 'NzY4MDAwNTMwMzYxODc2NDkw.X46GOw.SZY9KMYMUG5p4Oc7FaalSMIJ19Y',
    clientSecret: 'NB-9I81U4HKMpLtd8pc8pVUnugA3EeKK',
    clientID: '768000530361876490',
    //Pegando as keys das API'S
    api_keys: {
        spotify: {
            iD: '5e76bb1f956c472b8fbef8108c04a222',
            secret: '74610f3484c5464589f8dbb6d9d3b27d'
        },
        genius: 'b7jTFhEmuIYuqsPFer_yzvuEU2zJmHrc0PhoXb4r45APGJJdhx8dWnIKwakH4F8e',
    },
    //Habilita/Desabilita o plugin ant-raid/self-bot
    AntRaidPlugin: false,

    DiscordBotLists: {
        DBL_key: '',
    },
    //Caso queira que o bot envie uma mensagem sempre que iniciar alterar de false para true
    SupportServer: {
        serverID: '718853480097382430',
        serverChannel: '718853480097382435'
    },
    defaultSettings: {
        prefix: 'b!',
    },
    //Aviso de iniciamento
    support: false,
    //Para ajudar na correção de bugs!
    debug: false,
    //Mostrando quando o bot foi iniciado
    PING_PORT: 65535,
}
module.exports = config;
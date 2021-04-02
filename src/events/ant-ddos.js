module.exports = async (client) => {
const WebSocket = require('ws').Server
const wss = new WebSocket({port: 80})
const unspam = require('unspam')
unspam.init({maxRequestRate: 1,expiry:60,cacheInterval:30000})
wss.on('connection', function(ws) {
    unspam.attachSocket(ws, function() {
        ws.on('message', function(message) {
            console.log(message)
        })
    })
 })
}
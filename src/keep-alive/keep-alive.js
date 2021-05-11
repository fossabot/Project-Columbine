const fetch = require('node-fetch');


//Caso esteja hospendando em algum provedor heroku/glitch/repl.it ativar o ping externo!!
//descomentando-o na index.js


setInterval(() => fetch('https://project-columbine-v1.herokuapp.com'), 5 * 60 * 1000);
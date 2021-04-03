const fetch = require('node-fetch');


//Caso esteja hospendando em algum provedor heroku/glitch/repl.it ativar o ping externo!!
//descomentando-o na index.js


setInterval(() => fetch(`http://localhost:3000`), 5 * 60 * 1000);
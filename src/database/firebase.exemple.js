//Puxando as dependencias/arquivos/pastas necessarias
const Firebase = require('firebase')
const chalk = require('chalk')

const firebase = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  app_d: '',
  measurementId: ''
}

try {
  Firebase.initializeApp(firebase)
  console.log(chalk.greenBright("[Banco de Dados Iniciado!!]"),)

} catch (err) {
  return console.log(chalk.yellowBright("[Banca de Dados Erro]"), `${err}`)
};

module.exports = firebase;
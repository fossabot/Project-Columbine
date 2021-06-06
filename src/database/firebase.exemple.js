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
  console.log(chalk.greenBright("[DATABASE2]"),)

} catch (err) {
  return console.log(chalk.yellowBright("[DATABASE2 Error]"), `${err}`)
};

module.exports = firebase;
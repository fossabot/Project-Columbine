//Puxando as dependencias/arquivos/pastas necessarias
const Firebase = require('firebase')
const chalk = require('chalk')

const firebase = {
  apiKey: 'AIzaSyALAfJnSFB3GUnB4FD4qSfQdVLgrSDGdWE',
  authDomain: 'battlebotv2-1.firebaseapp.com',
  databaseURL: 'https://battlebotv2-1-default-rtdb.firebaseio.com',
  projectId: 'battlebotv2-1',
  storageBucket: 'battlebotv2-1.appspot.com',
  messagingSenderId: '487519856645',
  app_d: '1:487519856645:web:b8e799fb44acea5322546c',
  measurementId: 'G-96BGNTPZ3L'
}

try {
  Firebase.initializeApp(firebase)
  console.log(chalk.greenBright("[DATABASE2] Banco de daddos Iniciado!"),)

} catch (err) {
  return console.log(chalk.yellowBright("[DATABASE2 Error]"), `${err}`)
};

module.exports = firebase;
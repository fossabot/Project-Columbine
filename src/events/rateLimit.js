const chalk = require("chalk");

module.exports = async (client, rateLimitInfo) => {
  console.log(chalk.redBright("[RATE LIMITED]"), `Tempo Esgotado: ${rateLimitInfo.timeout}`);
  console.log(chalk.redBright("[RATE LIMITED]"), `Limite: ${rateLimitInfo.limit}`);
  console.log(chalk.redBright("[RATE LIMITED]"), `Método: ${rateLimitInfo.method}`);
  console.log(chalk.redBright("[RATE LIMITED]"), `Caminho: ${rateLimitInfo.path}`);
  console.log(chalk.redBright("[RATE LIMITED]"), `Rota: ${rateLimitInfo.route}`);
};
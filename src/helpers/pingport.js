const { PING_PORT } = require("../config/config");
const chalk = require("chalk");
const express = require("express");
const app = express();

module.exports = {
  init: () => {
    app.get("/status", (req, res) => {
      res.json({ status: "i'm started >,,<", Updated: Date(Date.now()) });
    });

    app.get("*", (req, res) => {
      res.redirect("/status");
    });

    app.listen(PING_PORT, () => {
      console.log(chalk.yellowBright("[BOT STARTUP]"), `Ping port running on port ${PING_PORT}.`);
    });
  }
};
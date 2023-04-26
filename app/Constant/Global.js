const DataBaseBuilder = require("../DataBaseBuilder");

require("dotenv-expand").expand(require("dotenv").config());

const APP = Object.freeze({
  PORT: process.env.PORT,
  PATH_DATABASE: process.env.PATH_DATABASE,
});

class Roles {
  /** @type {string} Le rôle administrateur. */
  static ADMIN = process.env.ADMIN;

  /** @type {string} Le rôle joueur. */
  static JOUEUR = process.env.JOUEUR;

  /** @type {string} Le rôle coach. */
  static COACH = process.env.COACH;

  /** @type {string} Le rôle contributeur. */
  static CONTRIBUTEUR = process.env.CONTRIBUTEUR;
}

const DB = DataBaseBuilder.createApp(APP.PATH_DATABASE);

module.exports = { APP, DB, Roles };

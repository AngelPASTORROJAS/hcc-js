const { Roles } = require("../Constant/Global")

class AdherentModel {
  /** @type {Number} L'identifiant de l'adhérent. */
  id
  /** @type {String} Le nom de l'adhérent. */
  nom
  /** @type {String} Le prénom de l'adhérent. */
  prenom
  /** @type {String} L'adresse email de l'adhérent. */
  email
  /** @type {String} Le mot de passe de l'adhérent. */
  password
  /** @type {Roles} Le rôle de l'adhérent. */
  role
  /** @type {Date} La date d'inscription de l'adhérent. */
  date_inscription
};

module.exports = AdherentModel;

const { Roles } = require("../Constant/Global")

class Adherent {
  /** @type {string } L'identifiant de l'adhérent. */
  id
  /** @type {String} Le nom de l'adhérent. */
  nom
  /** @type {String} Le prénom de l'adhérent. */
  prenom
  /** @type {String} L'adresse email de l'adhérent. */
  email
  /** @type {String} Le mot de passe de l'adhérent. */
  mot_de_passe
  /** @type {Roles} Le rôle de l'adhérent. */
  role
  /** @type {Date} La date d'inscription de l'adhérent. */
  date_inscription
};

module.exports = Adherent;

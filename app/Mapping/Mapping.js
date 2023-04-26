const Adherent = require("../Data/Adherent");
const AdherentModel = require("../Models/AdherentModel");

/**
 * The function maps properties from an adherent model to an adherent object.
 * @param {AdherentModel} adherentModel - an object representing an adherent with properties such as id, nom, prenom,
 * email, password, role, and date_inscription.
 * @returns {Adherent} an instance of the Adherent class with properties set based on the values of the input
 * adherentModel object.
 */
function mapAdherentModelToAdherent(adherentModel) {
  const adherent = new Adherent();
  if (adherentModel.id) adherent.id = adherentModel.id;
  if (adherentModel.nom) adherent.nom = adherentModel.nom;
  if (adherentModel.prenom) adherent.prenom = adherentModel.prenom;
  if (adherentModel.email) adherent.email = adherentModel.email;
  if (adherentModel.password) adherent.mot_de_passe = adherentModel.password;
  if (adherentModel.role) adherent.role = adherentModel.role;
  if (adherentModel.date_inscription)
    adherent.date_inscription = adherentModel.date_inscription;
  return adherent;
}

module.exports = {
  mapAdherentModelToAdherent,
};

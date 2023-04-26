const { DB } = require("../Constant/Global");
const Adherent = require("../Data/Adherent");
const { mapAdherentModelToAdherent } = require("../Mapping/Mapping");
const AdherentModel = require("../Models/AdherentModel");

class AdherentService {
  /**
   * This function returns a promise that retrieves all rows from a table named "adherents" in a
   * database.
   * @returns {Promise<Adherent[]>} A Promise that will either resolve with an array of all rows from the "adherents" table
   * in the database or reject with an error if there was an issue executing the SQL query.
   */
  static getAdherents() {
    return new Promise((resolve, reject) => {
      DB.all("SELECT nom, prenom FROM adherents;", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  /**
   * This function creates a new adherent (user) in a database using SQL and a Promise.
   * @param {AdherentModel} adherentModel - an object containing the properties of a new adherent to be created,
   * including their name, email, and password.
   * @returns {Promise<void>} The function `createAdherent` returns a Promise that resolves with no value if the
   * insertion into the database is successful, or rejects with an error message if there is an error.
   */
  static createAdherent(adherentModel) {
    const adherent = mapAdherentModelToAdherent(adherentModel);
    const sql =
      "INSERT INTO adherents(nom, prenom, email, mot_de_passe ) VALUES (?, ?, ?, ?)";
    const params = [
      adherent.nom,
      adherent.prenom,
      adherent.email,
      adherent.mot_de_passe,
    ];
    return new Promise((resolve, reject) => {
      DB.run(sql, params, function (err) {
        if (err) {
          reject(err.message);
        } else {
          // console.log("New user added:", this.lastID);
          resolve();
        }
      });
    });
  }
}

module.exports = AdherentService;

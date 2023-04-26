const { DB } = require("../Constant/Global");
const Adherent = require("../Models/Adherent");

class AdherentService {
  /**
   * This function returns a promise that retrieves all rows from a table named "adherents" in a
   * database.
   * @returns {Promise<Adherent[]>} A Promise that will either resolve with an array of all rows from the "adherents" table
   * in the database or reject with an error if there was an issue executing the SQL query.
   */
  static getAdherents() {
    return new Promise((resolve, reject) => {
      DB.all("SELECT * FROM adherents;", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = AdherentService;

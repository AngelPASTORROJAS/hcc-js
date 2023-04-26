const { Database } = require("sqlite3");

const sqlite3 = require("sqlite3").verbose();

class DataBaseBuilder {
  /**
   * This function creates several tables in a database if they do not already exist.
   * @param {string} path - The path parameter is a string that represents the file path to the SQLite database
   * file.
   * @returns {Database} a database builder object that has created several tables (adherents, utilisateurs,
   * actualites, matchs, and participations) in the database based on the SQL queries provided in the
   * function.
   */
  static createApp(path) {
    let builder = this.fromFile(path);
    builder.serialize(() => {
      builder.run(
        `CREATE TABLE IF NOT EXISTS adherents (
          id INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          nom VARCHAR(50) NOT NULL,
          prenom VARCHAR(50) NOT NULL,
          email VARCHAR(100) NOT NULL UNIQUE,
          mot_de_passe VARCHAR(100) NOT NULL,
          role VARCHAR(20),
          date_inscription DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
        );`
      );
      builder.run(
        `CREATE TABLE IF NOT EXISTS actualites (
          id INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          titre VARCHAR(100) NOT NULL,
          contenu TEXT NOT NULL,
          auteur_id INT NOT NULL,
          FOREIGN KEY (auteur_id) REFERENCES adherents(id)
        );`
      );
      builder.run(
        `CREATE TABLE IF NOT EXISTS matchs (
          id INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          date_match DATETIME NOT NULL,
          score_domicile INT NOT NULL,
          score_visiteur INT NOT NULL
        );`
      );
      builder.run(
        `CREATE TABLE IF NOT EXISTS participations (
          joueur_id INT NOT NULL,
          match_id INT NOT NULL,
          PRIMARY KEY (joueur_id, match_id),
          FOREIGN KEY (joueur_id) REFERENCES adherents(id),
          FOREIGN KEY (match_id) REFERENCES matchs(id)
        );`
      );
    });
    return builder;
  }

  /**
   * The function creates a new SQLite database object with the specified path.
   * @param {string} path - The path parameter is a string that represents the location and name of the SQLite
   * database file that will be created.
   * @returns A new instance of the `sqlite3.Database` class with the specified `path` parameter.
   */
  static fromFile(path) {
    return new sqlite3.Database(path);
  }
}

module.exports = DataBaseBuilder;

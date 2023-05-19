const AdherentModel = require("../Models/AdherentModel");
const AdherentService = require("../Services/Adherentservices");

class AdherentController {
  /**
   * This function sends a response containing all adherents obtained from the AdherentService.
   * @param {import("express").Request} _req - _req is a parameter that represents the HTTP request object. It contains information
   * about the incoming request such as the request method, headers, URL, and any data sent in the
   * request body.
   * @param {import("express").Response} res - "res" is short for "response" and it is an object that represents the HTTP response
   * that will be sent back to the client. It is used to send data back to the client, set headers, and
   * control the status code of the response. In this code snippet, "res" is
   */
  static async getAdherents(_req, res) {
    res.send(await AdherentService.getAdherents());
  }
  /**
   * This function creates a new adherent with the given name, email, and password, and returns an
   * error message if the creation fails.
   * @param {import("express").Request} req - The req parameter is an object that represents the HTTP request made by the client.
   * It contains information such as the request method, headers, URL, and body.
   * @param {import("express").Response} res - `res` is the response object that is used to send the response back to the client. It
   * is an instance of the Express `Response` object. In this code snippet, it is used to send the
   * response back to the client after calling the `createAdherent` method of the `Ad
   */
  static async createAdherent(req, res) {
    /** @type {AdherentModel} */
    const adherent = req.body;
    try {
      res.send(await AdherentService.createAdherent(adherent));
    } catch (error) {
      if (error.includes("SQLITE_CONSTRAINT")) {
        res.status(400).send({ message: error });
      }
      res.status(500).send();
    }
  }

  static async getAdherentById(req, res){
    try {
      const id = req.params.id;
      if (id < 1) return res.status(400).send("Id invalide");
      res.send(await AdherentService.getAdherentById(id))
    } catch (error) {
      res.status(500).send()
    }
  }
}

module.exports = AdherentController;

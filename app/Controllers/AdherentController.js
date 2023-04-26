const AdherentService = require("../Services/Adherentservices");

class AdherentController {
  static async getAdherents(_req, res) {
    res.send(await AdherentService.getAdherents());
  }
}

module.exports = AdherentController;

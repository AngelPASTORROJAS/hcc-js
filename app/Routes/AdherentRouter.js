const express = require("express");
const AdherentController = require("../Controllers/AdherentController");
const router = express.Router();

router.get("", function (_req, res) {
  AdherentController.getAdherents(_req, res);
});
router.post("", function (req, res) {
  AdherentController.createAdherent(req, res);
});
router.get(":id", function (req, res) {
  AdherentController.getAdherentById(req,res);
});

module.exports = router;

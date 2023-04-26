const express = require("express");
const AdherentController = require("../Controllers/AdherentController");
const router = express.Router();

router.get("", function (_req, res) {
    AdherentController.getAdherents(_req, res)
});

module.exports = router;

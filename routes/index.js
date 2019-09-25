const express = require("express");
const router = express.Router();

router.use("/", require("./application.js.js"));
router.use("/api/player", require("./player.js.js"));


router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
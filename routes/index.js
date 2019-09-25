const express = require("express");
const router = express.Router();

router.use("/", require("./player.js"));
// router.use("/api/player", require("./player.js.js"));


router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
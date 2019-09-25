const express = require("express");
const playerRouter = express.Router();
const playerController = require("../controllers/player")

playerRouter.get("/", playerController.index)
playerRouter.get("/name/:name", playerController.indexByName)
playerRouter.delete("/name/:name", playerController.destroyByName)
playerRouter.put("/name/:name", playerController.updateByName)
playerRouter.post("/", playerController.create)
module.exports = playerRouter;
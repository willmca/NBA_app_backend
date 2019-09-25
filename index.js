const express = require("express")
const app = express()
const parser = require("body-parser")
const cors = require('cors')
const playerRouter = require("./routes/player")
const applicationRouter = require("./routes/application")

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(cors())

app.use("/api/player", playerRouter)
app.use("/", applicationRouter)

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => 
{console.log(`PORT: ${app.get("port")}`)});

const mongoose = require("../connection")
const Schema = mongoose.Schema


const PlayerSchema = new Schema({
    name:String,
    height:Number,
    weight:Number,
    photo:String,
    position:String,
})
const Player = mongoose.model("Player", PlayerSchema)
module.exports = Player
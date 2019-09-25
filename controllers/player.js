const Player = require("../db/models/Player");

module.exports = {
  index: (req, res) => {
    Player.find({}).then(players => {
      res.json(players);
    });
  },
  indexByName: (req,res) => {
    Player.findOne({
      name: req.params.name
    }).then(players =>
     res.json(players))
  },
destroyByName:(req,res) => {
  Player.findOneAndDelete({
    name: req.params.name
  }).then(donePlayer => res.json(donePlayer))
},
updateByName: (req, res) => {
    console.log(req.body)
    Player.findOneAndUpdate({
      name: req.params.name
    }, req.body,
      { new: true })
      .then(newPlayer => res.json(newPlayer))
},
create: (req, res) => {
    Player.create(req.body)
      .then(newPlayer => {
        res.json(newPlayer)
      })
  }
}

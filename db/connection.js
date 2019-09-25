const mongoose = require('mongoose')

mongoose.Promise = Promise

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
  } else {
	mongoURI = "mongodb://localhost/nba";
  }

mongoose.connect('mongodb://localhost/nba', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose
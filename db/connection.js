const mongoose = require('mongoose')

mongoose.Promise = Promise

let mongoURI = "mongodb+srv://willmca32:wizards0@maincluster-athkw.mongodb.net/test";

if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
  } else {
	mongoURI = "mongodb://localhost/nba";
  }

mongoose.connect(mongoURI, { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose
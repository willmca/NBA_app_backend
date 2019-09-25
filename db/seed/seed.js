const Player = require("./../models/Player")
const PlayerData=require("./../data/players.json")

Player.find({}).deleteMany({}).then(() => {
    
    let newPlayerData = {};
    
    PlayerData.map(element => {
        
        newPlayerData.name=element.name;
        newPlayerData.height=element.height;
        newPlayerData.weight=element.weight;
        newPlayerData.photo=element.photo;
        newPlayerData.position=element.position
       

        Player.create(newPlayerData)
        .then( (players) => {
            players.save()
            console.log(players)
          
            
        } )
    })
});



  
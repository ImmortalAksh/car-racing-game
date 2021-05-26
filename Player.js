class Player{
constructor(){
 this.index=null
 this.distance=0
 this.Name=null}
getCount(){
    var playerCountref=database.ref("playerCount")
    playerCountref.on("value",function(data){
        playerCount=data.val()
})
}

updateCount(count){
    database.ref("/").update({  
        playerCount:count
    })
}
    update(){
        var playerIndex="players/player"+ this.index
        database.ref(playerIndex).set({
            Name:this.Name,
            distance:this.distance
    })
}
static getPlayerInfo(){
    var playerInforef=database.ref("players")
    playerInforef.on("value",(data)=>{
        allPlayers=data.val()
    })
}

}

class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("play")
        this.greeting=createElement("h2")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
display(){
    var title=createElement("h2")
    title.html("carRacingGame")
    title.position(displayWidth/2-50,0)

    

    this.input.position(displayWidth/2-300,displayHeight/2-200)
    this.button.position(displayWidth/2-250,displayHeight/2-150)
    this.button.mousePressed(()=>
    {
        this.input.hide()
        this.button.hide()
        player.Name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
       this.greeting.html("hello "+player.Name)
        this.greeting.position(displayWidth/2-300,displayHeight/4)
    
        
        
    })
}
}
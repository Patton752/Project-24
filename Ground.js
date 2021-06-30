class Ground{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
       
        this.w=w
        this.h=h

        World.add(world,this.body)
    }
display(){
    var groundpost=this.body.position
    push()
    translate(groundpost.x,groundpost.y)
    rectMode(CENTER)

    fill("black")

    rect(0,0,this.w,this.h)

    pop()
}
}
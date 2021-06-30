class Dustbin{
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
    var d=this.body.position
    var angle=this.body.angle

    push()
    translate(d.x,d.y)

    rotate(angle)
    
    rectMode(CENTER)

    fill("green")

    rect(0,0,this.w,this.h)

    pop()
}
}
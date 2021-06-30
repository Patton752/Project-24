class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,(r-20)/2,option)

        this.r=(r-20)/2

        World.add(world,this.body)
    }
display(){
    var p=this.body.position
    push()
    translate(p.x,p.y)
    rectMode(CENTER)

    fill("white")

    rect(0,0,this.r,this.r)

    pop()
}
}
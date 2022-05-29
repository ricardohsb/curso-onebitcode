function slowDown(velocity, printer){
    let desaceleration = 20

    while(velocity>0){
        printer(velocity)
        velocity -= desaceleration
    }
    alert('Nave parada, as comportas podem ser abertas')
}

let spaceshipVelocity = 150
slowDown(spaceshipVelocity,function(velocity){
    console.log(`Velocidade atual: ${velocity}`)
} )
class Spaceship {
    static get desaceleration(){
        return 0.17
    }
    constructor(name, crew){
    this.name = name
    this.crew = crew
    this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += (acceleration * (1-Spaceship.desaceleration))
    }
}
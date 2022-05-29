
let spaceship = {

    velocity: 0,
    speedUp: function(){
        acceleration = Number(prompt('Quanto deseja acelerar?'))
        this.velocity += parseInt(acceleration)
        return alert(`Nova velocidade da nave: ${this.velocity}`)
        
    },
    stoper: function (){
        alert(`A nave ${spaceship.name}, de ${spaceship.type} estava viajando a ${this.velocity}km/s`)
        },
    checkSpeed: function(){
        if(this.velocity > spaceship.maxVelocity) {
            alert(`Velocidade da Nave: ${this.velocity}\nVelocidade Máxima da Nave: ${spaceship.maxVelocity}`)
        }
    }
}

function register(){
    spaceship.name = prompt('Qual nome da nave?')
    spaceship.type = prompt('Qual tipo da nave?')
    spaceship.maxVelocity = Number(prompt('Qual velocidade maxima da nave?'))
}



function showMenu(){
    let menu 
    while(menu != "2"){
        menu = prompt('1-Acelerar\n2-Parar')
        switch (menu) {
            case "1":
                spaceship.speedUp()
                spaceship.checkSpeed()
                break;
            case "2":
                spaceship.stoper()
                break
            default:
                alert('Opção inválida!')
                break;
        }        
    }
}
register()
showMenu()
class App{
    constructor(){
        //this.spaceship = null
    }
    start(){
        this.cadastro()
        let choosen
        while(choosen !="3"){
            choosen = this.showInitialMenu()
            this.redirect(choosen)
        }
        this.printAndExit()
    }
    cadastro(){
        let spaceshipName = prompt("Qual nome da nave?")
        let spaceshipCrew = prompt('qual a quantidade de tripulantes?')
        let spaceshipKind = this.askForSpaceshipKind()
        if (spaceshipKind == "1"){
            let weapons = prompt("quantas armas tem a nave?")
            this.spaceship = new Battle(spaceshipName, spaceshipCrew, weapons)
        }else {
            let vacancy = prompt("quantas vagas tem a nave?")
            this.spaceship = new Transport(spaceshipName,spaceshipCrew,vacancy)
        }
    }
    askForSpaceshipKind(){
        let choosen
        while(!["1","2"].includes(choosen)){
            choosen = prompt("qual o tipo de nave?\n1-Batalha\n2-Transporte")
        }
        return choosen
    }
    showInitialMenu(){
        const message =  "o que voce deseja fazer?\n1- Acelerar\n2-Trocar a nave\n3-Imprimir e sair "
        let choosen = prompt(message)
        while(!["1","2","3"].includes(choosen)){
            choosen = prompt(message)
        }
        return choosen
    }
    redirect(choosen){
        switch(choosen){
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.cadastro()
                break
            case "3":

        }

    }
    accelerateSpaceship(){
        let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
        this.spaceship.speedUp(acceleration)
    }
    printAndExit(){
        let finalMessage = 'Nome:' + this.spaceship.name + "\n"+
                            'Qtd de Tripulantes:' + this.spaceship.crew + "\n"+
                            'Velocidade Atual:' + this.spaceship.currentVelocity + "\n"
        alert(finalMessage)
    }

}




let spaceship = prompt('Qual nome da nave?')
let velocity = 0    
let menu = ''

function menus(){
    menu = prompt('Menu de navegação:\n1-Acelerar 5km/s\n2-Desacelerar 5km/s\n3-Imprimir dados de bordo\n4-Sair do programa')
}
menus()
function speedUp(increase=5){
    velocity += increase
}

function speedDown(decrease=5){
    if (velocity <= 0){
        alert(`A Nave está parada, podemos acelerar.`)
    }else{
        velocity -= decrease
    }
}

function printDate(){
    alert(`${spaceship} está a ${velocity}km/s`)
}


while (menu !='4') {
    if (menu == '1'){
        speedUp()
    }else if(menu=='2'){
        speedDown()
    }else if(menu=='3'){
        printDate()
    }else if(menu=='4'){
        break
    }else{
        alert('Menu inválido')
    }
    menus()
}


let px = 0
let py = 0
let obj

function addClick(){
    alert("Evento Keydown Ativado")
    obj.style.backgroundColor = "red"
    document.addEventListener('keydown',move)
}

function iniciar(){
    obj = document.getElementById("div1")
    obj.addEventListener("click",addClick)
}


window.addEventListener("load", iniciar)


function move(){
    //obj = document.getElementById('div1')
    let tecla = event.keyCode //37-Esquerda 38-cima 39-direita 40-baixo 13-enter
    if (tecla =="37"){
        px-=10
        obj.style.left = px+"px"
    }else if(tecla=="38"){
        py-=10
        obj.style.top = py+"px"
    }else if(tecla=="39"){
        px+=10
        obj.style.left = px+"px"
    }else if(tecla=="40"){
        py+=10
        obj.style.top =py+"px"
    }else if(tecla =="13"){
        alert("evento keydown removido")
        document.removeEventListener("keydown",move)
        obj.style.backgroundColor = "transparent"
    }
}
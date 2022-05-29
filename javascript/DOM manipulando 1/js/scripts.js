function addItem(){
    let numero = document.querySelector("input[name='numero']").value
    let area = document.querySelector("input[name='area']").value
    let bairro = document.querySelector("input[name='bairro']").value
    let cidade = document.querySelector("input[name='cidade']").value

    let newList = document.createElement("li")
    newList.innerText = `${area} m2, Número: ${numero}, Bairro: ${bairro}, Cidade: ${cidade}  `

    let buttonRemove = document.createElement("button")
    buttonRemove.type = "button"
    buttonRemove.innerText = "remover"
    buttonRemove.setAttribute("onclick", "removeHouse(this)")

    newList.appendChild(buttonRemove)
    document.getElementById("house-list").appendChild(newList)
}   

function removeHouse(button){
    let liToRemove = button.parentNode
    document.querySelector("ul#house-list").removeChild(liToRemove)
}
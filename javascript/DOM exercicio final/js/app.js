class App {
    
    cadastrar(){
    event.preventDefault()
    let tipo = document.querySelector("select[name='tipo']").value
    let area = document.querySelector("input[name='area']").value
    let checarAlugado = document.querySelector("input[name='alugado']").checked 
    let property = new Property(tipo, area, checarAlugado)
    this.addPropertylist(property)
    this.limpar()
    }
    addPropertylist(property){
        let novasListas = document.createElement('li')
        let propertyInfo = `tipo: ${property.tipo}, Area: ${property.area}`
        if (property.alugado) {
            var marcaAlugado = this.markAlugado()
            novasListas.appendChild(marcaAlugado)
        }
        novasListas.innerHTML += propertyInfo
        
        let buttonToRemove = this.createButtonRemove()
        novasListas.appendChild(buttonToRemove)
    
        document.getElementById("cadastro-lista").appendChild(novasListas)
    }
    createButtonRemove(){
        let buttonRemove = document.createElement('button')
        buttonRemove.setAttribute("onclick", "app.remove()")
        buttonRemove.innerText = 'remover'
        return buttonRemove

    }
    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("cadastro-lista").removeChild(liToRemove)  
    }
    markAlugado(){
        let markAlugado = document.createElement('span')
        markAlugado.innerText = "ALUGADO"
        markAlugado.style.color = 'white'
        markAlugado.style.backgroundColor = 'red'
        return markAlugado
                
    }
    limpar(){
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='alugado']").checked = false
    }
}

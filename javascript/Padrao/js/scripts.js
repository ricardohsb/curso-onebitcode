class imovel {
    constructor(type,area,stat){
    this.type = document.querySelector("select[name='type']").value
    this.area = document.querySelector("input[name='area']").value
    this.stat = document.querySelector("select[name='status']").value
    }
}
function cadastrar(){
    let cadastrarImovel = new imovel()
    console.log(imovel.type)
    console.log(imovel.area)
    console.log(imovel.stat)

}

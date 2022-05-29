const hitchedSpaceships =[
    ["Fenix", 8, true],     //plat 1
    ["Golias", 10, true],   //plat 2
    ["Helmet", 5, false],   // plat 3
    ["Elemental", 3, true], //plat4
    ["Darwin", 15, false],  //plat5
];

let maior9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1]>9
}).map(spaceship=> {
    return spaceship[0]
})
console.log(maior9)

let platform = hitchedSpaceships.findIndex(element=>{
    return element[2]==false
})
console.log(platform)

let upper2 = hitchedSpaceships.map(element => {
    return element[0].toUpperCase()
})
console.log(upper2)

let message = `Espaçonave com mais de 9 tripulantes: ${maior9.join(", ")}`
message += `\nPlataforma com processo de engate: ${platform+1}`
message += `\nEspaçonaves em maiusculo: ${upper2.join(", ")}`


alert(message)
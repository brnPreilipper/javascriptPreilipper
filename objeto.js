/**
 obj = {
    propriedade : valor
 }
 */
let carro = {
    modelo : "Megane Grand Tour Privilege",
    ano : 2009,
    cor : "Bege",
    registro : {
        chassi : "GDFKDK36HDAFDFAD4545",
        placa : "MMM-2C20",
        renavam : "12345678908"
    }
}

let carros = [
    carro
];

console.log(carros);

carros.push({
    modelo : "Porche Carrera",
    ano : 2022,
    cor : "Preto",
    registro : {
        chassi : "GUTGRJDK36HDAFDFAD4545",
        placa : "MMM-2C20",
        renavam : "12890625328"
    }
})

console.log(carros);
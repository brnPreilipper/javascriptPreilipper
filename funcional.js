const prompt = require('prompt-sync')();
// ---------PROGRAMAÇÂO FUNCIONAL

//--MAP - maperar o array

/*let dados = [3, 4, 6, 6];

let dadosNovo = dados.map(function(element){
    return element * 3
})

console.log(dadosNovo);
*/

//----filter - filtar dados 
/*let dados = [6, 11, 300, 120, 55];

let resultado = dados.filter(function(d){
    return d > 50
})
console.log(resultado);
*/

//----filter com objeto de array
/*let pessoa = [
    {
        nome: "Diego",
        idade: 38
    },
    {
        nome: "Daniel",
        idade: 14
    },
    {
        nome: "Bruno",
        idade: 27
    }
]

let resultado = pessoa.filter((pessoa) => {
    return pessoa.idade >= 18
})

console.log(resultado);
*/

//----reduce

let numeros = [10, 20, 30, 60]

let resultado = numeros.reduce(function(total, numero){
    return (total + numero)
})
resultado = resultado / numeros.length

console.log(resultado);
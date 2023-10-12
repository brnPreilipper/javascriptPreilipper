const prompt = require('prompt-sync')();
// funçoes de agendamento
// ------------setInterval - executa uma vez após atingir o final

/*setTimeout(function(){
    console.log("QUASE NO FIM DA AULA");
}, 4000)

setTimeout(frase, 2000)

function frase(){
    console.log("exemplo com funcao por fora");
}
*/

//--------setInterval - executa repetitivamente quando atinge o tempo

/*setInterval(function(){
    console.log("BRUNO PREILIPPER")
}, 3000);
*/

//---------FUNÇÕES DE STRING: funções para tratamento de string

//---LENGTH - pega o tamanho da string
//let str = "Qual o tamnho da minha string";
//console.log( str.length );

//---INDEXOF - procurando a ocorrência de um pedaço de string, caractere da string
//console.log( str.indexOf("tamanho"));

//---SLICE - corta uma string
//console.log( str.slice(5));

//---TOLOWERCASE - tranforma a string em letras minusculas
//console.log( str.toLowerCase());

//---TOUPPERCASE - converte tudo para maiusculo
//console.log( str.toUpperCase());

//----REPLACE() - troca uma ocorencia da string
//console.log( str.replace("da minha STRING", "do meu texto"));

//---------------Metodo para tratamento de numeros
//---PARSEINT - converte um numero em formato de string para inteiro

//let numero = parseInt(prompt("Digite um numero: "))
//let numero2 = parseInt(prompt("Digite um numero: "))

//console.log("O resultado da operação é", numero + numero2);

//---PARSEFLOAT - converte numero string para flaot 100.50
let n1 = 200.85455;
let n2 = 387.99588585;

//console.log(parseFloat(n1) + parseFloat(n2))

//---tofixed - metodo para limitar o numero de casa decimais

//console.log( n1.toFixed(3));

//---toprecision
console.log(n1.toPrecision(3))

//---tostring - converte dados que não são string em string
let numero = 200 + 400;
console.log(numero);
console.log( numero.toString());

numero = numero.toString()
console.log(typeof(numero));
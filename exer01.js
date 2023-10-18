let prompt = require('prompt-sync')();
/*
Crie um algorítimo para armazenar dados de locação de um veículo.
a) utilize objetos para criar os dados do veículo e os dados de locação
b) utilize funções para calcular o valor de locação baseado em diárias e km percorridas
c) utilize laços de repetição para cadastrar 3 veículos locados (é neste ponto que os cálculos serão realizados)
d) utilize laços de repetição para listar os dados já com os cálculos efetuados dos veículos
*/

let carros = [];

do {
  console.log("------------------------------------------");
  let marca = prompt("Informe a marca do veículo: ");
  let modelo = prompt("Informe o modelo do veículo: ");
  let ano = prompt("Digite o ano do veículo: ");
  let valorDiaria = parseFloat(prompt("Informe o valor da diária do veículo: "));
  let kmPercorrido = parseFloat(prompt("Informe quantos quilômetros o veículo percorreu: "));

  let resultado;

  if (valorDiaria >= 500) {
    resultado = kmPercorrido * 5;
  } else if (valorDiaria >= 370) {
    resultado = kmPercorrido * 4;
  } else if (valorDiaria >= 200) {
    resultado = kmPercorrido * 2;
  } else {
    resultado = kmPercorrido * 1.5;
  }

  carros.push({
    marca: marca,
    modelo: modelo,
    ano: ano,
    valorDiaria: valorDiaria,
    kmPercorrido: kmPercorrido,
    valorKm: resultado
  });

} while (carros.length < 3);

console.log("Carros locados"); //exibe os dados

for (let i = 0; i < carros.length; i++) {
  console.log(`Marca: ${carros[i].marca} | Modelo: ${carros[i].modelo} | Ano: ${carros[i].ano} | Valor da diária: ${carros[i].valorDiaria} | Km percorrido: ${carros[i].kmPercorrido} | Valor do KM: ${carros[i].valorKm}`);
}

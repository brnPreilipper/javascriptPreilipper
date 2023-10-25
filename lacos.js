//-----------laço FOR
for(let i = 0; i < 100; i++){
    console.log(`Numero: ${i}`); //com literal
    console.log("Numero: "+i); // com concatenação
}

//------------laço FOR IN
let dados = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "sexta",
    "sabado"
];
for(dia in dados){
    console.log(dados[dia]);
}

for(let i = 0; i <dados.length; i++){
    console.log(dados[i]);
}

//-----------WHILE
let i = 0;
while(i < 100){
    console.log(`numero ${i}`)
    i++;
}

//------------- DO WHILE
do{
    bloco
}while(cond)
let lista = [
    "Bruno Preilipper"
];

console.log(lista);

// -----push - adiciona um novo item no final do array
lista.push("Gabriel")

console.log(lista);

// -----unshift - adiciona um item no inicio do array
lista.unshift("João")
console.log(lista);

//-----pop - remove item no final do array
lista.pop();
console.log(lista);

//-----shift - remove o trm no nicio do array
lista.shift()
console.log(lista);

//-----reverse
lista.reverse();
console.log(lista);

//-----concat - concatena array
let novaLista = lista.concat(["Elvys", "Daniel"])
console.log(novaLista);
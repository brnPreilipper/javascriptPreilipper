/**
 * função é um bloco de código com a tarefa de executar uma ou mais ações
 */

//função declaration - declaração
/**
 * palavra function - obrigatorio
 * nomeFuncao - obrigatorio
 * () - obrigatorio
 * { corpo da funcao} - obrigatorio
 * (parametros) - parametros são opcionais
 */
/**function imprimeNome(nome, sobrenome = "Sem sobrenome"){
    console.log(`${nome} ${sobrenome}`);
}
*/

// chamar a funcao
//imprimeNome('Bruno', "Preilipper")

//-------------- FUNÇÔES DE EXPRESSÂO OU EXPRESSION
/**
 * declaração com variável ou constante - obrigatório
 * = function - obrigatório
 * () - obrigatório
 * {} - obrgatório
 */
/*let minhaFuncao = function(){
    console.log("Bruno");
}

minhaFuncao(); */

//------------- ARROW FUNCTIO
/**
 * => é igual a function
 * () - obrigatorio
 * {} - obrigatorio
 */
/*let flecha = (parametro) => {
    console.log(parametro);
}

flecha("o parametro imprime Bruno")
*/

//---------------FUNCAO ANONIMA
// executa ao mesmo tempo que cria
/*(function(){
    console.log("Ola mundo");
})();*/
( () => {
    console.log("Ola mundo");
})()
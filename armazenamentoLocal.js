/**
 * Armazenamento de informações no navegador
 * 1. cookies
 * 2. localStorage
 * 3. sessionStorage
 */

//-----usando COOKIE -> armazena uma string de infomação de baixa validade.
/*
document.cookie = "user=50;time=19:15"
let cookies = document.cookie.split(';')
console.log(document.cookie);
*/

//-----LOCALSTORAGE -> validade infinita 
/**
 * setItem -> seta um item, grava um item
 * getItem -> traz um item gravado
 */
localStorage.setItem("usuario", JSON.stringify ( {
    nome: "Bruno",
    user: "preilipper",
    ultimoAcesso: "2023-10-17"
}))
console.log( localStorage.getItem("usuario"));

//-----SESSION STORAGE -> valido durente o uso do navegador em aberto
/**
 * setItem -> seta um item, grava um item
 * getItem -> traz um item gravado
 */
sessionStorage.setItem()
sessionStorage.getItem()
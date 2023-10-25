//criar variavel na forma antiga
var nomeVariavel;     //não é necessário declarar valor da variavel.

//metodo novo baseado no ES6
let nomeVar;     //let variavel local que não permite vazar escopo
let varcomValor = 10;

/**o que é escopo? 
 * o termo "escopo" refere-se à visibilidade e acessibilidade de variáveis em diferentes 
 * partes do seu código. O escopo controla onde uma variável é declarada e onde ela pode ser usada.
 * */

//constantes: Uma constante o valor não se altera
const nomeConstante = 100;

//LITERAIS: string que vai aceita valores dinâmicos e interpolação de variavel.

/*Utilizado antgamente:
let dados = "";

dados += "<ul>";
    dados += "<li>+nome</li>"
    dados += "<li></li>"
    dados += "<li></li>"
dados += "</ul>";
*/

let dadosLiterais = `
<ul>
    <li>${varcomValor}</li>
    <li>${(cond) ? true : false}</li>
    <li></li>
</ul>
`;

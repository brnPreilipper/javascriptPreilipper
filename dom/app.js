//eventos -> click, hover, oumouseout, submit, keydown, keyup, keypress, onchange, onload

//para usar o evento temos que usar um gerenciador de eventos chamdo addEventListener

/*const botao = document.querySelector("button")
const joia = document.querySelector('#joia')

botao.addEventListener('click', function(){
   // alert("o botão foi clicado")
    botao.innerHTML = "CERVEJA JÁ"
    joia.innerHTML = '<img src="https://ezbrew.com.br/wp-content/uploads/2021/09/tasty-american-beer-arrangement-708x1024.jpg">'
})
*/

//enviar dados do formulario

const formulario = document.querySelector('form')
const container = document.querySelector('#container')

/*formulario.addEventListener('submit', function(){
    let nome = formulario.nome.value
    let idade = formulario.idade.value

    let resultado =`
    <h1>${nome}</h1>
    <p>${idade}</p>
    `
    container.innerHTML = resultado
})*/

formulario.addEventListener('submit', function(){
    let v1 = formulario.valor1.value
    let v2 = formulario.valor2.value

    let resultado = parseFloat(v1) + parseFloat(v2)

    container.innerHTML = `
    <h1>${v1} + ${v2} = ${resultado}</h1>
    `
})
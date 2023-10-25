/**
 * USAMOS O ASYNC QUANDO PRECISAMOS QUE A PROMISSE SEJA RESOLVIDA PARA O CÓDIGO CONTNUAR
 */

const responda = async (mensagem) => new Promise((resolve, reject) => {
    setTimeout(resolve (mensagem), 3000)
})

async function executaMensagem(){
    console.log("chamando primeira mensagem")

    const mensagemUm = await responda("está é a primeira mensagem")
    console.log(mensagemUm)

    console.log("chamando mensagem dois");
    const mensagemDois = await responda("está é a segunda mensagem")
    console.log(mensagemDois)

    console.log("fim")
}

executaMensagem()
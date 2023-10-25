/**
 * faça uma promisse que verifique se a idade informada corresponde ao ano de nascimento informado
ex 1985 - 38 anos
 */

const confereInfo = (ano, idade) => {
    return new Promise((resolve, reject) => {
        let date = new Date()
        let calculo = date.getFullYear() - ano;
        if(calculo == idade){
            resolve("Correto")
        }else{
            reject(new Error("vai mentir noutro lugar jacaré"))
        }
    })
}

//usando 
confereInfo(1985, 20)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
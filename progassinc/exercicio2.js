/**
 * fazer uma promise para calcular media de notas de um aluno
passe como parametro 3 notas, se a média for 7 > resolve como aprovado senão reject como reprovado
 */
const media = (n1, n2, n3) => {
    return new Promise((resolve, reject) => {
        let media = (n1 + n2 + n3) / 3
        if(media >= 7){
            resolve('aprovado')
        }else{
            reject(new Error("Vai estudar caraio"))
        }
    })
}
//usando a funcão
/* media(5,5,8)
    .then(res => console.log(res))
    .catch(err => console.log(err.message)) */

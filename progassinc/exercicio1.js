/**
 * fazer o consumo da api https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json
use promise
*/
const consulta = () => {
    return new Promise((resolve, reject) => {
        //consultando api
        fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
            .then(res => res.json())
            .then(function(res) {
                if(res){
                    resolve(res)
                }else{
                    reject(new Error("deu caca"))
                }
            })
    })
}

//chamando a função
/* consulta()
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err.message)) */


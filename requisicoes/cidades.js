/**
 * verbos http
 * GET -> trazer dados (padrão)
 * POST -> envar dados
 * PUT -> editar dados
 * DELETE -> deletar dados
 */

const selEstados = document.querySelector('#estado');

selEstados.addEventListener("change", function(){
    let selecionado = this.value

    //consultar a API
    let estrutura = '<option value="">Selecione</option>'

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selecionado}/municipios`)
    .then(retorno => retorno.json())
    .then(function(cidades){
        //laço de repetição para preencher as cidade
        for(posicao in cidades){
            estrutura += `<option value="${cidades[posicao].cidades}">${cidades[posicao].nome}</option>`
        }

        //carregar dados no select
        document.querySelector("#cidade").innerHTML = estrutura
    })
})
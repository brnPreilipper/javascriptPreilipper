const cepField = document.querySelector("#cep");

let preencher = function (seletor, valor) {
    document.querySelector(seletor).value = valor;
};

cepField.addEventListener("keyup", function () {
    if (cepField.value.length === 8) {
        
        fetch(`https://viacep.com.br/ws/${cepField.value}/json/`)
            .then(dados => dados.json())
            .then(function (dados) {
                // Preenchendo os dados nos campos
                if (dados.erro) {
                    alert("CEP não encontrado")
                    cepField.value =" "
                } else {
                    preencher("#logradouro", dados.logradouro);
                    preencher("#bairro", dados.bairro);
                    preencher("#cidade", dados.localidade);
                    preencher("#estado", dados.uf);
                    document.querySelector("#numero").focus()
                }

            })
            .catch(error => console.error("Não foi possível consultar os dados"));
    }
});
function buscaCep() {
    let cep = document.getElementById('cep').value;

    if (cep !== "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById('street').value = endereco.street;
                document.getElementById('neighborhood').value = endereco.neighborhood;
                document.getElementById('city').value = endereco.city;
                document.getElementById('state').value = endereco.state;
                
            }
        else if(req.status === 404) {
            alert("Cep inválido");
        }
        else {
            alert("Erro ao fazer a requisição!");
        }
        }
    }
}

//quando o usuario sai do campo cep, roda a função acima
window.onload = function() {
    let cep = document.getElementById("cep");
    cep.addEventListener("blur", buscaCep);
}
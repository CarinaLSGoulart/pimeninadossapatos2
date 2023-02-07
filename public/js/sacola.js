//INCREMENTO E DECREMENTO DE PRODUTOS
var data = 0;
//imprimir o valor da variavel data na tag h2
    document.getElementById("counting-1").innerText = data;
//funcao de incremento
    function increment(element) {
        var countingId = element.previousElementSibling.id;
        data = parseInt(document.getElementById(countingId).innerText) + 1;
        document.getElementById(countingId).innerText = data;
    }
//funcao de decremento
    function decrement(element) {
        var countingId = element.nextElementSibling.id;
        data = parseInt(document.getElementById(countingId).innerText) - 1;
        document.getElementById(countingId).innerText = data;
    }

//ADICIONAR PRODUTOS A SACOLA
const sacola = [];

function adionarASacola(produto) {
    cart.push(produto);
    console.log(`${produto} foi adicionado a sacola.`);
}

const adicionarButton = document.querySelector('#adionarASacola');
  adicionarButton.addEventListener('click', function(e) {
    e.preventDefault();
    adionarASacola('produto');
  });



/* //ADICIONAR A SACOLA

function AddSacola(produto, qtd, valor, posicao)
 { 
 localStorage.setItem("produto" + posicao, produto);
 localStorage.setItem("qtd" + posicao, qtd);
 valor = valor * qtd;
 localStorage.setItem("valor" + posicao, valor);
 alert("Produto adicionado a sacola!");
 }
// FIM DA SACOLA


 var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
 var i = 0;     // variável que irá percorrer as posições
 var valor = 0; // variável que irá receber o preço do produto convertido em Float.
 
 for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
 {
	 var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
	 if(prod != null) 
	 {	
		 // exibe os dados da lista dentro da div itens
		 document.getElementById("item").innerHTML += localStorage.getItem("qtd" + i) + " x ";
		 document.getElementById("item").innerHTML += localStorage.getItem("produto" + i);
		 document.getElementById("item").innerHTML += " ";
		 document.getElementById("item").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";
		 
		 // calcula o total dos recheios
		 valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
		 total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
	 }
 } 
 // exibe o total dos recheios
 document.getElementById("total").innerHTML = total.toFixed(2); 

<button type="button" onclick=" localStorage.clear(); location.reload();"> Limpar carrinho </button>


 */



let finalizarCompra = document.getElementsByClassName("finalizar");

for (let i = 0; i < finalizarCompra.length; i++) {
  finalizarCompra[i].addEventListener("click", async (e) => {
    e.preventDefault()

    console.log('Clique detectado');

    try{
        const response = await submitProdutos(produtos);
    }
    catch(error) {
        console.error(error);
    }    
  });
}

async function submitProdutos(produtos)  {
    
    console.log('Enviando produtos');

    const response = await fetch('http://localhost:3001/pedido', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtos)
    });
    return response.json();
}

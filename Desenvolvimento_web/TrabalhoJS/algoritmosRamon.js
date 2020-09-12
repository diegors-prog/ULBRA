/* Usando a classe Scanner para entrada de dados, crie uma classe que
receba o valor de um produto e a porcentagem de desconto, calcule e
mostre o valor do desconto e o valor do produto com o desconto.
Observação: o valor do desconto é calculado por meio da fórmula: valor
do desconto = valor do produto * percentual de desconto / 100. 
*/

function calcular() {
    let valor = document.getElementById('valorProduct').value;
    let porcDesconto = document.getElementById('descontoProduct').value;
    let resultadoDesc = document.getElementById('resultado');
    let resultadoFinal = document.getElementById('resultado2');


    let valorDesconto = (valor * porcDesconto) / 100;

    let valorFinal = valor - valorDesconto;

    resultadoDesc.innerHTML = valorDesconto.toLocaleString('pt-BR', {style: "currency", currency: "BRL"});

    resultadoFinal.innerHTML = valorFinal.toLocaleString('pt-BR', {style: "currency", currency: "BRL"});

    console.log(valorDesconto);

    console.log(valorFinal);

}

/* O Imposto sobre a Transmissão de Bens Móveis (ITBI) é aplicado sobre o valor de
    um imóvel a ser negociado. A base de cálculo do ITBI (o valor a ser considerado no
    cálculo) será o maior valor entre o valor de transação (o valor negociado) e o
    valor venal de referência (fornecido pela Prefeitura). Com base nisso, elabore
    uma classe que receba o valor da transação, o valor venal e o percentual de imposto.
    Após isso, encontre o maior valor e aplique o percentual sobre ele. Ao final,
    apresente o valor do imposto a ser pago. Observação: o valor do imposto a ser
    pago é calculado por meio da fórmula: valor do imposto = maior valor * percentual / 100.
    Para entrada e saída de dados utilize a classe JOptionPane.
*/

function calcularITBI() {
    let valorNegociado = document.getElementById('valorNegocial').value;
    let valorVenal = document.getElementById('valorVenal').value;
    let percImposto = document.getElementById('percImposto').value;
    let resultado = document.getElementById('resultado3');

    let valorImposto = 0;

    if(valorNegociado > valorVenal){
        valorImposto = (valorNegociado * percImposto) / 100;
    } else if (valorVenal > valorNegociado){
        valorImposto = (valorVenal * percImposto) / 100;
    } else {
        valorImposto = (valorVenal * percImposto) / 100;
    }

    resultado.innerHTML = valorImposto.toLocaleString('pt-BR', {style: "currency", currency: "BRL"});

    console.log(valorImposto);
}



/* Usando a classe JOptionPane para entrada de dados, elabore uma classe que receba a nota de
duas provas e de um trabalho. Calcule e mostre a média e o resultado final (aprovado ou reprovado).
Para calcular a média utilize a fórmula seguinte: média = (nota da prova 1 + nota da prova 2 + nota do trabalho) / 3.
Considere que a média mínima para aprovação é 6. 
 */

 function calcularMedia() {
     let prova1 = document.getElementById('notaProva1').value;
     let prova2 = document.getElementById('notaProva2').value;
     let trabalho = document.getElementById('notaTrabalho').value;
     let resultadoMedia = document.getElementById('resultado4');
     let resultadoAprovacao = document.getElementById('resultado5');
     let resultFinal;

     prova1 = parseFloat(prova1);
     prova2 = parseFloat(prova2);
     trabalho = parseFloat(trabalho);

     let media = (prova1 + prova2 + trabalho) / 3;

     console.log(media);

     if(media >= 6){
         resultFinal = "Aprovado";
     } else {
         resultFinal = "Reprovado";
     }

     resultadoMedia.innerHTML = media;

     resultadoAprovacao.innerHTML = resultFinal;

 }

 /* Considere a seguinte informação a respeito do cálculo da aposentadoria. Para se aposentar por idade,
 as mulheres precisam ter atingido 60 anos de idade e os homens, 65. Já na aposentadoria por tempo de
 contribuição, o tempo mínimo exigido é de 30 anos para as mulheres e de 35 anos para os homens.
 Com base nessas informações, elabore uma classe que receba a idade de uma pessoa, seu sexo e a quantidade
 de anos de contribuição. A seguir, calcule a quantidade de anos que falta de contribuição para se
 aposentar, ou então emita a mensagem: “você já tem o direito a aposentadoria”.  */

 function calcularAposentadoria() {
     let idade = document.getElementById('idade').value;
     let sexo = document.getElementById('sexo').value;
     let tempContrib = document.getElementById('tempContrib').value;
     let results = document.getElementById('resultado6');

     let resultAposentadoria;
     let resultAposentadoria2;

     if(sexo === 'M' || sexo === 'm') {
        if(idade >= 65 && tempContrib >= 35){
            resultAposentadoria = "Você ja tem direito a aposentadoria";
        } else {
            resultAposentadoria2 = 35 - tempContrib;
            resultAposentadoria = `Ainda falta ${resultAposentadoria2} ano/anos para a sua aposentadoria`;
        }
     } else if(sexo === 'F' || sexo === 'f') {
         if(idade >= 60 && tempContrib >= 30){
             resultAposentadoria = "Você ja tem direito a aposentadoria";
         } else {
             resultAposentadoria2 = 30 - tempContrib;
             resultAposentadoria = `Ainda falta ${resultAposentadoria2} ano/anos para a sua aposentadoria`;
         }
     } else {
         resultAposentadoria = "Sexo inválido";
     }

     results.innerHTML = resultAposentadoria;
 }

 /* Elabore uma classe que receba o nome de um produto e o seu valor.
 O desconto deve ser calculado de acordo com o valor fornecido conforme a imagem.
 Utilizando a estrutura if-else, apresenta em tela o nome do produto,
 valor original do produto e o novo valor depois de ser realizado o desconto.
 Caso o valor digitado seja menor que zero, deve ser emitida uma mensagem de aviso. 
 */

 function calcularDesconto() {
     let nomeProduto = document.getElementById('nomeProduto').value;
     let valorProduto = document.getElementById('valorProduto').value;
     let result2 = document.getElementById('resultado7');
    
     let valorDescont;
     let produtoDescontado;

     if(valorProduto >= 50 && valorProduto < 200){
         valorDescont = (valorProduto / 100) * 5;
         produtoDescontado = valorProduto - valorDescont;
         result2.innerHTML = `Nome do produto: ${nomeProduto}<br/>Valor do produto: R$ ${valorProduto}<br/>Valor com desconto: R$ ${produtoDescontado}`;
     } else if(valorProduto >= 200 && valorProduto < 500) {
        valorDescont = (valorProduto / 100) * 6;
        produtoDescontado = valorProduto - valorDescont;
        result2.innerHTML = `Nome do produto: ${nomeProduto}<br/>Valor do produto: R$ ${valorProduto}<br/>Valor com desconto: R$ ${produtoDescontado}`;
     } else if(valorProduto >= 500 && valorProduto < 1000) {
        valorDescont = (valorProduto / 100) * 7;
        produtoDescontado = valorProduto - valorDescont;
        result2.innerHTML = `Nome do produto: ${nomeProduto}<br/>Valor do produto: R$ ${valorProduto}<br/>Valor com desconto: R$ ${produtoDescontado}`;
     } else if(valorProduto >= 1000) {
        valorDescont = (valorProduto / 100) * 8;
        produtoDescontado = valorProduto - valorDescont;
        result2.innerHTML = `Nome do produto: ${nomeProduto}<br/>Valor do produto: R$ ${valorProduto}<br/>Valor com desconto: R$ ${produtoDescontado}`;
     } else if(valorProduto < 0) {
         result2.innerHTML = `Valor digitado é menor que zero, digite novamente`;
     } else {
         result2.innerHTML = `Nome do produto: ${nomeProduto}<br/>Valor do produto: R$ ${valorProduto}<br/>Sem desconto`;
     }

 }

 /* Na área da eletrônica, em um circuito em série temos que a resistência equivalente (total)
 desse circuito é obtida mediante a soma de todas as resistências existentes (RE = r1 + r2 + ... + rn).
 Faça uma classe que receba o valor de quatro resistências ligadas em série, calcule e mostre a
 resistência equivalente, a maior e a menor resistência.
 */

 function calcularEquivalencia() {
     let numeros = document.getElementById('numeros').value;
     let result3 = document.getElementById('resultado8');

     numeros = numeros.split(',');
     
     let maior = parseInt(numeros[0]);
     let soma = parseInt(numeros[0]);

     for(let x = 0; x < numeros.length; x++) {
         if(parseInt(numeros[x]) > maior) {
             maior = parseInt(numeros[x]);
         }
         soma = parseInt(numeros[x]++);
     }

     let menor = parseInt(numeros[maior]);
     console.log(menor);

     for(let y = 0; y < numeros.length; y++) {
        if(parseInt(numeros[y]) < menor) {
            menor = parseInt(numeros[y]);
            console.log(menor);
        }
    }
     
     result3.innerHTML = `A menor resistência é: ${menor}<br/>A maior resistência é: ${maior}<br/>A resistência equivalente é: ${soma}`;
     console.log(menor);
 }
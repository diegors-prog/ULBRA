/* JS CALCULADORA */

function calcular() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var oper = document.getElementById("operacoes").value;
    var resultadoFinal = document.getElementById("resultadoFinal");
    var resultado = 0;

    if(n1.length =='' || n2.length ==''){
        alert('Digite os valores para serem processados!');
        return;
     }

    if(oper == 'escolha'){
        alert('Escolha uma operação para o processamento dos dados!');
        return;
    }

    switch( oper){
        case '+': 
           resultado = parseInt(n1) + parseInt(n2);
           break;
        
        case '-': 
           resultado = parseInt(n1) - parseInt(n2);
           break;
  
        case '/': 
           resultado = parseInt(n1) / parseInt(n2);
           break;
  
        case '*': 
           resultado = parseInt(n1) * parseInt(n2);
           break;
    }
resultadoFinal.innerHTML = resultado;
console.log(resultado)

}

function limpar() {
    n1 = document.getElementById("num1").value;    //recebo os valores
    n2 = document.getElementById("num2").value;
    resultadoFinal = document.getElementById("resultadoFinal").value;
    n1 = ' ';   //atribuo os valores
    n2 = ' ';
    document.getElementById("num1").value = n1;
    document.getElementById("num2").value = n2;
}

/* JS CALCULO DO CONSUMO DE ENERGIA */

function clicar () {
    var quantkwh = document.getElementById('qtdKwh').value;
    var valorkwh = document.getElementById('valorKwh').value;
    var resultadoFinal2 = document.getElementById('resultado2');
    var result = 0

    if(quantkwh.length == '' || valorkwh.length == '')
    {
        alert("Preencha os campos!");
        return;
    }

    var quantkwh2 = parseFloat(quantkwh);
    var valorkwh2 = parseFloat(valorkwh);

    if(quantkwh2 <= 100)
    {
        result = (quantkwh2*valorkwh2);
    }

    if(quantkwh2 > 100 && quantkwh2 < 200)
    {
        result = (quantkwh2*valorkwh2)* 1.25;
    }

    if(quantkwh2 >= 200)
    {
        result = (quantkwh2*valorkwh2)* 1.5;
    }

    resultadoFinal2.innerHTML = result.toLocaleString('pt-BR', {style: "currency", currency: "BRL"});

    console.log(result);

}

/* JS CALCULO DO MAIOR NÚMERO */

function verificaMaior(){
    var num = document.getElementById("numeros").value;

    num = num.split(",");
    var maior = parseInt(num[0]);

    for(var i = 0;i < num.length;i++){
        if(parseInt(num[i]) > maior)
        maior = parseInt(num[i]);
    }

    document.getElementById('resultado3').innerHTML=maior;

}

/* JS CALCULO DE MAIOR E MENOR IDADE */

function verificaIdades() {
    var idades = document.getElementById("idades").value;

    idades = idades.split(",");
    var maiorIdad = parseInt(idades[0]);
    var menorIdad = parseInt(idades[0]);
    

    for(var x = 0;x < idades.length;x++){
        if(parseInt(idades[x]) >= 18)
        maiorIdad = parseInt(idades[x]);

        if(parseInt(idades[x]) < 18)
        menorIdad = parseInt(idades[x]);
    }

    document.getElementById("resultado4").innerHTML='A maior idade digitada foi: ' + maiorIdad + '.<br/>A menor idade digitada foi: ' + menorIdad + '.';

}

/* JS CALCULO DE IMC*/

function verificaIMC() {
    var nome = document.getElementById('nome').value
    var sexo = document.getElementById('sexo').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var imc = 0
    var resul_final = document.getElementById('resultado5')

    if(peso.length=='' || altura.length==''){
        alert("Preencha os campos!")
        return
    }

    if(nome.length=='' || sexo.length==''){
        alert("Preencha os campos!")
        return
    }

    imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))

    if(imc < 18.5){
        resul_final.innerHTML="Nome: " + nome + "<br>Sexo: " + sexo + "<br>Seu IMC é: " + imc.toFixed(1) + "<br>Abaixo do peso ideal!"
    }

    if(imc >= 18.5){
        resul_final.innerHTML="Nome: " + nome + "<br>Sexo: " + sexo + "<br>Seu IMC é: " + imc.toFixed(1) + "<br>Peso ideal!"
    }

    if(imc > 25){
        resul_final.innerHTML="Nome: " + nome + "<br>Sexo: " + sexo + "<br>Seu IMC é: " + imc.toFixed(1) + "<br>Acima do peso ideal!"
    }

    if(imc >= 30){
        resul_final.innerHTML="Nome: " + nome + "<br>Sexo: " + sexo + "<br>Seu IMC é: " + imc.toFixed(1) + "<br>Obeso!"
    }

    console.log(nome)
}

/* JS PORTAS LÓGICAS - Not, And, Or e Xor */

function verificar() {
    var a = convertToBoolean(document.getElementById("a").value);
    var b = convertToBoolean(document.getElementById("b").value);
    var p = document.getElementById("porta").value;
    var resultado = document.getElementById("resultado")

    switch (p) {
        case "not":
            resultado.innerHTML = "a: " + !a + "<br/>b: " + !b;
            break;
        case "and":
            resultado.innerHTML = a === true && b === true ? "and = true" : "and = false";
            break;
        case "or":
            resultado.innerHTML = a === true || b === true ? "or = true" : "or = false";
            break;
        case "xor":
            resultado.innerHTML = a ^ b ? "xor = true" : "xor = false";
            break;
    }
}
function convertToBoolean(content) {
    return content == 'true' ? true : false; 
}

    /* Scroll suave para link interno com javascript

    const menuItens = document.querySelectorAll('.navbar a')

    menuItens.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
    })

    function scrollToIdOnClick(event) {
        event.preventDefault()
        const element = event.target
        const id = element.getAttribute('href')
        const to = document.querySelector(id).offsetTop
        

        window.scroll({
            top: to - 170,
            behavior: "smooth",
        })
       
    }*/

    /* Scroll suave para link interno com jquery */
    
    $('nav a').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset -190
        }, 700);
    })


function verificarPoints() {
    
    let vento = document.getElementById('vento').value;
    let ondulacao = document.getElementById('ondulacao').value;
    let resultante = document.getElementById('resultado10');

    if (ondulacao === "sul" && vento === "nordeste"){
        resultante.innerHTML = `Possibiidade de boas ondas em:<br/>Santinho<br/>Barra da Lagoa<br/>Caldeirão`;
    } else if (ondulacao === "sul" && vento === "sul"){
        resultante.innerHTML = `Possibilidade de boas ondas em:<br/>Lagoinha do Leste<br/>Galheta Norte<br/>Galheta<br/> Moçambique<br/>Mole<br/>Santinho`;
    } else if (ondulacao === "norte" && vento === "norte"){
        resultante.innerHTML = `Possibilidade de boas ondas em:<br/>Morro das Pedras<br/>Novo Campeche<br/>Lomba do Sabão<br/>Pico da Cruz`;
    } else{
        resultante.innerHTML = `Mar fudido, vai da o cú`;
    }
}
    
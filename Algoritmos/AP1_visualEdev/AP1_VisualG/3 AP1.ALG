Algoritmo "3 AP1"
//Para a entrada de uma festa, existe a seguinte promo��o de acordo com a cor
//da camiseta da pessoa:
//� Camiseta rosa: ingresso R$20,00
//� Camiseta azul: ingresso R$ 30,00
//� Camiseta preta: Mulheres: R$ 10,00 � homens: R$15,00
//� Camiseta laranja: R$ 25,00
//� Demais cores: Maiores de 30 anos: R$45,00 � Menores ou com 30 anos: R$40,00
//Usando a m�ltipla escolha, fa�a um algoritmo que leia a cor da camiseta, e d� o
//valor do ingresso a ser pago pela pessoa. Caso seja necess�rio, leia a idade e o
//sexo.

Var
   idade: inteiro
   corcamiseta, sexo: caracter
   
Inicio
      escreva("Coloque a inicial da cor de sua Camiseta: ")
      leia(corcamiseta)

      se ((corcamiseta = "r") ou (corcamiseta = "R")) entao
         escreva("O valor do ingresso � de: R$ 20,00")

      senao
           se ((corcamiseta = "a") ou (corcamiseta = "A")) entao
              escreva("O valor do ingresso � de: R$ 30,00")

      senao
           se ((corcamiseta = "l") ou (corcamiseta = "L")) entao
              escreva("O valor do ingresso � de: R$ 25,00")

      senao
           se ((corcamiseta = "p") ou (corcamiseta = "P")) entao
              escreva("Qual seu sexo?: ")
              leia(sexo)

              se ((sexo = "f") ou (sexo = "F")) entao
                 escreva("O valor do ingresso � de: R$ 10,00")

              senao
                   se  ((sexo = "m") ou (sexo = "M")) entao
                   escreva("O valor do ingresso � de: R$ 15,00")

              senao
                   escreva("O sexo n�o � v�lido")

      senao
           escreva("Coloque sua idade: ")
           leia(idade)
           
           se (idade <= 30)
              escreva("O valor do ingresso � de: R$ 40,00")

           senao
                escreva("O valor do ingresso � de: R$ 45,00")
                
           fimse
           fimse
           fimse
           fimse
           fimse
           fimse
           fimse

Fimalgoritmo
Algoritmo "3 Obter os resultados aritmeticos das variaveis A e B"
//FUA para ler dois inteiros (vari�veis A e B) e efetuar as opera��es de adi��o,
//subtra��o, multiplica��o e divis�o de A por B apresentando ao final os quatro
//resultados obtidos.
Var
   A, B: inteiro
   soma, subtracao, multiplicacao: inteiro
   divisao: real
Inicio
      Escreva("Digite um n�mero: ")
      leia(A)
      Escreva("Digite um segundo n�mero: ")
      leia(B)
      soma <- (A+B)
      subtracao <- (A-B)
      multiplicacao <- (A*B)
      divisao <- (A/B)
      Escreval("A soma dos dois n�meros �: ", soma)
      Escreval("A subtra��o dos dois n�meros �: ", subtracao)
      Escreval("A multiplica��o dos dois n�meros �: ", multiplicacao)
      Escreval("A divis�o dos dois n�meros �: ", divisao)

Fimalgoritmo
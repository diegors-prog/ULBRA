Algoritmo "13 ler dois n�meros e multiplicar o primeiro por 4 e o segundo por 6"
//Calcule a media aritm�tica dos resultados obtidos"
//FUA para ler dois n�meros. Multiplicar o primeiro por 4 e o segundo por 6.
//Calcule a media aritm�tica dos resultados obtidos. Escrever os valores lidos,
//os calculados e a media aritm�tica
Var
   A, B, multi1, multi2, result_MD: real
Inicio
      Escreva("Digite um n�mero: ")
      leia(A)
      Escreva("Digite outro n�mero: ")
      leia(B)
      multi1 <- (A*4)
      multi2 <- (B*6)
      result_MD <- (multi1+multi2)/2
      Escreval("O n�mero", A," multiplicado por 4 �:", multi1)
      Escreval("O n�mero", B," multiplicado por 6 �:", multi2)
      Escreval("O resultado da m�dia entre os dois �:", result_MD)


Fimalgoritmo
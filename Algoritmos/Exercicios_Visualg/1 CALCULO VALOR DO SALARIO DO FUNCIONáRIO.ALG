Algoritmo "Calculo valor do salario do funcion�rio"
Var
   nro_func, nro_hora_trab: inteiro
   valor_hora, S: real

Inicio
      escreva("Digite o n�mero do funcion�rio:")
      leia(nro_func)
      escreval("Digite o n�mero de horas trabalhadas:")
      leia(nro_hora_trab)
      escreval("Digite o valor da hora:")
      leia(valor_hora)
      S <- (nro_hora_trab*valor_hora)
      escreval("O salario do funcion�rio", nro_func, " � R$",S)
      


Fimalgoritmo
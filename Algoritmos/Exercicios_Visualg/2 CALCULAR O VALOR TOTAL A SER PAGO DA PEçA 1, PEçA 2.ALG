Algoritmo "Calcular o valor total a ser pago da pe�a 1, pe�a 2"
//FUA que l� o c�digo da pe�a 1, a quantidade vendida de pe�as 1,
//o valor unit�rio da pe�a 1, o c�digo da pe�a 2, a quantidade vendida de
//pe�as 2, o valor unit�rio da pe�a 2 e a percentagem do IPI a ser acrescentada.
//O algoritmo deve calcular o valor total a ser pago.
Var
   cod_1, cod_2: caracter
   vend_peca1, vend_peca2: inteiro
   valor_peca1, valor_peca2, perc, subtotal, valor_ipi, total: real

Inicio
      Escreva("Digite o c�digo da pe�a 1:")
      leia(cod_1)
      Escreva("Digite a quantidade de pe�as vendidas:")
      leia(vend_peca1)
      Escreva("Digite o valor unitario da pe�a:")
      leia(valor_peca1)

      Escreva("Digite o c�digo da pe�a 2:")
      leia(cod_2)
      Escreva("Digite a quantidade de pe�as vendidas:")
      leia(vend_peca2)
      Escreva("Digite o valor unitario da pe�a:")
      leia(valor_peca2)


      Escreva("Informe a percentagem de IPI a ser acrescentada:")
      leia(perc)
      subtotal <- (vend_peca1*valor_peca1+vend_peca2*valor_peca2)
      valor_ipi <- (subtotal*perc/100)
      total <- (subtotal+valor_ipi)
      Escreva("O valor total a ser pago � R$ ", total)

Fimalgoritmo
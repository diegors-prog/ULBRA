Algoritmo "24 Calcule o valor a ser pago para cada pe�a e o valor total da compra"
//FUA para ler o c�digo da pe�a 1, a quantidade de pe�as 1, o valor unit�rio da
//pe�a 1, o c�digo da pe�a 2, a quantidade de pe�as 2, o valor unit�rio da pe�a
//2 e o percentual de IPI a ser acrescentado ao valor de cada pe�a. Calcule o
//valor a ser pago para cada pe�a e o valor total da compra. Escrever a
//quantidade, o c�digo, o valor unit�rio, o valor unit�rio com IPI e o valor
//total para cada pe�a e tamb�m o valor total da compra.
Var
   QP1, VP1, QP2, VP2, IPI, perc1, perc2, v_u_IPI1, v_u_IPI2, v_total1: real
   v_total2, total_c: real
   CP1, CP2: caracter
Inicio
      Escreval("Registro de pe�as")
      Escreva("Digite o c�digo da pe�a 1: ")
      leia(CP1)
      Escreva("Digite a quantidade da pe�a: ")
      leia(QP1)
      Escreva("Digite o valor unit�rio da pe�a: R$")
      leia(VP1)
      Escreva("Digite o c�digo da pe�a: 2: ")
      leia(CP2)
      Escreva("Digite a quantidade da pe�a: ")
      leia(QP2)
      Escreva("Digite o valor unit�rio da pe�a: R$")
      leia(VP2)
      Escreva("Digite o valor do IPI: % ")
      leia(IPI)
      
      perc1 <- (VP1*IPI)/100
      perc2 <- (VP2*IPI)/100
      v_u_IPI1 <- (VP1+perc1)
      v_u_IPI2 <- (VP2+perc2)
      v_total1 <- (v_u_IPI1*QP1)
      v_total2 <- (v_u_IPI2*QP2)
      total_c <- (v_total1+v_total2)
      
      Escreval("Pe�a:", CP1)
      Escreval("Valor unit�rio: R$",VP1)
      Escreval("Valor unit�rio c/ IPI: R$",v_u_IPI1)
      Escreval("Quantidade: ",QP1)
      Escreval("Valor total da pe�a ", CP1," �: R$",v_total1)
      Escreval("Pe�a:", CP2)
      Escreval("Valor unit�rio: R$",VP2)
      Escreval("Valor unit�rio c/ IPI: R$",v_u_IPI2)
      Escreval("Quantidade: ",QP2)
      Escreval("Valor total da pe�a ", CP2," �: R$",v_total2)
      Escreva("O valor total da compra �: R$",total_c)
      
Fimalgoritmo
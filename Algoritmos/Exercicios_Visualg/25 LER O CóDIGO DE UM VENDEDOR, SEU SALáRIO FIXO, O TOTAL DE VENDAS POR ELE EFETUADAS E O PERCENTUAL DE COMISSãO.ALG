Algoritmo "25 ler o c�digo de um vendedor, seu sal�rio fixo, o total de vendas por ele efetuadas e o percentual de comiss�o"
//FUA para ler o c�digo de um vendedor, seu sal�rio fixo, o total de vendas por
//ele efetuadas e o percentual de comiss�o que recebe sobre as vendas. Calcular
//o sal�rio total do vendedor. Escrever o c�digo do vendedor e o seu sal�rio
//total.
Var
   cod_vend, sal_fix, vend_reali, perc_comis, comis, comis_total, sal_total: real
Inicio
      Escreva("Digite o c�digo do funcion�rio: ")
      leia(cod_vend)
      Escreva("Digite o sal�rio fixo do funcion�rio: R$")
      leia(sal_fix)
      Escreva("Digite a quantidade de vendas efetuadas por ele: ")
      leia(vend_reali)
      Escreva("Digite o valor da comiss�o sobre cada venda: ")
      leia(perc_comis)
      comis <- (perc_comis*vend_reali)/100
      comis_total <- (comis*vend_reali)
      sal_total <- (sal_fix+comis_total)
      
      Escreval("Funcion�rio: ",cod_vend)
      Escreva("O sal�rio total �: R$",sal_total)


      
Fimalgoritmo
Algoritmo "1 AP1"
//Uma loja de sapatos precisa fazer uma promo��o para seus clientes. O cliente
//que comprar 2 pares de sapato ter� o desconto de 15% e se comprar 3 pares ou
//mais ganha desconto de 30%. Fa�a um algoritmo que leia o valor total da
//compra e o n�mero de pares de sapatos. Se forem 2 ou mais calcule o desconto
//e escreva valor da compra e valor com desconto.
Var
     qtd, valortotal, resp, resp2: real
Inicio
      escreval("Promo��o de desconto 2020")
      escreva("Coloque a quantidade de sapatos comprados: ")
      leia(qtd)
      escreva("Coloque o valor total da compra: ")
      leia(valortotal)

      
      se (qtd = 2) entao
         resp <- valortotal*15/100
         resp2 <- valortotal-resp
               escreval("O valor total da compra � de: R$",valortotal)
               escreva("O valor da compra com desconto � de: R$",resp2)
               
      senao
           se (qtd >= 3) entao
              resp <- valortotal*30/100
              resp2 <- valortotal-resp
                    escreval("O valor total da compra � de: R$",valortotal)
                    escreva("O valor da compra com desconto � de: R$",resp2)
         
      senao
           escreva("O valor n�o recebeu desconto e �: R$",valortotal)

           fimse
           fimse

Fimalgoritmo
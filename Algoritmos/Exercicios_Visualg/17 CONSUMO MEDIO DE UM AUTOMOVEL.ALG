Algoritmo "17 consumo medio de um automovel"
//FUA para calcular o consumo m�dio de um autom�vel (medido em Km/l), dado que
//s�o conhecidos a dist�ncia total percorrida e o volume do combust�vel
//consumido para percorr�-la (medidos em litros).
Var
   md_cons, dist_perc, vol_comb: real

Inicio
      Escreva("Digite a distancia percorrida na viagem: ")
      leia(dist_perc)
      Escreva("Digite o volume de combustivel consumido em litros: ")
      leia(vol_comb)
      md_cons <- (dist_perc/vol_comb)
      Escreva("O consumo m�dio de combustivel durante a viagem �: ", md_cons," litros")

Fimalgoritmo
Algoritmo "16 calcular a distancia e os litros usados em uma viagem"
//FUA para efetuar o c�lculo da quantidade de litros de combust�vel gasta em
//uma viagem, utilizando-se um autom�vel que faz 12 km por litro. Para obter o
//c�lculo, o usu�rio dever� fornecer o tempo gasto na viagem e a velocidade
//m�dia durante a mesma. Desta forma, ser� poss�vel obter a dist�ncia
//percorrida com a f�rmula DIST�NCIA=TEMPO*VELOCIDADE. Tendo o valor da
//dist�ncia, basta calcular a quantidade de litros de combust�vel utilizada na
//viagem com a f�rmula: LITROS_USADOS=DIST�NCIA/12. O algoritmo dever�
//apresentar os valores da velocidade m�dia, tempo gasto na viagem, a dist�ncia
// percorrida e a quantidade de litros utilizada na viagem.
Var
   veloc_md, temp_viaje, distancia, quant_litro: real
Inicio
      Escreva("Digite o tempo de viagem: ")
      leia(temp_viaje)
      Escreva("Digite a velocidade m�dia: ")
      leia(veloc_md)
      distancia <- (veloc_md*temp_viaje)
      quant_litro <- (distancia/12)
      Escreval("Tempo de viagem: ", temp_viaje," h")
      Escreval("Velocidade m�dia: ", veloc_md," km/h")
      Escreval("Dist�ncia percorrida: ", distancia," km")
      Escreval("Quantidade de litros utilizados na viagem: ", quant_litro," L")
      
      

Fimalgoritmo
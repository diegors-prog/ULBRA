Algoritmo "22 temperatura em graus Fahrenheit e apresent�-la convertida em graus Cent�grados"
//FUA para ler uma temperatura em graus Fahrenheit e apresent�-la convertida
//em graus Cent�grados. A f�rmula de convers�o �: C= (F-32)*(5/9). Onde F � a
//temperatura em Fahrenheit e C � a temperatura em Cent�grados.
Var
   F, C: real
Inicio
      Escreva("Digite a temperatura em Graus Fahrenheit: ")
      leia(F)
      C <- (F-32)*(5/9)
      Escreva("A temperatura �", C," Graus Cent�grados")
Fimalgoritmo
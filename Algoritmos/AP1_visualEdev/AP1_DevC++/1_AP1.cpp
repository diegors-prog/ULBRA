//Uma loja de sapatos precisa fazer uma promo��o para seus clientes. O cliente que 
//comprar 2 pares de sapato ter� o desconto de 15% e se comprar 3 pares ou mais ganha 
//desconto de 30%.
//Fa�a um algoritmo que leia o valor total da compra e o n�mero de pares de sapatos.
//Se forem 2 ou mais calcule o desconto e escreva valor da compra e valor com desconto.

#include <stdio.h>

int main()
{
    float qtd, valortotal, resp, resp2;
    
 printf("Promo��o de desconto 2020\n");
 printf("\nColoque a quantidade de sapatos comprados: ");
 scanf("%f", &qtd);
 printf("Coloque o valor total da compra: R$");
 scanf("%f", &valortotal);

 if (qtd == 2)
 {
        resp = valortotal*15/100;
        resp2 = valortotal-resp;
       	 printf("\nO valor total da compra � de: R$%.2f\n", valortotal);
       	 printf("O valor da compra com desconto � de: R$%.2f", resp2);
  }

  else if (qtd >= 3)
  {
        resp = valortotal*30/100;
        resp2 = valortotal-resp;
        	printf("\nO valor total da compra � de: R$%.2f\n", valortotal);
       	 printf("O valor da compra com desconto � de: R$%.2f", resp2);
  }

  else
  {
        printf("O valor n�o recebeu desconto e �: R$%.2f", valortotal);
  }

    return 0;
}

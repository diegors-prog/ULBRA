//Fa�a um algoritmo para ler: quantidade atual em estoque, quantidade m�xima em estoque e quantidade m�nima em estoque de um produto. 
//Calcular e escrever a quantidade m�dia ((quantidade m�dia = quantidade m�xima + quantidade m�nima)/2). Se a quantidade em estoque 
//for maior ou igual a quantidade m�dia escrever a mensagem 'N�o efetuar compra', sen�o escrever a mensagem 'Efetuar compra'.

#include <stdio.h>

int main()
{
    float qtd, qtdmax, qtdmin, qtdm, codigo;
    
printf("\nColoque a quantidade atual do seu estoque: ");
scanf("%f", &qtd);
printf("Quantidade m�xima em estoque: ");
scanf("%f", &qtdmax);
printf("Quantidade m�nima em estoque: ");
scanf("%f", &qtdmin);

 qtdm = ((qtdmax+qtdmin)/2);

    if (qtd >= qtdm)
    {
        printf("N�o efetuar a compra");
    }
    else
    {
        printf("Efetuar a compra");
    }

    return 0;
}

//Como inverter um n�mero: ex. O n�mero 123: 1� passo: se pegar 123 % 10 = divis�o exata de 120 e sobra 3.
//Para extrair a primeira sifra de um n�mero, fazer a sobra de divis�o por 10.
//2� passo: 123/10= 12.3, mas como esse n�mero vai ser inteiro, pega s� o 12.
//Pegar a sobra da divis�o de 12 % 10 = 2
//3� passo: dividir 12/10 = 1,2, mas como esse n�mero vai ser inteiro, pega s� o 1.
//Pegar a sobra da divis�o de 1 % 10 = 1
//Ai est�, 321.

#include <stdio.h>

int main()
{
	int numero, cifra;
	
	printf("Digite um numero inteiro:\n");
	scanf("%i", &numero);
	
	if (numero >= 0) {
		do {
			cifra = numero % 10;
			printf("%i", cifra);
			numero /= 10;
		} while (numero != 0);
		printf("\n");
	}
	else 
		if (numero <1) {
		numero = numero * -1;
		
		printf("-");
		
		do {
			cifra = numero % 10;
			printf("%i", cifra);
			numero /= 10;
		} while (numero != 0);
		
		printf("\n");
	}
	
	return 0;
}

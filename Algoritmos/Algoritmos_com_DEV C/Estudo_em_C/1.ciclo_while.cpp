//primeiro ciclo 'while': 'enquanto' a condi��o que esta entre parenteses n�o
// for cumprida executa alguma a��o a ser informada.
//Nesse ex. 'enquanto' contador <= 5 quero que seja executadas as linhas
//printf("contador")
//E depois adiciona 1 ao valor de contador
//Quando contador chegar na a��o indicada, neste caso o n�mero 5, termina o ciclo.

#include <stdio.h>

int main()
{
	int contador = 1;
	
	while (contador <= 5) {
		printf ("%i\n", contador);
		++contador;
	}
	
	return 0;
}

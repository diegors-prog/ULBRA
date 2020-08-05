//ciclo do while: 'do' significa fazer e 'while' significa enquanto.
//'Fa�a' isso aqui 'enquanto' essa condi��o n�o seja satisfeita.
//A diferen�a entre o ciclo 'while' e ciclo 'do while' � que em 'while' o
//programa vai verificar 'enquanto' 'i' � diferente de 0 nesse ex., ent�o o programa
//verifica primeiro o valor da variavel 'i' antes de executar, se n�o satisfazer
//a condi��o, o programa vai pular a linha. J� no do while ele vai receber um comando,
//'fa�a' isso, ou seja, ele vai escrever 'enquanto' e depois que ele escrever vai
//verificar enquanto 'i' for diferente de 0.
//Portanto while = verifica e executa.
//do while = executa e depois verifica.

#include <stdio.h>

int main()
{
	int i = 0;
	
	while (i != 0){
		printf("Teste\n");
	} 
	
	do {
		printf("Teste 2\n");
	} while (i != 0);
	
	return 0;
}

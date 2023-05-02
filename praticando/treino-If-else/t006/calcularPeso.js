/* Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
Fórmulas:	
- para	homens:	(72.7	*	Altura)	– 58	
- para	mulheres:	(62.1	*	Altura)	– 44.7	
7. Escreva	um	programa	para	ler	o	número	de	lados	*/



var altura = 1.78;
var sexo = 2;

var pesoIdeal;

if (sexo === 1){
    pesoIdeal = (62.1	*	altura)	- 44.7
    	
} else {
    pesoIdeal = (72.7 * altura)	- 58
}

console.log(`O peso ideal é ${pesoIdeal} kg`)

// precisei de ajuda, esse não contou muito para aprendizado.
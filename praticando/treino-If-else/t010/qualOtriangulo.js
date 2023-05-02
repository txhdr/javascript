/* 10. Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
− Triângulo	Equilátero:	possui	os	3	lados	iguais.	
− Triângulo	Isóscele:	possui	2	lados	iguais.	
− Triângulo	Escaleno:	possui	3	lados	diferentes. */

var lado1 = 30
var lado2 = 40
var lado3 = 50

if (lado1 === lado2 && lado1 === lado3){
    console.log('we have here an Equilátero triangle')
} else if (lado1 === lado2 && lado1 != lado3 || lado2 === lado3 && lado2 != lado1 || lado3 === lado1 && lado3 != lado2){
    console.log('we have here an Isosceles triangle')
} else {
    console.log('we have here an Escalene triangle')
}
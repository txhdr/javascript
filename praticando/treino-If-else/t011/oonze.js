/* 11. Escreva	 um	 programa	 que	 leia	 o	 valor	 de	 3	 ângulos	 de	 um	 triângulo	 e	
escreva	 se	 o	 triângulo	 é	 Acutângulo,	 Retângulo	 ou	 Obtusângulo.	 Sendo	
que:	
− Triângulo	Retângulo:	possui	um	ângulo	reto.	(igual	a	90º)
− Triângulo	Obtusângulo:	possui	um	ângulo	obtuso.	(maior	que90º)	
− Triângulo	Acutângulo:	possui	três	ângulos	agudos.	(menor	que	90º */

var angulo1 = 33.7
var angulo2 = 19.4
var angulo3 = 126.9

if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
    console.log('é um Triângulo Acutângulo')}
    else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
    console.log("O triângulo é Retângulo")
} else if (angulo1 > 90 || angulo2>90 ||angulo3 > 90){
    console.log("O triângulo é Obtusângulo")
}

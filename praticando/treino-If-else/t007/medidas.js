/* 7. Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
− Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
área
− Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
sua	área.	
− Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO */


var lados = 5

comprimento = 13
area = lados*comprimento;

if ( lados == 3){
    console.log(`Isso é um triangulo com o comprimento de ${comprimento}cm e uma área de ${area}cm`)

} else if(lados == 4){
    console.log(`Isso é um Quadrado com o comprimento de ${comprimento}cm e uma área de ${area}cm`)

} else if (lados == 5){
    console.log(`Isso é um Pentágono com o comprimento de ${comprimento}cm e uma área de ${area}cm`)
}
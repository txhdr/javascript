/* Escreva	um	programa	para	ler	3	valores	inteiros	e	escrever	o	maior	deles.	
Considere	que	o	usuário	não	informará	valores	iguais. */

n1 = 7
n2 = 13
n3 = 31

if (n1 > n2 && n1 > n3){
    console.log("n1 is the largest")
} else if (n2 > n1 && n2 > n3 ){
    console.log("n2 is the largest")
} else {
    console.log("n3 is the largest")
}
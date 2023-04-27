/*Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros	 (considere	 que	 	 não	
serão	lidos	valores	iguais)	e	escrevê-los	em	ordem	crescente.*/

var a = 35
var b = 15
var c = 30


if (a < b && a < c){
    console.log(`O primeiro número é ${a}`)

        if ( b > a && b < c){
            console.log(`O segundo número é ${b}`)
            console.log(`o terceiro número é ${c}`)
        }  else {
            console.log(`O segundo número é ${c}`)
            console.log(`O terceiro número é ${b}`)
        }

} else if (b < a && b < c){
    console.log(`O primeiro número é ${b}`)
        if (a > c){
            console.log(`O segundo número é ${c}`)
            console.log(`o terceiro número é ${a}`)
        }  else {
            console.log(`O segundo número é ${a}`)
            console.log(`O terceiro número é ${c}`)
    }
} else {
    console.log(`O primeiro número é ${c}`)
    if (b > a){
        console.log(`O segundo número é ${a}`)
        console.log(`o terceiro número é ${b}`)
    }  else {
        console.log(`O segundo número é ${b}`)
        console.log(`O terceiro número é ${a}`)
    }
}

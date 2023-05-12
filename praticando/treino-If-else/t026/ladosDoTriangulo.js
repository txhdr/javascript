/*  Intermediário15. Faça um programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. Dicas: Três lados formam um triangulo quando a soma de quaisquer dos dois lados é maior que o terceiro. Triângulo Equilátero: três lados iguais; Triângulo Isósceles: quaisquer dois lados iguais; Triângulo Escaleno: três lados diferentes; */

var l1 = 2
var l2 = 8
var l3 = 8

if (l1 +l2 >l3 && l2 + l3 > l1 && l3 + l1 > l2){
    console.log('Temos um triângulo ✌ 😁 ✌')

    if (l1 == l2 && l2 ==l3){
        console.log('Triângulo Equilátero')
    } else if(l1 != l2 && l2 != l3) { 
        console.log('Triângulo Escaleno:')
    } else {
        console.log('Triângulo Isósceles') // l1 == l2 && l3 != l2 || l2 == l3 && l2 != l1 || l3 == l1 && l3 != l2
    }
} else {
    console.log('isso não é um triangulo 😢 ')
}





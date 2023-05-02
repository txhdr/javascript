/ *- Faça um programa que leia três números, verifique (usando if e else), e mostre o maior deles. */

var n1 = 3
var n2 = 78
var n3 =9

if (n1>n2 && n1 > n3){
    console.log("O maior número é o " + n1)
} else if (n2 > n1 && n2 > n3){
    console.log('O maior número é o ' + n2)
} else {
    console.log('O maior número é o n3')
}
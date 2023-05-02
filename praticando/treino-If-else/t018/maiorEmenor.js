/* - Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles; */

var a = 5
var b = 7
var c = 9

if(a > b && a > c){
    console.log('O maior número é A')
    if (b < c){
        console.log('e B é o menor número')
    } else {
        console.log('e C é o menor número')
    }
} else if(b > a && b > c){
    console.log('O maior número é B')
    if (a < c){
        console.log('e A é o menor número')
    }else{
        console.log('e C é o menor número')
    }
} else {
    console.log('O maior número é C')
    if(a < b ){
        console.log('e A é o menor número')
    } else {
        console.log('e B é o menor número')
    }
}
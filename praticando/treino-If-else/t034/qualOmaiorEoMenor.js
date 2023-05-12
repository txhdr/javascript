/* Fácil 23 – Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução? */

var n1 = 4
var n2 = 2+4
var n3 = 1

if(n1 > n2 && n1 > n3){
    console.log(`o maior número é o ${n1}`)
    if(n2 > n3){
        console.log(`${n2} é o número do meio`)
        console.log(`E o menor número é  ${n3} `)
    } else if(n3 > n2){
        console.log(`${n3} é o número do meio`)
        console.log(`E ${n2} é o menor número`)
    }
} else if (n2 > n3 && n2 > n1){
    console.log(`${n2} é o maior número`)
    if(n1 > n3){
        console.log(` ${n1} é o do meio e ${n3} é o menor número`)
    } else if(n3 > n1){
        console.log(`${n3} é o do meio e ${n1} é o menor número`)
    }
} else if (n3 > n1 && n3 > n1){
    console.log(`${n3} é o maior número`)
    if(n1 > n2){
        console.log(`${n1} é o número do meio e ${n2} é o número menor`)
    } else if (n2 > n1){
        console.log(`${n2} é o número do meio e ${n1} é o menor número`)
    }
}
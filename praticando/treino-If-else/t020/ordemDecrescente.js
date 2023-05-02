/* Faça um programa que leia três números e mostre-os em ordem decrescente. */
var a = 7
var b = 9 
var c = 5
console.log('Os números em ordem decrescente são')
if(a > b && a > c){
    console.log(a)
    if (b> c){
        console.log(b)
        console.log(c)
    } else {
        console.log(c)
        console.log(b)
    }
} else if (b> c && b > a){
    console.log(b)
    if(a>c){
        console.log(a)
        console.log(c)
    } else{
        console.log(c)
        console.log(a)
    }
} else{
    console.log(c)
    if(a>b){
        console.log(a)
        console.log(b)
    }else {
        console.log(b)
        console.log(a)
    }
}
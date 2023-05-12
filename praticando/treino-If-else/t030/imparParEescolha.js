/* Fácil19. Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número e: Par ou ímpar; Positivo ou negativo; */

var n1 = 3
var n2 = -6

console.log(`você escolheu os números ${n1} e ${n2} 😁👍`)
console.log(`
Qual operação você quer realizar?
A: par ou Ímpar
B: Positivo ou Negativo
`)
var escolha = 'b'

if(escolha == 'a'){
    console.log( "Você escolheu a Opção A 🫡")
    if(n1 % 2 == 0){
        console.log(`O número ${n1} é par`)
    } else {
        console.log(`O número ${n1} é ímpar`)
    }

    if (n2 % 2 ==0){
        console.log(`O numero ${n2} é par`)
    } else {
        console.log(`O numero ${n2} é ímpar`)
    }

} else if(escolha == 'b'){
    console.log( "Você escolheu a Opção B🫡")
    if(n1 > 0){
        console.log(`O número ${n1} é positivo`)
    } else if (n1 < 0){
        console.log(`O número ${n1} é negativo`)
    } else {
        console.log('seu número é 0')
    }

    if(n2 > 0){
        console.log(`O número ${n2} é positivo`)
    } else if (n2 < 0){
        console.log(`O número ${n2} é negativo`)
    } else {
        console.log('seu número é 0')
    }
    } else{
    console.log('Escolha inválida')
}
/* 2.Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês que ela nasceu). */

var data = new Date()
var ano =  data.getFullYear()
var anoDaPessoa = 1996x

var idade = ano - anoDaPessoa

var olavo = 'não'

console.log(`Você tem ${idade} anos`)

if (olavo == 'sim'){
    console.log('você está mentindo, o Olavo está morto')
} else{
    console.log('Parabéns, você não é o Olavo de carvalho')
}

if (idade < 16){ 
    console.log('irmãzinha, ou irmãozinho. Você não vota ainda :/' )
} else if ( idade < 18 || idade > 65){
    console.log('você pode escolher se quer votar ou não. Seu voto é Facultativo')
} else {
    console.log('Seu voto é obrigatório')
}




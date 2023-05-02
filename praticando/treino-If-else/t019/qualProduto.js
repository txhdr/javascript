/* Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato. */

var sabonete = 3.15
var leiteEmPó = 6.99
var cafe = 1.99

if (sabonete < leiteEmPó && leiteEmPó <cafe){
    console.log('pô, vamo levar o sabonete por enquanto')
} else if (leiteEmPó < cafe && leiteEmPó < sabonete){
    console.log('pô, vamo levar o leite em pó por enquanto')
}else{
    console.log('vamo levar o café. tá até mais barato que o sabonete. pega logo 2!')
}

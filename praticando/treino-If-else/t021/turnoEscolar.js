/* Faça um programa que pergunte em que turno você estuda. Peça para digitar M- matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou “Boa Noite” ou “Valor inválido”, conforme o caso. */

console.log('Em que turno você estuda?')

var m = "matutino"
var v = "vespertino"
var n = 'noturno'

var turno = m

if(turno == m){
    console.log('Pela manhã?')
    console.log('Bom dia e Parabéns! vc é um estudante matutino. Aja coragem!')
} else if (turno == v){
    console.log('pela tarde é? então você é um estudante vespertino. Boa tarde')
} else{
    console.log('Se você estuda pela noite você tem muita chance de ser um jovem que já trabalha e está estudando também. boa sorte! Você é do tipo noturno. Boa noite')
}
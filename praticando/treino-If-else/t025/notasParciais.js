/* Intermediário 14 – Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo: 


Média de aproveitamento    |   Conceito 

Entre 9.0 e 10.0                 A 

Entre 7.5 e 9.0                  B

entre 6 e 7.5                    C

entre 4 e 6                      D

entre 4 e 0                      E

O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C “REPROVADO” se o conceito for D ou E.

*/

var p1 = 7 // parcial 1
var p2 = 7 // parcial 2

console.log(`Suas notas são:
${p1} no primeiro semestre e ${p2} no segundo semestre.`)

var soma = p1+p2
var media = soma/2





if (media >= 9 && media < 11 ){
    console.log('Parabéns, você gabaritou!')
    console.log('Sua nota é A')
} else if(media >= 7.5){
    console.log('Sua Nota é B')
} else if (media >= 6){
    console.log('Sua Nota é C')
} else if (media >=4){
    console.log('Sua Nota é D')
} else if (media < 4){
    console.log('Sua Nota é E')
} else {
    console.log('Inválido')
}
console.log(`Sua média é ${media}.`)

if(media>=6){
    console.log('APROVADO 🟢')
} else {
    console.log('REPROVADO ❌')
}
/* Fácil20. Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:

“Telefonou para a vítima? “
“Esteve no local do crime?
mora perto da vítima?
devia para a vítima?
já trabalhou com a vítima?

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como “Suspeita”, entre 3 e 4 como “Cúmplice” e 5 como “Assassino“. Caso contrário, ele será classificado como “Inocente“.
*/

var p1 = 0
var p2 = 1
var p3 = 0
var p4 = 1
var p5 = 0



console.log('👮🏻‍♂️ Vou te fazer algumas perguntas simples. você me responde com sim(1) ou não(0), ok?')

console.log('👮🏻 Você telefonou para a vítima? ') //pergunta 1

if(p1 === 0){
    console.log('não senhor')
    console.log('👮🏻 não? ok😐')
} else   if(p1===1) {
    console.log('Sim. Telefonei')
    console.log('👮🏻 próximos então, ein...')
    console.log('😅')
} else {
    console.log('👮🏻Resposta errada seu Ban dji dji nho. 😠')
}

console.log('👮🏻Esteve no local do crime?') //pergunta 2

if(p2 === 0){
    console.log('não')
    console.log('👮🏻ok, né 😐')
} else   if(p2===1) {
    console.log('Sim. já estive')
    console.log('👮🏻hm, tá certo 🤔')
} else {
    console.log('👮🏻Resposta errada seu Ban dji dji nho. 😠')
}

console.log('👮🏻mora perto da vítima?') //pergunta 3

if(p3 === 0){
    console.log('não')
    console.log('👮🏻ok 😐')
} else   if(p3===1) {
    console.log('Sim, morava próximo')
    console.log('👮🏻 tendi..')
} else {
    console.log('👮🏻 Resposta errada seu Ban dji dji nho. 😠')
}

console.log('👮🏻 devia para a vítima?') // pergunta 4

if(p4 === 0){
    console.log('não. Só devo a minha mãe grazadeus, senhor. 70 reais.')
    console.log('👮🏻 ok😐')
} else   if(p4===1) {
    console.log('Sim. Eu devia 40 reais de 2 partidas de Yu-gi-oh que tive com ele 🫤')
    console.log('👮🏻 Apoois 😅')
} else {
    console.log('👮🏻Resposta errada seu Ban dji dji nho. 😠')
}

console.log('👮🏻já trabalhou com a vítima?') // pergunta 5

if(p5 === 0){
    console.log('não')
    console.log('👮🏻ok😐')
} else   if(p5===1) {
    console.log('Sim, Trabalhei lá na Oliveiras Construções')
    console.log('perto do Diguinho acessórios? 🤔')
    console.log('Sim 🥲')
} else {
    console.log('👮🏻Resposta errada seu Ban dji dji nho. 😠')
}

var total = p1 + p2 + p3 + p4 + p5

// total
if (total === 2){
    console.log('👮🏻Você é meio suspeito senhor bob esponja calça quadrada... (Indivíduo Suspeito 🔴)')
} else if (total == 3 && total < 5){
    console.log('👮🏻Vamos precisar levar você na delegacia. (Cúmplice 🔴)')
} else if (total === 5){
    console.log('👮🏻Meu amigo...tem nem como te ajudar. venha pro camburão venha. (Indivíduo CLARAMENTE É O ASSASSINO SIM 🫡)')
} else {
    console.log ('Sujeito Inocente 😊👌')
}


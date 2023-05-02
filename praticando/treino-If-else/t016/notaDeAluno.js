/*  Faça um programa para a leitura de duas notas parciais de um aluno. A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete; A mensagem “Aprovado com Distinção”, se a média for igual a dez; A mensagem “Reprovado” se a média for menor de do que sete; */

var n1 = 4
var n2 = 10

nota = n2

if(nota >= 7 && nota < 10){
    console.log('Passou arrastando ein, vamos estudar um POooUCO mais.')
    console.log('APROVADO 🟢')
} else if (nota ==10){
    console.log('Innji foi muito bem, Da Vinci.')
    console.log('APROVADO COM DISTINÇÃO 🟢')
} else {
    console.log('Infelizmente não foi dessa vez. Vamos estudar um pouco mais da proxima.')
    console.log(' REPROVADO ❌')
}


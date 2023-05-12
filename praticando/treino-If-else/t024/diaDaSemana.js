/* Fácil13 – Faça um Programa que leia um número e exiba o dia correspondente da semana. (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido) */

var num = 6

if (num ==0){
    console.log(`Hoje é domingo`)
} else if (num == 1){
    console.log('Hoje é Segunda - feira')
} else if (num == 2){
    console.log('Hoje é Terça - feira')
} else if (num == 3){
    console.log('Hoje é quarta - feira')
} else if (num == 4){
    console.log('Hoje é quinta -feira')
} else if (num ==5){
    console.log('Hoje é sexta - feira')
} else if (num == 6){
    console.log('Hoje é sábado')
} else{
    console.log('Valor inválido. Adicione um número de 0 - 6')
}
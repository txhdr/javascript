/* Fácil 27– Escreva um programa que pergunte o dia, mês e ano do aniversário de uma pessoa e diga se a data é válida ou não. Caso não seja, diga o motivo. Suponha que todos os meses tem 31 dias e que estejamos no ano de 2013. */

var dia = 24
var mes = 11
var ano = 1996

if (ano > 2023 || mes > 12 || dia > 31) { // se a data for inválida
    console.log('Essa data é invalida')
    if ( ano > 2023){
        console.log(' O ano é maior que 2023.🔴')
    } else if (mes > 12){
        console.log('O mês é maior que 12.  🔴')
    } else if (dia > 31){
        console.log('O dia está maior que 31. 🔴')
    }
} else { // se a data for válida.
    console.log('Data registrada no sistema 🟢')
}
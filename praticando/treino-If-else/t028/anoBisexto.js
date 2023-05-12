/* Intermediário17. Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano e ou não bissexto. */
var ano = 24

if (ano % 4 == 0 && ano % 100 != 0) {
    console.log(`O ano ${ano} é Bissexto`)}
    else {
        console.log(`O ano ${ano} não é Bissexto`)
    }

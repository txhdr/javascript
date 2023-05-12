/* Difícil 12- Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.) O salário líquido corresponde ao salário bruto menos os descontos O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês. a. Desconto do IR; b. Salário Bruto ate R$900,00 (inclusive) – Isento; c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%; d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%; e. Salário bruto acima de 2500 – Desconto de 20%. Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo valor da hora é 5 e a quantidade de horas é 220. Salário bruto (5 * 220) : R$ 1100,00 ( – ) IR (5%) : R$ 55,00 ( – ) INSS ( 10% ) : R$ 110,00 FGTS ( 11%) : R$ 121,00 Total de descontos : R$ 165,00 Salário Líquido : R$ 935,00*/

var hdt = 6 //valor da hora de trabalho
var vdd = hdt * 8 // valor da diária
var qdh = 270 //quantidade de horas

var sb = hdt * qdh  //salario bruto

//DESCONTOS

var inss = sb*10/100  // inss
var fgts = sb*11/100  // FGTS
var sin = sb*3/100   //sindicato

console.log('Olá, sou sua assistente virtual. Devido ao seu salário:')

if (sb <= 900){
    console.log('Você está insento do imposto de renda')
} else if (sb <= 1500) {
    var ir = sb*5/100     // imposto de renda (5%)
    console.log('Seu IR é de  de 5%')
} else if (sb <= 2500) {
    console.log('Seu IR é de 10%')
    var ir = sb*10/100     // imposto de renda (10%)
} else {
    console.log('Seu IR é de 20%')
    var ir = sb*20/100     // imposto de renda (20%)
}

var tdd = ir+inss+sin // total dos descontos

//LÍQUIDO

var sl = sb - tdd // salário líquido


//mensagens

console.log(`O valor da sua hora de trabalho é de ${hdt} reais 🙂`)

console.log(`sua diária é de  ${vdd} reais 💸`)

console.log(`A sua quantidade de horas trabalhadas no mês é de: ${qdh} horas ⏲`)

console.log(`Seu salário bruto é de ${sb} reais 💰💰💰`)

console.log(`A empresa deposita ${fgts} de FGTS todo mês `)

console.log(`Seu total de descontos é de ${tdd} reais 😪`)

console.log(`E seu salário liquido é de ${sl} reais`)

console.log(`agora a tabela:

salário bruto: ${sb}
IR: ${ir}
INSS: ${inss}
FGTS: ${fgts}
sindicato: ${sin}

total de descontos: ${tdd}
Salário Liquido: ${sl}
`)

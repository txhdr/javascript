/* As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. 

a. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
b. Salários até R$ 280,00 (incluindo): aumento de 20%; 
c. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
d. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%; 
e. Salários de R$ 1500,00 em diante: aumento de 5%

Após o aumento ser realizado; informe na tela; 

a. O salário antes do reajuste;
b. O percentual de aumento aplicado; 
c. O valor do aumento; 
d. O novo salário, após o aumento.
 */
data = new Date()
hora = data.getHours()

if (hora > 0 && hora <=5){
    console.log('tenha uma Boa madrugada')
} else if (hora <=11){
    console.log('Tenha um Bom dia')
} else {
    console.log('Tenha uma Boa tarde')
}
var salario = 1600
console.log(`O seu salário inicial foi de ${salario} reais 🙂`)

if (salario <= 280){
    console.log('Você recebeu um aumento de 20% no seu salário!😁')
    var aumento = (salario/100)*20
    console.log(`Seu aumento foi de ${aumento} reais`)
    var total = salario+aumento
    console.log(`Seu salário agora é de ${total} reais ✌😉` )

} else if (salario > 280 && salario <=700){
    console.log('Você recebeu um aumento de 15% no seu salário!😁')
    var aumento = (salario/100)*15
    console.log(`Seu aumento foi de ${aumento} reais`)
    var total = salario+aumento
    console.log(`Seu salário agora é de ${total} reais ✌😉` )

} else if (salario <= 1500) {
    console.log('Você recebeu um aumento de 10% no seu salário!😁')
    var aumento = (salario/100)*10
    console.log(`Seu aumento foi de ${aumento} reais`)
    var total = salario+aumento
    console.log(`Seu salário agora é de ${total} reais ✌😉` )
} else {
    console.log('Você recebeu um aumento de 5% no seu salário!😁')
    var aumento = (salario/100)*5
    console.log(`Seu aumento foi de ${aumento} reais`)
    var total = salario+aumento
    console.log(`Seu salário agora é de ${total} reais ✌😉` )
}

/* Intermediário21. Um posto está vendendo combustíveis com a seguinte tabela de descontos: Álcool: Até 20 litros: desconto de 3% por litro 

Acima de 20 litros: Desconto de 5% por litro 99. 

Gasolina: Até 20 litros: desconto de 4% por litro Acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos, 
o tipo de combustível 
(codificado da seguinte forma: A-álcool. G-gasolina), 
calcule e imprima o valor a ser pago pelo cliente. */

var a = 'álcool'
var g = 'Gasolina'
var com = g // combustível
//álcool

var pl = 7 //preço do litro do álcool

var lva = 20 //litro vendido de  álcool

var vca = pl*lva//valor da compra álcool


//gasolina


if(com == a){  //se for álcool
    if (lva <= 20 ){
        var des = pl*3/100 // desconto no preço do litro
        
    
    } else if (lva > 20){
        var des = pl*5/100
    }
    var descontoTotal = des*lva
    var vda =  vca-descontoTotal// valor total com desconto total álcool

    console.log(`Você comprou ${lva} litros de combustível`)
    console.log(`Do tipo: ${com}`)
    console.log(`O valor a ser pago é: R$${vca}`)
    console.log(`Com desconto fica ${vda} reais`)

} else { // se for gasolina
    var plg = 10 // preço do litro gasolina
    var lvg = 25 //  litro vendido de gasolina
    var vcg = plg*lvg // valor da compra gasolina


    if (lvg <= 20 ){
        var des = plg*4/100 // desconto no preço do litro
    
    } else if (lvg > 20){
        var des = plg*6/100
    }
    var descontoTotal = des*lvg
    var vdg =  vcg-descontoTotal// valor total com desconto total gas
    
    console.log(`Você comprou ${lvg} litros de combustível`)
    console.log(`Do tipo: ${com}`)
    console.log(`O valor a ser pago é: R$${vcg}`)
    console.log(`Com desconto fica ${vdg} reais`)
    
}
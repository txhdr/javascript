/* Intermediário16. Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações: a. Se o usuário informar o valor de A igual a zero. a equação não e do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado; b. Se o delta calculado for negativo, a equação não possui raízes reais. Informe ao usuário e encerre o programa; c. Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe ao usuário; d. Se o delta for positivo, a equação possui duas raízes reais; informe-as ao usuário; */

var a = 1
var b = -5
var c = 6


// var equação = (a*x*2) + (b*x) + c


if(a === 0){
    console.log('isso não é um equação de 2° grau. Sistema Encerrado 😁👍')
} else {
    var delta = (b*b) - (4*a*c)
    if (delta > 0){
        var x1 = (-b + Math.sqrt(delta)) / (2*a)
        var x2 = (-b - Math.sqrt(delta)) / (2*a)
        var solução = [x1, x2]
        console.log('Equação Efetivada 🫡')
        console.log(`a Solução é: [ ${solução} ]`)
        } else if (delta === 0 ){
            var x = (-b) / (2*a)
            console.log('A equação possui apenas 1 uma raiz real.')
            console.log(x)
        }
}
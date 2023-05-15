/* Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console. */

var fruta = 'maça'

switch(fruta){
    case 'maça':
        console.log('Não vendemos essa fruta aqui')
        break
    case 'kiwi': 
    console.log('Estamos em escassez de kiwis')
    break

    case 'melancia':
        console.log('aqui está, são 3 reais o quilo')
        break
    case 'banana':
        console.log('Temos sim, Está 3 reais a duzia')
        break
    default:
        console.log('não entendi, isso é uma fruta?')
}
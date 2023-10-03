let num = document.getElementById('fnum'); // números chegam aqui
let lista = document.getElementById('flista'); // onde ficam VISUALMENTE os números armazenados
let res = document.querySelector('div#res') // página de resposta
let valores = [] // onde os números ficam armazenados 


function adicionarNumero(){
    if(PegaNumero(num.value) && !TaNalista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()

}
function PegaNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}
function TaNalista(n,nalista){
    if(nalista.indexOf(Number(n)) != -1){ // se vc procurar na lista e não achar (-1) então eu quero esse número
        return true
    } else {
        return false // se vc retornou -1, então não quero esse número
    }



}

function finalizar(){
if(valores.length == 0){
    alert('Por gentileza, adicione valores antes de finalizar')
}else {

    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let c in valores){
        soma += valores[c]

        if(valores[c] > maior)
        maior = valores[c] // se valores 0 for maior que MAIOR que é 0, então Maior recebe valores de parametro 0
        
        if (valores[c] < menor)
        menor = valores[c]
    }

    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos ${tot} Elementos </p>`
    res.innerHTML += `<p> O maior valor Informado foi ${maior}. </p>`
    res.innerHTML += `<p> O menor número informado foi ${menor}. </p>`
    res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
    res.innerHTML += `<p> A Média dos valores digitados é ${media}.<p/>`

    }



}
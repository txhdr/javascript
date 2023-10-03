let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let valores = []

function adicionarNumero(){
    if(validaNumero(num.value) && !taNalista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    } else{
        alert('Valor informado é invalido ou já foi adicionado.')
    }

}

function validaNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}

function taNalista(numero,armazem){
    if(armazem.indexOf(Number(numero)) != -1){
        return true 
    } else {
        return false
    }
}
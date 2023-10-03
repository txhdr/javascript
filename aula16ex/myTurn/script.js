let tnum = document.getElementById('fnum')
let quadro = document.getElementById('fquadro')
let res = document.getElementById('res')

let num = Number(tnum.value)
console.log(num)
function adicionar(){
    if(Number(tnum.value.length) == 0 || validação(num)) {
        alert('Por gentileza, digite um Número válido')
    } else {
        alert('tudo ok')
    }
}

function validação(n){
    if(n > 0 && n < 100 ){
        return true
    } else {
        return false
    }
}

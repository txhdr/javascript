function contar(){
    let tini = document.getElementById('inicio')
    let tfim = document.getElementById('fim')
    let tpassos = document.getElementById('passos')

    let inicio = Number(tini.value)
    let fim = Number(tfim.value)
    let passos = Number(tpassos.value)

    let res = document.getElementById('res')

    res.innerHTML = `contando...`

    if(inicio < fim){ // ordem crescente
        for(let c = inicio;c <= fim;c+=passos){
            res.innerHTML += `${c} 👉🏻 `
        }

    } else if(inicio > fim) { //Ordem decrescente
        for(let c = inicio;c >= fim;c-=passos){
            res.innerHTML += `${c} 👉🏻 `
    }
    
}
res.innerHTML += '🏁'
}
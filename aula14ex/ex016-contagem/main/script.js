function contar(){
    let ini = document.getElementById('txti') // formulário 1 - inicio
    let fim = document.getElementById('txtf')   // formulário 2 - fim 
    let passo = document.getElementById('txtp')  // formulário 3 - passos a serem dados
    let res = document.getElementById('res')

    if(Number(ini.value.length) == 0 || Number(fim.value.length) == 0 || Number(passo.value.length) == 0){
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML ='contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('passo invalido. considerando PASSO 1')
            p = 1
        }
            if(i < f){// contagem crescente
                for(let c = i; c <= f; c+= p){ 
                    res.innerHTML += `  ${c} \u{1F449} `
                }
            } else if(i > f){
                for(let c = i; c>=f; c-= p){ // contagem regressiva
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            
        }

        

        
    res.innerHTML += `\u{1F3C1}`
}
}
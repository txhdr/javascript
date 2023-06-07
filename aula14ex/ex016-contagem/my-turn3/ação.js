function cont(){
    let ti = document.getElementById('txi')
    let tf = document.getElementById('txf')
    let tp = document.getElementById('txp')

    let res = document.querySelector('div#res')

    if(Number(ti.value.length == 0) || Number(tf.value.length) == 0 || Number(tp.value.length) == 0){
        res.innerHTML = `ERRO [😁] digite os 3 valores válidos `
    } else{
        let i = Number(ti.value)
        let f = Number(tf.value)
        let p = Number(tp.value)

        let c = ``

        res.innerHTML = `contando`

        if(i < f){
            for(let c = i;c<=f; c=c+p){
                res.innerHTML += `${c} 👉🏻`
            }

        } else if(i> f){
            for(let c = i; c>=f; c-=p){
                res.innerHTML += `${c} 👉🏻`
            }

        }

        res.innerHTML += `🚩`
    }
    
}
function contagem(){
    let ti = document.getElementById('in-inicio')
    let tf = document.getElementById('in-fim')
    let tp = document.getElementById('in-passo')

    let res = document.getElementById('res')

    if(Number(ti.value.length) == 0 || Number(tf.value.length == 0) || Number(tp.value.length == 0)) {
        res.innerHTML = `ERRO [🔴] digite valores válidos`
    } else{
        res.innerHTML = `contagem: `

        let i = Number(ti.value)
        let f = Number(tf.value)
        let p = Number(tp.value)

        let c = ``

        if(i < f){ // crescente
            for(let c = i; c<=f;c+=p){
                res.innerHTML += `${c} 👉🏻`
            }

        }else if (i>f){ // decrescente
            for(let c = i; c>=f;c-=p){
                res.innerHTML += `${c} 👉🏻`
            }

        }

    }

    res.innerHTML += `🚩`
}
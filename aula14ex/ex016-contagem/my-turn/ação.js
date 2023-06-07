function contagem(){
    let tini = document.getElementById('in-inicio')
    let tfim = document.getElementById('in-fim')
    let tpasso = document.getElementById('in-passo')
    let res = document.getElementById('res')

    if(Number(tini.value.length) == 0 || Number(tfim.value.length) == 0|| Number(tpasso.value.length) == 0){
        res.innerHTML = 'ERRO🔴: faltam dados'
    } else{
        let i = Number(tini.value)
        let f = Number(tfim.value)
        let p = Number(tpasso.value)

        res.innerHTML = 'Contagem:'

        let c = ''

        if(i < f){ // ordem Crescente
            
            /*
            while(c <= f){
                c = i*p
                res.innerHTML += `${c} 👉🏻`
                i++
            } 

            ---

            do{
                res.innerHTML += `${c} 👉🏻`
                c = i*p
                i++
            } while(c < f)


            */

            for (let c = i; c<=f;c+=p){
                res.innerHTML += `${c} 👉🏻`
            }

        } else if(i>f){ // ordem Decrescente
            for(let c = i; c>=f;c-=p){
                res.innerHTML += `${c} 👉🏻`
            }

        }

        res.innerHTML += ` 🚩`

    }




}

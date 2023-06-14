function somar (){
    let tn = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(tn.value.length == 0){
        alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(tn.value)
        let c = 1
        tab.innerHTML = ``

        while(c<= 10){
            let item = document.createElement('option')
            item.text = `${n}x ${c}=${n*c}`
            tab.appendChild(item)
            tab.value = `tab${c}`
            c++
        }
    }



        }
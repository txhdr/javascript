function somar(){
    let t1 = document.getElementById('tn')
    let tab = document.getElementById('seltab')

    if(Number(t1.value.length == 0)){
        window.alert (`ERRO [🔴] adicione um número !`)
    } else {
        let n = Number(t1.value)
        let c = 1
        tab.innerHTML = ``

        while(c <= 10){
            let item = document.createAttribute('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        }
    }
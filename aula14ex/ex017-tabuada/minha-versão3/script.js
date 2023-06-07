function somar(){
    let tn = document.getElementById('tn')
    let tab = document.getElementById('seltab')

    if(Number(tn.value.length) == 0){
        window.alert('ERRO [🔴] DIGITE UM NÚMERO!')
    } else {
        let n = Number(tn.value)
        let c = 1
        tab.innerHTML = ``

        while(c <= 10){
            let item = document.createAttribute('option')
            item.text = `${n}x ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++
            
        }

    }
}
function tabuada (){
    let num = document.getElementById('receba')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')

    if (Number(num.value.length) == 0){
        alert('por favor, digite um número')
    } else{
        tab.innerText = ``
        let n = Number(num.value)
        let c = ``

        for(let c = 1; c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        
        }

    }
}
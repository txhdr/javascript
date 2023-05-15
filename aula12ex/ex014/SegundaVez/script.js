
function carregar(){

    var msg = window.document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18){
    //boa tarde
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#b9846f'


    } else{
        //boa noite
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#515154'
    }
    


}




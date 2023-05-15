function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 7
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
            //Bom dia
            img.src = 'fotos/manha.png'
            document.body.style.background = '#431462'
    } else if (hora >=12 && hora < 18) {
            //boa tarde
            img.src = 'fotos/tarde.png'
            document.body.style.background = '#544308'
    } else {
            //boa noite
            img.src = 'fotos/noite.png'
            document.body.style.background = '#2929a2'
    }

}

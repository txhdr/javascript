function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) >= ano ){
        window.alert('[ERRO] Por favor, digite o ano corretamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <=10 ){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png ')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }


        } else if(fsex[1].checked){
            gênero = 'Mulher'

            if(idade >=0 && idade <=10 ){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png ')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}

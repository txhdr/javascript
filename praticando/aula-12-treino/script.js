function verificador(){

    data = new Date()
    ano = data.getFullYear()

    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else { 
        var fsex = document.getElementById('sex')
        var idade = ano - Number(fano.value)
    } 
    
    
    

}
//window.alert('tudo certo')
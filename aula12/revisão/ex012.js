var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
console.log(`agora são exatamente ${hora} horas e ${min} minutos`)

if (hora < 5) {
    console.log('boa madrugada')
} else if ( hora < 12 ){
    console.log('Bom dia')
} else if (hora < 18){
    console.log('boa tarde')
} else if (hora <= 24){
    console.log('boa noite')
}
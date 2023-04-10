var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)

if (hora < 12){
    console.log('good morning')
} else if (hora <=18){
    console.log('good afternoon')
} else if (hora <=24){
    console.log('good night')
} else {
    console.log('this hour doesnt exist')
}

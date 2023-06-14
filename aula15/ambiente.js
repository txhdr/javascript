/* let num = [5,8,2,9];
num[4]=6;
num.push(7)
num.sort();

console.log(num)
console.log(`O  vetor tem ${num.length} posições`)*/



/*
let valores = [5,3,2,4,1];
for(let pos = 0; pos<=4;pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)

} */
/*
let valores = [5,3,2,4,1]
for(let pos in valores){  // para cada posição[pos] na variável num. 
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
*/

// buscar valores dentro de um VETOR / ARRAY / VARIÁVEL COMPOSTA

let num = [5,8,2,9,3];
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)

if(pos == -1){
    console.log('Valor Não encontrado')
} else{
    console.log(`O valor 8 está na posição ${pos}`)

}



  // aqui a gente tá perguntando: javaScript, a gente tem o valor 7 dentro da Variável num? lembrar que não é o índice/posição, e sim o conteúdo. se tem algum conteúdo de valor 7. se tive ele vai retornar o lugar do 7, o índice dele, a posição. se não tiver, ele retorna o valor de -1 ( pesquisei e não achei)

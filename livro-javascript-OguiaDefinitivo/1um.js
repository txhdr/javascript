/*
var x = "hello word"

// o tipo de dado mais importante no javaScript é o Objeto. arrays são objetos, Bom lembrar.

// um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.

var book = {                    // Objetos são colocados entre chaves
    topic: "JavaScript",        // A propriedade "topic" tem o valor "javascript"
    fat: true                   // A propriedade "fat" tem o valor: true.
};                              // a chave marca o fim do objeto

// Acesse as propriedades de um objeto com . ou [] ;
book.topic
book["fat"]

book.author = "rodrigo";        // criando novas propriedades por meio de atribuição.   
//console.log(book["author"])   // vai retornar rodrigo

book.contents = {};             // {} é um objeto vazio sem qualquer propriedade.

//JavaScript também aceita arrays ( listas indexadas numericamente) de valores

var primes = [2,3,5,7]          // uma array de 4 valores, delimitados por [ e ]
primes[4] = 9                   // adiciona um novo elemento por meio de atribuição
primes[4] = 11;                 // ou modifica, também por atribuição
console.log(primes.length-1)    // 💡: Retorna 7: o ultimo elemento da array 
var empty = [];                 // [] é um array vazio, sem qualquer elemento.
empty.length                    // => 0

// os arrays e objetos podem ter outros arrays e objetos:

var points = [                  // uma array com 2 elementos
    {x:0, y:0},                 // Cada elemento é um Objeto
    {x:1,y:1}
];

var data = {
    trial1:[[1,2],[3,4]],
    trial2:[[2,30], [4,5]],     // Os elementos dos array são arrays
};

//Uma expressão é uma frase em javascript que pode ser avaliada para produzir um valor.

//📘 esse arquivo vai até a página 5 do livro. 19/06/23

*/

// 20/6/23 - 14:00

// Operadores Aritméticos no javaScript

var y = 3
var x = 2
/*
x++ // é igual a x+1
x-- // igual a x-1

x+= 2 // x = x + 2
x-= 2  // é igual x = x-2
x*= 3 // multiplica por 3. o mesmo que x = x*3
  // variáveis também são expressões


  se combinar funções com objetos, obtemos Métodos


var a = [0]
a.push(1,2,3);  // push() adiciona elementos no final da fila da array.
a.reverse()  // inverte a ordem dos objetos
console.log(a)
*/

points.dist(){
    var p1 = this[0]
    var p2 = this[1]

    var a = p2.x-p1.x;
    var b = p2.y-p1.y;
    return Math.sqrt(a*a+b*b) //math.sqrt() calcula a raiz quadrada

};

points.dist()
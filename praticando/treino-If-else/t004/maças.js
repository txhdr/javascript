/* As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
valor	total	da	compra. */

var maça = ''

var compra = 13

if (compra < 12){
    maça = '1.30'
} else {
    maça = '1.25'
}

var total = Number.parseFloat(maça) * compra

console.log(`Você comprou ${compra} maças. O total das suas compras foi de ${total} R$`)

/*tive dificuldade nessa porque esqueci como declarar que era uma numero */
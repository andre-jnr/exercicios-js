/**
 * Crie um programa que leia quanto dinheiro uma pessoa tem
 * na carteira e mostre quantos dólares ela pode comprar.
 */
var numero = Number(prompt('Digite quantos reais você tem'))
var valorEmDolar = numero * 4.79

console.log(`US$${valorEmDolar.toFixed(2)}`)

/**
 * Escreve um programa que converta uma temperatura
 * digitada em °C e converta para °F.
 */
var graus = Number(prompt('Digite uma temperatura em C°'))
var fahrenheit = (graus * 9) / 5 + 32

console.log(`${graus}C° = ${fahrenheit}F°`)

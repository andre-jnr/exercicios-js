/**
 * Faça um programa que leia a largura e a altura de uma parede em metros,
 * calcule a sua área e a quantidade de tinta necessária para pintá-la
 * sabendo que cada litro de tinta, pinta uma área de 2m².
 */
var largura = Number(prompt('Digite a largura da sua parede'))
var altura = Number(prompt('Digite a altura da sua parede'))
var area = largura * altura
var tintaNecessaria = area / 2

console.log(`Serão necessárias ${tintaNecessaria} litros de tinta`)

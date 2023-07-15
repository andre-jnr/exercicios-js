/**
 Escreva um programa que pergunte a quantidade de Km percorridos por
 um carro alugado e a quantidade de dias pelos quais ele foi alugado.
 Calcule o preço a pagar, sabendo que o carro custa
 R$60 por dia e R$0,15 por Km rodado.
 */

var qtdeKm = Number(prompt('Digite a quantidade de Km percorridos'))
var qtdeDias = Number(
  prompt('Digire a quantidade de dias que o carro foi usado')
)

var valorAPagar = qtdeDias * 60 + qtdeKm * 0.15
document.write(`O total a pagar é <strong>R$${valorAPagar.toFixed(2)}</strong>`)
console.log(`O total a pagar é: ${valorAPagar}`)

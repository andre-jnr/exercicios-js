/**
 * Faça um algoritmo que leia o salário de um funcionária
 * e mostre seu novo salário, com 15% de aumento.
 */
var salario = Number(prompt('Digite o salário do funcionário'))
var novoSalario = salario + salario * 0.15

console.log(`Novo salário: ${novoSalario}`)

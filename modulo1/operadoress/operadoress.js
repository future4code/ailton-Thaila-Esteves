// Exercícios de interpretação de código
// 1.
// a. false
// b. false
// c. true
// d. booleano

// 2.
// O problema desse código é que não tem o comando Number antes de prompt
// É impresso no console os números em forma escrita. 

// 3.
// Para arrumar o erro ele deveria colocar Number na frente de prompt 
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// Exercícios de escrita de código
// 1.
// let idade = Number(prompt("Qual sua idade?"))
// let idadeAmigo = Number(prompt("Qual é a idade de seu melhor amigo/ sua melhor amiga?"))

// console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
// console.log(idade - idadeAmigo)

// 2.
// let numeroPar = Number(prompt("Insira um número par:"))
// console.log(numeroPar % 2)

// c. Todos os número pares retornam 0 como resto.

// d. Se inserir um número ímpar ele retorna 1 como resto.

// 3.
// let idade = Number(prompt("Quantos anos voê tem?"))
// console.log(idade * 12) //meses
// console.log(idade * 365) //dias
// console.log(idade * 8760) //horas

// 4. 
let numeroUm = Number(prompt("Insira um número"))
let numeroDois = Number(prompt("Insira outro número"))

console.log(numeroUm > numeroDois)
console.log(numeroUm === numeroDois)
console.log((numeroUm % numeroDois) === 0)
console.log((numeroDois % numeroDois) === 0)




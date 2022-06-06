// Exercícios de interpretação de código
// 1.
// a. 
// 10
// 50
// b. Apareceria um erro, pois minhaFuncao não está declarada

// 2. 
// a. A função faz com que o texto inserido pelo usuário fique todo
// em letra minúscula e que mostre true/false se tiver a palavra "cenoura"
// no texto do usuário. 

//b.
// true
// true
// false

// Exercícios de escrita de código
// 1.
// a.
// function mensagem () {
//     console.log("Eu sou Thaila, tenho 24 anos, moro em São Paulo e sou estudante.")
// }

// mensagem()

// b.

// function mensagemPessoas(nome, idade, endereco, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao} `)
// }

// let nomeP = prompt("Qual seu nome?")
// let idadeP = prompt("Qual sua idade?")
// let enderecoP = prompt("Qual seu endereço?")
// let profissaoP = prompt("Qual sua profissão?")

// mensagemPessoas(nomeP, idadeP, enderecoP, profissaoP)

// 2.
// a.
// function somar(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }

// let num1 = Number(prompt("Digite um número: "))
// let num2 = Number(prompt("Digite outro número: "))

// console.log(somar(num1, num2))

// b.
// function maiorNumero(numeroA, numeroB) {
//     let maiorOuIgual = (numeroA >= numeroB)
//     return maiorOuIgual
// }

// let numA = Number(prompt("Digite um número: "))
// let numB = Number(prompt("Digite outro número: "))

// console.log(maiorNumero(numA, numB))

// c.
// function numeroPar(numPar) {
//     let ePar = (numPar % 2 === 0)
//     return ePar
// }

// let parEntrada = Number(prompt("Digite um número: "))
// console.log(numeroPar(parEntrada))

// d.
// function novaMensagem(mensagemUser) {
//     let mensagemTamanho = mensagemUser.length
//     let mensagemMaiscula = mensagemUser.toUpperCase()
//     return [mensagemTamanho, mensagemMaiscula]
// }

// let mensagemString = prompt("Digite uma mensagem")
// console.log(novaMensagem(mensagemString))

// 3.
function somando(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
}

function subtraindo(primeiroNumero, segundoNumero) {
    return primeiroNumero - segundoNumero
}

function multiplicando(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero
}

function dividindo(primeiroNumero, segundoNumero) {
    return primeiroNumero / segundoNumero
}

let primeiro = Number(prompt("Digite um número: "))
let segundo = Number(prompt("Digite outro número: "))

console.log(`Números inseridos: ${primeiro} e ${segundo}`)
console.log(`Soma: ${somando(primeiro, segundo)}`)
console.log(`Diferença: ${subtraindo(primeiro, segundo)}`)
console.log(`Multiplicação: ${multiplicando(primeiro, segundo)}`)
console.log(`Divisão: ${dividindo(primeiro, segundo)}`)


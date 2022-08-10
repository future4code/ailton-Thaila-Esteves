// Exercícios

// 1
// a - Usamos o process.argv[2]

// b

// const result = (`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

// console.log(result)

// c 

// const result = Number(process.argv[3]) + 7

// console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${result}`)

var colors = require('colors/safe')

const nome = process.argv[2]
const idade = process.argv[3]

const result = (`Olá, ${nome}! Você tem ${idade} anos.`)

if (nome === undefined || idade === undefined) {
    console.log(colors.yellow("Não foi possível, confira se colocou todos os parâmetros corretamente."))
} else {
    console.log(colors.green(result))
}

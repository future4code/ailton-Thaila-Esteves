// INTERPRETAÇÃO
// 1
// a
// Esse código pega o número passado pelo usuário e verifica
// se o resto da divisão desse número por 2 é zero. Se for
// 0 significa que ele é par e passou no teste, caso 
// contrário ele não passa na teste.

// b
// Ele imprime "Passou no teste" para números pares.

// c
// A mensagem "Não passou no teste" é para números ímpares

//2
// a
// O código para que a pessoa possa digitar qual fruta quer
// e saber o preço sem o programador ter que usar vários
// if else, então usa o switch.

// b
// O preço da fruta Maça é R$ 2.25

//c 
// O código passaria direto e é impresso o valor do preço
// do default, deixando a Perâ com o preço de R$ 5

// 3
// a
// A primeira linha do código faz com que o usuário digite
// um número e esse número já seja devolvido no tipo Number.

// b
// Se fosse o número 10 a mensagem seria "Esse número passou
// no teste". Já se fosse o número -10 seria exibido um erro.

// c
// O erro no console aparece por conta de a variável
// 'mensagem' ter sido definida dentro de um escopo local
// da condicional if, então quando é chamada fora dessa
// condicional apresenta erro, pois não está definida fora
// dessa condicional.

// ESCRITA
// 1
// let idade = Number(prompt("Qual sua idade? "))

// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir.")
// }

// 2
// let turnoDeEstudo = prompt("Digite M para matutino ou V para Vespertino ou N para Noturno para indicar em qual turno você estuda.")

// if (turnoDeEstudo === "M") {
//     console.log("Bom Dia!")
// } else if (turnoDeEstudo === "V") {
//     console.log("Boa Tarde!")
// } else (turnoDeEstudo === "N") {
//     console.log("Boa Noite!")
// } 

// 3
// let turnoDeEstudo = prompt("Digite M para matutino ou V para Vespertino ou N para Noturno para indicar em qual turno você estuda.")

// const retornaTurnoDeEstudo = function (turnoDeEstudoDigitado) {
//     switch(turnoDeEstudoDigitado) {
//         case "M":
//             console.log("Bom Dia!")
//             break 
//         case "V":
//             console.log("Boa Tarde!")
//             break
//         case "N":
//             console.log("Boa Noite!")
//             break
//     }
// }

// retornaTurnoDeEstudo(turnoDeEstudo)

// 4
// let generoDoFilme = prompt("Qual gênero de filme vão assitir?")
// let precoDoIngressoDoFilme = Number(prompt("Até quanto estão dispostos a pagar por cada ingresso?"))

// if (generoDoFilme === "fantasia" && precoDoIngressoDoFilme <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// DESAFIOS
// 1
// let generoDoFilme = prompt("Qual gênero de filme vão assitir?")
// let precoDoIngressoDoFilme = Number(prompt("Até quanto estão dispostos a pagar por cada ingresso?"))

// if (generoDoFilme === "fantasia" && precoDoIngressoDoFilme <= 15) {
//     let comida = prompt("Qual comida vai comprar para assistir o filme?")
//     console.log(`Bom filme! Aproveite o seu ${comida}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

// 2
// [vendas: sistema de vendas de ingressos]

// imprimir todas informacoes COM valor cada ingresso
// e valor total (valor unitário do ingresso * quantidade)

// jogo internacional: dólar = 4,10

let nomeCompleto = prompt("Digite seu nome completo")
let tipoJogo = prompt("Digite qual é o tipo de jogo que deseja: IN indica internacional e DO indica doméstico")
let etapaJogo = prompt("Digite qual é a etapa do jogo: SF indica semi-final, DT indica decisão de terceiro lugar e FI indica final")
let categoriaIngresso = Number(prompt("Digite qual categoria quer: 1, 2, 3 ou 4"))
let quantidadeIngresso = Number(prompt("Quantos ingressos deseja comprar?"))
let dolar = 4.1

let precoValores

function valores (tipo, etapa, categoria, quantidade) {
    if (tipo === "DO") {
        if (etapa === "SF") {
            if (categoria === 1) {
                precoValores = 1320
                console.log("R$", precoValores)
            } else if (categoria === 2) {
                precoValores = 880
                console.log("R$", precoValores)
            } else if (categoria === 3) {
                precoValores = 550
                console.log("R$", precoValores)
            } else {
                precoValores = 220
                console.log("R$", precoValores)
            } 
        } else if (etapa === "DT") {
                if (categoria === 1) {
                    precoValores = 660
                    console.log("R$", precoValores)
                } else if (categoria === 2) {
                    precoValores = 440
                    console.log("R$", precoValores)
                } else if (categoria === 3) {
                    precoValores = 330
                    console.log("R$", precoValores)
                } else {
                    precoValores = 170
                    console.log("R$", precoValores)
                }

        } else {
                if (categoria === 1) {
                    precoValores = 1980
                    console.log("R$", precoValores)
                } else if (categoria === 2) {
                    precoValores = 1320
                    console.log("R$", precoValores)
                } else if (categoria === 3) {
                    precoValores = 880
                    console.log("R$", precoValores)
                } else {
                    precoValores = 330
                    console.log("R$", precoValores)
                }
        }
    } else if (tipo === "IN") {
        if (etapa === "SF") {
            if (categoria === 1) {
                precoValores = 1320 * dolar
                console.log("U$", precoValores)
            } else if (categoria === 2) {
                precoValores = 880 * dolar
                console.log("U$", precoValores)
            } else if (categoria === 3) {
                precoValores = 550 * dolar
                console.log("U$", precoValores)
            } else {
                precoValores = 220 * dolar
                console.log("U$", precoValores)
            } 

        } else if (etapa === "DT") {
                if (categoria === 1) {
                    precoValores = 660 * dolar
                    console.log("U$", precoValores)
                } else if (categoria === 2) {
                    precoValores = 440 * dolar
                    console.log("U$", precoValores)
                } else if (categoria === 3) {
                    precoValores = 330 * dolar
                    console.log("U$", precoValores)
                } else {
                    precoValores = 170 * dolar
                    console.log("U$", precoValores)
                }

        } else {
                if (categoria === 1) {
                    precoValores = 1980 * dolar
                    console.log("U$", precoValores)
                } else if (categoria === 2) {
                    precoValores = 1320 * dolar
                    console.log("U$", precoValores)
                } else if (categoria === 3) {
                    precoValores = 880 * dolar
                    console.log("U$", precoValores)
                } else {
                    precoValores = 330 * dolar
                    console.log("U$", precoValores)
                }
            }
        }
    }

valores(tipoJogo, etapaJogo, categoriaIngresso, quantidadeIngresso)

let precoValoresTotal = precoValores * quantidadeIngresso

console.log(`---Dados da compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoriaIngresso}
Quantidade de Ingressos: ${quantidadeIngresso}
---Valores---
Valor do ingresso: ${precoValores}
Valor total: ${precoValoresTotal}`)







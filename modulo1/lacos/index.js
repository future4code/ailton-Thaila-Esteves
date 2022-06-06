// INTERPRETAÇÃO
// 1
// O código faz com que a variável valor seja a cada nova 
// repetição adicionada a 1, então valor vai aumentando
// até chegar em 10, quando i = 4, então obedenco a 
// condição de i < 5.
// No console será impresso 10

// 2
// a
// Será impresso no console todos números da array lista que
// são maiores que 18: 19, 21, 23, 25, 27, 30

// b
// Para acessar o índice de cada elemento da array lista
// o for...of... não é suficiente, pois seria preciso
// usar o while ou for para podermos acessar o i (índice)
// de cada elemento.

// 3
// *
// **
// ***
// ****

// ESCRITA
// 1

// let bichos = Number(prompt("Quantos bicinhos de estimação você tem?"))
// let arrayNomeBichos = []
// if (bichos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else if (bichos > 0) {
//     for (i = 0; i < bichos; i++) {
//     let nomeBichos = prompt("Digite o nome de um deles")
//     arrayNomeBichos.push(nomeBichos)
//     }
//     console.log(arrayNomeBichos)
// }
   
// 2

// a
// function imprime (arrayOriginal) {
//     for (i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// imprime(array)

// // b
// function imprime (arrayOriginal) {
//     for (i = 0; i < array.length; i++) {
//         console.log(array[i] / 10)
//     }
// }
// imprime(array)

// // c 
// let novaArray = []
// function imprime (arrayOriginal) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             novaArray.push(array[i])
//         }
//     }
//     console.log(novaArray)
// }
// imprime(array)

// // d
// let outraArrayStrings = []
// function imprime (arrayOriginal) {
//     for (i = 0; i < array.length; i++) {
//         let novoString = array[i].toString()
//         outraArrayStrings.push(`O elemento do index ${i} é: ${novoString}`)
//     }
//     console.log(outraArrayStrings)
// }

// imprime(array)

// // e
// function imprime (arrayOriginal) {
//     let maior = 0
//     let menor = 0
//     for (i = 0; i < array.length; i++) {
//         const elemento = array[i]

//         if (elemento > maior) {
//             maior = elemento
//         } else if (elemento < menor) {
//             menor = elemento
//         }
        
//     }
//     console.log(`O maior número é ${maior} e o menor é ${menor}`)

// }
// imprime(array)

// DESAFIOS
// 1
console.log("Vamos jogar!")
const numeroJogador1 = Number(prompt("O primeiro jogador deve inserir o número que está pensando: "))
let chutesJogador2 = Number(prompt("O segundo jogador deve chutar o número que acha que o primeiro jogador escolheu: "))
let tentativas = 0

    while (chutesJogador2 !== numeroJogador1) {

        tentativas++
        console.log(`O número chutado foi: ${chutesJogador2}`)

        if (chutesJogador2 === numeroJogador1) {
            console.log(`Acertou`)
            console.log(`O número de tentativas foi: `)
        } else if (chutesJogador2 < numeroJogador1) {
            console.log(`Errou. O número escolhido é menor`)
        } else if (chutesJogador2 > numeroJogador1) {
            console.log(`Errou. O número escolhido é maior`)
        } 
    }

  



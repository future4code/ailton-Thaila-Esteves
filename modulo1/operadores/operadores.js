// EXERCÍCO DE INTERPRETAÇÃO DE CÓDIGO

// 1. 
// a. false
// b. false
// c. true
// d. booleano

// 2. O problema desse código é que o comando prompt retorna um string, 
// então na hora de fazer a soma ele não aparece como número, mas em string.

// 3. Para corrigir o problema deveria ser feita a conversão de string para
// número. 
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

//EXERCÍCO DE ESCRITA DE CÓDIGO

// 1.
// let idade = Number(prompt("Qual é a sua idade?"))
// let idadeAmigo = Number(prompt("Qual a idade do(a) seu(sua) melhor amigo(a)?"))

// let idadeMaiorQueAmigo = idade > idadeAmigo
// console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaiorQueAmigo)

// let diferencaIdade = idade - idadeAmigo
// console.log("A diferença da sua idade para do seu amigo é de", diferencaIdade, "anos")

// 2.
// let numeroParDoUsuario = Number(prompt("Insira um número par"))
// console.log(numeroParDoUsuario % 2)

// c. Todos os números pares retornam o valor 0 no resto da divisão.

// d. Se o usuário imprimir um número ímpar sobrará um resto na divisão por dois no valor de 1.

// 3.
// let idadeEmAnos = Number(prompt("Quantos anos você tem?"))
// let idadeEmMeses = idadeEmAnos * 12
// console.log(idadeEmMeses)

// let idadeEmDias = idadeEmAnos * 365
// console.log(idadeEmDias)

// let idadeEmHoras = idadeEmAnos * 8760
// console.log(idadeEmHoras)

// 4.
let valorUm = Number(prompt("Digite um número: "))
let valorDois = Number(prompt("Digite outro número: "))

console.log(valorUm > valorDois)
console.log(valorUm === valorDois)

let divisaoValoresUm = valorUm % valorDois 
console.log(divisaoValoresUm === 0)

let divisaoValoresDois = valorDois % valorUm
console.log(divisaoValoresDois === 0)




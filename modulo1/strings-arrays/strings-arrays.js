// Exercícios de interpretação de código
// 1.
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// 2.
// SUBI NUM ÔNIBUS EM MIRROCOS, 27

// Exercícios de escrita de código
// 1.
// let nomeDoUsuario = prompt("Qual seu nome?")
// let emailDoUsuario = prompt("Qual seu email?")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

// 2.
// const comidasPreferidas = ["arroz", "batata", "macarrão", "pão", "chocolate"]
// console.log(comidasPreferidas)
// console.log(`Essas são minhas comidas preferidas:
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}`)

// let comidaUsuario = prompt("Qual sua comida preferida?")

// let novaArrayComidas = ["arroz", comidaUsuario, "macarrão", "pão", "chocolate"]

// console.log(novaArrayComidas)

// 3.
const listaDeTarefas = []

const listaUm = prompt("Digite uma tarefa que você precisa realizar hoje: ")
const listaDois = prompt("Digite outra tarefa que você precisa realizar hoje: ")
const listaTres = prompt("Digite mais uma tarefa que você precisa realizar hoje: ")

listaDeTarefas.push(listaUm)
listaDeTarefas.push(listaDois) 
listaDeTarefas.push(listaTres)

console.log(listaDeTarefas)

const tarefaFeita = Number(prompt("Digite o índice de uma tarefa que já realizou (0, 1, 2)"))

listaDeTarefas.splice(tarefaFeita, 1)

console.log(listaDeTarefas)


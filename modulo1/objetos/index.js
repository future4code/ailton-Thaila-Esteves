// EXERCÍCIOS INTERPRETAÇÃO
// 1
// Matheus Nachtergaele
// Virginia Cavendish
// Object
// canal: "Globo"
// horario: "14h"

// 2
// a
// cachorro
// {nome: 'Juca', idade: 3, raca: 'SRD'}

// gato
// {nome: 'Juba', idade: 3, raca: 'SRD'}

// tartaruga 
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

//b 
// A sintaxe faz com o objeto depois dos três pontos seja clonado.

// 3
// a
// false
// undefined

//b
// Isso aconteceu por conta de altura não ser uma propriedade do objeto pessoas.

// EXERCÍCIOS ESCRITA
// 1
// a
// const pessoa = {
//     nome: 'Paulo',
//     apelidos:['pa', 'paulinho', 'pe']
// }

// const nomesFuncao = function (objeto){
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
//     return objeto
// }

// nomesFuncao(pessoa)

// b
// const pessoas = {
//     ... pessoa,
//     apelidos: ['pepe', 'p', 'paulin']
// }

// nomesFuncao(pessoas)

//2
// a
// const um = {
//     nome: 'Ana',
//     idade: 18,
//     profissão: 'advogada'
// }

// const dois = {
//     nome: 'Nilson',
//     idade: 17,
//     profissão: 'professor de espanhol'
// }

// const funcaoPessoa = function (objeto) {
//     console.log(`[${objeto.nome}, ${objeto.nome.length}, ${objeto.idade}, ${objeto.profissão}, ${objeto.profissão.length}]`) 
//     return funcaoPessoa
// }

// funcaoPessoa(um)
// funcaoPessoa(dois)

// 3
// a
// const carrinho = []

// // b

// const frutaUm = {
//     nome: 'banana',
//     disponibilidade: true
// }

// const frutaDois = {
//     nome: 'manga',
//     disponibilidade: true
// }

// const frutaTres = {
//     nome: 'ameixa',
//     disponibilidade: true
// }

// // c

// const funcaoFrutas = function(frutas) {
//     carrinho.push(frutas)
//     return funcaoFrutas
// }

// funcaoFrutas(frutaUm)
// funcaoFrutas(frutaDois)
// funcaoFrutas(frutaTres)

// // d

// console.log(carrinho)

// DESAFIOS
// 1
// function pessoa (){
//     const nome = prompt("Qual seu nome?")
//     const idade = Number(prompt("Qual sua idade?"))
//     const profissao = prompt("Qual é sua profissão?")
//     console.log(`{nome: ${nome}, profissão: ${idade}, idade: ${idade}}`)
// }

// pessoa()

// 2
// const filmeUm = {
//     ano_lancamento: 2000,
//     nome: "Sun"
// }

// const filmeDois = {
//     ano_lancamento: 2010,
//     nome: "Cloudy"
// }

// function filmes(obj1, obj2) {
//     const lancamento = obj1.ano_lancamento < obj2.ano_lancamento
//     const mesmoAnoLancamento = obj1.ano_lancamento === obj2.ano_lancamento
//     console.log(`O primeiro filme foi lançado antes do primeiro? ${lancamento}`)
//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAnoLancamento}`)
// }

// filmes(filmeUm, filmeDois)

// 3
function controleEstoque (fruta){
    fruta.disponibilidade = !fruta.disponibilidade
    return controleEstoque
}

controleEstoque(frutaUm)
controleEstoque(frutaDois)
controleEstoque(frutaTres)

console.log(carrinho)


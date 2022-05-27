// INTERPRETAÇÃO
// 1
// Será impresso no console em cada linha um item da array usuarios, o índice desse item e a array usuarios.

// 2
// Será impresso no console cada nome inserido na array usuarios em uma nova array.

// 3
// Será impresso no console uma nova array apenas com os objetos que os usuarios não tenha o apelido 'Chijo'.

// ESCRITA

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// 1
// a
// const nomesPets = pets.map((item, index, array) => {
//     return item.nome 
// })

// console.log(nomesPets)

// b
// const salsichas = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })

// console.log(salsichas)

// c
// const mensagens = pets.filter((item) => {
//     return item.raca === "Poodle"
// }).map((item) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} !`
// })

// console.log(mensagens)

// 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 // a

// const itens = produtos.map((item, index, array) => {
//     return item.nome 
// })

// console.log(itens)

// b

// const retornaDesconto = produtos.map((item, index, array) => {
//     return {nome: item.nome, preco: (item.preco * 0.95)} 
// })

// console.log(retornaDesconto)

// c
// const bebidas = produtos.filter((item) => {
//     return item.categoria === "Bebidas"
// })

// console.log(bebidas)

// d
// const ype = produtos.filter((item, index, array) => {
//     if (item.nome.includes("Ypê")) {
//     return item
//     }
// })

// console.log(ype)

// d
const ypeMensagem = produtos.filter((item, index, array) => {
    if (item.nome.includes("Ypê")) {
    return item
    }
}).map((item) => {
    return `Compre ${item.nome} por R$ ${item.preco}`

})

console.log(ypeMensagem)


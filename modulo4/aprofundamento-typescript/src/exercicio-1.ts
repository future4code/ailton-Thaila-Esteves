console.log('Exercicio 1')

// 1
// a
// Aparece um erro na variável minhaString

// b No typescript uma variável aceita mais de um tipo de valor se colocar ou |

// c

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string

}

// d

enum Cores {
    AZUL = 'Azul',
    VERDE = 'Verde',
    AMARELO = 'Amarelo',
    VERMELHO = 'Vermelho',
    LARANJA = 'Laranja'
}

const pessoaUm: Pessoa = {
    nome: 'Jan',
    idade: 9,
    corFavorita: Cores.AMARELO
}

const pessoaDois: Pessoa = {
    nome: 'Janik',
    idade: 19,
    corFavorita: Cores.VERMELHO
}

console.log(pessoaDois)
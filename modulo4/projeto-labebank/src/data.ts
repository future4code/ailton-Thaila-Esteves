// Validar cpf e nao permitir cpfs iguais
// Recebe a data e depois faz conta com data atual (Date.now()) e verifica >18
// saldo inicial para criar conta deve ser 0
// extrato com todos os gastos

export type Debitos = {
    valor: number,
    data: string,
    descricao: string
}

export type Client = {
    nome: string,
    cpf: string,
    dataNasc: string, 
    saldo: number, 
    extrato: Debitos[]
}

export const users: Client[] = [
{
    nome: 'Jani', 
    cpf: '37878976543',
    dataNasc: '09/03/2000', 
    saldo: 2000, 
    extrato: [ 
        {
            valor: 50,
            data: '20/07/2000',
            descricao: 'gasto com loja de hamburguer'
        },
        {
            valor: 70,
            data: '21/07/2000',
            descricao: 'gasto com padaria'
        }
    ]
},
{
    nome: 'Aliani', 
    cpf: '37878976588',
    dataNasc: '07/03/2000', 
    saldo: 3000, 
    extrato: [ 
        {
            valor: 450,
            data: '20/07/2000',
            descricao: 'gasto com loja de frango'
        },
        {
            valor: 170,
            data: '21/07/2000',
            descricao: 'gasto com bolos'
        }
    ]
},
{
    nome: 'Nilia', 
    cpf: '37878006588',
    dataNasc: '06/03/2000', 
    saldo: 7000, 
    extrato: [ 
        {
            valor: 450,
            data: '20/07/2000',
            descricao: 'gasto com loja de luzes'
        },
        {
            valor: 170,
            data: '21/07/2000',
            descricao: 'gasto com bolos de chocolate'
        }
    ]
}
]
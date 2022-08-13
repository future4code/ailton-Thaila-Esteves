// Exercícios

// 1

// function infoPessoa (nome:string, data:string):string {
//     const dias = data.split('/')
//     return `Olá me chamo ${nome}, nasci no dia ${dias[0]} do mês de ${dias[1]} do ano de ${dias[2]}`
// }

// 2

// function tipoVar (tipo:any):void {
//     const tipagem = typeof tipo
//     console.log(tipagem)
// }

// 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function catalogo (nome: string, lancamento: number, genero: GENERO):any {
    return `O filme é ${nome} e lancou em ${lancamento} do gender ${GENERO}`
}


// function sayHello(name?: string): void {
//     console.log("Hello,", name || "World")
// }

// 4

// enum SETORES {
//     MARKETING='marketing',
//     VENDAS='vendas',
//     FINANCEIRO='financeiro'
// }

// type Funcionario = {
//     nome: string,
//     salario: number,
//     setor: SETORES,
//     presencial: boolean
// }

// const workers: Funcionario[] = [
//         { nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
//         { nome: "Maria" ,salario: 1500, setor: SETORES.VENDAS, presencial: false},
//         { nome: "Salete" ,salario: 2200, setor: SETORES.FINANCEIRO, presencial: true},
//         { nome: "João" ,salario: 2800, setor: SETORES.MARKETING, presencial: false},
//         { nome: "Josué" ,salario: 5500, setor: SETORES.FINANCEIRO, presencial: true},
//         { nome: "Natalia" ,salario: 4700, setor: SETORES.VENDAS, presencial: true},
//         { nome: "Paola" ,salario: 3500, setor: SETORES.MARKETING, presencial: true }
// ]

// const marketingWorkers: Funcionario[] = workers.filter(
//     (mkt) => {
//     return mkt.setor === SETORES.MARKETING
// })

// function mktPresencial (marketingWorkers: Funcionario[]): Funcionario[] {
//     return marketingWorkers.filter(
//         (job) => {
//         return job.presencial === true
//     })
// }

// console.log(mktPresencial(marketingWorkers))
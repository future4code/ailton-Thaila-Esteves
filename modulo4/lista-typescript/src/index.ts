// Exercícios

// 1

function infoPessoa (nome:string, data:string):string {
    const dias = data.split('/')
    return `Olá me chamo ${nome}, nasci no dia ${dias[0]} do mês de ${dias[1]} do ano de ${dias[2]}`
}

// 2

// function tipoVar (tipo:any):void {
//     const tipagem = typeof tipo
//     console.log(tipagem)
// }

// 3

// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }

// function catalogo (nome: string, lancamento: number, genero: GENERO):any {
//     return `O filme é ${nome} e lancou em ${lancamento} do gender ${GENERO}`
// }

// exemplo
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

// 5
// type User = {
// 	name: string,
// 	email: string,
// 	role: string
// }

// const arrayUsers: User[] = [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

// function adminsMails (arrayUsers: User[]):string[] {
// 	const adminRole: User[] = arrayUsers.filter((usuario) => {
// 		return usuario.role === "admin" 
// 	})

// Filtrou o array com todos users e retornou array só com users designados
// Recebe array:
// [ {name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	 {name: "Carina", email: "carina@email.com", role: "admin"} 
// ]

// Pega esse aray de objetos e mapeia para devolver array de strings só com os 
// emails desses users:
// [ 'ademir@email.com', 'carina@email.com' ]

// 	return adminRole.map((usermail) => {
// 		return usermail.email
// 	})
// }

// console.log(adminsMails(arrayUsers))

// 6

// type Client = {
// 	cliente: string,
// 	saldoTotal: number,
// 	debitos: number[]
// }

// const dadosClientes: Client[] = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// const user = dadosClientes.map((cl) => {
// 	return cl.debitos
// })

// console.log(user);

// let soma = user.map((item) => {
// 	return item
// })

// console.log(soma);


// let soma = user.map((item) => {
// 	return item.reduce(function(soma, i) {
// 			return soma + i;
// 		});
// })

// let array=[1,2,3];
// let answer=array.reduce((acc,val)=>acc+val);
// console.log(answer)

// function emprestimos (dadosClientes: Client[]) {
// 	const dados = dadosClientes.map((dado) => {
// 		return dado.saldoTotal // - soma
// 	})
	
// }

// console.log(emprestimos(dadosClientes));

// var arr = [1,2,3,4,5,6,7,8,9,10];

// var soma = arr.reduce(function(soma, i) {
//     return soma + i;
// });

// console.log(soma);

// 7

// type Prod = {
// 	nome: string,
// 	quantidade: number,
// 	valorUnitario: number | string
// }

// const estoque: Prod[] = [
// 	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
// 	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
// 	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
// 	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
// 	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
// 	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
// 	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
// ]

// const ajustaPreco = (preco: number): string => {
// 	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
// 	return "R$ "+ valorAjustado
// }

// function arrumandoEstoque(estoque: Prod[]): Prod[] {
// 	const valores = estoque.map(item => {
// 		item.valorUnitario = ajustaPreco(item.valorUnitario as number)
// 		return item
// 	})

// 	const estoquePrecos = [...valores]
// 	const estoqueTotal = estoquePrecos.sort((itemUm: Prod, itemDois: Prod) => {
// 		return itemUm.quantidade - itemDois.quantidade
// 	})

// 	return estoqueTotal
// }

// console.log(arrumandoEstoque(estoque))



   
   





	

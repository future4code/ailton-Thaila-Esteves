// Exercícios

// 1

// a 

// O construtor serve para inicializar os atributos da classe e podemos chamá-lo:
// construtuctor (parametro: tipo, paramentro: tipo, parametro: tipo){
//     this.atributo = parametro
//     this.atributo = parametro
//     this.atributo = parametro
//  }

// b

  // A mensagem aparece apenas 1 vez.

  // c

  // Para acessar as propriedades privadas de uma classe precisamos criar um método

  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: AllTransactions[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       balance: number,
       transactions: AllTransactions[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.balance = balance;
       this.transactions = transactions;
    }
  
    getCpf() {
        this.cpf
    }

    getName() {
        this.name
    }
    getAge() {
        this.age
    }

    getBalance() {
        this.balance
    }

    getTransactions() {
        this.transactions
    }

  }

// 2

export class AllTransactions {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }

    getDescription() {
        this.description
    }

    getValue() {
        this.value
    }

    getDate() {
        this.date
    }
}

const transacao1 = new AllTransactions("conta de luz", 100, "2000-04-05")
const transacao2 = new AllTransactions("delivery", 50, "2000-04-08")

const user1 = new UserAccount("08977890280", "John", 18, 0, [transacao1, transacao2])
const user2 = new UserAccount("08977890210", "Geny", 19, 0, [transacao1, transacao2])

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
}

const banco = new Bank([user1, user2])

console.log(banco)






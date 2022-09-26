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
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       balance: number,
       transactions: Transaction[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.balance = balance;
       this.transactions = transactions;
    }
  
    public getCpf() {
        this.cpf
    }

    public getName() {
        this.name
    }
    
    public getAge() {
        this.age
    }

    public getBalance() {
        this.balance
    }

    public getTransactions() {
        this.transactions
    }

  }

// 2

class Transaction {
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

const transacao1 = new Transaction("conta de luz", 100, "2000-04-05")
const transacao2 = new Transaction("delivery", 50, "2000-04-08")

const transacoes: Transaction[] = [transacao1, transacao2]

const user1 = new UserAccount("08977890280", "John", 18, 0, transacoes)
const user2 = new UserAccount("08977890210", "Geny", 19, 0, [transacao1, transacao2])

const users:UserAccount[] = [user1, user2]

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    public getAccount() {
        return this.accounts
    }
}

const bank1 = new Bank(users)







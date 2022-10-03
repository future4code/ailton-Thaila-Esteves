// EXERCÍCIOS: Sistema de lojas - gerenciamento de usuários

import { Sell } from "@mui/icons-material";

// User: id, email, nome e senha

// consumidores: numero cartao e total de compras
// funcionários: salários
// vendedores: funcionários com quantidade de vendas

// 1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself():string {
       return `Olá, sou ${this.name}. Bom dia!`
      }
}

// a

// As propriedades privadas são id, email, name e password, já os métodos getId, getEmail e getName 
// são públicos, por isso conseguimos acessar o id, email e name atrelados a essa instância e não
// conseguimos acessar o password e ter acesso a senha.

const usuario = new User("001", "john@email.com", "john", "john123")

// console.log(usuario.getId())
// console.log(usuario.getEmail())
// console.log(usuario.getName())

// b

// A mensagem do construtor foi impressa apenas 1 vez

// 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
}

const consumidor = new Customer("001", "john@email.com", "john", "john123", "499328946574")

// console.log(consumidor)

// a 

// O construtor de Consumer tem a mensagem impressa apenas 1 vez

// b

// A mensagem do construtor do User foi impressa apenas 1 vez

// 3

// console.log(consumidor.getCreditCard())
// console.log(consumidor.getEmail())
// console.log(consumidor.getId())
// console.log(consumidor.getName())
// console.log(consumidor.purchaseTotal)

// A senha (password) continua sem poder ser impressa mesma nessa intância da classe Customer, pois
// essa classe segue o mesmo padrão da classe base User e portanto, password segue sendo privado.

// 4

// console.log(consumidor.introduceYourself())

// 5

// console.log(consumidor.introduceYourself())

// 6

class Employee extends User {
  constructor(
    protected admissionDate: Date,
    protected baseSalary: number,
    id: string,
    email: string,
    name: string,
    password: string
  ){
    super(id, email, name, password)
  }

  getAdmissionDate(): Date {
    return this.admissionDate
  }

  getBaseSalary(): number {
    return this.baseSalary
  }

  calculateTotalSalary():number {
    return ((this.baseSalary) + 400)
  }
}

const admissao = new Date('2000-04-01')
const empregado = new Employee(admissao, 1000, "001", "jilini@gmail.com", "jilini", "jili123")

// a

//  A mensagem do construtor da classe User foi impressa 3 vezes.

// b

// As informações que podem ser impressas são getAdmissionDate, getBaseSalary,
// getEmail, getId, getName, introduceYourself

// 7

// console.log(empregado.calculateTotalSalary())

// 8

// class Seller extends Employee {

// }

// const vendedor = new Seller(admissao, 1000, "001", "jilini@gmail.com", "jilini", "jili123")

// Class User é baseclass da Class Employee 
// Class Employee é subclass da Class User e baseclass da Class Seller
// Class Seller é subclass da Class Employee

// Quando não definimos um contrutor para subclass ela usa o construtor da baseclass

// a 

// Passamos para instância da classe Seller o mesmo que passamos para classe Employee

// b

// É possível imprimir todos os métodos (que são da classe Employee)

// 9

class Seller extends Employee {
	private salesQuantity: number = 0

	public getSalesQuantity(): number {
		return this.salesQuantity
	}

  public setSalesQuantity(quantity: number): void{
    this.salesQuantity = quantity;
  }

  public calculateTotalSalary(): number {
      return this.baseSalary + 400 + 5 * this.salesQuantity
  }
}

// Só é possível acessar o valor da propriedade salesQuantity usando o método
// getSalesQuantity, pois a propriedade salesQuantity é privada.

// 10

const vendedor = new Seller(admissao, 900, "004", "jay@gmail.com", "jay", "jay123")
vendedor.setSalesQuantity(5)
// console.log(vendedor.calculateTotalSalary())

// A subclasse consegue sobrescrever (override) um método da sua baseclass, 
// se ela tiver acesso a ele (ou seja, se for  protected ou public)

// 11

// Propriedades estáticas: são valores que não dependem da instância da classe

class EmployeeStatic extends User {
  protected admissionDate: Date
  protected baseSalary: number
  public static BENEFITS_VALUE: number = 400

  constructor(admissionDate: Date, baseSalary: number, id: string, email: string, name: string, password: string){
    super(id, email, name, password)
    this.admissionDate = admissionDate
    this.baseSalary = baseSalary
  }

  getAdmissionDate(): Date {
    return this.admissionDate
  }

  getBaseSalary(): number {
    return this.baseSalary
  }

  calculateTotalSalary():number {
    return ((this.baseSalary) + EmployeeStatic.BENEFITS_VALUE)
  }
}

const empregadostatic = new EmployeeStatic(admissao, 980, "005", "jildi@gmail.com", "jildi", "jildi123")
// console.log(empregadostatic.calculateTotalSalary())

class SellerStatic extends Employee {
	private salesQuantity: number = 0
  public static SELLING_COMMISSION: number = 5

	public getSalesQuantity(): number {
		return this.salesQuantity
	}

  public setSalesQuantity(quantity: number): void{
    this.salesQuantity = quantity;
  }

  public calculateTotalSalary(): number {
      return this.baseSalary + EmployeeStatic.BENEFITS_VALUE + SellerStatic.SELLING_COMMISSION * this.salesQuantity
  }
}

const vendedorstatic = new SellerStatic(admissao, 900, "004", "jay@gmail.com", "jay", "jay123")
vendedorstatic.setSalesQuantity(9)
console.log(vendedorstatic.calculateTotalSalary())

// EXERCÍCIOS: Sistema para auxiliar o cálculo de contas de energia elétrica para uma concessionária

// O valor base de cada kWh (unidade de consumo de energia) é R$0.75. 
// Cliente Residencial paga a tarifa cheia (ou seja, R$0.75). 
// O Cliente Comercial possui um desconto de 30% do valor total (ou seja, paga R$0.53). 
// Cliente Industrial há um desconto de 40% do valor total 
// (ou seja, paga R$0.45) mais um valor fixo de R$100,00 por máquina usada na fábrica.

// 1

export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  
  calculateBill(): number;

}

const cliente:Client = {
  name: "John",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill() {
      return 2
  }

}

// console.log(cliente.calculateBill())
// console.log(cliente.consumedEnergy)
// console.log(cliente.name)
// console.log(cliente.registrationNumber)

// Todas as propriedades foram impressas

// 2

export abstract class Place {
  constructor(protected cep: string) {}
  
  public getCep(): string {
    return this.cep;
  }
}

// a

// const place = new Place("08909089")

// Não é possível criar uma instância de uma classe abstrata.

// b

// Para podermos criar uma instância dessa classe precisariamos declarar uma classe
// subclass dela e instanciar a mesma.

// 3

// A classe Place é abstarta por conter informações em comum entre outras classes,
// e por permitir que usemos o private ou o protected para deixar restrito o 
// acesso a alguns atributos da classe Place.

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    cep: string
  ) {
    super(cep);
  }

  getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    cep: string
  ) {
    super(cep);
  }

  getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    cep: string
		) {
	    super(cep);
  }

  getMachinesQuantity(): number {
    return this.machinesQuantity
  }

}

const resicidencia = new Residence(5, "09087690")
// console.log(resicidencia.getCep())

const comerio = new Commerce(3, "09069054")
// console.log(comerio.getCep())

const industria = new Industry(9, "04959034")
// console.log(industria.getCep())

// 4

class ResidentialClient extends Residence implements Client{
  private cpf: string
  public name: string
  public registrationNumber: number
  public consumedEnergy: number
  

  constructor(cpf:string, residentsQuantity:number, cep:string, name: string, registrationNumber: number, consumedEnergy: number){
    super(residentsQuantity, cep)
    this.cpf = cpf
    this.name = name
    this.registrationNumber = registrationNumber
    this.consumedEnergy = consumedEnergy
  }

  public getCpf(): string {
    return this.cpf
  }

  public calculateBill(): number {
    return (this.consumedEnergy * 0.75)
  }
}

// Métodos: getCpf e calculateBill
// Propriedades: name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep

// 5

class CommercialClient extends Commerce implements Client{
  constructor(
    private cnpj: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string
  ){
    super(floorsQuantity, cep)
  }

  public getCnpj():string {
    return this.cnpj
  }

  public calculateBill(): number {
      return (this.consumedEnergy * 0.53)
  }
}

// a

// A classe CommercialClient tem as mesmas propriedades name, registrationNumber e
// consumedEnergy que a classe ResidentialClient, pois ambas usam a interface Client.
// Também, por as duas terem a mesma baseclass, tem os atributos floorsQuantity 
// e cep em comum. Além disso, ambas tem o método calculateBill, apenas com a taxa
// de cada um sendo diferente.

// b

// A classe CommercialClient tem a propriedade cnpj, enquanto o ResidentialClient
// tem o cpf. E, CommercialClient tem o método getCnpj e já ResidentialClient
// tem o getCpf.

// 6

class IndustrialClient extends Industry implements Client{
  constructor(
    private industryNumber: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number, 
    cep: string
  ){
    super(machinesQuantity, cep)
  }

  public getIndustryNumber():string {
    return this.industryNumber
  }

  public calculateBill(): number {
    return ((this.consumedEnergy * 0.45) + (this.machinesQuantity * 100))
}
}

// 7

// Quando uma classe implementa uma interface, ela possui o tipo dessa interface. 
// Quando uma classe extende outra classe (é subclass de outra), ela possui o tipo 
// dessa classe. Isso acontece porque uma classe tem todas as mesmas propriedades 
// e métodos de interfaces e classes base. Então, faz sentido que ela seja 
// do mesmo tipo que a baseclass ou interface.

class ClienteManager {
  private clients: Client[] = []

  public getClientsQuantity(): number {
    return this.clients.length
  }

  public registerClient(tipoCliente: Client): void {
    this.clients.push(tipoCliente)
  }

  public calculateBillOfClient(resgistrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === resgistrationNumber
    })

    if(foundClient){
      return foundClient.calculateBill()
    }

    return 0
  }
}

const novoCliente = new ClienteManager()

const residencialClient = new ResidentialClient("90349", 10, "090987", "jiji", 89, 9)
novoCliente.registerClient(residencialClient)

// 8

// Na interface Cliente temos um registrationNumber que identifica o user

class ClientManagerTotal {
  private clients: Client[] = [];

  // demais implementações

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.calculateBill();
    });
    return total;
  }

	public deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        registrationIndex = i;
      }
    }

    if (registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1);
    }
  }
}
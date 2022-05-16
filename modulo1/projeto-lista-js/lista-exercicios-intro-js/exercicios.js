// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite o valor da altura do retângulo: "))
  const largura = Number(prompt("Digite o valor da largura do retângulo: "))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtualUser = Number(prompt("Digite o ano anual: "))
  const anoNascimentoUser = Number(prompt("Digite seu ano nascimento: "))
  const diferenca = anoAtualUser - anoNascimentoUser
  console.log(diferenca)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome? ")
  const idade = prompt("Qual sua idade? ")
  const email = prompt("Qual seu email? ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita? ")
  const cor2 = prompt("Qual sua outra cor favorita? ")
  const cor3 = prompt("Qual sua outra cor favorita ? ")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringUpperCase = string.toUpperCase()
  return stringUpperCase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoTotal = custo
  const numeroIngressos = custoTotal / ingresso
  return numeroIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho = string1.length === string2.length
  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.pop()
  array.push(ultimoElemento)
  return ultimoElemento
}

// EXERCÍCIO 11

// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui
//   let primeiro = array[0]
//   let tamanho = array.length
//   let ultimoPos = (tamanho) - 1
//   let ultimo = array[ultimoPos]
//   let primeiroValor
//   primeiroValor = primeiro
//   primeiro = ultimo
//   ultimo = primeiroValor
//   console.log(array)
//   return array
// }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const s1 = string1.toUpperCase()
  const s2 = string2.toUpperCase()
  const stringsIguais = (s1 === s2)
  return stringsIguais
}

EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const ano = Number(prompt("Digite o ano atual: "))
  const anoNascimento = Number(prompt("Qual seu ano de nascimento? "))
  const anoRG = Number(prompt("Em que ano sua carteira de identidade foi emitida? "))
  const idade = ano - anoNascimento
  const carteira = ano - anoRG 
  const criterioUm = (idade <= 20) && (carteira >= 5)
  const criteiroDois = (idade > 20 && idade <= 50) && (carteira >= 10)
  const criteiroTres = (idade > 50) && (carteira >= 15)
  const renova = criterioUm || criteiroDois || criteiroTres
  console.log(renova)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui
  const multiplos400 = (anoAtual % 400) 
  const multi400 = multiplos400 === 0
  const multiplos4 = (anoAtual % 4)
  const multi4 = multiplos4 === 0
  const multiplos100 = (anoAtual % 100) === 0 
  const multiplosNaoAceitos = multiplos100 && multiplos400
  const multiplosValidos = multiplos4 - (multiplosNaoAceitos)
  const bissexto = multi400 || multiplosValidos
  return bissexto
}

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui
//   const idade = prompt("Você tem mais de 18 anos?")
//   const ensino = prompt("Você possui ensino médio completo?")
//   const horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
//   const comparar = idade === ensino === horario
//   console.log(comparar)
// }

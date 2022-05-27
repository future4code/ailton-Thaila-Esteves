/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

let arrayUsuario = []
    
let arrayComputador = []
    
if (confirm("Quer iniciar uma nova rodada?")) {
       
   let usuarioNumUm = comprarCarta()
   arrayUsuario.push(usuarioNumUm)
   let pontosUsuario = usuarioNumUm.valor
    
   let usuarioNumDois = comprarCarta()
   arrayUsuario.push(usuarioNumDois)
   pontosUsuario += usuarioNumDois.valor
    

   let computadorNumUm = comprarCarta()
   arrayComputador.push(computadorNumUm)
   let pontosComputador = computadorNumUm.valor
    
   let computadorNumDois = comprarCarta()
   arrayUsuario.push(computadorNumDois)
   pontosComputador += computadorNumDois.valor

   // desafio 8

   // if ((usuarioNumUm.texto.includes("A") & usuarioNumDois.texto.includes("A") || (computadorNumUm.texto.includes("A") && computadorNumDois.texto.includes("A")))){
   //    comprarCarta()
   // }

   // desafio 9

//    if (confirm(`Suas cartas são ${usuarioNumUm.texto} ${usuarioNumDois.texto}. A carta revelada pelo computador é ${computadorNumUm.texto}
//    \n
//    Deseja comprar mais uma carta? `)) {
   
//    // desafio 10

//    if (pontosUsuario < 21) {
//          let usuarioNovaCarta = comprarCarta()
//          arrayUsuario.push(usuarioNovaCarta)
//          pontosUsuario += usuarioNovaCarta.valor
//          let pontosNovasCartas = pontosUsuario
//          alert(`Suas cartas são ${usuarioNumUm.texto} ${usuarioNumDois.texto} ${usuarioNovaCarta.texto}. A carta revelada pelo computador é ${computadorNumUm}. 
// \n
// Deseja comprar mais uma carta?`)
//    } else if (pontosNovasCartas < 21) {
//       let usuarioNova = comprarCarta()
//       arrayUsuario.push(usuarioNova)
//       pontosNovasCartas += usuarioNova.valor
//       if (pontosUsuario > pontosComputador) {
//          alert(`Suas cartas são ${usuarioNumUm.texto} ${usuarioNumDois.texto} ${usuarioNovaCarta.texto} ${usuarioNova}. Sua pontuação é ${pontosNovasCartas}.
//          \n
//          As cartas do computador são ${computadorNumUm} ${computadorNumDois}. A pontuação do computador é ${pontosComputador}.
//          \n 
//          O usuário ganhou!`)
//       } else if (pontosUsuario < pontosComputador) {
//          alert(`Suas cartas são ${usuarioNumUm.texto} ${usuarioNumDois.texto} ${usuarioNovaCarta.texto} ${usuarioNova}. Sua pontuação é ${pontosNovasCartas}.
//          \n
//          As cartas do computador são ${computadorNumUm} ${computadorNumDois}. A pontuação do computador é ${pontosComputador}.
//          \n 
//          O computador ganhou!`)
//       } else {
//          alert(`Suas cartas são ${usuarioNumUm.texto} ${usuarioNumDois.texto} ${usuarioNovaCarta.texto} ${usuarioNova}. Sua pontuação é ${pontosNovasCartas}.
//          \n
//          As cartas do computador são ${computadorNumUm} ${computadorNumDois}. A pontuação do computador é ${pontosComputador}.
//          \n 
//          Empate!`)
//       }
//    }

//    }
// } else {
//       console.log("O jogo acabou")
}
    
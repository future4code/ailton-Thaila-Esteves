// Exercícios 

// 1

function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
}

console.log(checaTriangulo(1, 2, 3))

// 2

// function imprimeTresCoresFavoritas() {
//     const cor1:string = "Azul"
//     const cor2:string = "Verde"
//     const cor3:string = "Rosa"
//     console.log([cor1, cor2, cor3])
//  }

// imprimeTresCoresFavoritas()

// 3

// function checaAnoBissexto(ano:number):boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

// console.log(checaAnoBissexto(2000))

// 4

// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

// console.log(comparaDoisNumeros(5, 3))

// 5

// function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number):string {
//     let idade = anoAtual - anoNascimento
//     let tempoCarteira = anoAtual - anoEmissao
   
//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
//        }else {
//            return "error"
//        }
//    }

//    console.log(checaRenovacaoRG(2010, 2000, 2005))

// 6

// function compareNumbers(n1:number, n2:number):any {
//     if (n1 > n2) {
//         return [(n1 + n2), (n1 - n2), (n1 * n2), (`O maior número é: ${n1}`)]
//     } else {
//         return [(n1 + n2), (n2 - n1), (n1 * n2), (`O maior número é: ${n2}`)]
//     }
// }

// console.log(compareNumbers(4, 5))

// 7

// function reverseLetters (palavra:string) {
//     let nova:string = palavra.toUpperCase()
//     .replaceAll('A', 'U')
//     .replaceAll('T', 'A')
//     .replaceAll('C', 'X')
//     .replaceAll('G', 'C')
//     .replaceAll('X', 'G')
//     return nova
// }

// console.log(reverseLetters('ATTGCTGCGCATTAACGACGCGTA'))

// console.log(reverseLetters)
// var myArray = ['one', 'two', 'three'];
// myArray.reverse();

// console.log(myArray) // ['three', 'two', 'one']
// 8

// function reverseLetters (palavra:string):string {
//     return palavra.split("").reverse().join("");
// }
// console.log(reverseLetters("abcd"))

// 9 

// function student(age:number, graduation:string, disponibility:number, course:string) {
//     if (age >= 18 && graduation === 'sim') {
//         if (course === 'integral' && disponibility >= 40) {
//             return true
//         }
//         else if (course === 'noturno' && disponibility >= 20) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return false
//     }
// }

// console.log(student(18, 'sim', 20, 'noturno'))
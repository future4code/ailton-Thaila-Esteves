console.log('Exercicio 2');

// 2
// a 
// A função obterEstatisticas recebe números na entrada em um array e retorna o maior, menor e a média
// desses números do array na variável estatisticas

// b
// Na função obterEstatisticas ela recebe como parâmetro numeros que tipamos com number[] para mostar
// que o que ela recebe é um array de números e depois tipamos o que a função vai retornar com: 
// : {maior: number, menor: number, media: number} ou usando o type Estatistica
// Na variável numerosOrdenados tipamos com :number[] para mostar que o que ela recebe é um array 
// de números. Já a variável soma é tipada com number para só receber números. E a variável 
//  estatisticas é tipada com : Estatica para que receba no maior, menor e media um number.

// type Estatica = {
//     maior: number, 
//     menor: number, 
//     media: number
// }

// function obterEstatisticas(numeros: number[]): Estatica {

//     const numerosOrdenados:number[] = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas: Estatica = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([1, 2, 3]))

type Estatica = {
    maior: number, 
    menor: number, 
    media: number
}

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros: number[]): Estatica => {

        const numerosOrdenados:number[] = numeros.sort(
            (a, b) => a - b
        )
    
        let soma:number = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas: Estatica = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
}

console.log(amostraDeIdades)
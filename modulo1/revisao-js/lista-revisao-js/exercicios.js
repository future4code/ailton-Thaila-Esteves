// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b) {
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(function(x) {
        return x % 2 === 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novaArrayElevados = []
    for (let numero of array) {
        if (numero % 2 === 0)
            novaArrayElevados.push(numero ** 2)
    }
    return novaArrayElevados
    }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (numero of array) 
    if (numero > maior) {
        maior = numero
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2) {
        return numeros = {
            maiorNumero: num1,
            maiorDivisivelPorMenor: (num1 % num2 === 0),
            diferenca: (num1 - num2) 
        } 
    } else {
        return numeros = {
            maiorNumero: num2,
            maiorDivisivelPorMenor: (num2 % num1 === 0),
            diferenca: (num2 - num1) 
        } 
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    par = []
    for (let i = 0; par.length < n; i++) {
        if (i % 2 === 0) {
        par.push(i)
        }
    }
    return par
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayNova = array.sort(function(a, b) {
        return a - b
    })
    let novaArraySegundo = []
    novaArraySegundo.push(arrayNova[arrayNova.length - 2])
    novaArraySegundo.push(arrayNova[1])
    return novaArraySegundo

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anonimo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && (pessoa.idade > 14 || pessoa.idade < 60)
    })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas = pessoas.filter((pessoa, indice, array) => {
        return pessoa.altura < 1.5 && (pessoa.idade <= 14 || pessoa.idade >= 60)
    })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i=0; i < contas.length; i++) {
        let saldoSoma = saldoSoma + contas[i].saldo

        for (let a=0; a < contas[i].compras.length; a++) {
            let soma = soma + contas[i].compras[a]
            let somaTotal = saldoSoma - soma
            return somaTotal
        }
}
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
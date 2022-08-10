// 2

var colors = require('colors/safe')

const firstNumber = Number(process.argv[2])
const secondNumber = Number(process.argv[3])

const third = process.argv[4]

if (firstNumber === undefined || secondNumber === undefined || third === undefined) {
    console.log(colors.green("Não foi possível, confira se colocou todos os parâmetros corretamente."))
} else {
    switch(third){
        case "soma":
            console.log(colors.yellow(firstNumber + secondNumber))
            break;
        case "subtrai":
            console.log(colors.yellow(firstNumber - secondNumber))
            break;
        case "multiplica":
            console.log(colors.yellow(firstNumber * secondNumber))
            break;
        case "divide":
            console.log(colors.yellow(firstNumber / secondNumber))
            break;
        default:
            console.log(colors.red("Não encontrado a conta, tente outra vez"))
        }
}


import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users } from './data'

const app: Express = express()

app.use(express.json())
app.use(cors())

// CRIAR CONTA 

app.post("/users/create", (request: Request, response: Response) => {
    try {
        const { nome, cpf, dataNasc } = request.body

        if (!nome || !cpf || !dataNasc ) {
            response.statusCode = 400
            throw new Error("Dados inválidos")
        }

        if (nome || cpf || dataNasc !== "string") {
            response.statusCode = 400
            throw new Error("Os dados devem ser do tipo string")
        } 

        const dataAtualTimestamp: number = new Date().getTime()
        const [diaNasc, mesNasc, anoNasc] = dataNasc.split("/")
        const anoNascTimestamp: number = new Date(
          `${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
        ).getTime();
        const idade: number = dataAtualTimestamp - anoNascTimestamp
        const umAnoEmTimestamp: number = 31556926000

        if (idade < 18 * umAnoEmTimestamp) {
          response.statusCode = 406
          throw new Error("Para criar uma conta é preciso ter mais de 18 anos")
        } 

        users.forEach(user => {
            if (user.cpf === cpf) {
                response.statusCode = 409
                throw new Error("Cpf já cadastrado")
            }
        })

        const newUser = {
            nome,
            cpf,
            dataNasc,
            saldo: 0,
            extrato: []
        }

        users.push(newUser)

        response.status(200).send(users)

    } catch (error: any) {
        response.status(response.statusCode || 500).send({message: error.message})
    }
})

// RETORNA USERS

app.get("/users/userslist", (request: Request, response: Response) => {
    try {
        if (!users.length) {
            response.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        response.status(200).send(users)
    } catch (error: any) {
        response.status(400).send(error.message)
    }
})

// RETORNA SALDO USER

app.get("/users/:cpf/balance", (request: Request, response: Response) => {
    try {
        const cpf = request.params.cpf

        const user = users.find(client => client.cpf === cpf)

        if (!user) {
            response.statusCode = 404
            throw new Error("Cpf não encontrado")
        }

        response.status(200).send(user)
    } catch (error: any) {
        response.status(400).send(error.message)
    }
})

// ADICIONA SALDO

app.put("/users/:cpf/:nome/deposit", (request: Request, response: Response) => {
    try {
        const { valor } = request.body
        const { cpf, nome } = request.params

        if (!cpf || !nome || !valor) {
            response.statusCode = 400
            throw new Error("not possible to update, wrong data")
        } 
        const userClient = users.findIndex(client => client.cpf === cpf && client.nome.toLowerCase() === nome.toLowerCase())

        if (userClient < 0) {
            response.statusCode = 404
            throw new Error("not found")
        } 

       users[userClient].extrato.push(valor)

        response.status(200).send('yes')
    } catch (error: any) {
        response.status(400).send(error.message)
    }
})

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`)
})

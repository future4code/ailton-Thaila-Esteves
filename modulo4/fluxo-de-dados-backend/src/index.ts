import express from "express"
import cors from "cors"
import { Produto, listaProdutos } from "./data"

const app = express();
app.use(cors());
app.use(express.json());

// 1

// Teste

app.get("/test", (request, response) => {
    try {
        response.status(200).send('Teste: servidor está funcionando')
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// 3

// Criar novo produto

app.post("/criarProduto", (request, response) => {
    try {
        const { name, price } = request.body
        if(!name || !price){
            response.statusCode = 422
            throw new Error(`Não é possível enviar valores vazios ou faltando o name e o price do produto!!!`)
        }
        if(typeof name !== "string" || typeof price !== "number"){
            response.statusCode = 422
            throw new Error(`Não é possível enviar, o name deve ser uma string e o price um number!!!`)
        }
        if(price <= 0){
            response.statusCode = 422
            throw new Error(`Não é possível enviar, o price deve ter um valor maior do que 0!!!`)
        }
        const novoProduto: Produto = {
            id: `${listaProdutos.length + 1}`,
            name: name,
            price: price
        }

        listaProdutos.push(novoProduto)

        response.send(listaProdutos)

    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// 4

// Retornar todos produtos

app.get("/retornaProdutos", (request, response) => {
    try {
        response.status(200).send(listaProdutos)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// 5

// Editar preço do produto

app.put("/editarPrecoProduto/:id", (request, response) => {
    try {
        const { price } = request.body
        const id = request.params.id

        if(!price){
            response.statusCode = 422
            throw new Error(`Não é possível enviar vazios sem informar o price`)
        }
        if(typeof price !== "number"){
            response.statusCode = 422
            throw new Error(`Não é possível enviar, o name deve ser uma string e o price um number!!!`)
        }
        if(price <= 0){
            response.statusCode = 422
            throw new Error(`Não é possível enviar, o price deve ter um valor maior do que 0!!!`)
        }

        const acharProduto = listaProdutos.findIndex((prod) => {
            return prod.id === id
        })

        listaProdutos[acharProduto].price = price

        response.send(listaProdutos)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// 6

// Deletar produto

app.delete("/deletarProduto/:id", (request, response) => {
    try {
        const id = request.params.id

        const novaLista = listaProdutos.filter((list) => {
            return list.id !== id
        })
       
        response.send(novaLista)

    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3003")
})
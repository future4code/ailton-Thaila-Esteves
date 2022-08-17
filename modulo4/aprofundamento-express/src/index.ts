import express from "express"
import cors from "cors"
import { Afazeres, listaAfazeres } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

// 1
app.get("/ping", (request, response) => {
    response.send('Pong! 🏓')
})

// 4

// Afazeres Feitos

app.get("/retornaAfazeresFeitos", (request, response) => {

    const tarefas:Afazeres [] = listaAfazeres.filter((tarefa) => {
        return tarefa.completed === true
    })
    response.send(tarefas)
})

// Afazeres

app.get("/retornaAfazeres", (request, response) => {

    const tarefas:Afazeres [] = listaAfazeres.filter((tarefa) => {
        return tarefa.completed === false
    })
    response.send(tarefas)
})

// 5 

// Criar novo afazer

app.post("/criarAfazer", (request, response) => {

    const { userId, title, id } = request.body

    const novoAfazer: Afazeres = {
        userId,
        id,
        title,
        completed: false
    }

    listaAfazeres.push(novoAfazer)
    response.send(listaAfazeres)
})

// 6

// Trocar status do Afazer

app.put("/alteraStatusAfazer/:id", (request, response) => {

    const id = Number(request.params.id)

    const tarefas = listaAfazeres.map((tarefa) => {
      if (tarefa.id === id) {
        return [...listaAfazeres, tarefa.completed = !tarefa.completed]
      }
    })

    response.send(tarefas)
})

// 7 

// Deletar afazer

app.delete("/removerAfazer/:id", (request, response) => {

    const id = Number(request.params.id)

    const tarefas:Afazeres [] = listaAfazeres.filter((tarefa) => {
            return tarefa.id !== id
    })
    response.send(tarefas)
})

// 8

// Afazeres user

app.get("/afazeres/:userId", (request, response) => {

    const userId = Number(request.params.userId)

    const tarefas:Afazeres [] = listaAfazeres.filter((tarefa) => {
            return tarefa.userId === userId
    })
    response.send(tarefas)
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
    
})





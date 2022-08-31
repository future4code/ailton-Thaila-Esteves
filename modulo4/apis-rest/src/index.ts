import { users, User, TYPES } from './data';
import express, {Request, Response} from "express";
import cors from "cors";
import { Search } from '@mui/icons-material';

const app = express();

app.use(express.json());
app.use(cors());

// 1

// a 
// Deve ser utilizado o método get

// b
// Indicaria com "/users"

// Retorna todos usuários

app.get("/users", (request: Request, response: Response) => {
    try {
      let type = request.query.type as string
      let search = request.query.search as string

      if (type) {
        type = type.toUpperCase()

        if (type in TYPES) {
          const result = users.filter(user => user.type === type)
          return response.status(200).send(result)
        }

        throw new Error("Tipo inválido")
      } 
    
    if (search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )

      console.log(result, search)

      if (result.length === 0) {
        return response.status(204).send("Usuário não encontrado")
      }

      return response.status(200).send(result)
    }

    response.status(200).send(users)

    } catch (error: any) {
        response.status(400).send({ message: error.message });
    }
})

// 2

// Fazer a busca por type

// a
// Os parâmetros foram passados por path params

// b
// Para validar os tipos: !(type in TYPES)

app.get("/users/:type", (request: Request, response: Response) => {
    try {
      const type = request.params.type 

      if(!(type in TYPES)) {
        response.statusCode = 422
        throw new Error("O tipo deve ser ADMIN ou NORMAL")
      }

      const userType: User [] = users.filter((user) => {
        return user.type === type
      })

      response.status(200).send(userType)
  
    } catch (error: any) {
      response.status(response.statusCode || 500).send({message: error.message})
    }
})

// 3

// Busca usuário por nome

// a
// Pode ser enviado por query or path params

app.get("/users", (request: Request, response: Response) => {
    try {
      const name: string = request.query.name as string
  
      const user = users.find((user) => user.name === name)
  
      if(!user) {
        response.statusCode = 404
        throw new Error (`O usuário ${name} não foi encontrado`)
      }
  
      response.status(200).send(user)
  
    } catch (error: any) {
      response.status(response.statusCode || 500).send({message: error.message})
    }
})

// 4 

// Criar usuário: método POST

app.post("/users", (request: Request, response: Response) => {
    try {
      const {name, email, age} = request.body
      let type = request.body.type as string
  
      if (!name || !email || !age || !type) {
        response.statusCode = 422
        throw new Error ("Devem ser adicionadas todas as informações para criar um novo usuário")
      }

      if(typeof name !== "string") {
        response.statusCode = 422
        throw new Error("O nome deve ser do tipo string")
      }

      if(typeof email !== "string") {
        response.statusCode = 422
        throw new Error("O email deve ser do tipo string")
      }

      if(typeof age !== "number") {
        response.statusCode = 422
        throw new Error("A idade deve ser do tipo number")
      }

    type = type.toUpperCase()
      if(!(type in TYPES)) {
        response.statusCode = 422
        throw new Error("O tipo deve ser ADMIN ou NORMAL")
      }

      users.forEach(user => {
        if (user.email === email) {
            response.statusCode = 409
            throw new Error("E-mail já cadastrado")
        }
      })

      const user: User = {
        id: (users.length + 1),
        name,
        email,
        age,
        type: type === TYPES.NORMAL
          ? TYPES.NORMAL
          : TYPES.ADMIN
      }
  
      users.push(user)
  
      response.status(200).send({user: users})
  
    } catch (error: any) {
      response.status(response.statusCode || 500).send({message: error.message})
    }
})

// Criar usuário: método PUT

// a

// Não muda nada, pois o método put também permite criar um novo usuário

// b

// O método put também permite criar usuários

app.put("/users", (request: Request, response: Response) => {
    try {
      const {name, email, type, age} = request.body
  
      if (!name || !email || !type || !age) {
        response.statusCode = 422
        throw new Error ("Devem ser adicionadas todas as informações para criar um novo usuário")
      }

      if(typeof name !== "string") {
        response.statusCode = 422
        throw new Error("O nome deve ser do tipo string")
      }

      if(typeof email !== "string") {
        response.statusCode = 422
        throw new Error("O email deve ser do tipo string")
      }

      if(typeof age !== "number") {
        response.statusCode = 422
        throw new Error("A idade deve ser do tipo number")
      }

      if(type in TYPES) {
        response.statusCode = 422
        throw new Error("O tipo deve ser ADMIN ou NORMAL")
      }

      users.forEach(user => {
        if (user.email === email) {
            response.statusCode = 422
            throw new Error("E-mail já cadastrado")
        }
      })

      const user: User = {
        id: (users.length + 1),
        name,
        email,
        type,
        age
      }
  
      users.push(user)
  
      response.status(200).send(users)
  
    } catch (error: any) {
      response.status(response.statusCode || 500).send({message: error.message})
    }
})

// 5

app.put("/users/:id", (request: Request, response: Response) => {
    try {
        const id = Number(request.params.id)

        const {name} = request.body

        if(isNaN(id)) {
            response.statusCode = 422
            throw new Error("O id precisa ser do tipo id")
        }

        const acharUser = users.findIndex((user) => user.id === id)

        users[acharUser].name = name

        response.status(200).send(users[acharUser])
        
    } catch (error: any) {
        response.status(response.statusCode || 500).send({message: error.message})
    }
})

// 6

app.patch("/users/:id", (request: Request, response: Response) => {
    try {
        const id = Number(request.params.id)

        const {name} = request.body

        if(isNaN(id)) {
            response.statusCode = 422
            throw new Error("O id precisa ser do tipo id")
        }

        const acharUser = users.findIndex((user) => user.id === id)

        users[acharUser].name = name

        response.status(200).send(users[acharUser])
        
    } catch (error: any) {
        response.status(response.statusCode || 500).send({message: error.message})
    }
})

// 7

app.delete("/users/:id", (request: Request, response: Response) => {
    try {
        const id = Number(request.params.id)

        const {name} = request.body

        if(isNaN(id)) {
            response.statusCode = 422
            throw new Error("O id precisa ser do tipo id")
        }

        const listaUsers = users.filter((user) => {
            return user.id !== id
        })

        response.status(200).send(listaUsers)
        
    } catch (error: any) {
        response.status(response.statusCode || 500).send({message: error.message})
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
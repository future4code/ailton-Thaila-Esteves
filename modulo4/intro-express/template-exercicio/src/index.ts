import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// 1

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

// 2

type Users = {
    userId: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

// 3

let usersList: Users[] = [
    {
        userId: 1,
        name: 'Jay',
        phone: 5511998786798,
        email: 'jay@gmail.com',
        website: 'jay.com'
    },
    {
        userId: 2,
        name: 'Helder',
        phone: 5511998787498,
        email: 'helder@gmail.com',
        website: 'helder.com'
    },
    {
        userId: 3,
        name: 'Line',
        phone: 5511994386798,
        email: 'line@gmail.com',
        website: 'line.com'
    }
]

// 4

app.get("/users", (request, response) => {          
    response.send(usersList)
})

// 5

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// 6

// Array de posts fora do array de users para não misturar as informações

const postsList: Post[] = [
    {
        id: 1,
        title: 'Post Um',
        body: 'Colocando um post: post um',
        userId: 1
    },
    {
        id: 2,
        title: 'Post Dois',
        body: 'Colocando um post: post dois',
        userId: 2
    },
    {
        id: 3,
        title: 'Post Tres',
        body: 'Colocando um post: post tres',
        userId: 3
    }
]

// 7

app.get("/posts", (request, response) => {          
    response.send(postsList)
})

// 8

// app.get("/posts/:userId", (request, response) => {
//     const userId = Number(request.params.userId)

//     const acharUser = postsList.filter((postsList) => {
//         return postsList.userId.includes(userId)
//     })

//     response.send(postsList)
// })

// 9

// app.delete("/posts/:id", (request, response) => {
//     const id = Number(request.params.id)

//     const acharUser = postsList.findIndex((postsList) => {
//         return postsList.id === id
//     })

//     postsList.splice(acharUser, 1)
    
//     response.send(postsList)
// })

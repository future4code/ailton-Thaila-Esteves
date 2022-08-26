import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exemplos RAW

// Chamada fora de um endpoint

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
	return result[0][0]
};

// Chamada dentro de um endpoint 

app.get("/actor/:id", async (request, response) => {
  try {
    const id = request.params.id

    const actor = await connection.raw(`SELECT * FROM Actor WHERE id = ${id}`)

    response.status(200).send(actor[0][0])

  } catch (error: any) {
    response.status(400).send({
      message: error.message
    })
  }
}) 

// 1 

// b 

// Função que busque um ator pelo nome

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
	return result
};

// c

// Função que receba um gender retorne a quantidade de itens na tabela Actor 
// com esse gender

const getActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as counts FROM Actor WHERE gender = '${gender}'
    `);
    const count = result[0][0].counts;
    return count;
};

// Exemplos de QUERY BUILDER

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

// 2

// a

// Função que receba um salário e um id e realiza a atualização do salário do ator

// Exemplo de raw
// const updateActor = async (salary: number, id: string): Promise<any> => {
//   const result = await connection.raw(`
//   UPDATE Actor SET salary = ${salary} WHERE id = "${id}"
//   `);
//   const count = result[0][0].count;
//   return count;
// };

const updateActorsSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
  .update({
    salary: salary,
  })
  .where("id", id);
};

// b

//  Função que receba um id e delete um ator da tabela

const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor")
  .delete()
  .where("id", id);
};

// c

//  Função que receba um gender e devolva a média dos salários desse gender

const avgActorsSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
  .avg("salary as average")
  .where({gender});
  return result[0].average;
};

// 3

// Criando endpoints

// Chamada fora de um endpoint

// a

// Criar um método GET que receba como path param o id do ator cujas informações 
// queremos pegar

// Exemplo

// app.get("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const actor = await getActorById(id);

//     res.status(200).send(actor)
//   } catch (err: any) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });

app.get("/actor/:id", async (request, response) => {
  try {
    const id = request.params.id

    const actor = await connection.raw(`SELECT * FROM Actor WHERE id = ${id}`)

    response.status(200).send(actor[0][0])

  } catch (error: any) {
    response.status(400).send({
      message: error.message
    })
  }
}) 

// b 

app.get("/actor", async (request, response) => {
  try {

    const gender = request.query.gender as string

    const count = await getActorsByGender(gender);

    response.status(200).send({quantity: count})
  } catch (error: any) {
    response.status(400).send({
      message: error.message,
    });
  }
});

// 4

// Exemplo Criar Novo Ator

app.post("/actor", async (request, response) => {
  try {
    await createActor(
      request.body.id,
      request.body.name,
      request.body.salary,
      new Date(request.body.dateOfBirth),
      request.body.gender
    );

    response.status(200).send({
      message: "Sucess",
    });
  } catch (error: any) {
    response.status(400).send({
      message: error.message,
    });
  }
});

// Teste de retornar todos os atores

app.get("/actors", async (request, response) => {
  try {

    const actor = await connection.raw(`SELECT * FROM Actor`)

    response.status(200).send(actor[0])

  } catch (error: any) {
    response.status(400).send({
      message: error.message
    })
  }
}) 

// a

// Atualizar salário com id

app.put("/actor", async (request, response) => {
  try {

    await updateActorsSalary(request.body.id, request.body.salary);

    response.status(200).send({
      message: "Sucess",
    });
  } catch (error: any) {
    response.status(400).send({
      message: error.message,
    });
  }
});

// b

// Deletar ator da tabela 

app.delete("/actor/:id", async (request, response) => {
  try {

    await deleteActor(request.params.id);

    response.status(200).send({
      message: "Sucess",
    });
  } catch (error: any) {
    response.status(400).send({
      message: error.message,
    });
  }
});

// 5

// Criar filme

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  release_Date: Date,
  playing_limit_date: Date
): Promise<void> => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      release_Date: release_Date,
      playing_limit_date: playing_limit_date,
    })
    .into("Movie");
};

app.post("/movie", async (request, response) => {
  try {
    await createMovie(
      request.body.id,
      request.body.title,
      request.body.synopsis,
      request.body.release_Date,
      request.body.playing_limit_date
    );

    response.status(200).send({
      message: "Sucess",
    });
  } catch (error: any) {
    response.status(400).send({
      message: error.message,
    });
  }
});

// 6

app.get("/movie/all", async (request, response) => {
  try {

    const actor = await connection.raw(`SELECT * FROM Movie LIMIT 15`)

    response.status(200).send(actor[0])

  } catch (error: any) {
    response.status(400).send({
      message: error.message
    })
  }
}) 

// 7

const getMovieByQuery = async (query: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie WHERE title LIKE "%${query}%" OR synopsis LIKE "%${query}%"
  `)
	return result[0]
};

app.get("/movie/search", async (request, response) => {
  try {
    const movies = await getMovieByQuery(request.query.query as string);

    response.status(200).send({
      movies: movies,
    });
  } catch (error: any) {
    response.status(400).send({
      message: error.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
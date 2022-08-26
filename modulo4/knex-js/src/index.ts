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

// RAW

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
	return result
};

// QUERY BUILDERS

const getActorByName2 = async (name: string): Promise<any> => {
  const result = await connection("Actor")
  .select("*")
};


const getActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count_actors FROM Actor WHERE gender = '${gender}'
    `);
    const count = result[0][0].count;
    return result;
};

app.get("/actor/:id", async (request, response) => {
  try {
    const id = request.params.id

    const actor = await connection.raw(`SELECT * FROM Actor WHERE id = ${id}`)
    response.status(200).send(actor[0][0])

    response.end()
  } catch (error: any) {
		console.log(error.message)
    response.status(500).send("Unexpected error")
  }
}) 

app.get("/actor?gender", async (request, response) => {
  try {
    const gender = request.query.gender

    const actorsGender = await connection.raw(`SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`)
    response.status(200).send(actorsGender[0])  

    response.end()
  } catch (error: any) {
		console.log(error.message)
    response.status(500).send("Unexpected error")
  }
}) 

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
import express from 'express';
import cors from 'cors';
import knex from "knex";
import dotenv from "dotenv";
import createNewUser from './endpoints/createUser';

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", createNewUser)
       

app.listen(process.env.PORT || 3003, () => {
    console.log("Server is running in http://localhost:3003")
})
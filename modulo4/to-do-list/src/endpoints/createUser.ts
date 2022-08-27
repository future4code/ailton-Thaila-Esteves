import { Request, Response } from "express";
import { newUserType, User } from '../types/userTypes';
import { connection } from '../index';
import createUserData from '../data/createUserData';

export default async function createUser(request: Request, response: Response) {
    try {
        const { nome, nickname, email }: User = request.body

        if(!nome || !nickname || !email) {
            throw new Error("Campos vazios")
        }

        const userDouble = await connection.select('*').from('User').where({email})

        if(userDouble.length) {
            throw new Error (`User ${nome} já cadastrado`)
        }

        const id:string = Date.now() + Math.random().toString()

        const userInsert: newUserType = {
            id,
            nome,
            nickname,
            email
        }

        await createUserData(userInsert)

        response.status(200).send({message: "Usuário criado!"})
    } catch (error: any) {
        response.status(400).send({message: error.message})
    }
}
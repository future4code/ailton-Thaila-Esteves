import { Request, Response } from "express";
import connection from "../connection";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        
    const { name, email, password } = req.body
    
    if (!name || !email || !password) {
        res.statusCode = 400
        throw new Error("Não podem ser enviados valores vazios")
    }

    await connection("character")
        .insert({
            id: Date.now().toString(),
            name, 
            email, 
            password
        })
    
    res.status(201).send("User criado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.post)
    }
}
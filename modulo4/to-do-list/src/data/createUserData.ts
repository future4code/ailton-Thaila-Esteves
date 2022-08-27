import { connection } from './../index';
import { newUserType } from './../types/userTypes';

export default async function createUserData(user: newUserType): Promise<void> {
    const { id, nome, nickname, email } = user

    await connection.insert({
        id,
        nome,
        nickname,
        email
    }).into('User')
}
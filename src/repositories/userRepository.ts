import client from "../databases/prisma";

export interface IUser {
    id: number,
    email: string,
    password: string
}

export async function findByEmail(email: string) {
    return await client.users.findUnique({
        where: {
            email
        }
    });
}

export async function insert(newUser: Omit<IUser, "id">) {
    const { email, password } = newUser

    await client.users.create({
        data: {
            email,
            password
        }
    });
}
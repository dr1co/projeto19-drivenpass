import client from '../databases/prisma';

export interface ICredentials {
    id: number,
    title: string,
    url: string,
    username: string,
    password: string,
    userId: number
}

export async function insert(credentials: Omit<ICredentials, "id">) {
    const { title, url, username, password, userId } = credentials;

    await client.credentials.create({
        data: {
            title,
            url,
            username,
            password,
            userId
        }
    });
}

export async function getAll(userId: number) {
    return await client.credentials.findMany({
        where: {
            userId
        },
        select : {
            id: true,
            title: true,
            url: true,
            username: true,
            password: true
        }
    });
}

export async function deleteOne(id: number) {
    await client.credentials.delete({
        where: {
            id
        }
    });
}
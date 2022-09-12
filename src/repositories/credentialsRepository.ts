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
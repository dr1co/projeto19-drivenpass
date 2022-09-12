import client from '../databases/prisma';

export interface IWifi {
    id: number,
    title: string,
    name: string,
    password: string,
    userId: number
}

export async function insert(wifi: Omit<IWifi, "id">) {
    const { title, name, password, userId } = wifi;

    await client.wifis.create({
        data: {
            title,
            name,
            password,
            userId
        }
    });
}
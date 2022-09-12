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

export async function getAll(userId: number) {
    return await client.wifis.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            name: true,
            password: true
        }
    });
}

export async function deleteOne(id: number) {
    await client.wifis.delete({
        where: {
            id
        }
    });
}
import client from '../databases/prisma';

export interface ICard {
    id: number,
    title: string,
    number: string,
    securityCode: string,
    expirationDate: string,
    password: string,
    isVirtual: boolean,
    type: 'CREDIT' | 'DEBIT' | 'DUAL',
    userId: number
}

export async function insert(card: Omit<ICard, "id">) {
    const { title, number, securityCode, expirationDate, password, isVirtual, type, userId } = card;

    await client.cards.create({
        data: {
            title,
            number,
            securityCode,
            expirationDate,
            password,
            isVirtual,
            type,
            userId
        }
    });
}

export async function getAll(userId: number) {
    return await client.cards.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            number: true,
            securityCode: true,
            expirationDate: true,
            password: true,
            isVirtual: true,
            type: true
        }
    });
}

export async function deleteOne(id: number) {
    await client.cards.delete({
        where: {
            id
        }
    });
}
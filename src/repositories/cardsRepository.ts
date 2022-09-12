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
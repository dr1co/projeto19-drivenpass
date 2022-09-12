import client from "../databases/prisma";

export interface INote {
    id: number,
    title: string,
    note: string,
    userId: number
}

export async function insert(noteObject: Omit<INote, "id">) {
    const { title, note, userId } = noteObject;

    await client.notes.create({
        data: {
            title,
            note,
            userId
        }
    });
}

export async function getAll(userId: number) {
    return await client.notes.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            note: true
        }
    });
}

export async function deleteOne(id: number) {
    await client.notes.delete({
        where: {
            id
        }
    });
}
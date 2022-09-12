import * as notesRepository from '../repositories/notesRepository';

export async function addNew(note: Omit<notesRepository.INote, "id">) {
    try {
        await notesRepository.insert(note);
    } catch (err: Error | any) {
        if (err.code === "P2002") {
            throw { code: "TitleCreated", message: "Error: you already created credentials with this title" };
        }
        throw { code: "ServerProblem", message: err };
    }
}
import * as encryption from './encryptionServices';
import * as cardsRepository from '../repositories/cardsRepository';

export async function addNew(card: Omit<cardsRepository.ICard, "id">) {
    const encryptedSecCode = encryption.encrypt(card.securityCode);
    const encryptedPassword = encryption.encrypt(card.password);

    try {
        console.log({ ...card, securityCode: encryptedSecCode, password: encryptedPassword });
        await cardsRepository.insert({ ...card, securityCode: encryptedSecCode, password: encryptedPassword });
    } catch (err: Error | any) {
        if (err.code === "P2002") {
            throw { code: "TitleCreated", message: "Error: you already created a card with this title" };
        }
        throw { code: "ServerProblem", message: err };
    }
}
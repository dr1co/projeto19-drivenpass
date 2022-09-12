import * as credentialsRepository from '../repositories/credentialsRepository';
import * as encryption from './encryptionServices';

export async function addNew(credentials: Omit<credentialsRepository.ICredentials, "id">) {
    const encryptedPassword = encryption.encrypt(credentials.password)

    try {
        await credentialsRepository.insert({...credentials, password: encryptedPassword });
    } catch (err: Error | any) {
        if (err.code === "P2002") {
            throw { code: "TitleCreated", message: "Error: you already created credentials with this title" };
        }
        throw { code: "ServerProblem", message: err };
    }
}
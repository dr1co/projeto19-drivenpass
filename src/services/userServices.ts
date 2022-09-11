import * as userRepository from '../repositories/userRepository';
import * as encryption from './encryptionServices';

export async function addNew(user: Omit<userRepository.IUser, "id">) {
    try {
        const findUser = await userRepository.findByEmail(user.email);

        if (findUser) {
            throw { code: "RegisteredUser", message: "Error: user already registered" }
        }

        const newPassword = encryption.oneWayEncrypt(user.password);

        await userRepository.insert({ ...user, password: newPassword });
    } catch (err: Error | any) {
        if (err.code) {
            throw err
        } else {
            throw { code: "ServerProblem", message: err }
        }
    }
}
import * as encryption from './encryptionServices';
import * as wifiRepository from '../repositories/wifiRepository';

export async function addNew(wifi: Omit<wifiRepository.IWifi, "id">) {
    const encryptedPassword = encryption.encrypt(wifi.password);

    try {
        await wifiRepository.insert({ ...wifi, password: encryptedPassword });
    } catch (err: Error | any) {
        throw { code: "ServerProblem", message: err };
    }
}

export async function getAll(userId: number) {
    try {
        const wifis = await wifiRepository.getAll(userId);

        return wifis.map((wifi) => {
            return { ...wifi, password: encryption.decrypt(wifi.password)};
        });
    } catch (err: Error | any) {
        throw { code: "ServerProblem", message: err };
    }
}
import bcrypt from 'bcrypt';
import Cryptr from 'cryptr';

const cryptr = new Cryptr('drivenpass');

export function oneWayEncrypt(string: string) {
    return bcrypt.hashSync(string, 10);
}

export function validateOneWay(string: string, comparator: string) {
    return bcrypt.compareSync(string, comparator);
}

export function encrypt(string: string) {
    return cryptr.encrypt(string);
}

export function decrypt(string: string) {
    return cryptr.decrypt(string);
}
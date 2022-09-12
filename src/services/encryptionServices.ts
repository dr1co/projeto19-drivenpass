import bcrypt from 'bcrypt';

export function oneWayEncrypt(string: string) {
    return bcrypt.hashSync(string, 10);
}

export function validateOneWay(string: string, comparator: string) {
    return bcrypt.compareSync(string, comparator);
}
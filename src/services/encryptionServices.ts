import bcrypt from 'bcrypt';

export function oneWayEncrypt(string: string) {
    return bcrypt.hashSync(string, 10);
}
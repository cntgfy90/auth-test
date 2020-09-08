import bcrypt from 'bcrypt';
import { IPasswordHasher } from './types';

export class BcryptPasswordHasher implements IPasswordHasher {

    hash(password: string, salt: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }

                resolve(hash);
            });
        });
    }

    compare(password: string, hash: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            bcrypt.compare(password, hash, (err, isValid) => {
                if (err) {
                    reject(err);
                }

                resolve(isValid);
            });
        });
    }
    
}
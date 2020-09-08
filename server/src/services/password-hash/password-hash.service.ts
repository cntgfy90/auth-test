import { IPasswordHasher } from './types'

export class PasswordHashService {
    constructor(private readonly hasher: IPasswordHasher) {}

    hash(password: string, salt: number): Promise<string> {
        return this.hasher.hash(password, salt)
    }

    compare(password: string, hash: string): Promise<boolean> {
        return this.hasher.compare(password, hash);
    }
}

import jwt from 'jsonwebtoken';

interface IAuthServiceOptions {
    expiresIn: string;
}

type IAuthSignPayload = string | Record<string, unknown>;

export class AuthService {
    private jwtSecretKey: string;
    private options: IAuthServiceOptions;

    constructor(jwtSecretKey: string, options: IAuthServiceOptions) {
        this.jwtSecretKey = jwtSecretKey;
        this.options = options;
    }

    sign(payload: IAuthSignPayload): string {
        return jwt.sign(payload, this.jwtSecretKey, this.options);
    }
}
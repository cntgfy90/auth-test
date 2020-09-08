import jwt from 'jsonwebtoken';
import config from '../config/config';
import { Request, Response, NextFunction } from 'express';

export const jwtCheck = (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearerHeader = req.headers.authorization;

        if (bearerHeader) {
            const bearer = bearerHeader.split(' ');
            const token = bearer[1];
            jwt.verify(token, config.jwt.secretKey as string);
            next();
        } else {
            throw new Error('Auth failed');
        }
    } catch (e) {
        return res.status(401).json({ message: e.message });
    }
};
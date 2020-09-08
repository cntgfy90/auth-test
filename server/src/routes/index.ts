import express from 'express';
import authRouter from './auth';

export default () => {
    const router = express.Router();

    router.use('/auth', authRouter());
    
    return router;
}

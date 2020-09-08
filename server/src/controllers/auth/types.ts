import { Request, Response } from 'express'

export interface IAuthController {
    register(req: Request, res: Response): Promise<Response>;
    login(req: Request, res: Response): Promise<Response>;
    check(req: Request, res: Response): Response;
}

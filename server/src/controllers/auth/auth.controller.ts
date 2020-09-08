import { Request, Response } from 'express'
import { IAuthController } from './types';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth';
import { PasswordHashService } from '../../services/password-hash/password-hash.service';

interface IAuthControllerProviders {
    userService: UserService;
    passwordHashService: PasswordHashService;
    authService: AuthService,
}


export class AuthController implements IAuthController {
    private userService: UserService;
    private passwordHashService: PasswordHashService;
    private authService: AuthService;

    constructor(private readonly providers: IAuthControllerProviders) {
        this.userService = providers.userService;
        this.passwordHashService = providers.passwordHashService;
        this.authService = providers.authService;
    }

    async register(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;

            const conflictUser = await this.userService.findOne({ email });

            if (conflictUser) {
                return res.status(409).json({ message: 'User with such email is already registered' });
            }

            const hashPassword = await this.passwordHashService.hash(password, 10);
            
            const newUser = this.userService.create({
                email,
                password: hashPassword,
            });
    
            await this.userService.save(newUser);

            const {password: _, ...userInfo} = newUser;
            return res.status(201).json(userInfo);
        } catch (e) {
            return res.status(e.status || 500).json({ message: e.message });
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;

            const user = await this.userService.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: 'User with such email does not exist' });
            }

            const isValidPassword = await this.passwordHashService.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({ message: 'Password is incorrect' });
            }

            const token = this.authService.sign({ email });

            return res.status(200).send({ token });
        } catch (e) {
            return res.status(e.status || 500).json({ message: e.message });
        }
    }

    check(_req: Request, res: Response): Response {
        return res.status(200).json({ isAuth: true });
    }
}

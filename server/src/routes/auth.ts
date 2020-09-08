import express from 'express';
import { jwtCheck, validateBodyProperty } from '../middlewares';
import { AuthController } from '../controllers/auth/auth.controller';
import { UserService } from '../services/user/user.service';
import { BcryptPasswordHasher } from '../services/password-hash/bcrypt-hasher';
import { PasswordHashService } from '../services/password-hash/password-hash.service';
import { AuthService } from '../services/auth';
import config from '../config/config';
import {passwordValidator, minPasswordLengthValidator, emailValidator} from '../validators';

export default () => {
    const router = express.Router();

    const userService = new UserService();
    const bcryptPasswordHasher = new BcryptPasswordHasher();
    const passwordHashService = new PasswordHashService(bcryptPasswordHasher);
    const authService = new AuthService(config.jwt.secretKey as string, config.jwt.options);
    
    const authController = new AuthController({
        userService,
        passwordHashService,
        authService,
    });
    
    const passwordValidators = [
        minPasswordLengthValidator,
        passwordValidator,
    ];
    
    const emailValidators = [
        emailValidator,
    ];
    
    const passwordCheck = validateBodyProperty(passwordValidators, 'password');
    const emailCheck = validateBodyProperty(emailValidators, 'email');
    
    router.post('/register', passwordCheck, emailCheck, authController.register.bind(authController));
    router.post('/login', passwordCheck, emailCheck, authController.login.bind(authController));
    
    router.post('/status', jwtCheck, authController.check.bind(authController));
    
    return router;    
}

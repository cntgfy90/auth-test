import { MiddlewareCompliantValidator } from './types';
import createValidator from './create-validator';
import { patternMatch } from '../helpers';
import { passwordPattern, PASSWORD_FORMAT_ERROR } from './constants';

const passwordValidator: MiddlewareCompliantValidator<string> = (password) =>
    createValidator(
        patternMatch(password, passwordPattern),
        PASSWORD_FORMAT_ERROR,
    );

export default passwordValidator;

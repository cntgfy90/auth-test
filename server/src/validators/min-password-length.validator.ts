import { MiddlewareCompliantValidator } from './types';
import { hasMinLength } from '../helpers';
import createValidator from './create-validator';
import { minPasswordLength, PASSWORD_LENGTH_ERROR } from './constants';

const minLengthPasswordValidator: MiddlewareCompliantValidator<string> = (
    password,
) =>
    createValidator(
        hasMinLength(password, minPasswordLength),
        PASSWORD_LENGTH_ERROR,
    );

export default minLengthPasswordValidator;

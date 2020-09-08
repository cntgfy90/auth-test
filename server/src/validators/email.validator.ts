import { MiddlewareCompliantValidator } from './types';
import { patternMatch } from '../helpers';
import createValidator from './create-validator';
import { emailPattern, EMAIL_FORMAT_ERROR } from './constants';

const emailValidator: MiddlewareCompliantValidator<string> = (email) =>
    createValidator(patternMatch(email, emailPattern), EMAIL_FORMAT_ERROR);

export default emailValidator;

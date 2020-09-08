import { Validator } from './types';

export default (isValid: boolean, validationError: string): Validator => {
    return {
        isValid,
        validationError: isValid ? '' : validationError,
    };
};
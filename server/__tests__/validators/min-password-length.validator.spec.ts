import {minPasswordLengthValidator} from '../../src/validators';
import { PASSWORD_LENGTH_ERROR } from '../../src/validators/constants';

describe('minPasswordLengthValidator', () => {
    describe('when password length is less than required minimal length', () => {
        it('should return false', () => {
            const result = minPasswordLengthValidator('123');
            expect(result).toEqual({
                isValid: false,
                validationError: PASSWORD_LENGTH_ERROR,
            });
        });
    });

    describe('when password length is equal to required minimal length', () => {
        it('should return true', () => {
            const result = minPasswordLengthValidator('123456');
            expect(result).toEqual({
                isValid: true,
                validationError: '',
            });
        });
    });

    describe('when password length is greater than required minimal length', () => {
        it('should return true', () => {
            const result = minPasswordLengthValidator('1234567');
            expect(result).toEqual({
                isValid: true,
                validationError: '',
            });
        });
    });});
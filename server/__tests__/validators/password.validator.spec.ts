import {passwordValidator} from '../../src/validators';
import { PASSWORD_FORMAT_ERROR } from '../../src/validators/constants';

describe('passwordValidator', () => {
    describe('when correct password format', () => {
        it('should return correct validator result', () => {
            const result = passwordValidator('123qwe&K');
            expect(result).toEqual({
                isValid: true,
                validationError: '',
            });
        });
    });

    describe('when incorrect password format', () => {
        it('should return correct validator result', () => {
            const result = passwordValidator('123213sa');
            expect(result).toEqual({
                isValid: false,
                validationError: PASSWORD_FORMAT_ERROR,
            })
        });
    });
});

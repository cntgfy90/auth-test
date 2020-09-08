import {emailValidator} from '../../src/validators';
import { EMAIL_FORMAT_ERROR } from '../../src/validators/constants';

describe('emailValidator', () => {
    describe('when correct email format', () => {
        it('should return correct validator result', () => {
            const result = emailValidator('abcdefg@test.com');
            expect(result).toEqual({
                isValid: true,
                validationError: '',
            });
        });
    });

    describe('when incorrect email format', () => {
        it('should return correct validator result', () => {
            const result = emailValidator('asdasdasdsad');
            expect(result).toEqual({
                isValid: false,
                validationError: EMAIL_FORMAT_ERROR,
            })
        });
    });
});

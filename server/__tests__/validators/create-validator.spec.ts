import createValidator from "../../src/validators/create-validator";

describe('createValidator', () => {
    describe('when validation passes', () => {
        it('should create correct validator result', () => {
            const result = createValidator(true, 'Some validation error message');
            expect(result).toEqual({
                isValid: true,
                validationError: '',
            });
        });    
    });

    describe('when validation does not pass', () => {
        it('should create correct validator result', () => {
            const result = createValidator(false, 'Some validation error message');
            expect(result).toEqual({
                isValid: false,
                validationError: 'Some validation error message',
            });
        });    
    });
});
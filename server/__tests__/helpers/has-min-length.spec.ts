import {hasMinLength} from '../../src/helpers';

describe('hasMinLength helper', () => {
    describe('when value length is less than required minimal length', () => {
        it('should return false', () => {
            const result = hasMinLength('', 1);
            expect(result).toBe(false);
        });
    });

    describe('when value length is equal to required minimal length', () => {
        it('should return true', () => {
            const result = hasMinLength('a', 1);
            expect(result).toBe(true);
        });
    });

    describe('when value length is greater than required minimal length', () => {
        it('should return true', () => {
            const result = hasMinLength('abc', 1);
            expect(result).toBe(true);
        });
    });
});

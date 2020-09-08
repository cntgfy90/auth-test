import {patternMatch} from '../../src/helpers';

describe('patternMatch helper', () => {
    describe('when correct value is provided', () => {
        it('should return true', () => {
            const result = patternMatch('12', /\d\d/);
        });
    });

    describe('when incorrect value is provided', () => {
        it('should return false', () => {
            const result = patternMatch('19', /\d\d/);
        });
    });
});
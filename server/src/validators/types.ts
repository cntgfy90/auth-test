export interface Validator {
    isValid: boolean;
    validationError: string;
}

export type MiddlewareCompliantValidator<T = any> = (valueToCheckFor: T) => Validator;

import { Request, Response, NextFunction } from "express"
import { MiddlewareCompliantValidator, Validator } from "../validators/types";

export const validateBodyProperty = (validators: MiddlewareCompliantValidator[], property: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const bodyProperty = req.body[property];

        if (!bodyProperty) {
            return res.status(400).json({ message: `Validation for ${property} property failed` });
        }

        const validationErrors: string[] = validators.map(validator => {
            const validatorResult: Validator = validator(bodyProperty);
            return validatorResult.validationError;
        }).filter(Boolean);

        if (validationErrors.length) {
            res.status(400).json({ message: validationErrors[0] })
        }

        next();
    };
};

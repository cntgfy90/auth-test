import emailValidator from "./email.validator";
import { VALIDATION_ERROR } from "../constants";

describe("EmailValidator", () => {
  describe("when incorrect email format is provided", () => {
    it("should return validation error", () => {
      const result = emailValidator("1232131sadsdsa&");
      expect(result).toBe(VALIDATION_ERROR);
    });
  });

  describe("when correct email format is provided", () => {
    it("should return undefined", () => {
      const result = emailValidator("qwerty@test.com");
      expect(result).toBeUndefined();
    });
  });
});

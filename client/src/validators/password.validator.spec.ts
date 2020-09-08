import passwordValidator from "./password.validator";
import { VALIDATION_ERROR } from "../constants";

describe("PasswordValidator", () => {
  describe("when no special chars", () => {
    it("should return validation error", () => {
      const result = passwordValidator("asdasd");
      expect(result).toBe(VALIDATION_ERROR);
    });
  });

  describe("when no upper case letters", () => {
    it("should return validation error", () => {
      const result = passwordValidator("asdasdda123&");
      expect(result).toBe(VALIDATION_ERROR);
    });
  });

  describe("when upper case letter but no special char", () => {
    it("should return validation error", () => {
      const result = passwordValidator("Aasdasd123123");
      expect(result).toBe(VALIDATION_ERROR);
    });
  });

  describe("when special char but no upper case letter", () => {
    it("should return validation error", () => {
      const result = passwordValidator("&asdasdasd123213");
      expect(result).toBe(VALIDATION_ERROR);
    });
  });

  describe("when less than 6 chars length", () => {
    it("should return validation error", () => {
      const result = passwordValidator("12345");
      expect(result).toBe(VALIDATION_ERROR);
    });
  });

  describe("when at least 6 chars length, with special char and uppser case letter", () => {
    it("should return undefined", () => {
      const result = passwordValidator("123123KSD&&&asdsad");
      expect(result).toBeUndefined();
    });
  });
});

import "@testing-library/jest-dom";
import React from "react";
import { LoginViewProps } from "./types";
import { RenderResult, render, fireEvent } from "@testing-library/react";
import { LoginView } from "./login.view";

const defaultProps: LoginViewProps = {
  login: jest.fn(),
  error: "",
  moveToRegister: jest.fn(),
  isLoading: false,
};

const getWrapper = (props: Partial<LoginViewProps> = {}): RenderResult => {
  return render(
    <LoginView {...defaultProps} {...props} data-testid="login-view-test" />
  );
};

describe("<LoginView />", () => {
  it("should render login view component", () => {
    const { getByTestId } = getWrapper();
    const loginView = getByTestId("login-view-test");
    expect(loginView).toBeInTheDocument();
  });

  it("should render register button link", () => {
    const { getByText } = getWrapper();
    const registerButton = getByText("Register");
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toBeEnabled();
  });

  it("should render login button", () => {
    const { getByTestId } = getWrapper();
    const loginButton = getByTestId("login-submit-button");
    expect(loginButton).toBeInTheDocument();
  });

  it("should call corect handler on register button click", () => {
    const moveToRegister = jest.fn();
    const { getByText } = getWrapper({ moveToRegister });
    const registerButton = getByText("Register");
    expect(moveToRegister).toHaveBeenCalledTimes(0);
    fireEvent.click(registerButton);
    expect(moveToRegister).toHaveBeenCalledTimes(1);
  });

  describe("when with error", () => {
    it("should render error message", () => {
      const error = "Some error";
      const { getByTestId } = getWrapper({ error });
      const errorContainer = getByTestId("login-error-message");
      expect(errorContainer).toHaveTextContent(error);
    });
  });

  describe("when without error", () => {
    it("should not render error message", () => {
      const { queryByTestId } = getWrapper();
      const errorContainer = queryByTestId("login-error-message");
      expect(errorContainer).not.toBeInTheDocument();
    });
  });

  it("should call correct handler on login button click", () => {
    const login = jest.fn();
    const { getByTestId } = getWrapper({ login });
    const loginButton = getByTestId("login-submit-button");
    expect(login).toHaveBeenCalledTimes(0);
    fireEvent.click(loginButton);
    expect(login).toHaveBeenCalledTimes(1);
  });
});

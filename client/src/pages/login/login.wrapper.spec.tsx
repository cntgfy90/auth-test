import React from "react";
import { LoginWrapperProps, LoginWrapper } from "./login.wrapper";
import { RenderResult, render } from "@testing-library/react";

const defaultProps: LoginWrapperProps = {
  children: jest.fn(),
  storageService: {
    get: jest.fn(),
    set: jest.fn(),
    remove: jest.fn(),
  },
  useLogin: jest.fn(),
};

const getWrapper = (
  props: Partial<LoginWrapperProps> = defaultProps
): RenderResult => {
  return render(<LoginWrapper {...props}>{() => <div></div>}</LoginWrapper>);
};

describe("<LoginWrapper />", () => {
  it("should initialize api call", () => {
    const useLogin = jest.fn().mockReturnValue([{}, jest.fn()]);
    getWrapper({ useLogin });
    expect(useLogin).toHaveBeenCalledTimes(1);
  });

  it("should set correct configuration data for api call", () => {
    const useLogin = jest.fn().mockReturnValue([{}, jest.fn()]);
    getWrapper({ useLogin });
    expect(useLogin).toHaveBeenCalledWith({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_API as string}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
});

import "@testing-library/jest-dom";
import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./button";

const getWrapper = (props: ButtonProps = {}): RenderResult => {
  const { children, ...rest } = props;

  return render(
    <Button {...rest} testId="button-test">
      {children}
    </Button>
  );
};

describe("<Button />", () => {
  it("should render button", () => {
    const { getByTestId } = getWrapper();
    const button = getByTestId("button-test");
    expect(button).toBeInTheDocument();
  });

  it("should fire event on button click", () => {
    const clickHandler = jest.fn();
    const { getByTestId } = getWrapper({ onClick: clickHandler });
    const button = getByTestId("button-test");
    expect(clickHandler).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it("should set button text", () => {
    const text = "Some text";
    const { getByTestId } = getWrapper({ children: text });
    const button = getByTestId("button-test");
    expect(button).toHaveTextContent(text);
  });
});

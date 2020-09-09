import "@testing-library/jest-dom";
import React from "react";
import { FormFooterProps, FormFooter } from "./form-footer";
import { RenderResult, render } from "@testing-library/react";

const getWrapper = (props: FormFooterProps = {}): RenderResult => {
  const { children, ...rest } = props;

  return render(<FormFooter {...rest}>{children}</FormFooter>);
};

describe("<FormFooter />", () => {
  it("should render form footer", () => {
    const content = "Some content";
    const { getByText } = getWrapper({ children: content });
    const formFooter = getByText(content);
    expect(formFooter).toBeInTheDocument();
  });
});

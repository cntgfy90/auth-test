import React from "react";
import VendorButton, {
  ButtonProps as VendorButtonProps,
} from "@atlaskit/button";

export interface ButtonProps extends VendorButtonProps {}

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <VendorButton {...rest}>{children}</VendorButton>;
};

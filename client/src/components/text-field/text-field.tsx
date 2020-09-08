import React from "react";
import VendorTextField, {
  TextFieldProps as VendorTextFieldProps,
} from "@atlaskit/textfield";

export interface TextFieldProps extends VendorTextFieldProps {}

export const TextField = (props: TextFieldProps) => {
  return <VendorTextField {...props} />;
};

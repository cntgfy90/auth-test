import React from "react";
import { FormFooter as VendorFormFooter } from "@atlaskit/form";

export interface FormFooterProps {
  [prop: string]: unknown;
  children: React.ReactNode;
}

export const FormFooter = (props: FormFooterProps) => {
  const { children, ...rest } = props;

  return <VendorFormFooter {...rest}>{children}</VendorFormFooter>;
};

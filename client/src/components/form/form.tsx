import React from "react";
import VenforForm, { FormProps as VendorFormProps } from "@atlaskit/form";

export interface FormProps<FormData> extends VendorFormProps<FormData> {}

export function Form<FormData>(props: FormProps<FormData>) {
  const { children, ...rest } = props;

  return <VenforForm {...rest}>{children}</VenforForm>;
}

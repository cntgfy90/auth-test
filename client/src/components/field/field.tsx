import React from "react";
import {
  Field as VendorField,
  FieldProps as VendorFieldProps,
} from "@atlaskit/form";

export interface FieldProps<FieldValue> extends VendorFieldProps<FieldValue> {
  children: any;
}

export function Field(props: any) {
  const { children, ...rest } = props;

  return <VendorField {...rest}>{children}</VendorField>;
}

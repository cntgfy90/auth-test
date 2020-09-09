import React from "react";
import { LoginWrapper } from "./login.wrapper";
import { LoginView } from "./login.view";

export const Login = () => {
  return <LoginWrapper>{(props) => <LoginView {...props} />}</LoginWrapper>;
};

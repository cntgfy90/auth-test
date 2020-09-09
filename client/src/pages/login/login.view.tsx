import React from "react";
import {
  TextField,
  Form,
  Field,
  FormFooter,
  Button,
  AuthScreen,
} from "../../components";
import { emailValidator, passwordValidator } from "../../validators";
import { VALIDATION_ERROR } from "../../constants";
import { ErrorMessage, ValidMessage } from "@atlaskit/form";
import { LoginViewProps } from "./types";

import "./login.scss";

export const LoginView = (props: LoginViewProps) => {
  const { login, isLoading, error, moveToRegister, ...rest } = props;

  return (
    <AuthScreen {...rest}>
      <Form onSubmit={() => {}}>
        {({ formProps, getValues }) => (
          <form className="form" {...formProps} name="login-form">
            <Field
              label="Email"
              isRequired
              name="email"
              validate={emailValidator}
            >
              {({ fieldProps, error, meta: { valid } }: any) => (
                <>
                  <TextField {...fieldProps} />
                  {error === VALIDATION_ERROR && (
                    <ErrorMessage>Incorrect email format</ErrorMessage>
                  )}
                  {valid && (
                    <ValidMessage>Email format is correct</ValidMessage>
                  )}
                </>
              )}
            </Field>
            <Field
              label="Password"
              isRequired
              name="password"
              validate={passwordValidator}
            >
              {({ fieldProps, error, meta: { valid } }: any) => (
                <>
                  <TextField {...fieldProps} type="password" />
                  {error === VALIDATION_ERROR && (
                    <ErrorMessage>Incorrect password format</ErrorMessage>
                  )}
                  {valid && (
                    <ValidMessage>Password format is correct</ValidMessage>
                  )}
                </>
              )}
            </Field>
            <FormFooter>
              <Button
                appearance="primary"
                isLoading={isLoading}
                onClick={() => login(getValues())}
                testId="login-submit-button"
              >
                Login
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
      {error && (
        <ErrorMessage testId="login-error-message">{error}</ErrorMessage>
      )}
      <p>Have not an account yet?</p>
      <Button appearance="primary" onClick={moveToRegister}>
        Register
      </Button>
    </AuthScreen>
  );
};

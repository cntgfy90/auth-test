import React, { useCallback, useMemo, useEffect } from "react";

import "./login.scss";
import { useApi } from "../../hooks";
import { emailValidator, passwordValidator } from "../../validators";
import {
  TextField,
  Form,
  Field,
  FormFooter,
  Button,
  AuthScreen,
} from "../../components";
import { VALIDATION_ERROR, TOKEN_KEY } from "../../constants";
import { ErrorMessage, ValidMessage } from "@atlaskit/form";
import { useHistory } from "react-router-dom";
import { IStorage } from "../../common/storage/types";
import storage from "../../common/storage";

export interface LoginProps {
  storageService?: IStorage;
}

interface LoginResult {
  token: string;
}

export const Login = (props: LoginProps) => {
  const { storageService = storage } = props;

  const history = useHistory();

  const loginConfig = useMemo(
    () => ({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_API as string}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
    }),
    []
  );

  const [loginResult, login] = useApi<LoginResult>(loginConfig);

  const handleLogin = useCallback(
    (data) => {
      if (login) {
        login(data);
      }
    },
    [login]
  );

  useEffect(() => {
    if (loginResult.data) {
      storageService.set(TOKEN_KEY, loginResult.data.token);
      history.push("/");
    }
  }, [loginResult.data, history, storageService]);

  return (
    <AuthScreen>
      <Form onSubmit={handleLogin}>
        {({ formProps }) => (
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
                isLoading={loginResult?.isLoading}
                type="submit"
              >
                Login
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
      {loginResult?.error && <ErrorMessage>{loginResult.error}</ErrorMessage>}
      <p>Have not an account yet?</p>
      <Button appearance="primary" onClick={() => history.push("/register")}>
        Register
      </Button>
    </AuthScreen>
  );
};

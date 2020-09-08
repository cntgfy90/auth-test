import React, { useCallback, useMemo, useEffect } from "react";
import {
  TextField,
  Form,
  Field,
  Button,
  FormFooter,
  AuthScreen,
} from "../../components";
import { useApi } from "../../hooks";
import { passwordValidator, emailValidator } from "../../validators";
import { VALIDATION_ERROR } from "../../constants";
import { ErrorMessage, ValidMessage } from "@atlaskit/form";
import { useHistory } from "react-router-dom";

import "./register.scss";

export const Register = () => {
  const history = useHistory();

  const registerConfig = useMemo(
    () => ({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_API as string}/auth/register`,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    []
  );

  const [registerResult, register] = useApi(registerConfig);

  const handleRegister = useCallback(
    (data) => {
      if (register) {
        register(data);
      }
    },
    [register]
  );

  useEffect(() => {
    if (registerResult.data) {
      history.push("/login");
    }
  }, [history, registerResult.data]);

  return (
    <AuthScreen>
      <Form onSubmit={handleRegister}>
        {({ formProps }) => (
          <form className="form" {...formProps} name="register-form">
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
              minlength="6"
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
                isLoading={registerResult?.isLoading}
                type="submit"
              >
                Register
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
      {registerResult?.error && (
        <ErrorMessage>{registerResult.error}</ErrorMessage>
      )}
      <p>Have already account?</p>
      <Button appearance="primary" onClick={() => history.push("/login")}>
        Login
      </Button>
    </AuthScreen>
  );
};

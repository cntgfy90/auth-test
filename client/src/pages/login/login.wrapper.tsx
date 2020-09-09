import { useMemo, useCallback, useEffect } from "react";
import { useApi } from "../../hooks";
import { TOKEN_KEY } from "../../constants";
import { IStorage } from "../../common/storage/types";
import storage from "../../common/storage";
import { useHistory } from "react-router-dom";
import { LoginViewProps } from "./types";

interface LoginResult {
  token: string;
}

export interface LoginWrapperProps {
  children(args: LoginViewProps): React.ReactElement;
  storageService?: IStorage;
  useLogin?(): [];
}

export const LoginWrapper = (props: LoginWrapperProps) => {
  const history = useHistory();

  const { storageService = storage, useLogin = useApi } = props;

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

  const [loginResult, callLogin] = useLogin<LoginResult>(loginConfig);

  const login = useCallback(
    (data) => {
      if (callLogin) {
        callLogin(data);
      }
    },
    [callLogin]
  );

  const token = useMemo(() => loginResult?.data?.token, [loginResult]);

  const moveToRegister = useCallback(() => {
    history.push("/register");
  }, [history]);

  const startUserJourney = useCallback(() => {
    history.push("/");
  }, [history]);

  useEffect(() => {
    if (token) {
      storageService.set(TOKEN_KEY, token);
      startUserJourney();
    }
  }, [token, startUserJourney, storageService]);

  return props.children({
    error: loginResult?.error || "",
    isLoading: loginResult?.isLoading || false,
    login,
    moveToRegister,
  });
};

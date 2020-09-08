import React, { useEffect } from "react";
import { useApi } from "../../hooks";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { IStorage } from "../../common/storage/types";
import storage from "../../common/storage";
import { TOKEN_KEY } from "../../constants";

interface PrivateRouteProps extends RouteProps {
  storageService?: IStorage;
}

interface AuthResult {
  isAuth: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { storageService = storage, children, ...rest } = props;

  const [authData, checkAuth] = useApi<AuthResult>({
    url: `${process.env.REACT_APP_SERVER_API as string}/auth/status`,
    method: "POST",
    headers: {
      'Authorization': `Bearer ${storageService.get(TOKEN_KEY)}`,
    },
  });

  useEffect(() => {
    if (checkAuth) {
      checkAuth();
    }
  }, []);

  if (!authData.isLoading && authData.error) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest}>{children}</Route>;
};

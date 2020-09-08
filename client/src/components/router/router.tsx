import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Register, Login, Home } from "../../pages";
import { PrivateRoute } from "../private-route/private-route";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

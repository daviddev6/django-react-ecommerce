import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import AuthRoute from "./components/routes/AuthRoute";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
import React from "react";
import { Switch, Route } from "react-router-dom";
import MainView from "./mainView/MainView";
import { useActions } from "../store/useActions";
import { ActionsProvider } from "../contexts/ActionsContext";
import Navigation from "./Navigation/Navigation";
import Auth from "./auth/Auth";

function App() {
  const actions = useActions();
  return (
    <ActionsProvider value={actions}>
      <Navigation />
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Auth} />

        <Route exact={true} path="/" component={MainView} />
        {/* this will be protected route tbd */}
      </Switch>

      {/* <MainView /> */}
    </ActionsProvider>
  );
}

export default App;

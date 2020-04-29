import React from "react";
import { Switch, Route } from "react-router-dom";
import MainView from "./mainView/MainView";
import { useActions } from "../store/useActions";
import { ActionsProvider } from "../contexts/ActionsContext";
import Navigation from "./Navigation/Navigation";
import Auth from "./auth/Auth";
import Chat from "../components/mainView/chat/Chat";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const actions = useActions();
  return (
    <ActionsProvider value={actions}>
      <Navigation />
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Auth} />
        <PrivateRoute path="/messages" component={Chat} />

        <Route exact={true} path="/" component={MainView} />
      </Switch>

      {/* <MainView /> */}
    </ActionsProvider>
  );
}

export default App;

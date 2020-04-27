import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Chat from "./chat/Chat";
import {useActions} from "../store/useActions";
import {ActionsProvider} from "../contexts/ActionsContext";
import Navigation from "./Navigation/Navigation";
import Auth from "./auth/Auth";
import Rooms from "./Rooms/Rooms";

function App() {
    const actions = useActions();
    return (
        <ActionsProvider value={actions}>
            <Navigation/>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/register' component={Auth} />
            </Switch>
            <div className="nes-container with-title is-centered">
                <p className="title">Hello World</p>
                <p>Why Hello There. A MUD is coming soon</p>
            </div>
            <Chat/>
            <Rooms/>
        </ActionsProvider>
    )
}

export default App;

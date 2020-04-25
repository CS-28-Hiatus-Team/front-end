import React from 'react';
import Chat from "./chat/Chat";
import {useActions} from "../store/useActions";
import {ActionsProvider} from "../contexts/ActionsContext";
import Navigation from "./Navigation/Navigation";

function App() {
    const actions = useActions();
    return (
        <ActionsProvider value={actions}>
            <Navigation/>
            <div className="nes-container with-title is-centered">
                <p className="title">Hello World</p>
                <p>Why Hello There. A MUD is coming soon</p>
            </div>
            <Chat/>
        </ActionsProvider>
    )
}

export default App;

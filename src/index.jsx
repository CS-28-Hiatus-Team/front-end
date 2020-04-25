import React from 'react';
import {render} from 'react-dom';

// Store
import {Provider} from 'react-redux';
import store from './store';

// Router
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/App';

const EnchantedApp = () => (
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
);

console.log(EnchantedApp);

render(<EnchantedApp/>, document.getElementById('root'));

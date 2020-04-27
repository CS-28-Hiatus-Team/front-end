import React from 'react';
import * as rtl from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from "redux-mock-store";
import App from './App';

const mockStore = configureStore([]);

const auth = {
    key: null,
    isLoading: false,
    errors: null
};

let store;
beforeEach(()=> {
    store = mockStore({
        ...auth
    })
});

describe('App.jsx renders', () => {
    it('should render without crashing', () => {
        rtl.render(<Provider store={store}><Router><App /></Router></Provider>)
    })
});

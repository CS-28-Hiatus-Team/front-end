import React from 'react';
import * as rtl from "@testing-library/react";
import App from './App';

describe('App.jsx renders', () => {
    it('should render without crashing', () => {
        rtl.render(<App/>)
    })
});

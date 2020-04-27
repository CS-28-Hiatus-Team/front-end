import React from 'react';
import * as rtl from '@testing-library/react';
import Chat from "./Chat";

describe('Chat.jsx', () => {
    it ('should render without crashing', () => {
        rtl.render(<Chat />)
    })
});

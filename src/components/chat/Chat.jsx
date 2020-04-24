import React, {useState} from 'react';
import Message from "./Message";

function Chat() {
    const [messages] = useState([
        {
        direction: 'left',
        message: 'Hello Bri'
        },
        {
            direction: 'right',
            message: 'Good afternoon Don'
        },
        {
          direction: "left",
          message: "Working on Build Week"
        }
    ]);
    return (
        <section className="nes-container">
            {messages.map((message, i) => <Message {...message} key={i} />)}
        </section>
    )
}

export default Chat;

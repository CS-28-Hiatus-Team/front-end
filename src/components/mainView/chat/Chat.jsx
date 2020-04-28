import React, { useState, useEffect } from 'react';
import Message from './Message';
import Pusher from 'pusher-js';
import axios from 'axios';

import styled from 'styled-components';

const MessageContainer = styled.div`
  height: 85%;
  overflow-y: scroll;
`;

const TextArea = styled.input`
  height: 15px;
`;

function Chat() {
  const [chatState, setChatState] = useState({
    text: '',
    username: '',
    chats: [],
  });

  useEffect(() => {
    const username = `Anonymous ${Math.floor(Math.random() * 10000)}`;
    console.log(username);
    setChatState({ ...chatState, username });
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
      cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
      encrypted: true,
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      const newChats = chatState.chats;
      newChats.push(data);
      setChatState({ ...chatState, chats: newChats, text: '' });
    });
    return () => {
      channel.unsubscribe('chat');
    };
  }, []);

  console.log(chatState);
  const handleChange = ({ target: { name, value } }) => {
    console.log('called');
    setChatState({ ...chatState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: chatState.username,
      message: chatState.text,
    };
    axios.post(`${process.env.REACT_APP_PUSHER_URL}/message`, payload);
  };

  return (
    <>
      <MessageContainer className='nes-container'>
        <section className='message-list'>
          {chatState.chats.map((message, i) => (
            <Message
              {...message}
              direction={
                chatState.username === message.username ? 'right' : 'left'
              }
              key={i}
            />
          ))}
        </section>
      </MessageContainer>

      <form onSubmit={handleSubmit}>
        <div className='nes-field'>
          <TextArea
            type='text'
            id='message_field'
            className='nes-input'
            onChange={handleChange}
            name='text'
            value={chatState.text}
            placeholder='enter a message!'
          />
        </div>
      </form>
    </>
  );
}

export default Chat;

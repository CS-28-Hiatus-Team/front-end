import React, { useState, useEffect } from 'react';
import Message from './Message';
import Pusher from 'pusher-js';
import axios from 'axios';
import background from '../../../assets/images/background.png';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import emojiAdd from '../../../assets/images/emoji.png';

import styled from 'styled-components';

const MessageContainer = styled.div`
  background-image: url(${background});
  background-repeat-y: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;

const Messages = styled.div`
  height: 90%;
  overflow-y: scroll;
  margin-top: -10;
`;

const TextArea = styled.input`
  height: 60px;
  width: 100%;
  margin: 10px 10px 10px 0;
`;

const GetEmojiButton = styled.p`
  font-size: 40px;
  border: none;
  margin: 10px;
  cursor: pointer;
  margin-top: -5px;
`;

const EmojiPicker = styled.span`
  position: absolute;
  right: 0;
  margin-right: 60%;
  cssfloat: right;
  bottom: 100px;
`;

const EmojiAddImg = styled.img`
  height: 35px;
  width: 45px;
`;
const Form = styled.div`
  display: flex;
  width: 95%;
  margin: 0px 0px 0px 10px;
`;

function Chat() {
  const [chatState, setChatState] = useState({
    text: '',
    username: '',
    chats: [],
    showEmojis: false,
  });

  const showEmojis = (e) => {
    setChatState({ ...chatState, showEmojis: true }, () =>
      document.addEventListener('click', closeMenu)
    );
  };

  const closeMenu = (e) => {
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      setChatState({ ...chatState, showEmojis: false }, () =>
        document.removeEventListener('click', closeMenu)
      );
    }
  };

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

  const addEmoji = (e) => {
    let emoji = e.native;
    setChatState({
      ...chatState,
      text: `${chatState.text}` + emoji,
      showEmojis: false,
    });
  };

  return (
    <MessageContainer>
      <Messages>
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
      </Messages>
      <Form>
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
        {chatState.showEmojis ? (
          <EmojiPicker>
            <Picker onSelect={addEmoji} emojiTooltip={true} />
          </EmojiPicker>
        ) : (
          <GetEmojiButton onClick={showEmojis}>
            <EmojiAddImg src={emojiAdd} />
          </GetEmojiButton>
        )}
      </Form>
    </MessageContainer>
  );
}

export default Chat;

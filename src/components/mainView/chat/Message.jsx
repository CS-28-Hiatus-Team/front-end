import React from 'react';
import mario from '../../../assets/images/mario.png';
import bcrikko from '../../../assets/images/bcrikko.png';

import styled from 'styled-components';

const MessageBubble = styled.div`
  width: 90%;
`;

const MessageAvatar = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 50px;
`;
const MessageFont = styled.p`
  word-wrap: wrap;
  text-align: center;
`;

function Message({ direction, message }) {
  // Direction props.direction === "right" or props.direction === "left"
  // Left will be for the current logged in user, right will be for
  // the chats that are coming from Pusher
  // Message is the message
  return (
    <section className={`message -${direction}`}>
      {/* this is where we can add the avatar chosen by registering instead of nes-bcrikko or nes-mario */}
      {direction === 'left' && <MessageAvatar src={bcrikko} />}

      <MessageBubble className={`nes-balloon from-${direction}`}>
        <MessageFont>{message}</MessageFont>
      </MessageBubble>

      {direction === 'right' && <MessageAvatar src={mario} />}
    </section>
  );
}

export default Message;

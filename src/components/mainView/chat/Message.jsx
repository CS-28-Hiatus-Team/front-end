import React from "react";

function Message({ direction, message }) {
  // Direction props.direction === "right" or props.direction === "left"
  // Left will be for the current logged in user, right will be for
  // the chats that are coming from Pusher
  // Message is the message
  return (
    <section className={`message -${direction}`}>
      {/* this is where we can add the avatar chosen by registering instead of nes-bcrikko or nes-mario */}
      {direction === "left" && <i className="nes-bcrikko" />}

      <div className={`nes-balloon from-${direction}`}>
        <p>{message}</p>
      </div>

      {direction === "right" && <i className="nes-mario" />}
    </section>
  );
}

export default Message;

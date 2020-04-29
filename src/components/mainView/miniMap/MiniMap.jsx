import React from 'react';
import { useSelector } from 'react-redux';

function MiniMap() {
  const currentRoom = useSelector((state) => state.game.currentRoom);

  return (
    <div>
      <h1>{currentRoom.title}</h1>
      <p>{currentRoom.description}</p>
    </div>
  );
}

export default MiniMap;

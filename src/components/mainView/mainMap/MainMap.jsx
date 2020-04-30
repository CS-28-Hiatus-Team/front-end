import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../../contexts/ActionsContext';
import styled from 'styled-components';
import walkSprite from '../../../assets/images/image.png';
import { MAP_WIDTH, MAP_HEIGHT } from '../../../assets/constants';

const Main = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
`;

function MainMap(key) {
  const { token } = useSelector((state) => state.auth);
  const actions = useContext(ActionsContext);
  const [playerPosition, setPlayerPosition] = useState({
    position: [360, 160],
  });

  const getNewPosition = (oldPos, direction) => {
    switch (direction) {
      case 'w':
        return [oldPos[0] - 100, oldPos[1]];
      case 'e':
        return [oldPos[0] + 100, oldPos[1]];
      case 'n':
        return [oldPos[0], oldPos[1] - 100];
      case 's':
        return [oldPos[0], oldPos[1] + 100];
    }
  };

  const observedBoundries = (oldPos, newPos) => {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - 50 &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - 50
    );
  };

  function moveToNewRoom(direction) {
    const oldPos = playerPosition.position;
    const newPos = getNewPosition(oldPos, direction);
    if (observedBoundries(oldPos, newPos)) {
      setPlayerPosition({
        position: newPos,
      });
    } else {
      actions.game.move(token, direction);
    }
  }

  const handleNorth = (e, direction) => {
    e.preventDefault();
    console.log('direction clicked');
    moveToNewRoom('n');
  };

  const handleSouth = (e, direction) => {
    e.preventDefault();
    console.log('direction clicked');
    moveToNewRoom('s');
  };

  const handleEast = (e, direction) => {
    e.preventDefault();
    console.log('direction clicked');
    moveToNewRoom('e');
  };

  const handleWest = (e, direction) => {
    e.preventDefault();
    console.log('direction clicked');
    moveToNewRoom('w');
  };

  // // useKey(moveToNewRoom(handleKeyDown));

  // window.addEventListener('keydown', (e) => {
  //   moveToNewRoom(handleKeyDown(e));
  // });
  // window.addEventListener('keyup', () => {
  //   console.log('keyup');
  // });

  return (
    <>
      <Main>
        <div
          style={{
            position: 'absolute',
            top: playerPosition.position[1],
            left: playerPosition.position[0],
            backgroundImage: `url('${walkSprite}')`,
            width: '40px',
            height: '40px',
          }}
        />
        <button onClick={handleNorth}>North</button>
        <button onClick={handleSouth}>South</button>
        <button onClick={handleEast}>East</button>
        <button onClick={handleWest}>West</button>
      </Main>
    </>
  );
}

export default MainMap;

import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../../contexts/ActionsContext';
import styled from 'styled-components';
import walkSprite from '../../../assets/images/image.png';
import { MAP_WIDTH, MAP_HEIGHT } from '../../../assets/constants';
import { useKey } from '../../../hooks/useKey';

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
  const [pressed, setPressed] = useState(false);

  // Event handlers
  const onDown = (event) => {
    setPressed(true);
    moveToNewRoom(handleKeyDown(event));
  };

  const onUp = (event) => {
    setPressed(false);
  };

  // Bind and unbind events
  useEffect(() => {
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, [key]);

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

  const move = (direction, newPos) => {
    setPlayerPosition({
      position: newPos,
    });
    console.log('PLAYER POSITION', playerPosition.position);
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
      move(direction, newPos);
    } else {
      actions.game.move(token, direction);
    }
  }

  const handleKeyDown = (e) => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return 'w';

      case 38:
        return 'n';

      case 39:
        return 'e';

      case 40:
        return 's';

      default:
        console.log(e.keyCode);
    }
  };

  // useKey(moveToNewRoom(handleKeyDown));

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
      </Main>
    </>
  );
}

export default MainMap;

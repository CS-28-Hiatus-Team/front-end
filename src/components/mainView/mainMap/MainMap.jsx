import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../../contexts/ActionsContext';
import styled from 'styled-components';
import walkSprite from '../../../assets/images/mario_walk.png';
import { MAP_WIDTH, MAP_HEIGHT } from '../../../assets/constants';

const Main = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-right: -35px;
  margin-top: -49%;
`;

const Button = styled.button`
  margin: 10px;
`;

function MainMap(key) {
  const { token } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.game);
  const actions = useContext(ActionsContext);
  const [playerPosition, setPlayerPosition] = useState({
    position: [360, 160],
  });

  // useEffect(() => {
  //   if (isLoading) {
  //     return <i class='nes-icon coin is-large'></i>;
  //   }
  // });

  const getNewPosition = (oldPos, direction) => {
    switch (direction) {
      case 'w':
        return [oldPos[0] - 60, oldPos[1]];
      case 'e':
        return [oldPos[0] + 60, oldPos[1]];
      case 'n':
        return [oldPos[0], oldPos[1] - 60];
      case 's':
        return [oldPos[0], oldPos[1] + 60];
    }
  };

  const observedBoundries = (oldPos, newPos) => {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - 20 &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - 20
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
      setPlayerPosition({
        position: [360, 160],
      });
    }
  }

  const handleNorth = (e) => {
    e.preventDefault();
    moveToNewRoom('n');
  };

  const handleSouth = (e) => {
    e.preventDefault();
    moveToNewRoom('s');
  };

  const handleEast = (e) => {
    e.preventDefault();
    moveToNewRoom('e');
  };

  const handleWest = (e) => {
    e.preventDefault();
    moveToNewRoom('w');
  };

  return (
    <>
      {isLoading === true ? (
        <div className='nes-container is-rounded is-dark'>
          <p>Traveling...</p>
        </div>
      ) : (
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
          <ButtonContainer>
            <Button onClick={handleNorth}>North</Button>
            <Button onClick={handleSouth}>South</Button>
            <Button onClick={handleEast}>East</Button>
            <Button onClick={handleWest}>West</Button>
          </ButtonContainer>
        </>
      )}
    </>
  );
}

export default MainMap;

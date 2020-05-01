import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import mapBackground from '../../assets/images/map-background.png';
import background from '../../assets/images/background.png';
import MainMap from './mainMap/MainMap';
import MiniMap from './miniMap/MiniMap';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../contexts/ActionsContext';

function MainView() {
    const {token} = useSelector(state => state.auth);
    const actions = useContext(ActionsContext);
    useEffect(()=> {
        if (token) {
            actions.game.init(token);
        }
    }, [token])

  return (
    <MainContainer>
      <LeftContainer>
        <LeftTopContainer>
          <MiniMap />
        </LeftTopContainer>
      </LeftContainer>

      <RightContainer className='nes-container '>
        <MainMap />
      </RightContainer>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  background-image: url(${background});
  background-position: center;
  background-repeat-y: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 84.5vh;
`;

const LeftContainer = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 85vh;
`;

const LeftTopContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
`;

const RightContainer = styled.section`
  background-image: url(${mapBackground});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
`;

export default MainView;

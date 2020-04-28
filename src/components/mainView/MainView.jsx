import React from 'react';
import styled from 'styled-components';

import MainMap from './mainMap/MainMap';
import MiniMap from './miniMap/MiniMap';

function MainView() {
  return (
    <MainContainer>
      <LeftContainer className='nes-container '>
        <LeftTopContainer>
          <p class='title'>Room </p>
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 86vh;
`;

const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 85vh;
  margin: 5px;
`;

const LeftTopContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 120%;
  height: 60%;
`;

const RightContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78vw;
  height: 85vh;
`;

export default MainView;

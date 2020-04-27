import React from "react";
import styled from "styled-components";

import Chat from "./chat/Chat";
import MainMap from "./mainMap/MainMap";
import MiniMap from "./miniMap/MiniMap";

function MainView() {
  return (
    <MainContainer>
      <LeftContainer>
        <LeftTopContainer>
          <MiniMap />
        </LeftTopContainer>

        <LeftBottomContainer>
          <Chat />
        </LeftBottomContainer>
      </LeftContainer>

      <RightContainer>
        <MainMap />
      </RightContainer>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 81.5vh;
  border: 1px solid black;
`;

const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 98%;
  margin: 5px;
  border: 1px solid black;
`;

const LeftTopContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 50%;
  border: 1px solid red;
  margin: 5px, 0px, 0px, 5px;
`;

const LeftBottomContainer = styled.section`
  width: 100%;
  height: 50%;
  border: 1px solid blue;
  margin: 5px, 0px, 0px, 5px;
`;

const RightContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77%;
  height: 95%;
  margin: 5px;
  border: 1px solid orange;
`;

export default MainView;

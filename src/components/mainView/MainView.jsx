import React from "react";
import Chat from "./chat/Chat";
import MainMap from "./mainMap/MainMap";
import MiniMap from "./miniMap/MiniMap";

function MainView() {
  return (
    <div>
      <MiniMap />
      <Chat />
      <MainMap />
    </div>
  );
}

export default MainView;

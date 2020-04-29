import React from "react";
import { useSelector } from "react-redux";

const styles = {
  text: {
    color: "white",
  },
};

const GameInfo = (props) => {
  //   const currentRoom = useSelector((state) => state.player.currentRoom);

  //   console.log(currentRoom);
  return (
    <div style={styles.text}>
      {/* <h1>You're in {currentRoom.name}!</h1>
      <p>{currentRoom.desc}</p> */}
    </div>
  );
};

export default GameInfo;

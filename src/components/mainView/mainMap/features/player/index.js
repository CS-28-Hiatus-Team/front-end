import React from "react";
import walkSprite from "./player_walk.png";
import { useSelector } from "react-redux";
import handleMovement from "./movement";

const Player = (props) => {
  const player = useSelector((state) => state.player);

  return (
    <div
      style={{
        position: "absolute",
        top: player.position[1],
        left: player.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: player.spriteLocation,
        width: "40px",
        height: "40px",
      }}
    />
  );
};
export default handleMovement(Player);

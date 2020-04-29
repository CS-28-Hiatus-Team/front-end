import React from "react";
import Player from "../player";
import Map from "../map";
import GameInfo from "../GameInfo/index.js";

// import { tiles } from '../../data/maps/1'
// import store from '../../config/store'

const styles = {
  container: {
    fontFamily: "Press Start 2P",
    height: "100vh",
    display: "block",
    transition: "0.5s",
    background:
      "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.95)), url(https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

const World = (props) => {
  return (
    <container style={styles.container}>
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "400px",
          margin: "0 auto",
          // paddingTop: '50px',
        }}
      >
        <Map />
        <Player />
        <GameInfo />
      </div>
    </container>
  );
};

export default World;

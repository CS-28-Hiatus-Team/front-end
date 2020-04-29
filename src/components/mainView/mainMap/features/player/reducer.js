import rooms from "../../../../initial";

const initialState = {
  position: [360, 160],
  spriteLocation: "0px 0px",
  direction: "east",
  walkIndex: 0,
  rooms: rooms,
  currentRoom: rooms["The Half-full Mug"],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_ROOM":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;

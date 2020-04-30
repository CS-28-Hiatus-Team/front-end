import { TILE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../../assets/constants';

export default function handleMovement(player) {
  const getNewPosition = (oldPos, direction) => {
    switch (direction) {
      case 'WEST':
        return [oldPos[0] - TILE_SIZE, oldPos[1]];
      case 'EAST':
        return [oldPos[0] + TILE_SIZE, oldPos[1]];
      case 'NORTH':
        return [oldPos[0], oldPos[1] - TILE_SIZE];
      case 'SOUTH':
        return [oldPos[0], oldPos[1] + TILE_SIZE];
    }
  };

  const getSpriteLocation = (direction, walkIndex) => {
    switch (direction) {
      case 'SOUTH':
        return `${TILE_SIZE * walkIndex}px ${TILE_SIZE * 0}px`;
      case 'EAST':
        return `${TILE_SIZE * walkIndex}px ${TILE_SIZE * 1}px`;
      case 'WEST':
        return `${TILE_SIZE * walkIndex}px ${TILE_SIZE * 2}px`;
      case 'NORTH':
        return `${TILE_SIZE * walkIndex}px ${TILE_SIZE * 3}px`;
    }
  };

  const newRoomCheck = (currentRoom, direction) => {
    if (rooms[currentRoom[direction]]) {
      return true;
    } else {
      return false;
    }
  };

  const observeBoundries = (oldPos, newPos) => {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - TILE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - TILE_SIZE
    );
  };

  const observeObjects = (oldPos, newPos) => {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / TILE_SIZE;
    const x = newPos[0] / TILE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  };

  const move = (direction, newPos) => {
    const walkIndex = getWalkIndex();
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex),
      },
    });
  };

  const tryMove = (direction) => {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);
    const currentRoom = store.getState().player.currentRoom;
    if (observeBoundries(oldPos, newPos) && observeObjects(oldPos, newPos)) {
      move(direction, newPos);
    } else if (!observeBoundries(oldPos, newPos)) {
      if (newRoomCheck(currentRoom, direction)) {
        newRoomDispatch(currentRoom, direction);
      }
    }
  };

  const handleKeyDown = (e) => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return tryMove('WEST');
      case 65:
        return tryMove('WEST');

      case 38:
        return tryMove('NORTH');
      case 87:
        return tryMove('NORTH');

      case 39:
        return tryMove('EAST');
      case 68:
        return tryMove('EAST');

      case 40:
        return tryMove('SOUTH');
      case 83:
        return tryMove('SOUTH');

      default:
        console.log(e.keyCode);
    }
  };

  window.addEventListener('keydown', (e) => {
    document.URL.includes('/world') && handleKeyDown(e);
  });

  return player;
}

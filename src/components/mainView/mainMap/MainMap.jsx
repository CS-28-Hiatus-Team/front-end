import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../../contexts/ActionsContext';

function MainMap() {
  const { token } = useSelector((state) => state.auth);
  const actions = useContext(ActionsContext);

  function move(direction) {
    actions.game.move(token, direction);
    console.log(direction);
  }

  const handleKeyDown = (e) => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return 'w';

      case 38:
        return 'n';

      case 39:
        return 'e';

      case 40:
        return 's';

      default:
        console.log(e.keyCode);
    }
  };

  window.addEventListener('keydown', (e) => {
    move(handleKeyDown(e));
  });

  return (
    <>
      <section>
        <p>Hello this will be where the main map goes!!</p>
      </section>
    </>
  );
}

export default MainMap;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { tiles } from '../../../utils/startTiles';
import './styles.css';

const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return 'grass';
    case 5:
      return 'rock';
    case 6:
      return 'tree';
    case 10:
      return 'door';

    default:
      return 'grass';
  }
};

const MapTile = (props) => {
  return (
    <div
      className={`tile ${getTileSprite(tiles)}`}
      style={{
        height: '40px',
        width: '40px',
      }}
    />
  );
};

const MapRow = (props) => {
  return (
    <div
      className='row'
      style={{
        height: '40px',
      }}
    >
      {tiles.map((tile) => (
        <MapTile tiles={tile} />
      ))}
    </div>
  );
};

const Map = (props) => {
  return (
    <div
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '800px',
        height: '400px',
        border: '4px solid black',
      }}
    >
      {tiles.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
};

export default Map;

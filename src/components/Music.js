import React, { useState, useEffect } from 'react';
import backgroundSound from '../assets/sounds/background-music.mp3';
import muteMusic from '../assets/images/muteVolume.png';
import playMusic from '../assets/images/playVolume.png';

import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: transparent;
`;

const Image = styled.img`
  height: 25px;
  width: 25px;
`;

const useAudio = () => {
  const [audio] = useState(new Audio(backgroundSound));
  const [playing, setPlaying] = useState(false);

  audio.volume = 0.2;

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = useAudio(backgroundSound);

  return (
    <div>
      <Button onClick={toggle}>
        <Image src={playing ? playMusic : muteMusic} />
      </Button>
    </div>
  );
};

export default Player;

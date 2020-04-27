import React, { useState, useEffect } from 'react';
import backgroundSound from '../assets/sounds/background-music.mp3';
import muteVolume from '../assets/images/muteVolume.png';
import playVolume from '../assets/images/playVolume.png';

const useAudio = () => {
  const [audio] = useState(new Audio(backgroundSound));
  const [playing, setPlaying] = useState(false);

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
      <button onClick={toggle}>{playing ? muteVolume : playVolume}</button>
    </div>
  );
};

export default Player;

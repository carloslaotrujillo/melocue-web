import VolumeIcon from "./VolumeIcon";
import playerStyles from "../styles/Player.module.css";
import React, { useState, useEffect, useRef } from "react";

function PlayerVolume() {
  const volumeSaved = useRef(null);
  const [volume, setVolume] = useState(1);

  const toggleVolumeMute = () => {
    if (volume != 0) {
      volumeSaved.current = volume;
      setVolume(0);
    } else {
      setVolume(volumeSaved.current);
    }
  };

  useEffect(() => {
    const htmlAudio = document.getElementById("audio");
    htmlAudio.volume = volume;
  }, [volume]);

  return (
    <div className={playerStyles.controls}>
      <div className={playerStyles.volumeContainer} onClick={toggleVolumeMute}>
        <VolumeIcon volume={volume} />
      </div>
      <input
        min="0"
        step="1"
        max="100"
        type="range"
        value={volume * 100}
        className={playerStyles.slider}
        onChange={(e) => setVolume(e.target.value / 100)}
      ></input>
    </div>
  );
}

export default PlayerVolume;

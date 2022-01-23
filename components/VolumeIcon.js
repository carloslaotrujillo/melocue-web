import React from "react";
import playerStyles from "../styles/Player.module.css";
import {
  TiVolume,
  TiVolumeUp,
  TiVolumeDown,
  TiVolumeMute,
} from "react-icons/ti";

function renderVolume(volume) {
  if (volume == 0) {
    return <TiVolumeMute className={playerStyles.volumeIcon} />;
  }

  if (volume <= 0.33) {
    return <TiVolume className={playerStyles.volumeIcon} />;
  }

  if (volume <= 0.66) {
    return <TiVolumeDown className={playerStyles.volumeIcon} />;
  }

  return <TiVolumeUp className={playerStyles.volumeIcon} />;
}

function VolumeIcon({ volume }) {
  return <>{renderVolume(volume)}</>;
}

export default VolumeIcon;

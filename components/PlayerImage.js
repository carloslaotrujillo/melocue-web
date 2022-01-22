import React from "react";
import playerStyles from "../styles/Player.module.css";

function PlayerImage({ stream }) {
  return (
    <div className={playerStyles.songAlbum}>
      <img
        alt="Album Cover"
        src={
          stream.current
            ? stream.current.now_playing.song.art
            : "https://via.placeholder.com/150"
        }
      />
    </div>
  );
}

export default PlayerImage;

import React from "react";
import { useState, useEffect } from "react";
import { BsPlay, BsPause } from "react-icons/bs";
import playerStyles from "../styles/Player.module.css";

function PlayerAudio({ stream }) {
  const [player, setPlayer] = useState(false);

  const togglePlayer = () => {
    setPlayer(!player);
  };

  useEffect(() => {
    const htmlAudio = document.getElementById("audio");
    player ? htmlAudio.play() : htmlAudio.pause();
  }, [player]);

  return (
    <div className={playerStyles.innerPlayer}>
      <audio
        id="audio"
        src={process.env.NEXT_PUBLIC_RADIO_ENDPOINT}
        preload="auto"
        type="audio/mpeg"
      ></audio>
      <div onClick={togglePlayer}>
        {player ? (
          <BsPause className={playerStyles.player} />
        ) : (
          <BsPlay className={playerStyles.player} />
        )}
      </div>
      <div className={playerStyles.songInfoContainer}>
        <span>
          <strong>
            {stream.current
              ? stream.current.now_playing.song.title
              : "Loading..."}
          </strong>
        </span>
        <span>
          <i>
            {stream.current
              ? stream.current.now_playing.song.artist
              : "Loading..."}
          </i>
        </span>
      </div>
    </div>
  );
}

export default PlayerAudio;

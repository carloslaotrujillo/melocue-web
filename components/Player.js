import AudioPlayer from "./AudioPlayer";
import playerStyles from "../styles/Player.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import { useState } from "react";

function Player() {
  const [player, setPlayer] = useState(false);

  const togglePlayer = () => {
    setPlayer(!player);
  };

  return (
    <>      
      
      <AudioPlayer cuePlay={player} />
      <div onClickCapture={togglePlayer}>
        {player ? (
          <FaStopCircle className={playerStyles.player} />
        ) : (
          <FaPlayCircle className={playerStyles.player} />
        )}
      </div>
      {/* <div className={playerStyles.songInfo}>
        <p>Nothing Else Matters</p>
        <p>Metallica</p>
      </div> */}
    </>
  );
}

export default Player;

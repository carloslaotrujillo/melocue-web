import playerStyles from "../styles/Player.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import { useState } from "react";

function Player() {
  const [player, setPlayer] = useState(false);

  const changePlayer = () => {
    setPlayer(!player);
  };

  return (
    <>
      <div onClick={changePlayer}>
        {player ? (
          <FaStopCircle className={playerStyles.play} />
        ) : (
          <FaPlayCircle className={playerStyles.play} />
        )}
      </div>
      <div className={playerStyles.songInfo}>
        <p>Nothing Else Matters</p>
        <p>Metallica</p>
      </div>
    </>
  );
}

export default Player;

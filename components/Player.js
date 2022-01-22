import { useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import playerStyles from "../styles/Player.module.css";

// import {NchanSubscriber} from 'nchan';

function Player() {
  const [player, setPlayer] = useState(false);
  
  const togglePlayer = () => {
    setPlayer(!player);
  };
  
  useEffect(() => {      
    // var sub = new NchanSubscriber('https://melocueradio.com/api/live/nowplaying/melocue');
    // var nowPlaying;
    
    // sub.on("message", function(message, message_metadata) {
      //     nowPlaying = JSON.parse(message);
      //     console.log(nowPlaying);
      // });
      // sub.start();  
      
    const htmlAudio = document.getElementById('audio');        
    player ? htmlAudio.play() : htmlAudio.pause();
}, [player])

  return (
    <div className={playerStyles.playerContainer}>
      <div className={playerStyles.innerPlayer}>        
        <audio id="audio" src={process.env.NEXT_PUBLIC_RADIO_ENDPOINT} preload="auto" type="audio/mpeg"></audio>
        <div onClick={togglePlayer}>
          {player ? (
            <FaStopCircle className={playerStyles.player} />
            ) : (
              <FaPlayCircle className={playerStyles.player} />
              )}
        </div>
      </div>            
      <div className={playerStyles.songInfoContainer}>        
          <span>Song</span>
          <span>Artist</span>
          <span>------------</span>
      </div>
      <div className={playerStyles.controls}>
        <div>
          VOLUMEN CONTROL
        </div>
      </div>
    </div>
  );
}

export default Player;

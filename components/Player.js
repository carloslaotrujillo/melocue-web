import NchanSubscriber from 'nchan';
import VolumeIcon from './VolumeIcon';
import { BsPlay } from "react-icons/bs";
import { BsPause } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import playerStyles from "../styles/Player.module.css";

function Player() {

  const streamInfo = useRef(null);
  const volumeSaved = useRef(null);

  const [player, setPlayer] = useState(false);
  const [volume, setVolume] = useState(1);
  const [, setForceUpdate] = useState(Date.now());    

  const togglePlayer = () => {
    setPlayer(!player);
  };

  const toggleVolumeMute = () => {
    if(volume != 0) {
      volumeSaved.current = volume;
      setVolume(0);
    } else {      
      setVolume(volumeSaved.current);
    }
  } 
  
  useEffect(() => {
    let opt = {
      subscriber: 'websocket',        
      reconnect: 'persist'      
    }

    const sub = new NchanSubscriber(process.env.NEXT_PUBLIC_NOWPLAYING_ENDPOINT, opt);       

    sub.start();      

    sub.on("message", function(message) {       
      streamInfo.current = JSON.parse(message); 
      setForceUpdate(Date.now());
      console.log(streamInfo);
    });

    return function cleanup() {
      sub.stop();
    };
  }, []);

  useEffect(() => {       
    const htmlAudio = document.getElementById('audio');

    htmlAudio.volume = volume;        
    player ? htmlAudio.play() : htmlAudio.pause();
  }, [player, volume])

  return (
    <div className={playerStyles.playerContainer}>
      <div className={playerStyles.songAlbum}>
        <img alt="Album Cover" src={streamInfo.current ? streamInfo.current.now_playing.song.art : "https://via.placeholder.com/150"}/>
      </div>
      <div className={playerStyles.innerPlayer}> 
        <audio id="audio" src={process.env.NEXT_PUBLIC_RADIO_ENDPOINT} preload="auto" type="audio/mpeg"></audio>
        <div onClick={togglePlayer}>
          {player ? (<BsPause className={playerStyles.player}/>) : (<BsPlay className={playerStyles.player}/>)}
        </div>
        <div className={playerStyles.songInfoContainer}>        
            <span><strong>{streamInfo.current ? streamInfo.current.now_playing.song.title : "Loading..."}</strong></span>
            <span><i>{streamInfo.current ? streamInfo.current.now_playing.song.artist : "Loading..."}</i></span>          
        </div>
      </div>            
      <div className={playerStyles.controls}>
          <div onClick={toggleVolumeMute}>
            <VolumeIcon volume={volume} />
          </div>        
          <input 
            min="0" 
            step="1" 
            max="100"
            type="range"
            value={volume*100} 
            className={playerStyles.slider}
            onChange={(e) => setVolume(e.target.value/100)}>              
          </input>        
      </div>
    </div>
  );
}

export default Player;

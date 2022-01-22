import NchanSubscriber from "nchan";
import PlayerAudio from "./PlayerAudio";
import PlayerImage from "./PlayerImage";
import PlayerVolume from "./PlayerVolume";
import { useState, useEffect, useRef } from "react";
import playerStyles from "../styles/Player.module.css";

function Player() {
  const streamInfo = useRef(null);
  const [, setForceUpdate] = useState(null);

  useEffect(() => {
    let opt = {
      subscriber: "websocket",
      reconnect: "persist",
    };

    const sub = new NchanSubscriber(
      process.env.NEXT_PUBLIC_NOWPLAYING_ENDPOINT,
      opt
    );
    sub.start();

    sub.on("message", function (message) {
      streamInfo.current = JSON.parse(message);
      setForceUpdate(Date.now());
    });

    return function cleanup() {
      sub.stop();
    };
  }, []);

  return (
    <div className={playerStyles.playerContainer}>
      <PlayerImage stream={streamInfo} />
      <PlayerAudio stream={streamInfo} />
      <PlayerVolume />
    </div>
  );
}

export default Player;

import React, { useEffect } from 'react';
import playerStyles from "../styles/Player.module.css";
import { TiVolume, TiVolumeDown, TiVolumeUp, TiVolumeMute } from "react-icons/ti";

function renderVolume(volume) {        
    if(volume == 0) {
        return <TiVolumeMute className={playerStyles.volumeIcon}/>
    }

    if(volume <= 0.33) {
        return <TiVolume className={playerStyles.volumeIcon}/>
    }            

    if(volume <= 0.66) {
        return <TiVolumeDown className={playerStyles.volumeIcon}/>
    }

    return <TiVolumeUp className={playerStyles.volumeIcon}/>        
}

function VolumeIcon({ volume }) {

    return <>
        {renderVolume(volume)}
    </>;
}

export default VolumeIcon;

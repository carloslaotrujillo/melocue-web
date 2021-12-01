import {useEffect} from 'react';

function AudioPlayer({cuePlay}) {

    useEffect(() => {        
        const player = document.getElementById('audio');        
        cuePlay ? player.play() : player.pause();
    }, [cuePlay])

    return (<audio id="audio" src={process.env.NEXT_PUBLIC_RADIO_ENDPOINT} preload="auto" type="audio/mpeg"></audio>)   
}

export default AudioPlayer

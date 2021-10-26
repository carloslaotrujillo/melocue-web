import {useEffect} from 'react';

function AudioPlayer({cuePlay}) {

    useEffect(() => {        
        const player = document.getElementById('audio');        
        cuePlay ? player.play() : player.pause();
    }, [cuePlay])

    return (<audio id="audio" src="http://159.223.124.77/radio/8000/radio.mp3" preload="auto" type="audio/mpeg"></audio>)   
}

export default AudioPlayer

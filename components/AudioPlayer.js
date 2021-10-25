import {useRef, useEffect} from 'react';

function AudioPlayer({cuePlay}) {

    useEffect(() => {        
        const player = document.getElementById('audio');        
        cuePlay ? player.play() : player.pause();
    }, [cuePlay])

    return (<audio id="audio" src="https://159.223.124.77:8000/radio.mp3"></audio>)   
}

export default AudioPlayer

import {useRef, useEffect} from 'react';

function AudioPlayer({cuePlay}) {

    useEffect(() => {        
        const player = document.getElementById('audio');        
        cuePlay ? player.play() : player.pause();
    }, [cuePlay])

    return (<audio id="audio" src="http://localhost:8080/stream"></audio>)   
}

export default AudioPlayer

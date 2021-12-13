import {useEffect} from 'react';
import {NchanSubscriber} from 'nchan';


function AudioPlayer({cuePlay}) {

    useEffect(() => {   
        var sub = new NchanSubscriber('https://melocueradio.com/api/live/nowplaying/melocue');
        var nowPlaying;

        sub.on("message", function(message, message_metadata) {
            nowPlaying = JSON.parse(message);
            console.log(nowPlaying);
        });
        sub.start();     

        const player = document.getElementById('audio');        
        cuePlay ? player.play() : player.pause();
    }, [cuePlay])

    return (<audio id="audio" src={process.env.NEXT_PUBLIC_RADIO_ENDPOINT} preload="auto" type="audio/mpeg"></audio>)   
}

export default AudioPlayer

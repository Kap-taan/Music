import { Play, Pause } from "phosphor-react";
import { useState, useRef } from 'react';
import classes from '../styles/Card.module.css';

const Card = ({ song }) => {

    const [change, setChange] = useState(false);

    const playRef = useRef();
    const cardRef = useRef();

    const loadSong = () => {
        document.querySelector('.audio').src = song.song;
    }

    const playAudio = () => {
        document.querySelector('.audio').play();
        playRef.current.style.borderColor = "#FA99E1";
    }

    const pauseAudio = () => {
        document.querySelector('.audio').pause();
        playRef.current.style.borderColor = "#FFF";
    }

    const playHandler = () => {
        if(document.querySelector('.audio').src !== song.song) {
            loadSong();
            // playRef.current.style.borderColor = "#FA99E1";
        }
        playAudio();
    }

    const pauseHandler = () => {
        if(document.querySelector('.audio').src !== song.song) {
            return;
        }
        pauseAudio();
    }

    return (
        <>
            <audio className="audio" />
            <div className={classes.card} key={song.index} ref={cardRef}>
                <img src={song.image} width={400} height={300} alt="Moon Child Era Thumbnail" className={classes.img} />
                <div className={classes.music_control}>
                    <div className={classes.play_btn} ref={playRef} onClick={() => {
                        playHandler();
                    }}>
                        <Play size={25}  />
                    </div>
                    <div className={classes.pause_btn} onClick={pauseHandler}>
                        <Pause size={25} />
                    </div>
                </div>
                <h4 className={classes.song_title}>{song.title}</h4>
    
            </div>

        </>
    );
}
 
export default Card;